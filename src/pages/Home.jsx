// src/pages/Home.jsx
import React from 'react';
import AIVisualization from '@/components/3D/AIVisualization';
import { Button } from '@/components/ui/button';

const Home = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-4">Welcome to BuildWars</h1>
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <p className="text-lg mb-4">
            Explore cutting-edge AI and visualization technologies.
          </p>
          <Button>Get Started</Button>
        </div>
        <AIVisualization />
      </div>
    </div>
  );
};

export default Home;