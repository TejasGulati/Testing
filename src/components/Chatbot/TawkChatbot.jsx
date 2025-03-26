
import React, { useEffect } from 'react';

const TawkChatbot = () => {
  useEffect(() => {

    
    const script = document.createElement('script');
    script.src = 'https://embed.tawk.to/67e41762ec7c9f190e0dc869/default';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return null; // Tawk.to loads itself
};

export default TawkChatbot;
