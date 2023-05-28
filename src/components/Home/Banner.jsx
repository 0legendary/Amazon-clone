import React, { useState } from 'react'
import Slider from "react-slick";
import {
    bannerImgOne,
    bannerImgTwo,
    bannerImgThree,
    bannerImgFour,
    bannerImgFive
} from "../../assets/index"

const Banner = () => {
    const [dotActive, setDocActive] = useState(0);
    const settings = {
      dots: true,
      infinite: true,
      autoplay: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      beforeChange: (prev, next) => {
        setDocActive(next);
      },
      appendDots: (dots) => (
        <div
          style={{
            position: "absolute",
            top: "70%",
            left: "50%",
            transform: "translate(-50%, 0)",
            width: "210px",
          }}
        >
          <ul
            style={{
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            {dots}
          </ul>
        </div>
      ),
      customPaging: (i) => (
        <div
          style={
            i === dotActive
              ? {
                  width: "30px",
                  height: "30px",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "white",
                  background: "#131921",
                  padding: "8px 0",
                  cursor: "pointer",
                  border: "1px solid #f3a847",
                }
              : {
                  width: "30px",
                  height: "30px",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  background: "#232F3E",
                  color: "white",
                  padding: "8px 0",
                  cursor: "pointer",
                  border: "1px solid white",
                }
          }
        >
          {i + 1}
        </div>
      ),
      responsive: [
        {
          breakpoint: 500,
          settings: {
            dots: true,
            appendDots: (dots) => (
              <div
                style={{
                  position: "absolute",
                  top: "60%",
                  left: "50%",
                  transform: "translate(-50%, 0)",
                  width: "150px",
                }}
              >
                <ul
                  style={{
                    width: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    fontSize: "12px",
                  }}
                >
                  {" "}
                  {dots}{" "}
                </ul>
              </div>
            ),
            customPaging: (i) => (
              <div
                style={
                  i === dotActive
                    ? {
                        width: "25px",
                        height: "25px",
                        borderRadius: "50%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "white",
                        background: "#131921",
                        padding: "8px 0",
                        cursor: "pointer",
                        border: "1px solid #f3a847",
                      }
                    : {
                        width: "25px",
                        height: "25px",
                        borderRadius: "50%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        background: "#232F3E",
                        color: "white",
                        padding: "8px 0",
                        cursor: "pointer",
                        border: "1px solid white",
                      }
                }
              >
                {i + 1}
              </div>
            ),
          },
        },
      ],
    };
    return (
        <div className='banner'>
            <div className='banner-1'>
                <Slider {...settings}>
                    <div>
                        <img src={bannerImgOne} alt="Banner1" />
                    </div>
                    <div>
                        <img src={bannerImgTwo} alt="Banner2" />
                    </div>
                    <div>
                        <img src={bannerImgThree} alt="Banner3" />
                    </div>
                    <div>
                        <img src={bannerImgFour} alt="Banner4" />
                    </div>
                    <div>
                        <img src={bannerImgFive} alt="Banner5" />
                    </div>

                </Slider>
            </div>

        </div>

    )
}

export default Banner
