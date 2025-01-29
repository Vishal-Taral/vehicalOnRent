import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* About Section */}
        <div>
          <h4 className="text-lg sm:text-xl font-semibold mb-4">About Us</h4>
          <p className="text-sm mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
            imperdiet.
          </p>
          <a href="#" className="text-blue-500 hover:text-gray-500 text-sm">
            Learn More
          </a>
        </div>

        {/* Services Section */}
        <div>
          <h4 className="text-lg sm:text-xl font-semibold mb-4">Services</h4>
          <ul className="space-y-2">
            <li>
              <a href="#" className="text-white hover:text-gray-400 text-sm">
                Web Development
              </a>
            </li>
            <li>
              <a href="#" className="text-white hover:text-gray-400 text-sm">
                Mobile App Development
              </a>
            </li>
            <li>
              <a href="#" className="text-white hover:text-gray-400 text-sm">
                SEO Services
              </a>
            </li>
            <li>
              <a href="#" className="text-white hover:text-gray-400 text-sm">
                Digital Marketing
              </a>
            </li>
          </ul>
        </div>

        {/* Quick Links Section */}
        <div>
          <h4 className="text-lg sm:text-xl font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2">
            <li>
              <a href="#" className="text-white hover:text-gray-400 text-sm">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="text-white hover:text-gray-400 text-sm">
                Terms & Conditions
              </a>
            </li>
            <li>
              <a href="#" className="text-white hover:text-gray-400 text-sm">
                Careers
              </a>
            </li>
            <li>
              <a href="#" className="text-white hover:text-gray-400 text-sm">
                Contact Us
              </a>
            </li>
          </ul>
        </div>

        {/* Follow Us Section */}
        <div>
          <h4 className="text-lg sm:text-xl font-semibold mb-4">Follow Us</h4>
          <div className="flex space-x-4">
            <a href="#" className="text-white hover:text-gray-400 text-lg">
              <i className="fa fa-facebook" aria-hidden="true"></i>
            </a>
            <a href="#" className="text-white hover:text-gray-400 text-lg">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="text-white hover:text-gray-400 text-lg">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" className="text-white hover:text-gray-400 text-lg">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="bg-gray-900 text-center py-4 px-4">
        <p className="text-sm">
          &copy; 2025 Vishal Taral. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
