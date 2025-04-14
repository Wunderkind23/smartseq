import React from 'react'

// type Props = {}

const Footer = () => {
    return (
      <div className="flex flex-col md:flex-row justify-between flex-wrap px-6 md:px-16 py-10 gap-8 sm:gap-0 bg-gray-100 text-gray-800">
        {/* Office */}
        <div className="w-full md:w-1/4">
          <h4 className="font-bold mb-2">Office</h4>
          <ul className="space-y-2 text-sm">
            <li>Germany -<br />785 15h Street, Office 478<br />Berlin, De 81566</li>
            <li>info@email.com</li>
            <li>+1 840 841 25 69</li>
          </ul>
        </div>
  
        {/* Links and Socials - row on mobile, column on larger */}
        <div className="w-full md:w-2/4 flex flex-row justify-between gap-6">
          {/* Links */}
          <div className="w-1/2">
            <h4 className="font-bold mb-2">Links</h4>
            <ul className="space-y-1 text-sm">
              <li>Home</li>
              <li>Services</li>
              <li>About Us</li>
              <li>Our Team</li>
              <li>Contacts</li>
            </ul>
          </div>
  
          {/* Socials */}
          <div className="w-1/2">
            <h4 className="font-bold mb-2">Socials</h4>
            <ul className="space-y-1 text-sm">
              <li>Facebook</li>
              <li>Twitter</li>
              <li>Dribbble</li>
              <li>Instagram</li>
            </ul>
          </div>
        </div>
  
        {/* Newsletter - Adjusted to align horizontally on larger screens */}
        <div className="w-full md:w-1/4">
          <h4 className="font-bold mb-2">Newsletter</h4>
          <div className="mb-2">
            <input
              type="text"
              placeholder="Your email"
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div className="flex items-start gap-2 text-sm">
            <input type="checkbox" className="mt-1" />
            <p>I agree to the <span className="underline">Privacy Policy</span>.</p>
          </div>
        </div>
      </div>
    );
};

export default Footer;
