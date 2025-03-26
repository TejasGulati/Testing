
import React, { useEffect } from 'react';

const TawkChatbot = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://embed.tawk.to/YOUR_TAWK_PROPERTY_ID/default';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return null; // Tawk.to loads itself
};

export default TawkChatbot;
