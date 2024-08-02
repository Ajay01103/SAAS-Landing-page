"use client"

import CheckIcon from "@/assets/check.svg"
import { cn } from "@/lib/cn"

import { motion } from "framer-motion"

export const Pricing = () => {
  const pricingTiers = [
    {
      title: "Free",
      monthlyPrice: 0,
      buttonText: "Get started for free",
      popular: false,
      inverse: false,
      features: [
        "Up to 5 project members",
        "Unlimited tasks and projects",
        "2GB storage",
        "Integrations",
        "Basic support",
      ],
    },
    {
      title: "Pro",
      monthlyPrice: 9,
      buttonText: "Sign up now",
      popular: true,
      inverse: true,
      features: [
        "Up to 50 project members",
        "Unlimited tasks and projects",
        "50GB storage",
        "Integrations",
        "Priority support",
        "Advanced support",
        "Export support",
      ],
    },
    {
      title: "Business",
      monthlyPrice: 19,
      buttonText: "Sign up now",
      popular: false,
      inverse: false,
      features: [
        "Up to 5 project members",
        "Unlimited tasks and projects",
        "200GB storage",
        "Integrations",
        "Dedicated account manager",
        "Custom fields",
        "Advanced analytics",
        "Export capabilities",
        "API access",
        "Advanced security features",
      ],
    },
  ]

  return (
    <section className="py-24">
      <div className="container">
        <h2 className="text-center text-3xl md:text-[54px] md:leading-[60px] font-bold tracking-tight bg-gradient-to-b from-black to-[#001e80] text-transparent bg-clip-text">
          Pricing
        </h2>
        <p className="text-center md:text-[18px] text-sm md:leading-[30px] tracking-tight text-[#010d3e] mt-3">
          Free tier for hobby usage & Upgrade to scale whenever you want
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-x-8 gap-y-6 mt-14 w-full">
          {pricingTiers.map(
            ({ buttonText, features, inverse, monthlyPrice, popular, title }, i) => (
              <div
                className={`p-8 border border-[#F1F1F1] rounded-3xl shadow-[0_7px_14px_#EAEAEA] max-w-sm w-full  ${
                  inverse === true ? "border-black/50 bg-black text-white/80" : ""
                }`}
                key={i}
              >
                <div className="flex justify-between">
                  <h3
                    className={`text-lg font-bold ${
                      inverse === true ? "text-white/80" : "text-black/50"
                    }`}
                  >
                    {title}
                  </h3>
                  {popular === true && (
                    <div className="inline-flex text-sm px-4 py-1.5 rounded-xl border-2 border-gray-400/20">
                      <motion.span
                        animate={{
                          backgroundPositionX: "-100%",
                        }}
                        transition={{
                          duration: 1,
                          repeat: Infinity,
                          ease: "linear",
                          repeatType: "loop",
                        }}
                        className="bg-[linear-gradient(to_right,#DD7DDF,#E1CD86,#BBCB92,#71C2EF,#3BFFFF,#DD7DDF,#E1CD86,#BBCB92,#71C2EF,#3BFFFF)] [background-size:200%] text-transparent bg-clip-text font-bold"
                      >
                        Popular
                      </motion.span>
                    </div>
                  )}
                </div>

                <div className="flex items-baseline gap-1 mt-[30px]">
                  <span className="text-4xl font-bold tracking-tight">{monthlyPrice}$ </span>
                  <span
                    className={cn(
                      "tracking-tight font-bold text-black/50",
                      inverse === true && "text-white"
                    )}
                  >
                    /month
                  </span>
                </div>
                <div className="flex">
                  <button
                    className={`btn btn-primary w-full mt-[30px] ${
                      inverse === true ? "bg-white text-black" : ""
                    }`}
                  >
                    {buttonText}
                  </button>
                </div>
                <ul className="flex flex-col gap-5 mt-8">
                  {features.map((feature, i) => (
                    <li
                      className="flex text-sm items-center gap-4"
                      key={i}
                    >
                      <CheckIcon className="h-6 w-6" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  )
}
