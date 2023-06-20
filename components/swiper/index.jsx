import React, { useState } from "react";
import Image from "next/image";

import Link from "next/link";
import { Parallax } from "react-scroll-parallax";

// SWIPER
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y, Keyboard, Autoplay, Virtual } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

// Framer motion
import { motion, useScroll, useAnimation } from "framer-motion";

// icons
import { BsArrowRightShort } from "react-icons/bs";
import { HiOutlineChevronLeft, HiOutlineChevronRight } from "react-icons/hi";

const Swipo = (props) => {
    const [loading, setLoading] = useState(true);
    const [swiper, setSwiper] = useState(null);
    const [clicked, setClicked] = useState(false);

    const handleClick = () => {
        setClicked(true);
        setTimeout(() => setClicked(false), 100);
    };

    return (
        <>
            {/* <div
                className="left hidden lg:block absolute top-[45%] left-24 text-6xl text-primaryColor-800"
                onClick={() => {
                    swiper.slidePrev();
                }}
            >
                <HiOutlineChevronLeft></HiOutlineChevronLeft>
            </div>
            <div
                className="right hidden lg:block absolute top-[45%] right-0 z-30 text-6xl text-primaryColor-800"
                onClick={() => {
                    swiper.slideNext();
                }}
            >
                <HiOutlineChevronRight></HiOutlineChevronRight>
            </div> */}
            <div
                className={`h-[18rem] w-[18rem] lg:h-[30rem] lg:w-[30rem] xl:h-[40rem] xl:w-[40rem] rounded-full border-8 border-white relative overflow-hidden  ${props.colspan}`}
            >
                <div className="relative h-full">
                    <Swiper
                        // install Swiper modules
                        modules={[Navigation, Pagination, Scrollbar, A11y, Keyboard, Autoplay, Virtual]}
                        spaceBetween={20}
                        slidesPerView={1}
                        centeredSlides
                        keyboard={true}
                        virtual
                        fadeEffect={{ crossFade: true }}
                        speed={225}
                        pagination={{ clickable: true, dynamicBullets: true }}
                        onSwiper={(swiper) => {
                            console.log(swiper.params);
                            {
                                setSwiper(swiper);
                            }
                        }}
                        onSlideChange={() => console.log("slide change")}
                        className={` h-full `}
                    >
                        {props.data.map((e, i) => {
                            return (
                                <>
                                    <SwiperSlide key={`sliderKey${i}`} layoutId="hero" transition={{ duration: 0.5 }}>
                                        <motion.div
                                            // style={{ boxShadow: "var(--shadow-elevation-high)" }}
                                            className={` border-white h-full  relative transition-all ${
                                                clicked ? "scale-[0.975]" : ""
                                            }`}
                                            data-swiper-parallax="100"
                                            data-swiper-parallax-opacity="0"
                                            data-swiper-parallax-scale="0.78"
                                        >
                                            <Image
                                                // {...ImagePropsGallery(i)}
                                                src={e.src}
                                                fill
                                                loading="lazy"
                                                alt="hero"
                                                quality="10"
                                                onClick={handleClick}
                                                onLoad={() => {
                                                    console.log("LOADING");
                                                    setLoading(false);
                                                }}
                                                className="h-full  KNORKE"
                                                // max-w-[99%!important] min-w-[92%!important]
                                            />
                                        </motion.div>
                                    </SwiperSlide>
                                </>
                            );
                        })}
                    </Swiper>
                </div>

                <style jsx>{`
                    .hover-underline-animation span {
                        display: inline-block;
                        position: relative;
                        color: #e5e4dd;
                    }

                    .hover-underline-animation span::after {
                        content: "";
                        position: absolute;
                        width: 100%;
                        transform: scaleX(0);
                        height: 2px;
                        bottom: 0;
                        left: 0;
                        background-color: white;
                        transform-origin: bottom right;
                        transition: transform 0.25s ease-out;
                    }

                    .hover-underline-animation:hover span::after {
                        transform: scaleX(1);
                        transform-origin: bottom left;
                    }
                    .swiper-pagination-bullet {
                        background-color: #fff !important;
                    }
                `}</style>
            </div>
        </>
    );
};

export default Swipo;
