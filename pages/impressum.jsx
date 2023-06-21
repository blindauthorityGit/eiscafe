import React from "react";
import { Menu1 } from "../components/menues";

import { BiArrowBack } from "react-icons/bi";
import { RxHamburgerMenu } from "react-icons/rx";
import { menuItems, socialMedia } from "../components/menues/config";

//ASSETS
import LogoLight from "../assets/LogoLight.svg";
import LogoDark from "../assets/LogoDark.svg";
const Impressum = () => {
    return (
        <>
            <Menu1
                logoLight={LogoLight.src}
                logoDark={LogoDark.src}
                menuItems={menuItems}
                socialMedia={socialMedia}
                burgerIcon={<RxHamburgerMenu />}
                onBurgerClick={(e) => {}}
                onClick={() => {
                    setIsOpen(true);
                }}
            ></Menu1>
            <div className="impressum mb-16 relative font-block break-words">
                <div className="wrapper container max-w-2xl m-auto text-left pt-16 px-8 ">
                    <a className="text-3xl text-[#fff]" href="../">
                        <BiArrowBack></BiArrowBack>
                    </a>
                    <div className="text mt-16 text-primaryColor-800">
                        <h2 className="text-primaryColor-400 mb-8 text-2xl lg:text-4xl xl:text-4xl leading-tight tracking-wide font-pantonblack">
                            Impressum
                        </h2>
                        <p className="mt-8">
                            Besitzer:
                            <br />
                            Paulo Jeremic
                        </p>

                        <p className="mt-8 mb-8">
                            Alte Bogengasse 37 <br />
                            63303 Dreieich <br />
                            Deutschland
                        </p>

                        <h2 className="text-primaryColor-400  text-lg lg:text-xl xl:text-2xl leading-tight tracking-wide font-pantonblack">
                            Contact
                        </h2>
                        <p>
                            Phone: +49 6103 733 95 33
                            <br />
                            <br />
                            Webdesign: <br />
                            Sabocon.com
                        </p>
                    </div>
                </div>
                <div className="h-36 sm:h-0"></div>
            </div>
        </>
    );
};

export default Impressum;
