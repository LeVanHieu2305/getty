import React, { useEffect, useState } from "react";
import Link from "next/link";

import "./Header.scss";

export const Header = () => {
  const [scrolled, setScrolled] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (winScroll / height) * 100;
      setScrolled(scrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="header">
      <div className="header-left">
        <div className="header-logo">
          <Link href="/" aria-label="Getty logo" className="link">
            Getty
          </Link>
        </div>
      </div>
      <div className="header-right"></div>
      <div className="progress-container">
        <div className="progress-bar" style={{ height: `${scrolled}%` }}></div>
      </div>
    </div>
  );
};
