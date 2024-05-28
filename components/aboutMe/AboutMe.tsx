'use client'

import 'swiper/css'
import 'swiper/css/pagination'
import { Mousewheel, Pagination, Scrollbar } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import Introduce from './Introduce'
import SkillStack from './SkillStack'

const AboutMe = ({ aboutMeData }) => {
  return (
    <>
      <Swiper
        direction={'vertical'}
        slidesPerView={1}
        spaceBetween={30}
        mousewheel={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, Mousewheel, Scrollbar]}
        className="AboutMe"
      >
        <SwiperSlide className="container">
          <Introduce introduce={aboutMeData.introduce} />
        </SwiperSlide>
        <SwiperSlide className="container">
          <SkillStack skillStacks={aboutMeData.skillStacks} />
        </SwiperSlide>
        <SwiperSlide className="container">Slide 3</SwiperSlide>
        <SwiperSlide className="container">Slide 4</SwiperSlide>
        <SwiperSlide className="container">Slide 5</SwiperSlide>
        <SwiperSlide className="container">Slide 6</SwiperSlide>
        <SwiperSlide className="container">Slide 7</SwiperSlide>
        <SwiperSlide className="container">Slide 8</SwiperSlide>
        <SwiperSlide className="container">Slide 9</SwiperSlide>
      </Swiper>
    </>
  )
}

export default AboutMe
