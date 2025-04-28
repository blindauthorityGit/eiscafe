import React from "react";
import { MdOutlineClose } from "react-icons/md";

const Modal = (props) => {
    return (
        <>
            <div className="fixed w-[90%] lg:w-[80%] min-h-[80%] max-h-[90%] flex flex-col justify-center items-center bg-white z-50 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div
                    className="closer absolute top-6 right-6 text-4xl cursor-pointer transition hover:opacity-50 z-50"
                    onClick={props.onClick}
                >
                    <MdOutlineClose />
                </div>

                {/* This inner box has the scroll and padding! */}
                <div className="w-full max-w-4xl overflow-y-auto p-8 lg:p-12 xl:p-24 flex flex-col items-center gap-8 ">
                    {props.children}
                </div>
            </div>

            <div className="fixed h-screen w-screen bg-secondaryColor-950 top-0 z-30 opacity-60"></div>
        </>
    );
};

export default Modal;
