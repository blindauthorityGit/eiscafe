import React, { useEffect } from "react";
import { FaPhone } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { AiOutlineClockCircle } from "react-icons/ai";

// AOS
import AOS from "aos";
import "aos/dist/aos.css";

const FloaterOpening = (props) => {
    useEffect(() => {
        AOS.init({
            duration: 800,
        });
    }, []);
    return (
        <div
            className={`floater font-pantonsemibold z-10 hidden sm:block absolute bottom-12 sm:bottom-24 lg:bottom-8 xl:bottom-24 xl:text-lg tracking-wider text-textBlack left-6 lg:left-28 xl:left-36 ${
                props.center ? "items-center flex" : ""
            } ${props.klasse}`}
        >
            <div className="tel flex ">
                <AiOutlineClockCircle className="text-primaryColor-300 pt-2 text-3xl"></AiOutlineClockCircle>{" "}
                <div className="pl-4 text-primaryColor-100">
                    <div className="text-primaryColor-700 font-pantonbold text-2xl mb-4">Öffnungszeiten</div>
                    <div className="noMargin grid grid-cols-2 gap-x-6" style={{ marginBottom: "0!important" }}>
                        <div>Von April bis August</div>
                        <div className="font-pantonbold">9:30 – mind. 21:00</div>
                        <div>September </div>
                        <div className="font-pantonbold">10:00 – 19:00</div>
                        <div>Oktober – März </div>
                        <div className="font-pantonbold"> 10:00 – 19:00</div>
                    </div>
                </div>
            </div>

            {props.children}
        </div>
    );
};

export default FloaterOpening;
