// src/components/HeroSection.js
import React, { useState } from 'react';
import { X } from 'lucide-react';

const HeroSection = () => {
    const [isVideoOpen, setIsVideoOpen] = useState(false);
    const openVideo = () => setIsVideoOpen(true);
    const closeVideo = () => setIsVideoOpen(false);

    return (
        <section className="relative w-full h-[100vh] bg-cover bg-center pt-20 text-[#1C2B38] font-serif" style={{ backgroundImage: "url('/src/assets/hero-image.jpg')" }}>
            {/* Overlay */}
            <div className="absolute inset-0 bg-opacity-50"></div>

            {/* Text and Button */}
            <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">We Find The Best Tours For You</h1>
                <p className="text-lg md:text-2xl mb-8">Explore the world with unforgettable experiences</p>
                <button onClick={openVideo} className="w-16 h-16 rounded-full bg-[#7BBCB0] text-black font-bold hover:bg-white transition duration-300">
                    ▶
                </button>
                <p className="mt-2">Watch Video</p>
            </div>

            {/* Video Modal */}
            {isVideoOpen && (
                <div className="fixed inset-0 bg-white bg-opacity-90 backdrop-blur-md flex items-center justify-center z-50">
                    <div className="relative w-full max-w-4xl h-[80vh]">
                        <button onClick={closeVideo} className="absolute top-4 right-4 text-[#1C2B38] font-serif text-3xl focus:outline-none">
                            <X />
                        </button>
                        <iframe
                            className="w-full h-full"
                            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </div>
                </div>
            )}
        </section>
    );
};

export default HeroSection;
