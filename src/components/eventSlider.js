import React, { Component } from "react"

import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

import Slider from "react-slick"

import "./eventSlider.css"

class EventSlider extends Component {
  constructor(props) {
    super(props)
    this.state = {
      images: [
        { img: 1, desc: "Cool stuff" },
        { img: 2, desc: "Cool stuff" },
        { img: 3, desc: "Cool stuff" },
        { img: 4, desc: "Cool stuff" },
        { img: 5, desc: "Cool stuff" },
      ],
    }
  }

  render() {
    const settings = {
      dots: true,
      fade: true,
      infinite: true,
      speed: 500,
      autoplay: true,
      autoplaySpeed: 5000,
      arrows: false,
      slidesToShow: 1,
      slidesToScroll: 1,
    }
    return (
      <div className="sliderContainer">
        <Slider {...settings}>
          {this.state.images.map(image => (
            <div className="sliderImageContainer">
              <div className="sliderImage">
                <a>{image.img}</a>
              </div>
              <div className="sliderImageDescription">
                <a>{image.desc}</a>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    )
  }
}

export default EventSlider
