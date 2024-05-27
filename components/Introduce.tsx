export default function Introduce() {
  return (
    <>
      <div className="title-image-container">
        <div className="title">
          <div className="mobilTitle">
            <h1>안녕하세요,</h1>
            <h1>백엔드 개발자</h1>
            <h1>박경우입니다.</h1>
          </div>
          <div className="mobileImage">
            <img src="static/images/mimoticon.png" alt="Profile" />
          </div>

          <div className="subtitle">
            <p>방문해 주셔서 감사합니다.</p>
          </div>
        </div>

        <div className="content">
          <h3>✈️차별화된 서비스 제공을 위한 성장을 추구합니다.</h3>
          <p>- Tech 컨텐츠를 참고하여 기술 블로그의 10+ 포스팅을 하였습니다.</p>
          <h3>🔥사용자 경험을 중요하게 생각합니다.</h3>
          <p>- 수기 업무 자동화 서비스 개편을 통한 고객 만족도 효율성을 향상 시켰습니다.</p>
        </div>
        <div className="image">
          <img src="static/images/mimoticon.png" alt="Profile" />
        </div>
      </div>

      <div className="scroll-indicator">
        <p>&#8595;</p>
      </div>
    </>
  )
}
