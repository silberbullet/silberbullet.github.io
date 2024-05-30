import dynamic from 'next/dynamic'
import { useCallback, useState } from 'react'

const Modal = dynamic(() => import('@/components/modal/Modal'), { ssr: false })

export const useModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [ModalContent, setModalContent] = useState<React.ComponentType | null>(null)

  const openModal = useCallback((content: () => Promise<{ default: React.ComponentType }>) => {
    const DynamicContent = dynamic(content, { ssr: false })
    setModalContent(() => DynamicContent)
    setIsModalOpen(true)
  }, [])

  const closeModal = useCallback(() => {
    setIsModalOpen(false)
    setModalContent(null)
  }, [])

  return { isModalOpen, openModal, closeModal, ModalContent, Modal, setIsModalOpen }
}
