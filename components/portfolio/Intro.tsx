import Image from 'next/image'

const Intro = ({ intro }) => {
  return (
    <div className="h-auto w-full">
      <div className="flex flex-wrap md:flex-nowrap">
        <div className="relative my-4 h-32 w-1/2 md:h-40 md:w-1/2">
          <Image
            src={intro.memoticon.default}
            alt="profile"
            sizes="50vw"
            priority={true}
            fill
            style={{ objectFit: 'contain' }}
          />
        </div>
        <div className="my-4 mt-6 flex flex-col text-left">
          {intro.title.map((t: string) => (
            <h1 key={t}>{t}</h1>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Intro
