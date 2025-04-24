import React, { useState } from 'react';
import LogoWhite from './assets/icons8-wordpress-white.svg'; 
import AppStoreButton from './assets/Buttons_App_Store.png'; 
import GooglePlayButton from './assets/Buttons_Google_Store.png'; 
import LanguageLogo from './assets/language.png'; 

export default function Page3() {
    // Dropdown language state
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [selectedLanguage, setSelectedLanguage] = useState("English");

    const languages = ["Bahasa Indonesia", "English", "Chinese", "Japanese", "Korean"];

    const handleLanguageSelect = (language) => {
        setSelectedLanguage(language);
        setIsDropdownOpen(false);
    };

    return (
        <footer className="bg-black text-white py-10">
            {/* Top Section */}
            <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-start">
                {/* Logo */}
                <div className="flex items-center space-x-2 mb-6 md:mb-0">
                    <img src={LogoWhite} alt="WordPress Logo" className="h-8 w-8" />
                    <span className="text-lg font-bold">WordPress.com</span>
                </div>

                {/* Menu Sections */}
                <div className="flex flex-col md:flex-row justify-between gap-8">
                    {/* Products */}
                    <div className="w-full md:w-1/4">
                        <h3 className="text-lg font-bold mb-4">Products</h3>
                        <ul className="space-y-2">
                            <li><a href="#" className="text-gray-400 hover:text-white">WordPress Hosting</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white">WordPress for Agencies</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white">Become an Affiliate</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white">Domain Names</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white">AI Website Builder</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white">Website Builder</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white">Create a Blog</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white">Professional Email</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white">Website Design Services</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white">Enterprise WordPress</a></li>
                        </ul>
                    </div>

                    {/* Features */}
                    <div className="w-full md:w-1/4">
                        <h3 className="text-lg font-bold mb-4">Features</h3>
                        <ul className="space-y-2">
                            <li><a href="#" className="text-gray-400 hover:text-white">Overview</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white">WordPress Themes</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white">WordPress Plugins</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white">WordPress Patterns</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white">Google Apps</a></li>
                        </ul>
                    </div>

                    {/* Resources */}
                    <div className="w-full md:w-1/4">
                        <h3 className="text-lg font-bold mb-4">Resources</h3>
                        <ul className="space-y-2">
                            <li><a href="#" className="text-gray-400 hover:text-white">WordPress.com Support</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white">WordPress Forums</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white">WordPress News</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white">Website Building Tips</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white">Logo Maker</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white">Discover New Posts</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white">Popular Tags</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white">Blog Search</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white">Learn WordPress</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white">Developer Resources</a></li>
                        </ul>
                    </div>

                    {/* Company */}
                    <div className="w-full md:w-1/4">
                        <h3 className="text-lg font-bold mb-4">Company</h3>
                        <ul className="space-y-2">
                            <li><a href="#" className="text-gray-400 hover:text-white">About</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white">Press</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white">Terms of Service</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white">Privacy Policy</a></li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Bottom Section */}
            <div className="container mx-auto px-4 mt-10 flex flex-col md:flex-row justify-between items-center">
                {/* Download Buttons */}
                <div className="flex flex-col md:flex-row gap-4 mb-4 md:mb-0">
                    <a href="https://apps.apple.com/us/app/jetpack-for-wordpress/id1565481562?ct=wp.com--footer&mt=8&pt=299112"
                        className="bg-black text-white rounded-md p-2 flex items-center space-x-2 border border-white">
                        <img src={AppStoreButton} alt="Apple Store" className="h-6 w-6" />
                        <span>Get it on Apple Store</span>
                    </a>
                    <a href="https://play.google.com/store/apps/details?id=com.jetpack.android&referrer=utm_source%3Dwordpress.com%26utm_campaign%3Dfooter%26utm_medium%3Dwebsite"
                        className="bg-black text-white rounded-md p-2 flex items-center space-x-2 border border-white">
                        <img src={GooglePlayButton} alt="Google Play" className="h-6 w-6" />
                        <span>Get it on Google Play</span>
                    </a>
                </div>

                {/* Language Dropdown */}
                <div className="relative">
                    <button
                        type="button"
                        className="bg-white text-black rounded-md p-2 flex items-center space-x-2"
                        onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
                        <img src={LanguageLogo} alt="Language" className="h-5 w-5 mr-1" />
                        <span>{selectedLanguage}</span>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                            <path d="M7.41 8.58L12 13.17l4.59-4.59L18 10l-6 6-6-6 1.59-1.59z" />
                        </svg>
                    </button>
                    {isDropdownOpen && (
                        <div
                            className="absolute right-0 mt-2 bg-white rounded-md shadow-lg py-2"
                            style={{ top: "-100%", transform: "translateY(-100%)" }}
                        >
                            {languages.map((lang) => (
                                <button
                                    key={lang}
                                    className="px-4 py-2 w-full text-left text-gray-800 hover:bg-gray-200 block"
                                    onClick={() => handleLanguageSelect(lang)}
                                >
                                    {lang}
                                </button>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </footer>
    );
}