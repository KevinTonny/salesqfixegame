"use client"
import React, { FC } from "react";

import ButtonPrimary from "@/shared/Button/ButtonPrimary";
import ButtonSecondary from "@/shared/Button/ButtonSecondary";
import Logo from "@/shared/Logo/Logo";
import NcImage from "@/shared/NcImage/NcImage";



export interface SectionPromo1Props {
  className?: string;
}

const SectionPromo1: FC<SectionPromo1Props> = ({ className = "" }) => {
  return (
    <div
      className={`nc-SectionPromo1 relative flex flex-col lg:flex-row items-center ${className}`}
    >
      <div className="relative flex-shrink-0 mb-16 lg:mb-0 lg:mr-10 lg:w-2/5">
        <Logo className="w-64 h-40" />
        <h2 className="font-semibold text-3xl sm:text-4xl xl:text-5xl 2xl:text-6xl mt-6 sm:mt-10 !leading-[1.2] tracking-tight">
          Earn free money <br /> with Qfixe Games
        </h2>
        <span className="block mt-6 text-slate-500 dark:text-slate-400 ">
          With Qfixe Games you will get freeship & savings combo...
        </span>
        <div className="flex space-x-2 sm:space-x-5 mt-6 sm:mt-12">
          <ButtonPrimary href="/" className="">
            Savings combo
          </ButtonPrimary>
          <ButtonSecondary
            href="/"
            className="border border-slate-100 dark:border-slate-700"
          >
            Discover more
          </ButtonSecondary>
        </div>
      </div>
      <div className="relative flex-1 max-w-xl lg:max-w-none">
        <NcImage
          alt=""
          containerClassName="block dark:hidden"
          src="/images/rightLargeImg.png"
          sizes="(max-width: 768px) 100vw, 50vw"
          className="w-full"
          width={200}
          height={200}
        />
        <NcImage
          alt=""
          containerClassName="hidden dark:block"
          src="/images/rightLargeImgDark.png"
          sizes="(max-width: 768px) 100vw, 50vw"
          className=""
          width={200}
          height={200}
        />
      </div>
    </div>
  );
};

export default SectionPromo1;
