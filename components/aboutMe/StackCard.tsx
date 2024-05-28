interface Skill {
  name: string
  src: string
  description: string
}

const StackCard = ({ stack }) => {
  return (
    <button className="boder-solid mx-1 my-1 w-auto rounded-xl border-2 border-[#232c3a] bg-[#232c3a]">
      <div className="mx-1 my-1">
        <h3 className=" mx-5 my-2 text-left text-xl">{stack.name}</h3>
        <div className="mx-8 my-2 flex flex-row flex-wrap border-white">
          {stack.skills.map((skill: Skill) => (
            <div key={skill.name} className="mx-1">
              <div className="border-1 h-auto rounded-2xl">
                <img src={skill.src}></img>
              </div>
            </div>
          ))}
        </div>
        {/* <div>{stack.skills}</div> */}
      </div>
    </button>
  )
}

export default StackCard
