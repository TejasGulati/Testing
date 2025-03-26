import React, { useRef, useEffect, useState } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

const AIVisualization = () => {
  const mountRef = useRef(null);
  const [isAnimating, setIsAnimating] = useState(true);

  useEffect(() => {
    if (!mountRef.current) return;

    // Scene, Camera & Renderer setup
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x0a192f);  // Dark blue background

    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    mountRef.current.appendChild(renderer.domElement);

    // Orbit Controls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;

    // Lighting
    const ambientLight = new THREE.AmbientLight(0x404040);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
    directionalLight.position.set(1, 1, 1);
    scene.add(directionalLight);

    // Neural Network Visualization
    const neuralNetworkGroup = new THREE.Group();
    
    // Create layers of interconnected nodes
    const layerColors = [0x2c3e50, 0x34495e, 0x2980b9, 0x3498db];
    const layerCount = 4;
    const nodesPerLayer = 10;

    for (let layer = 0; layer < layerCount; layer++) {
      const layerGroup = new THREE.Group();
      
      for (let i = 0; i < nodesPerLayer; i++) {
        const nodeGeometry = new THREE.SphereGeometry(0.1, 32, 32);
        const nodeMaterial = new THREE.MeshPhongMaterial({ 
          color: layerColors[layer], 
          emissive: layerColors[layer],
          emissiveIntensity: 0.3
        });
        const nodeMesh = new THREE.Mesh(nodeGeometry, nodeMaterial);

        // Position nodes in a grid-like pattern
        const radius = 1 + layer;
        const angle = (i / nodesPerLayer) * Math.PI * 2;
        nodeMesh.position.x = Math.cos(angle) * radius;
        nodeMesh.position.y = Math.sin(angle) * radius;
        nodeMesh.position.z = layer * 1 - 2;

        layerGroup.add(nodeMesh);

        // Add connections between layers
        if (layer > 0) {
          const prevLayerNodes = neuralNetworkGroup.children[layer - 1].children;
          prevLayerNodes.forEach(prevNode => {
            const lineGeometry = new THREE.BufferGeometry().setFromPoints([
              prevNode.position, 
              nodeMesh.position
            ]);
            const lineMaterial = new THREE.LineBasicMaterial({ 
              color: 0x5dade2, 
              transparent: true, 
              opacity: 0.3 
            });
            const line = new THREE.Line(lineGeometry, lineMaterial);
            neuralNetworkGroup.add(line);
          });
        }
      }

      neuralNetworkGroup.add(layerGroup);
    }

    scene.add(neuralNetworkGroup);

    camera.position.z = 6;

    // Animation variables
    const clock = new THREE.Clock();

    // Animation Loop
    const animate = () => {
      if (!isAnimating) return;

      requestAnimationFrame(animate);
      
      const elapsedTime = clock.getElapsedTime();

      // Rotate neural network group
      neuralNetworkGroup.rotation.y = elapsedTime * 0.1;
      neuralNetworkGroup.rotation.x = Math.sin(elapsedTime * 0.2) * 0.1;

      // Pulsate nodes
      neuralNetworkGroup.children.forEach((layer, layerIndex) => {
        layer.children.forEach((node, nodeIndex) => {
          const pulseScale = 1 + Math.sin(elapsedTime * 2 + layerIndex + nodeIndex) * 0.1;
          node.scale.set(pulseScale, pulseScale, pulseScale);
        });
      });

      controls.update(); // Required for damping
      renderer.render(scene, camera);
    };
    animate();

    // Handle window resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', handleResize);

    // Cleanup on unmount
    return () => {
      window.removeEventListener('resize', handleResize);
      if (mountRef.current && renderer.domElement) {
        mountRef.current.removeChild(renderer.domElement);
      }
      renderer.dispose(); // Free GPU resources
    };
  }, [isAnimating]);

  const toggleAnimation = () => {
    setIsAnimating(!isAnimating);
  };

  return (
    <div className="relative w-full h-screen">
      <div ref={mountRef} className="absolute top-0 left-0 w-full h-full" />
      <button 
        onClick={toggleAnimation}
        className="absolute top-4 right-4 z-10 bg-blue-500 text-white px-4 py-2 rounded"
      >
        {isAnimating ? 'Pause' : 'Resume'} Animation
      </button>
    </div>
  );
};

export default AIVisualization;