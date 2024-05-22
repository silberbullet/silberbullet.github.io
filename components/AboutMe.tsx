'use client'

import Slider, { Settings } from 'react-slick'
import 'slick-carousel/slick/slick-theme.css'
import 'slick-carousel/slick/slick.css'

const AboutMe = () => {
  const settings: Settings = {
    dots: true,
    vertical: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  }
  return (
    <div className="min-h-80 w-full rounded-3xl border-2 border-solid border-gray-300 p-5 text-white">
      <Slider {...settings}>
        <div className="m-2 flex h-48 items-center justify-center rounded-md bg-gray-800 ">
          <h3>1</h3>
        </div>
        <div className="m-2 flex h-48 items-center justify-center rounded-md bg-gray-800 ">
          <h3>2</h3>
        </div>
        <div className="m-2 flex h-48 items-center justify-center rounded-md bg-gray-800 ">
          <h3>3</h3>
        </div>
        <div className="m-2 flex h-48 items-center justify-center rounded-md bg-gray-800 ">
          <h3>4</h3>
        </div>
        <div className="m-2 flex h-48 items-center justify-center rounded-md bg-gray-800 ">
          <h3>5</h3>
        </div>
        <div className="m-2 flex h-48 items-center justify-center rounded-md bg-gray-800">
          <h3>6</h3>
        </div>
      </Slider>
    </div>
  )
}

export default AboutMe
