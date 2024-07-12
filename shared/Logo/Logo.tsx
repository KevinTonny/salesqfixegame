"use client"
import Image from "next/image";
import React from "react";

export interface LogoProps {
  img?: string;
  imgLight?: string;
  className?: string;
}

const Logo: React.FC<LogoProps> = ({
  img = "/images/logo.webp",
  imgLight = "/images/logo.webp",
  className = "flex-shrink-0",
}) => {
  return (
    <a
      href="/"
      className={`ttnc-logo inline-block text-slate-600 ${className}`}
    >
      {img ? (
        <Image
          className={`block h-32 sm:h-32 w-auto ${
            imgLight ? "dark:hidden" : ""
          }`}
          src="/images/logo.webp"
          alt="Logo"
          sizes="200px"
          priority
          width={300}
          height={300}
        />
      ) : (
        "Logo Here"
      )}
      {imgLight && (
        <Image
          className="hidden h-32 sm:h-32 w-auto dark:block"
          src="/images/logo.webp"
          alt="Logo-Light"
          sizes="200px"
          priority
          width={200}
          height={200}
        />
      )}
    </a>
  );
};

export default Logo;
