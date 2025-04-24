import React from 'react';
import Logo from './assets/icons8-wordpress.svg';

export default function Page1() {
    return (
        <div className="min-h-screen bg-[#007cba] text-white">
            {/* Header */}
            <nav className="bg-[#007cba] text-white p-4 flex flex-col md:flex-row justify-between items-center">
                {/* Logo Section */}
                <div className="flex items-center space-x-2">
                    <img src={Logo} alt="WordPress Logo" className="h-8 w-8" />
                    <span className="text-lg font-bold">WordPress.com</span>
                </div>

                {/* Navigation Links */}
                <ul className="hidden md:flex items-center space-x-6 text-sm font-medium">
                    <li className="hover:text-gray-300 cursor-pointer relative group">
                        <a href="#">Products</a>
                        <i className="arrow-down text-xs ml-1">▾</i>
                    </li>
                    <li className="hover:text-gray-300 cursor-pointer relative group">
                        <a href="#">Features</a>
                        <i className="arrow-down text-xs ml-1">▾</i>
                    </li>
                    <li className="hover:text-gray-300 cursor-pointer relative group">
                        <a href="#">Resources</a>
                        <i className="arrow-down text-xs ml-1">▾</i>
                    </li>
                    <li className="hover:text-gray-300 cursor-pointer">
                        <a href="#">Plans & Pricing</a>
                    </li>
                </ul>

                {/* Action Buttons */}
                <div className="flex items-center space-x-4">
                    <a href="https://wordpress.com/log-in/" className="text-white hover:text-gray-300">Log in</a>
                    <a href="https://wordpress.com/setup/onboarding/user?ref=logged-out-homepage-lp" className="bg-white text-[#007cba] px-4 py-2 rounded-md hover:bg-gray-200">
                        Get started
                    </a>
                </div>

            </nav>

            {/* Main Content */}
            <main className="flex flex-col md:flex-row items-center justify-center min-h-[calc(100vh-80px)] p-8">
                {/* Left Section */}
                <div className="w-full md:w-1/2 text-center md:text-left space-y-4 px-8">
                    <h1 className="text-4xl md:text-5xl font-bold">Hassle-free WordPress</h1>
                    <p className="text-md md:text-lg">
                        Everything you need to build and grow any website — all in one place.
                    </p>

                    <button
                        onClick={() => window.location.href = "https://wordpress.com/setup/onboarding/user?ref=logged-out-homepage-lp"}
                        className="bg-white text-[#007cba] px-6 py-3 rounded-md hover:bg-gray-200"
                    >
                        Get started
                    </button>
                </div>

                {/* Right Section */}
                <div className="w-full md:w-1/2 mt-8 md:mt-0">
                    <img
                        src="https://wordpress.com/wp-content/uploads/2024/09/lohp-i3-hero-2x.png"
                        alt="WordPress Features"
                        className="w-full max-w-[500px] h-auto mx-auto"
                        loading="eager"
                    />
                </div>
            </main>
        </div>
    );
}