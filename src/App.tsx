import React from 'react';
// Assuming the component scaffolding creates components accessible via this path:
import { Button } from '@/app/component2/ui/button';
import { Card } from '@/app/component2/ui/card';
import { getCurrentTime } from './utils/helpers';

interface AppProps {}

const App: React.FC<AppProps> = () => {
  const [time, setTime] = React.useState<string>(getCurrentTime());

  React.useEffect(() => {
    const timer = setInterval(() => {
        setTime(getCurrentTime());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <Card className="bg-white p-8 sm:p-12 rounded-2xl shadow-2xl max-w-lg w-full text-center border-t-4 border-primary-blue transition-all duration-500 ease-in-out">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4 tracking-tight">
          project-project-9yd 
        </h1>
        <p className="text-lg text-gray-600 mb-6">
          A powerful, auto-generated Vite React application with <span className="font-semibold text-primary-blue">TypeScript</span> and Lightswind UI.
        </p>

        <div className="text-xl font-mono text-secondary-indigo mb-8">
            Current Time (UTC): <span className="font-bold text-2xl">{time}</span>
        </div>

        <div className="flex justify-center space-x-4">
            <Button onClick={() => console.log('Button 1 Clicked')}>
                Get Started
            </Button>
            <Button variant="secondary" onClick={() => console.log('Button 2 Clicked')}>
                Learn More
            </Button>
        </div>
        
        <p className="mt-8 text-sm text-gray-400">
            Powered by Lightswind AI
        </p>
      </Card>
    </div>
  );
};

export default App;
