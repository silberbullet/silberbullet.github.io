'use client'

import { useState } from 'react'

interface Stack {
  name: string
  skills: Array<string>
}
const SkillStack = ({ skillStacks }) => {
  const [selectedTab, setSelectedTab] = useState([])

  return (
    <></>
    // <div className="window">
    //   <nav>
    //     <ul>
    //       {tabs.map((item) => (
    //         <li
    //           key={item.label}
    //           className={item === selectedTab ? 'selected' : ''}
    //           onClick={() => setSelectedTab(item)}
    //         >
    //           {`${item.icon} ${item.label}`}
    //           {item === selectedTab ? (
    //             <motion.div className="underline" layoutId="underline" />
    //           ) : null}
    //         </li>
    //       ))}
    //     </ul>
    //   </nav>
    //   <main>
    //     <AnimatePresence mode="wait">
    //       <motion.div
    //         key={selectedTab ? selectedTab.label : 'empty'}
    //         initial={{ y: 10, opacity: 0 }}
    //         animate={{ y: 0, opacity: 1 }}
    //         exit={{ y: -10, opacity: 0 }}
    //         transition={{ duration: 0.2 }}
    //       >
    //         {selectedTab ? selectedTab.icon : '😋'}
    //       </motion.div>
    //     </AnimatePresence>
    //   </main>
    // </div>
  )
}

export default SkillStack
