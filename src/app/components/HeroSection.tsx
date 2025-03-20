import { FaLinkedin, FaGithub, FaFacebook, FaInstagram } from 'react-icons/fa';
import Image from "next/image";
import Link from "next/link";
import React from 'react';

const HeroSection = () => {
    return (
        <div className='min-h-screen bg-black text-white flex flex-col md:flex-row items-center justify-center p-4 md:p-8 relative'>

            {/* Text Content Section */}
            <div className='w-full md:w-1/2 mx-auto md:ml-16 md:mr-10 text-center md:text-left mb-8 md:mb-0 relative z-10'>
                <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4'>Hello, I'm Areeba Irfan</h1>
                <h2 className='text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold mb-6 text-pink-600'>Frontend Developer</h2>

                <p className='text-base sm:text-lg md:text-xl lg:text-2xl mb-8'>
                    Passionate about creating beautiful and functional web experiences. I love turning ideas into reality through code.
                </p>

                {/* Learn More Button and Social Links */}
                <div className='relative inline-block mx-auto md:mx-0'>
                    <div className='absolute -inset-1 bg-pink-600 rounded-full blur opacity-95 pointer-events-none'></div>
                    <Link href="/About" className='relative bg-black hover:bg-gray-800 text-white font-bold py-2 px-4 sm:py-3 sm:px-6 rounded-full transition duration-300 text-sm sm:text-base'>
                        Learn More About Me
                    </Link>
                    <div className='absolute top-14 left-1/2 transform -translate-x-1/2 flex space-x-4 mt-6'>
                        <SocialLink href="https://www.linkedin.com/in/areebairfan" icon={<FaLinkedin />} />
                        <SocialLink href="https://github.com/Areeba-irfan-Github-account" icon={<FaGithub />} />
                        <SocialLink href="https://www.facebook.com/profile.php?id=61562497645022" icon={<FaFacebook />} />
                        <SocialLink href="https://www.instagram.com/areeba.__.irfan/" icon={<FaInstagram />} />
                    </div>
                </div>
            </div>

            {/* Image Section */}
            <div className='w-full md:w-1/2 relative flex justify-center md:justify-end lg:ml-16 md:mr-16 mt-8 md:mt-0'>
                <div className='relative w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 overflow-hidden'>
                    <Image
                        src="/circle.png"
                        alt="background picture"
                        width={400}
                        height={400}
                        className='object-cover'
                    />
                    <Image
                        src="/profile.png"
                        alt="profile"
                        layout="fill"
                        objectFit="cover"
                        className='absolute inset-0'
                    />
                </div>
            </div>
        </div>
    );
};

const SocialLink = ({ href, icon }: { href: string; icon: React.ReactNode }) => (
    <Link href={href} target="_blank" rel="noopener noreferrer">
        <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-pink-500 hover:scale-110 transform transition-all duration-300 ease-in-out shadow-lg hover:shadow-pink-500/50">
            <span className="text-white hover:text-black transition-colors duration-300">
                {icon}
            </span>
        </div>
    </Link>
);

export default HeroSection;