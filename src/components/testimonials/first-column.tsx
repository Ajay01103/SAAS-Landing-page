import { motion } from "framer-motion"
import Image from "next/image"
import React from "react"

interface FirstColumnProps {
  firstColumns: {
    text: string
    imageSrc: string
    name: string
    username: string
  }[]
  className?: string
}

export const FirstColumn = ({ firstColumns, className }: FirstColumnProps) => {
  return (
    <div className={className}>
      <motion.div
        animate={{
          translateY: "-50%",
        }}
        transition={{
          duration: 13,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
        className="flex flex-col pb-6 gap-6"
      >
        {[...new Array(2)].fill(0).map((_, index) => (
          <React.Fragment key={index}>
            {firstColumns.map(({ imageSrc, name, text, username }) => (
              <div
                key={name}
                className="card"
              >
                <div className="flex items-center gap-2">
                  <Image
                    width={40}
                    height={40}
                    src={imageSrc}
                    alt="card"
                    className="h-10 w-10 rounded-full"
                  />

                  <div className="flex flex-col">
                    <div className="font-medium tracking-tight leading-5">{name}</div>
                    <div className="leading-5 tracking-tight">{username}</div>
                  </div>
                </div>

                <div className="mt-4">{text}</div>
              </div>
            ))}
          </React.Fragment>
        ))}
      </motion.div>
    </div>
  )
}
