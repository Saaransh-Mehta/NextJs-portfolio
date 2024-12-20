'use client'
import React from 'react';
import Link from 'next/link';
import { Twitter, Facebook, Instagram, Linkedin } from 'lucide-react';

const SocialConnect = () => {
  const socialLinks = [
    {
      name: 'Twitter',
      url: 'https://x.com',  
      icon: <Twitter className="h-6 w-6" />,
      color: 'hover:text-blue-400'
    },
    {
      name: 'Facebook',
      url: 'https://www.facebook.com',
      icon: <Facebook className="h-6 w-6" />,
      color: 'hover:text-blue-600'
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com',
      icon: <Instagram className="h-6 w-6" />,
      color: 'hover:text-pink-600'
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/saaransh-mehta-242876215/',
      icon: <Linkedin className="h-6 w-6" />,
      color: 'hover:text-blue-700'
    }
  ];

  return (
    <div className="  flex items-center justify-center">
      <div className="p-8 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold text-center mb-8 text-white">Connect With Us</h1>
        <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
          {socialLinks.map((social) => (
            <Link
              href={social.url}
              key={social.name}
              className={`flex flex-col text-white items-center justify-center p-4 rounded-lg transition-colors duration-300 hover:bg-gray-50 ${social.color}`}
            >
              {social.icon}
              <span className="mt-2 text-sm font-medium">{social.name}</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SocialConnect;



