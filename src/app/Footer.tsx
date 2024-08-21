import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white p-8">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div>
          <h3 className="text-lg font-bold mb-2">Address</h3>
          <p>123 Main Street</p>
          <p>City, State ZIP</p>
        </div>
        <div>
          <h3 className="text-lg font-bold mb-2">Contact Information</h3>
          <p>Email: info@example.com</p>
          <p>Phone: 123-456-7890</p>
        </div>
        <div>
          <h3 className="text-lg font-bold mb-2">Links</h3>
          <a href="#">Home</a>
          <a href="#">About Us</a>
          <a href="#">Services</a>
        </div>
        <div>
          <h3 className="text-lg font-bold mb-2">Google Map</h3>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2249.682073214...your-map-embed-link-here"
            width="100%"
            height="200"
            style={{ border: 0 }}
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
