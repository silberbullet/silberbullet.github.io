// 'use client'

// import { useRouter } from 'next/navigation'
// import React from 'react'

// export interface ModalProps {
//   children: React.ReactNode
// }

// const Modal = ({ children }: ModalProps) => {
//   const router = useRouter()
//   const overlayRef = React.useRef(null)

//   const handleKeyUp = (e: KeyboardEvent) => {
//     if (e.key !== 'Escape') return

//     router.back()
//   }

//   React.useEffect(() => {
//     window.addEventListener('keyup', handleKeyUp)

//     return () => window.removeEventListener('keyup', handleKeyUp)
//   }, [])

//   return (
//     <div
//       ref={overlayRef}
//       className="fixed bottom-0 left-0 right-0 top-0 z-10 mx-auto bg-black/60"
//       onClick={(e) => {
//         if (overlayRef.current !== e.target) return

//         router.back()
//       }}
//     >
//       <div className="absolute left-1/2 top-1/4 w-full -translate-x-1/2 -translate-y-1/2 rounded-lg bg-white p-6 sm:w-10/12 md:w-8/12 lg:w-1/2">
//         <div className="flex justify-end">
//           <button className="text-xl hover:text-zinc-700" onClick={() => router.back()}>
//             닫기
//           </button>
//         </div>
//         {children}
//       </div>
//     </div>
//   )
// }

// export default Modal
