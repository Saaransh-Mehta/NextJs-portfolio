'use client'
import React from 'react'
import Link from 'next/link'
import { Twitter, Facebook, Instagram, LinkedinIcon as LinkedIn, GitlabIcon as GitHub } from 'lucide-react'

interface SocialButtonProps {
  href: string
  aria: string
  icon: React.ReactNode
  isExternal?: boolean
}

const SocialButton: React.FC<SocialButtonProps> = ({ href, aria, icon, isExternal = true }) => {
  const buttonClass = "inline-flex items-center justify-center w-10 h-10 text-gray-500 hover:text-white bg-gray-100 hover:bg-blue-500 rounded-full transition-colors duration-300"
  
//   if (isExternal) {
//     return (
        
//       <a
//         href={href}
//         target="_blank"
//         rel="noopener noreferrer"
//         aria-label={aria}
//         className={buttonClass}
//       >
//         {icon}
//       </a>
//     )
//   }

  return (
    <Link href={href} aria-label={aria} className={buttonClass}>
      {icon}
    </Link>
  )
}

export default function ConnectOnSocials() {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Connect on Socials</h2>
      <div className="flex flex-wrap gap-4">
        <SocialButton
          href="https://twitter.com/yourusername"
          aria="Follow us on Twitter"
          icon={<Twitter size={20} />}
        />
        <SocialButton
          href="https://facebook.com/yourpage"
          aria="Like us on Facebook"
          icon={<Facebook size={20} />}
        />
        <SocialButton
          href="https://instagram.com/youraccount"
          aria="Follow us on Instagram"
          icon={<Instagram size={20} />}
        />
        <SocialButton
          href="https://linkedin.com/company/yourcompany"
          aria="Connect with us on LinkedIn"
          icon={<LinkedIn size={20} />}
        />
        <SocialButton
          href="https://github.com/yourusername"
          aria="Check out our GitHub"
          icon={<GitHub size={20} />}
        />
        <SocialButton
          href="/contact"
          aria="Contact Us"
          icon={<span className="text-lg font-semibold">@</span>}
          isExternal={false}
        />
      </div>
    </div>
  )
}

