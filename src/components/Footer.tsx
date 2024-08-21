import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#134069] text-white py-4">
      <div className="container mx-auto text-center">
        <p className="text-sm">© {new Date().getFullYear()} World And Turkey. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
