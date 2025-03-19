
import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Header from '@/components/layout/Header';
import Sidebar from '@/components/layout/Sidebar';
import EmailView from '@/components/layout/EmailView';

const Index = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isMobileView, setIsMobileView] = useState(window.innerWidth < 768);
  const [showEmailDetail, setShowEmailDetail] = useState(false);
  
  // Get the currently selected email from URL params
  const searchParams = new URLSearchParams(location.search);
  const selectedEmailId = searchParams.get('email');
  
  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth < 768);
    };
    
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  
  // Update showEmailDetail based on selectedEmailId
  useEffect(() => {
    setShowEmailDetail(!!selectedEmailId);
  }, [selectedEmailId]);
  
  const handleCloseEmailDetail = () => {
    navigate('/');
    setShowEmailDetail(false);
  };
  
  return (
    <div className="flex flex-col h-screen bg-gray-50">
      <Header />
      
      <div className="flex flex-1 overflow-hidden">
        {/* On mobile: Show either sidebar or email detail based on selection */}
        {isMobileView ? (
          showEmailDetail ? (
            <EmailView emailId={selectedEmailId} onClose={handleCloseEmailDetail} />
          ) : (
            <Sidebar />
          )
        ) : (
          // On desktop: Show both sidebar and email detail
          <>
            <Sidebar />
            <EmailView emailId={selectedEmailId} onClose={handleCloseEmailDetail} />
          </>
        )}
      </div>
    </div>
  );
};

export default Index;
