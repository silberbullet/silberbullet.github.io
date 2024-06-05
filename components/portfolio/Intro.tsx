import Image from 'next/image'

const Intro = () => {
  return (
    <div className="x-full h-auto">
      <div className="flex flex-wrap">
        <div className="relative my-4 h-auto w-auto min-w-52 md:h-40">
          <Image
            src="static/images/profile.png"
            alt="profile"
            priority={true}
            layout="fill"
            objectFit="contain"
          />
        </div>
        <div>소개글</div>
      </div>
    </div>
  )
}

export default Intro
