import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Parallax } from "react-scroll-parallax";

// COMPS
import { MainButton } from "../buttons";
import { FloaterOpening } from "../floaters";

// FUNCTIONS
import useBreakpoints from "../functions/useBreakpoints";

//ASSETS
import HeroBG from "../../assets/heroBG.svg";
import HeroMobileBG from "../../assets/mobileBG.jpg";

const Hero = (props) => {
    const [loaded, setLoaded] = useState(false);
    const { isMobile, isTablet, isDesktop } = useBreakpoints();

    const videoRef = useRef(null);

    useEffect(() => {
        console.log(isMobile, isTablet, isDesktop);
    }, [isMobile, isTablet, isDesktop]);

    useEffect(() => {}, []);

    return (
        <>
            <div
                className={`hero-container hidden lg:block bg-cover bg-no-repeat  w-full max-w-[1920px] max-h-[1080px] mx-auto h-full relative ${
                    props.fullHeight ? "h-screen" : props.height
                } ${props.colspan}`}
                style={{ backgroundImage: `url(${HeroBG.src})` }}
            >
                {/* Background Image */}
                {/* Background Video */}
                <div className="container mx-auto grid grid-cols-12 h-full items-center">
                    <Parallax className="col-span-5" translateY={["-100px", "100px"]}>
                        <h1 className="text-white text-4xl xl:text-6xl leading-tight tracking-wide font-pantonblack">
                            Das Eiscafé im Herzen der Dreieichenhainer Altstadt{" "}
                        </h1>
                        {/* <h3 className="mt-2 sm:mt-4 lg:mt-2 xl:mt-4 text-primaryColor-200">{props.data.subtitle}</h3>
                    
                    <h6 className="mt-2 sm:mt-4 lg:mt-2 xl:mt-4 text-primaryColor-200">{props.data.subsubtitle}</h6> */}
                        <div className="lg:flex hidden  space-x-6">
                            <Link href="/#eis">
                                <MainButton ghost={true}>Unser Eis</MainButton>
                            </Link>
                            <Link href="/#kontakt">
                                <MainButton>Kontakt</MainButton>
                            </Link>
                        </div>
                    </Parallax>
                </div>
                {/* <div className="h-full sm:h-full w-full bg-[#3b3720] opacity-60 absolute"></div> */}
                {/* {!loaded && <Spinner1></Spinner1>} */} <FloaterOpening></FloaterOpening>
            </div>

            <div
                className={`hero-container block lg:hidden bg-cover bg-bottom px-8 bg-no-repeat  w-full max-w-[1920px] max-h-[1080px] mx-auto h-full relative ${
                    props.fullHeight ? "h-screen" : props.height
                } ${props.colspan}`}
                style={{ backgroundImage: `url(${HeroMobileBG.src})` }}
            >
                {/* Background Image */}
                {/* Background Video */}
                <div className="container mx-auto grid grid-cols-12 h-full">
                    <div className="col-span-8 relative flex flex-col justify-center items-center">
                        <h1 className="text-white  text-3xl xl:text-6xl leading-tight tracking-wide font-pantonbold">
                            Das Eiscafé im Herzen der Dreieichenhainer Altstadt{" "}
                        </h1>
                        {/* <h3 className="mt-2 sm:mt-4 lg:mt-2 xl:mt-4 text-primaryColor-200">{props.data.subtitle}</h3>
                    
                    <h6 className="mt-2 sm:mt-4 lg:mt-2 xl:mt-4 text-primaryColor-200">{props.data.subsubtitle}</h6> */}
                        <div className="lg:hidden block ">
                            <Link href="/#eis">
                                <MainButton ghost={false}>Unser Eis</MainButton>
                            </Link>
                        </div>
                    </div>
                </div>
                {/* <div className="h-full sm:h-full w-full bg-[#3b3720] opacity-60 absolute"></div> */}
                {/* {!loaded && <Spinner1></Spinner1>} */} <FloaterOpening></FloaterOpening>
            </div>
        </>
    );
};

export default Hero;
