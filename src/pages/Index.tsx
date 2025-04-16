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
  
  const searchParams = new URLSearchParams(location.search);
  const selectedEmailId = searchParams.get('email');
  
  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth < 768);
    };
    
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  
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
        {isMobileView ? (
          showEmailDetail ? (
            <EmailView emailId={selectedEmailId} onClose={handleCloseEmailDetail} />
          ) : (
            <Sidebar />
          )
        ) : (
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
