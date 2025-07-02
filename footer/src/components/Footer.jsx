import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#151c2f] text-white text-sm">
      {/* Top Section */}
      <div className="flex flex-col md:flex-row justify-between gap-10 px-6 md:px-12 py-10">
        {/* Social Links */}
        <div className="space-y-4">
          <h4 className="font-semibold text-base">Follow US!</h4>
          <div className="flex flex-wrap gap-3">
            <a href="#" className="bg-blue-500 text-white p-2 rounded-full hover:bg-blue-600">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="bg-blue-500 text-white p-2 rounded-full hover:bg-blue-600">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" className="bg-blue-500 text-white p-2 rounded-full hover:bg-blue-600">
              <i className="fab fa-youtube"></i>
            </a>
            <a href="#" className="bg-blue-500 text-white p-2 rounded-full hover:bg-blue-600">
              <i className="fas fa-envelope"></i>
            </a>
            <a href="#" className="bg-blue-500 text-white p-2 rounded-full hover:bg-blue-600">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
        </div>

        {/* Footer Links */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 md:gap-10 w-full">
          {/* Company */}
          <div>
            <h4 className="font-semibold text-blue-400 mb-2">Company</h4>
            <ul className="space-y-1">
              <li>About SkillzRevo</li>
              <li>Explore Courses</li>
              <li>Contact Us</li>
              <li>Our Services</li>
              <li>Meet Our Trainers</li>
            </ul>
          </div>
          {/* Work with us */}
          <div>
            <h4 className="font-semibold text-blue-400 mb-2">Work with us</h4>
            <ul className="space-y-1">
              <li>Become an instructor</li>
              <li>Career</li>
              <li>Gallery</li>
            </ul>
          </div>
          {/* Discover */}
          <div>
            <h4 className="font-semibold text-blue-400 mb-2">Discover</h4>
            <ul className="space-y-1">
              <li>Free Courses</li>
              <li>News & Blogs</li>
              <li>Supports</li>
            </ul>
          </div>
          {/* For Businesses */}
          <div>
            <h4 className="font-semibold text-blue-400 mb-2">For Businesses</h4>
            <ul className="space-y-1">
              <li>Corporate Training</li>
              <li>Become a Channel Partner</li>
              <li>Our Referral Program</li>
            </ul>
          </div>
          {/* Popular Courses */}
          <div>
            <h4 className="font-semibold text-blue-400 mb-2">Our Popular Courses</h4>
            <ul className="space-y-1">
              <li>AI & Gen AI Program</li>
              <li>Data Science with python program</li>
              <li>Data Science and BI program</li>
              <li>Data Analytics and Gen AI program</li>
              <li>Business Analytics Program</li>
              <li>Mastering in AI and Generative AI Program</li>
              <li>Data Analytics Program</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
    <div className="flex flex-col justify-center items-center gap-4 mt-6 bg-black text-white py-4 text-base font-semibold">
      <div className="flex flex-wrap justify-center items-center gap-6">
        <span>Terms & Conditions</span>
        <span>Privacy Policy</span>
        <span>Refund Policy</span>
        <span>Shipping & Delivery</span>
      </div>

      <p className="text-center">©2024 SKILLZREVO. ALL RIGHTS RESERVED.</p>
    </div>

    </footer>
  );
};

export default Footer;
