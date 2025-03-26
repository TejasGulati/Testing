import React from 'react';
import { Link } from 'react-router-dom';
import  Button  from '@/components/ui/Button';

const Navigation = () => {
  return (
    <nav className="bg-primary text-primary-foreground p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">BuildWars</Link>
        <div className="space-x-4">
          <Button asChild variant="ghost">
            <Link to="/">Home</Link>
          </Button>
          <Button asChild variant="ghost">
            <Link to="/ai-features">AI Features</Link>
          </Button>
          <Button asChild variant="ghost">
            <Link to="/chatbot">Chatbot</Link>
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;