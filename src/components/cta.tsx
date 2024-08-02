"use client"

import ArrowRight from "@/assets/arrow-right.svg"
import starImage from "@/assets/star.png"
import springImage from "@/assets/spring.png"
import Image from "next/image"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"

export const CTA = () => {
  const sectionRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  })

  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150])
  return (
    <section
      ref={sectionRef}
      className="bg-gradient-to-b from-white to-[#D2DCFF] py-24 overflow-x-clip"
    >
      <div className="container md:mt-10">
        <div className="section-heading relative">
          <h2 className="section-title leading-normal">Sign up for free today</h2>
          <p className="section-description mt-3.5">
            celebrate the joy of accomplishment with an app designed to track your progress and
            motivate your efforts.
          </p>

          <motion.img
            src={starImage.src}
            alt="star"
            width={300}
            style={{
              translateY: translateY,
            }}
            className="absolute -left-[220px] -top-[137px] hidden md:block"
          />

          <motion.img
            src={springImage.src}
            alt="star"
            width={300}
            style={{
              translateY: translateY,
            }}
            className="absolute -right-[220px] -top-[19px] hidden md:block"
          />
        </div>

        <div className="flex gap-2 mt-10 justify-center">
          <button className="btn btn-primary">Get for free</button>
          <button className="btn btn-text gap-1">
            <span>Learn more</span>
            <ArrowRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  )
}
