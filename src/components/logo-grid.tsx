"use client"

import acmeLogo from "@/assets/logo-acme.png"
import quantumLogo from "@/assets/logo-quantum.png"
import echoLogo from "@/assets/logo-echo.png"
import celestialLogo from "@/assets/logo-celestial.png"
import pulseLogo from "@/assets/logo-pulse.png"
import apexLogo from "@/assets/logo-apex.png"
import Image from "next/image"

import { motion } from "framer-motion"

export const LogoGrid = () => {
  return (
    <div className="py-8 md:py-12 bg-white">
      <div className="container">
        <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black,transparent)]">
          <motion.div
            className="flex gap-14 flex-none"
            animate={{
              translateX: "-50%",
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "linear",
              repeatType: "loop",
            }}
          >
            <Image
              src={acmeLogo}
              alt="acme"
              className="logo-ticker-image"
            />
            <Image
              src={quantumLogo}
              alt="acme"
              className="logo-ticker-image"
            />
            <Image
              src={echoLogo}
              alt="acme"
              className="logo-ticker-image"
            />
            <Image
              src={celestialLogo}
              alt="acme"
              className="logo-ticker-image"
            />
            <Image
              src={pulseLogo}
              alt="acme"
              className="logo-ticker-image"
            />
            <Image
              src={apexLogo}
              alt="acme"
              className="logo-ticker-image"
            />

            {/* Second set */}
            <Image
              src={acmeLogo}
              alt="acme"
              className="logo-ticker-image"
            />
            <Image
              src={quantumLogo}
              alt="acme"
              className="logo-ticker-image"
            />
            <Image
              src={echoLogo}
              alt="acme"
              className="logo-ticker-image"
            />
            <Image
              src={celestialLogo}
              alt="acme"
              className="logo-ticker-image"
            />
            <Image
              src={pulseLogo}
              alt="acme"
              className="logo-ticker-image"
            />
            <Image
              src={apexLogo}
              alt="acme"
              className="logo-ticker-image"
            />
          </motion.div>
        </div>
      </div>
    </div>
  )
}
