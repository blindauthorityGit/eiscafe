import React from "react";
import Link from "next/link";

const MainButton = (props) => {
    return (
        <button
            type={props.type}
            onClick={props.onClick}
            className={`mt-4 w-full min-w-[250px] max-w-[300px] ${
                props.ghost == true
                    ? "bg-primaryColor-50 text-primaryColor-800 hover:text-white"
                    : "bg-primaryColor text-white"
            }  px-12 py-4 font-pantonsemibold rounded-full text-lg uppercase tracking-widest  transition-all  duration-500 hover:bg-primaryColor-600 md:text-lg lg:mt-4 lg:px-8 xl:mt-8 xl:px-12 xl:text-xl`}
        >
            {props.children}
        </button>
    );
};

export default MainButton;
