"use client"

import ProductImage from "@/assets/product-image.png"
import pyramidImage from "@/assets/pyramid.png"
import tubeImage from "@/assets/tube.png"
import Image from "next/image"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"

export const ProductShowcase = () => {
  const sectionRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  })

  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150])
  return (
    <section
      ref={sectionRef}
      className="bg-gradient-to-b from-[#fff] to-[#d2dcff] py-24 overflow-x-clip"
    >
      <div className="container">
        <div className="max-w-[540px] mx-auto">
          <div className="flex justify-center">
            <div className="tag">Boost your productivity</div>
          </div>
          <h2 className="text-center text-3xl md:[54px] md:leading-[60px] font-bold tracking-tight bg-gradient-to-b from-black to-[#001e80] text-transparent bg-clip-text mt-3">
            A more effective way to track progress
          </h2>
          <p className="text-center tex-[22px] md:leading-[30px] tracking-tight text-[#010d3e] mt-3">
            Effortlessly turn your ideas into a fully functional, responsive, SAAS website in just
            minutes with this template
          </p>
        </div>

        <div className="relative">
          <Image
            src={ProductImage}
            alt="Prod"
            className="mt-10"
          />

          <motion.img
            src={pyramidImage.src}
            alt="py"
            height={262}
            width={262}
            className="hidden md:block absolute -right-36 -top-32"
            style={{
              translateY: translateY,
            }}
          />

          <motion.img
            src={tubeImage.src}
            alt="tube"
            height={248}
            width={248}
            className="hidden md:block absolute bottom-24 -left-36"
            style={{
              translateY: translateY,
            }}
          />
        </div>
      </div>
    </section>
  )
}
