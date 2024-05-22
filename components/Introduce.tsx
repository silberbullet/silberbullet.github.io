'use client'

import siteMetadata from '@/data/siteMetadata'
import { motion } from 'framer-motion'

export default function Introduce() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 1.2,
          delay: 0.5,
          ease: [0, 0.71, 0.2, 1.01],
        }}
      >
        <div className="flex items-center justify-start p-5">
          <div className="bg-iphone relative flex max-w-full rounded-3xl p-5 text-white md:max-w-xs">
            <div className="w-3/10 mb-4 max-h-[100px] max-w-[100px] flex-shrink-0">
              {/* <img
                src="https://em-content.zobj.net/source/apple/391/man-technologist_1f468-200d-1f4bb.png"
                loading="lazy"
                alt="iOS 17.4"
                className="h-full w-auto"
              /> */}
              <img
                src="https://em-content.zobj.net/source/telegram/386/man-technologist_1f468-200d-1f4bb.webp"
                loading="lazy"
                alt="Telemoji (November 2023)"
                className="h-full w-auto"
              />
            </div>
            <div className="w-7/10 pl-4">
              <h1 className="mb-4 text-2xl font-bold">{siteMetadata.aboutMe.name}</h1>
              <p className="text-base">{siteMetadata.aboutMe.intro1}</p>
              <p className="text-base">{siteMetadata.aboutMe.intro2}</p>
            </div>

            <div className="border-r-bg-iphone absolute left-0 top-1/2 h-0 w-0 -translate-x-full -translate-y-1/2 transform border-b-8 border-r-8 border-t-8 border-b-transparent border-t-transparent"></div>
          </div>
        </div>

        <style jsx>{`
          .bg-iphone {
            background-color: #b5b5b5;
          }

          .border-r-bg-iphone {
            border-right-color: #b5b5b5;
          }

          .max-w-full {
            max-width: 100%;
          }

          @media (min-width: 768px) {
            .md\\:max-w-xs {
              max-width: 24rem;
            }
          }
        `}</style>
      </motion.div>
    </>
  )
}
