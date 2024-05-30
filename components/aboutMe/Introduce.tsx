'use client'
import Image from '../Image'
interface Content {
  title: string
  description: string
}

const Introduce = ({ introduce }) => {
  const title: Array<string> = introduce.title as unknown as Array<string>

  return (
    <>
      <div className="title-image-container">
        <div className="title">
          <div className="mobilTitle">
            {title.map((t: string) => (
              <h1 key={t}>{t}</h1>
            ))}
          </div>
          <div className="mobileImage">
            <Image src={introduce.memoticon.mobile} alt="Profile" width={192} height={192} />
          </div>

          <div className="subtitle">
            <p>{introduce.subtitle}</p>
          </div>
        </div>

        <div className="content">
          {introduce.contents.map((content: Content) => (
            <div key={content.title}>
              <h3>{content.title}</h3>
              <p key={content.description}>{content.description}</p>
            </div>
          ))}
        </div>
        <div className="image">
          <Image src={introduce.memoticon.default} alt="Profile" width={192} height={192} />
        </div>
      </div>

      <div className="scroll-indicator">
        <p>Click and See More!</p>
      </div>
    </>
  )
}

export default Introduce
