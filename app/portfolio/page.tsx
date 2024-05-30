import Introduce from '@/components/aboutMe/Introduce'
import portfolioData from '@/data/portfolio/portfolioData'
import PortfolioLayout from '@/layouts/PortfolioLayout'
import { genPageMetadata } from 'app/seo'
export const metadata = genPageMetadata({ title: 'Portfolio' })

export default function Page() {
  return (
    <PortfolioLayout>
      <Introduce introduce={portfolioData.introduce} />
      <Introduce introduce={portfolioData.introduce} />
      <Introduce introduce={portfolioData.introduce} />
      <Introduce introduce={portfolioData.introduce} />
      <Introduce introduce={portfolioData.introduce} />
      <Introduce introduce={portfolioData.introduce} />
    </PortfolioLayout>
  )
}
