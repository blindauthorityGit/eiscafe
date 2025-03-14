import React, { forwardRef } from "react";

import { MdOutlineClose } from "react-icons/md";

const ModalMobile = ({ ...props }, ref) => {
    return (
        <div
            ref={ref}
            className="fixed  slide-in-bottom  max-h-[100%] w-[100%] lg:w-[80%] min-h-[70%] bg-white pt-8 pb-8 px-8 lg:p-24 z-50 bottom-16"
        >
            <div
                className="closer absolute bg-white rounded-full top-[-1rem] right-6 text-xl p-2 cursor-pointer transition hover:opacity-50 z-50"
                onClick={props.onClick}
            >
                <MdOutlineClose className="bg-white rounded-full"></MdOutlineClose>
            </div>
            <div>{props.children}</div>
        </div>
    );
};

export default forwardRef(ModalMobile);
