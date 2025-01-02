import Link from 'next/link';
import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-[#e6891fdd] text-white py-4">
      <div className="max-w-6xl mx-auto px-2 sm:px-6">
        <div className="flex flex-col items-center sm:flex-row sm:justify-between">
          <div className="text-center sm:text-left m2-4 sm:mb-0">
            <h2 className="text-2xl font-bold">Blog  by Rabia Fareed.</h2>
            <p className="text-sm mt-1">Shaping the Modern World with cutting-edge technology.</p>
          </div>
          <div className="flex flex-col items-center font-bold font-serif justify-center sm:flex-row sm:items-center">
            <Link href="/" className="text-black hover:text-white mx-2">Home</Link>
            <Link href="/blogs/about" className="text-black hover:text-white mx-2">About</Link>
            <Link href="/blogs/contact" className="text-black hover:text-white mx-2">Contact</Link>
          </div>
        </div>
        <div className="mt-2 text-center">
          <p className="text-sm font-serif">&copy; {new Date().getFullYear()} All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}