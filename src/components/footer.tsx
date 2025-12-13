import Link from "next/link"
import { Send } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-[#1a1a1a] text-white py-12 px-6 md:px-16 lg:px-24">
      {/* Top Section */}
      <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-8 mb-8">
        {/* Left - Heading and Email */}
        <div className="flex flex-col gap-6">
          <h2 className="text-2xl md:text-3xl font-light leading-tight max-w-sm">
            Is there a fascinating project{" "}
            <span className="text-purple-500 italic">
              brewing in your
              <br />
              mind?
            </span>
          </h2>
          <a
            href="mailto:Info@bytirium.com"
            className="flex items-center gap-2 text-white hover:text-purple-400 transition-colors w-fit"
          >
            <Send className="w-5 h-5" />
            <span>Info@bytirium.com</span>
          </a>
        </div>

        {/* Right - Navigation Links */}
        <nav className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-8 text-sm">
          <Link href="/" className="hover:text-purple-400 transition-colors">
            Home
          </Link>
          <Link href="#" className="hover:text-purple-400 transition-colors">
            About Us
          </Link>
          <Link href="/services" className="hover:text-purple-400 transition-colors">
            Services
          </Link>
          <Link href="/contact" className="hover:text-purple-400 transition-colors">
            Contact Us
          </Link>
        </nav>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-700 mb-6"></div>

      {/* Bottom Section */}
      <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-6">
        {/* Left - Logo and Social Icons */}
        <div className="flex items-center gap-6">
          {/* Logo */}
          <div className="w-8 h-8 rounded bg-white/10 flex items-center justify-center text-white font-bold text-lg">
            B
          </div>

          {/* Social Media Icons */}
          <div className="flex items-center gap-3">
            {/* TikTok */}
            <a
              href="#"
              className="w-7 h-7 rounded-full border border-gray-600 flex items-center justify-center hover:border-purple-500 transition-colors"
              aria-label="TikTok"
            >
              <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
              </svg>
            </a>
            {/* Instagram */}
            <a
              href="#"
              className="w-7 h-7 rounded-full border border-gray-600 flex items-center justify-center hover:border-purple-500 transition-colors"
              aria-label="Instagram"
            >
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <circle cx="17.5" cy="6.5" r="1.5" />
              </svg>
            </a>
            {/* X (Twitter) */}
            <a
              href="#"
              className="w-7 h-7 rounded-full border border-gray-600 flex items-center justify-center hover:border-purple-500 transition-colors"
              aria-label="Twitter"
            >
              <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
            {/* Facebook */}
            <a
              href="#"
              className="w-7 h-7 rounded-full border border-gray-600 flex items-center justify-center hover:border-purple-500 transition-colors"
              aria-label="Facebook"
            >
              <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </a>
            {/* YouTube */}
            <a
              href="#"
              className="w-7 h-7 rounded-full border border-gray-600 flex items-center justify-center hover:border-purple-500 transition-colors"
              aria-label="YouTube"
            >
              <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
            </a>
            {/* LinkedIn */}
            <a
              href="#"
              className="w-7 h-7 rounded-full border border-gray-600 flex items-center justify-center hover:border-purple-500 transition-colors"
              aria-label="LinkedIn"
            >
              <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Center - Copyright */}
        <p className="text-xs text-gray-500">©2025 Bytirium. All Rights Reserved</p>

        {/* Right - Legal Links */}
        <div className="flex items-center gap-6 text-xs text-gray-400">
          <Link href="#" className="hover:text-white transition-colors">
            Privacy Policy
          </Link>
          <Link href="#" className="hover:text-white transition-colors">
            Terms & Conditions
          </Link>
        </div>
      </div>
    </footer>
  )
}
