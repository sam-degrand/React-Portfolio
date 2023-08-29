import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <div className="w-1/2">
            <h3 className="text-2xl font-semibold">Connect with Me</h3>
            <ul className="mt-4">
              <li className="mb-2">
                <a
                  href="https://github.com/sam-degrand"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  <i className="fab fa-github"></i> GitHub
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="https://www.linkedin.com/in/sam-degrandchamp-986105268/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  <i className="fab fa-linkedin"></i> LinkedIn
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="https://stackoverflow.com/users/22462272/sam-degrandchamp"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  <i className="fab fa-linkedin"></i> stackoverflow
                </a>
              </li>
              {/* Add more social media links as needed */}
            </ul>
          </div>
          <div className="w-1/2">
            <h3 className="text-2xl font-semibold">Contact Information</h3>
            <p className="mt-4">
              Email: <a href="mailto:degrandchamps@gmail.com" className="text-blue-500 hover:underline">degrandchamps@gmail.com</a>
            </p>
            <p className="mt-2">Phone: +586-703-7524</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
