
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4 animate-fade-in">
      <div className="text-center max-w-md bg-white p-8 rounded-lg shadow-soft">
        <h1 className="text-5xl font-bold mb-4 text-mail-blue">404</h1>
        <p className="text-xl text-gray-700 mb-6">This page doesn't exist</p>
        <p className="text-gray-500 mb-8">
          The page you're looking for cannot be found. It might have been moved or deleted.
        </p>
        <Button asChild className="bg-mail-blue hover:bg-blue-700 transition-colors">
          <a href="/" className="flex items-center gap-2">
            <ArrowLeft className="h-5 w-5" />
            Back to Helpdesk
          </a>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
