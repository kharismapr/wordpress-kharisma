import React from 'react';
import GrowLogo from './assets/grow.svg'; 
import ShieldLogo from './assets/shield.svg'; 
import GlobeLogo from './assets/global.svg'; 
import CloudLogo from './assets/cloud.svg'; 

export default function Page2() {
    return (
        <div className="bg-white py-20">
            {/* Header Section */}
            <div className="container ml-10 px-4">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">Host with the best</h1>
                <p className="text-lg md:text-xl mb-8">
                    When you create a site with WordPress.com, you get all of the power of lightning-fast, secure managed WordPress hosting.
                </p>
                <a href="https://wordpress.com/hosting/?ref=logged-out-homepage-lp" className="bg-[#007cba] text-white px-6 py-3 rounded-md hover:bg-[#005e91]">
                    Explore hosting
                </a>
            </div>

            {/* Features Section */}
            <div className="container mx-auto px-4 mt-16 grid grid-cols-1 md:grid-cols-4 gap-8">
                {/* Feature 1: Room to grow */}
                <div className="bg-white p-6 rounded-lg shadow-md transform transition-all duration-300 hover:scale-105 hover:shadow-lg">
                    <div className="flex items-center justify-center mb-4">
                        <img src={GrowLogo} alt="Room to grow" className="w-12 h-12" />
                    </div>
                    <h2 className="text-xl font-bold mb-2">Room to grow</h2>
                    <p className="text-gray-600">Scale as you go with unmetered bandwidth on all plans. Zero downtime. No limits.</p>
                </div>

                {/* Feature 2: Seriously secure */}
                <div className="bg-white p-6 rounded-lg shadow-md transform transition-all duration-300 hover:scale-105 hover:shadow-lg">
                    <div className="flex items-center justify-center mb-4">
                        <img src={ShieldLogo} alt="Seriously secure" className="w-12 h-12" />
                    </div>
                    <h2 className="text-xl font-bold mb-2">Seriously secure</h2>
                    <p className="text-gray-600">Firewalls, encryption, brute force, and DDoS protection. Security’s all taken care of.</p>
                </div>

                {/* Feature 3: Bring it with you */}
                <div className="bg-white p-6 rounded-lg shadow-md transform transition-all duration-300 hover:scale-105 hover:shadow-lg">
                    <div className="flex items-center justify-center mb-4">
                        <img src={GlobeLogo} alt="Bring it with you" className="w-12 h-12" />
                    </div>
                    <h2 className="text-xl font-bold mb-2">Bring it with you</h2>
                    <p className="text-gray-600">Fast data transfer and performance come as standard with our global CDN—wherever your site visitors are.</p>
                </div>

                {/* Feature 4: Flexible storage */}
                <div className="bg-white p-6 rounded-lg shadow-md transform transition-all duration-300 hover:scale-105 hover:shadow-lg">
                    <div className="flex items-center justify-center mb-4">
                        <img src={CloudLogo} alt="Flexible storage" className="w-12 h-12" />
                    </div>
                    <h2 className="text-xl font-bold mb-2">Flexible storage</h2>
                    <p className="text-gray-600">You’ll never run out of storage with WordPress.com’s plans. Photos. Audio. 4K videos. All in one place.</p>
                </div>
            </div>
        </div>
    );
}