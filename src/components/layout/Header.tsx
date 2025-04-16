
import React from 'react';
import { ChevronDown, Filter, Search } from 'lucide-react';
import { Button } from "@/components/ui/button";

const Header: React.FC = () => {
  return (
    <header className="border-b border-gray-200 py-2 px-4 bg-white flex items-center justify-between animate-fade-in">
      <div className="flex items-center space-x-4">
        <div className="font-semibold text-lg">Helpdesk</div>
        <div className="hidden sm:flex items-center space-x-2">
          <Button variant="ghost" size="sm" className="text-sm font-medium">
            Focused
            <div className="h-[2px] absolute bottom-0 left-0 right-0 bg-mail-blue"></div>
          </Button>
          <Button variant="ghost" size="sm" className="text-sm font-medium text-gray-500">
            Other
          </Button>
        </div>
      </div>
      
      <div className="flex items-center space-x-2">
        <div className="relative hidden md:block">
          <Search className="h-4 w-4 text-gray-500 absolute left-3 top-1/2 transform -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search emails"
            className="pl-9 pr-4 py-1.5 text-sm rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-mail-blue focus:border-mail-blue w-60"
          />
        </div>
        
        <div className="flex items-center ml-2">
          <Button variant="ghost" size="sm" className="text-sm flex items-center gap-1">
            <span>By Date</span>
            <ChevronDown className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon">
            <Filter className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
