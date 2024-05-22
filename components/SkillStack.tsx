'use client'

import StackProgress from './StackProgress'

const SkillStack = () => {
  return (
    <>
      <div className="flex items-center justify-end p-5">
        <div className="bg-iphone relative flex w-full flex-col rounded-3xl p-5 text-white md:w-3/4 lg:w-1/2 xl:w-1/3">
          <h1 className="mb-4 text-2xl font-bold">🖥️ Skill Stack</h1>
          <div className="items-start">
            <StackProgress />
          </div>
          <div className="border-l-bg-iphone absolute right-0 top-1/2 h-0 w-0 -translate-y-1/2 translate-x-full transform border-b-8 border-l-8 border-t-8 border-b-transparent border-t-transparent"></div>
        </div>
      </div>

      <style jsx>{`
        .border-l-bg-iphone {
          border-left-color: #414af2;
        }

        .bg-iphone {
          background-color: #414af2;
        }

        @media (min-width: 768px) {
          .md\\:w-3/4 {
            max-width: 75%;
          }
        }

        @media (min-width: 1024px) {
          .lg\\:w-1/2 {
            max-width: 50%;
          }
        }

        @media (min-width: 1280px) {
          .xl\\:w-1/3 {
            max-width: 33.3333%;
          }
        }
      `}</style>
    </>
  )
}

export default SkillStack
