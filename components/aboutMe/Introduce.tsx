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
            <img src={introduce.memoticon.mobile} alt="Profile" />
          </div>

          <div className="subtitle">
            <p>{introduce.subtitle}</p>
          </div>
        </div>

        <div className="content">
          {introduce.contents.map((content: Content) => (
            <>
              <h3 key={content.title}>{content.title}</h3>
              <p key={content.description}>{content.description}</p>
            </>
          ))}
        </div>
        <div className="image">
          <img src={introduce.memoticon.default} alt="Profile" />
        </div>
      </div>

      <div className="scroll-indicator">
        <p>&#8595;</p>
      </div>
    </>
  )
}

export default Introduce
