import Head from "next/head";

import { useState, useEffect } from "react";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import MainContainer from "../components/layout/mainContainer";
import Hero from "../components/Hero/hero";
import { Menu1 } from "../components/menues";
import Swipo from "../components/swiper";
import Link from "next/link";
//ASSETS
import LogoLight from "../assets/LogoLight.svg";
import LogoDark from "../assets/LogoDark.svg";
import Eiscafe1 from "../assets/eiscafe.jpg";
import Eis1 from "../assets/eis1.jpg";
import Eis2 from "../assets/eis2.jpg";
import Eis3 from "../assets/eis3.jpg";
import Eis4 from "../assets/eis4.jpg";
import Kuchen1 from "../assets/kuchen1.jpg";
import Kuchen2 from "../assets/kuchen2.jpg";
import Kuchen3 from "../assets/kuchen3.jpg";
import Kuchen4 from "../assets/kuchen4.jpg";
import Cafe1 from "../assets/cafe1.jpg";
import Cafe2 from "../assets/cafe2.jpg";
import Cafe3 from "../assets/cafe3.jpg";
import Cafe4 from "../assets/cafe4.jpg";
import Torte1 from "../assets/torte1.jpg";
import Torte2 from "../assets/torte2.jpg";
import Torte3 from "../assets/torte3.jpg";
import Torte4 from "../assets/torte4.jpg";
import Torte5 from "../assets/torte5.jpg";
import Torte6 from "../assets/torte6.jpg";
import Snack1 from "../assets/snack1.jpg";
import Snack2 from "../assets/snack2.jpg";
import Hundeeis from "../assets/hundeeis.png";
import HundeeisBanana from "../assets/hundeeisBanana.png";
import HundeeisLeberwurst from "../assets/hundeeisLeberwurst.png";
import Hund from "../assets/hund.png";
import Favicon from "../assets/favicon.svg";

import Eisdeko from "../assets/eisdeko.png";
// import Eiscafe2 from "../assets/eiscafe2.jpg";
import { menuItems, socialMedia } from "../components/menues/config";
import { RxHamburgerMenu } from "react-icons/rx";
import { BsTelephoneFill } from "react-icons/bs";

import { Modal } from "../components/modal";

export default function Home() {
    const [showModal, setShowModal] = useState(true);

    const slider1Img = [Eiscafe1];
    const eisImg = [Eis1, Eis2, Eis3, Eis4];
    const kuchen = [Kuchen1, Kuchen2, Kuchen3, Kuchen4];
    const cafe = [Cafe1, Cafe2, Cafe3, Cafe4];
    const snacks = ["0", Snack1, Snack2, "1"];
    const torten = [Torte1, Torte2, Torte3, Torte4, Torte5, Torte6];
    const milcheis = [
        "VANILLE",
        "SCHOKOLADE",
        "COOKIES",
        "SAHNE-KIRSCH",
        "JOGHURT",
        "GERÖSTETE MANDEL",
        "KINDER COUNTRY",
        "CHOCO PRETZEL",
        "KOKOSNUSS",
        "JOGHURETTE",
        "MOKKA",
        "MALAGA",
        "PISTAZIE",
        "STRACCIATELLA*",
        "PFEFFERMINZ",
        "NUTELLA",
        "QUARK-ERDBEER-RHABARBER",
        "PAW PATROL",
        "MON CHERI",
        "HASELNUSS",
        "OMA'S STREUSELKUCHEN",
        "MR. NICO / SALTY PEANUT (ERDNUSS)",
        "SAUERKIRSCH-JOGHURT",
        "JOGHURETTE*",
        "MOZART*",
        "PINO PINGUIN SCHOKOLADE",
    ];
    const fruchteis = [
        "ERDBEER",
        "HIMBEER",
        "ZITRONE",
        "BANANE",
        "GRANATAPFEL",
        "PFIRSICH-MANGO",
        "DRAGON SUMMER ICE",
        "BLUTORANGE",
        "LIMONCELLO E BASILICO",
        "HEIDELBEERE",
        "TROPICAL FRUIT",
        "DUNKLE SCHOKOLADE",
    ];

    useEffect(() => {
        console.log(slider1Img);
        // Select all anchor links with a hash in the href attribute
        const anchorLinks = document.querySelectorAll('a[href^="#"]');

        // Add a click event listener to each anchor link
        anchorLinks.forEach((link) => {
            console.log(link);
            link.addEventListener("click", (event) => {
                event.preventDefault();

                // Get the target element's ID from the href attribute
                const targetId = link.getAttribute("href").substring(1);

                // Get the target element
                const targetElement = document.getElementById(targetId);

                // Calculate the offset based on the desired margin
                const offset = 50; // Adjust this value as needed

                // Scroll to the target element with an offset
                window.scrollTo({
                    top: targetElement.offsetTop - offset,
                    behavior: "smooth",
                });
            });
        });
    }, []);

    return (
        <MainContainer width="max-w-[100%]">
            <Head>
                <title>Eiscafe Altstadt</title>
                <meta
                    name="description"
                    content="Unser Eiscafé im Herzen der malerischen Dreieichenhainer Altstadt ist eines der ältesten Eiscafés im ganzen Gebiet. 2019 ist das Eiscafé bereits 50 Jahre am Ort."
                />
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <link rel="icon" href={Favicon.src} />
                <meta property="og:title" content="Eiscafe Altstadt" />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://www.eiscafealtstadt.de" />
                {/* <meta
                    property="og:image"
                    content={dataHome.seo.advancedSEO.ogImage ? urlFor(dataHome.seo.advancedSEO.ogImage) : null}
                /> */}
                <meta
                    property="og:description"
                    content="Unser Eiscafé im Herzen der malerischen Dreieichenhainer Altstadt ist eines der ältesten Eiscafés im ganzen Gebiet. 2019 ist das Eiscafé bereits 50 Jahre am Ort."
                />
                <meta property="og:site_name" content="Eiscafe Altstadt Dreieich" />
                <meta property="og:locale" content="de_DE" />
            </Head>
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

            {showModal && (
                <Modal
                    onClick={() => {
                        console.log("TEST");
                        setShowModal(false);
                    }}
                >
                    <h2 className="text-primaryColor-400 mb-8 text-3xl lg:text-5xl xl:text-6xl leading-tight tracking-wide font-pantonblack">
                        Vielen Dank für Ihre Treue in 2023 !
                    </h2>
                    <p className="font-pantonsemibold lg:text-base xl:text-xl text-secondaryColor-700 tracking-wide mb-6">
                        Wir machen eine kleine Pause vom{" "}
                        <span className="font-pantonbold text-primaryColor-500"> 18. Dezember bis Februar.</span>
                    </p>
                    <p className="font-pantonsemibold lg:text-base xl:text-xl text-secondaryColor-700 tracking-wide mb-6">
                        Wir wünschen Ihnen Frohe Weihnachten und einen guten Start ins neue Jahr.
                        <br /> Wir hoffen wir sehen uns in 2024 alle gesund wieder !{" "}
                    </p>
                    <p className="font-pantonsemibold lg:text-base xl:text-xl text-secondaryColor-700 tracking-wide mb-6">
                        Ihr Eiscafé Altstadt Team{" "}
                    </p>
                </Modal>
            )}

            <div className="w-full col-span-12 relative">
                <Hero fullHeight={true} colspan="col-span-12"></Hero>
                <div className="absolute hidden lg:block h-full bg-primaryColor-400 w-2/4 top-0 z-[-1]"></div>
                <div className="absolute hidden lg:block h-full bg-secondaryColor-400 w-2/4 right-0 top-0 z-[-1]"></div>
            </div>

            <div className="w-full col-span-12 relative h-full overflow-hidden" id="cafe">
                <div className="container mx-auto grid grid-cols-12 h-full  xl:h-[60rem]">
                    <div className="col-span-12 lg:col-span-5 pt-24 px-8 lg:px-0">
                        <h2 className="text-primaryColor-400 mb-8 text-2xl lg:text-4xl xl:text-4xl leading-tight tracking-wide font-pantonblack">
                            Herzlich Willkommen, Benvenuto im Eiscafé Altstadt Gélateria
                        </h2>
                        <p className="font-pantonsemibold lg:text-base xl:text-xl text-secondaryColor-700 tracking-wide mb-6">
                            Unser Eiscafé im Herzen der malerischen Dreieichenhainer Altstadt ist eines der ältesten
                            Eiscafés im ganzen Gebiet. 2019 ist das Eiscafé bereits 50 Jahre am Ort.
                        </p>
                        <p className="font-pantonsemibold lg:text-base xl:text-xl text-secondaryColor-700 tracking-wide mb-6">
                            Wir bieten Ihnen sowohl traditionelle Eis- und Kuchen-Klassiker, als auch neue Kreationen.
                            Wir bieten unseren Kunden ein einzigartiges kulinarisches Erlebnis, indem wir frische
                            Produkte verarbeiten und neu kombinieren.
                        </p>
                        <p className="font-pantonsemibold lg:text-base xl:text-xl text-secondaryColor-700 tracking-wide mb-8">
                            Authentische traditionsreiche italienische Rezepturen finden sich ebenso auf unserer Karte
                            wie moderne Variationen. Wir verwenden saisonale frische Produkte, hochwertige Schokolade
                            aus nachhaltigem Anbau und legen großen Wert auf höchste Qualität und frische Verarbeitung.
                            Unsere Eissorten, Kuchen, Torten und Snacks sind alle hausgemacht aus den besten Zutaten und
                            natürlichen Inhaltsstoffen, die unseren Gästen eine unvergleichliche Vielfalt garantieren.
                            Darunter finden sich auch gluten-freie Kuchen und vegane Eissorten.
                        </p>
                        <p className="font-pantonsemibold lg:text-base xl:text-xl text-secondaryColor-700 tracking-wide mb-8">
                            Mitten in der Altstadt, sind wir doch bequem erreichbar und viele Parkplätze stehen in ca.
                            hundert Meter Umfeld zur Verfügung. Genießen Sie unsere Eis- Kuchen- und
                            Kaffeespezialitäten. Neu in unserem Sortiment finden Sie auch für den kleinen Hunger leckere
                            Snacks.
                        </p>
                    </div>
                    <div className="col-span-12 order-first h-[18rem] lg:h-full lg:order-last lg:col-span-7 flex justify-center lg:block  relative">
                        <div className="kreis flex items-center lg:pl-24 xl:pl-36 absolute w-[100%] h-[23rem] justify-center lg:justify-start lg:w-[73rem] xl:w-[130rem] lg:h-[40rem] xl:h-[60rem] lg:left-[2.7rem]  xl:left-[4.8rem] lg:top-[-1rem] xl:top-[-2.25rem]  rounded-full bg-secondaryColor-400">
                            <Swipo data={slider1Img}></Swipo>
                        </div>
                        <div className="absolute w-full bg-secondaryColor-400 h-[13rem] block lg:hidden z-[-1]"></div>
                    </div>
                    {/* SECTION 2 */}
                </div>
                {/* <div className="absolute w-[37%] h-[40rem] right-0 bg-secondaryColor-400"></div> */}
            </div>
            <div className="w-full col-span-12 overflow-hidden pb-16 px-8 lg:px-0" id="eis">
                <div className="container mx-auto grid grid-cols-12 col-span-12 gap-2 lg:gap-8 relative ">
                    <div className="col-span-12 mt-8 lg:mt-16">
                        <h2 className="text-primaryColor-400 lg:mb-8 text-2xl lg:text-4xl xl:text-4xl leading-tight tracking-wide font-pantonblack">
                            UNSERE EISSORTEN
                        </h2>
                    </div>
                    {eisImg.map((e, i) => {
                        return (
                            <div key={`eis${i}`} className="col-span-6 lg:col-span-3">
                                <img src={e.src} alt="" />
                            </div>
                        );
                    })}
                    <div className="col-span-12 lg:col-span-6 mt-8 lg:mt-16 z-10">
                        <h2 className="text-secondaryColor-400 mb-2 text-2xl lg:text-4xl xl:text-4xl leading-tight tracking-wide font-pantonblack">
                            Milcheis
                        </h2>
                        <hr className="border-1 mb-6 border-secondaryColor-400" />
                        <div className="flex flex-col flex-wrap lg:max-h-[420px] xl:max-h-[520px]">
                            {milcheis.map((e, i) => {
                                return (
                                    <div
                                        key={`milch${i}`}
                                        className="eis text-base xl:text-lg text-secondaryColor-900 font-pantonsemibold mb-2"
                                    >
                                        {e}
                                    </div>
                                );
                            })}
                        </div>
                        <div className="font-pantonregular mt-4">*mit Fettglasur</div>
                    </div>
                    <div className="col-span-12 lg:col-span-6 mt-16 z-10">
                        <h2 className="text-primaryColor-400 mb-2 text-2xl lg:text-4xl xl:text-4xl leading-tight tracking-wide font-pantonblack">
                            Fruchteis / vegan
                        </h2>{" "}
                        <hr className="border-1 mb-6 border-primaryColor-400" />
                        <div className="flex flex-col flex-wrap xl:max-h-[5200px]">
                            {fruchteis.map((e, i) => {
                                return (
                                    <div
                                        key={`frucht${i}`}
                                        className="eis text-base xl:text-lg text-secondaryColor-900 font-pantonsemibold mb-2"
                                    >
                                        {e}
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                    <div className="absolute lg:w-[100%] lg:right-[-24rem] xl:right-[-36rem] top-[20%] right-[-50%] lg:top-[25%] xl:top-[28%]">
                        <img src={Eisdeko.src} alt="" />
                    </div>
                    {/* <div className="col-span-8 lg:col-span-4 relative mt-8">
                        <div className="absolute left-[150px] xl:left-[300px]">
                            <div className="kreis w-24 h-24 xl:h-32 xl:w-32 rounded-full bg-primaryColor-400 font-pantonblack text-3xl text-white flex justify-center items-center ">
                                NEU
                            </div>
                        </div>
                        <img src={Hundeeis.src} alt="" />
                    </div> */}
                    <div
                        className="col-span-12 lg:col-span-6 mt-16 lg:mt-36 relative flex flex-col justify-center relative"
                        id="hundeeis"
                    >
                        <h2 className="text-primaryColor-400 mb-2 text-4xl xl:text-4xl leading-tight tracking-wide font-pantonblack">
                            Hundeeis
                        </h2>
                        <p className="font-pantonbold mt-4 lg:text-base xl:text-xl text-secondaryColor-700 tracking-wide mb-8">
                            Entdecken Sie unsere einzigartigen Hunde-Eissorten im malerischen Altstadt-Eiscafé von
                            Dreieichenhain.
                        </p>
                        <p className="font-pantonsemibold mt-4 lg:text-base xl:text-xl text-secondaryColor-700 tracking-wide mb-8">
                            Wir haben spezielles Hunde-Eis entwickelt, inspiriert von unserer Liebe zu Hunden und
                            unserem eigenen Vierbeiner. Unsere köstlichen Kreationen enthalten frische Früchte wie
                            Bananen und Beeren sowie hochwertigen Joghurt und natürliche pflanzliche Milchalternativen
                            wie Kokosmilch. Jede Sorte ist nicht nur sicher für Hunde, sondern auch eine gesunde
                            Ergänzung zu ihrer normalen Ernährung.
                        </p>
                        <p className="font-pantonsemibold mt-4 lg:text-base xl:text-xl text-secondaryColor-700 tracking-wide mb-8">
                            Probieren Sie unsere ersten beiden Sorten <strong>Banana Wuff</strong> und
                            <strong>Leberwurst Traum.</strong> Besuchen Sie uns und lassen Sie Ihren Hund die wunderbare
                            Welt des Hunde-Eises entdecken.
                        </p>
                        <p className="font-pantonsemibold mt-4 lg:text-base xl:text-xl text-secondaryColor-700 tracking-wide mb-8">
                            Genießen Sie gemeinsam den Sommer mit unserem köstlichen und erfrischenden Hunde-Eis!
                        </p>
                    </div>
                    <div className="col-span-8 lg:col-span-12 relative lg:flex mt-8">
                        <img src={HundeeisBanana.src} alt="" />
                        <img src={HundeeisLeberwurst.src} alt="" />
                    </div>
                    <div className="absolute xl:flex justify-end hidden lg:w-[100%] lg:right-[-24rem] xl:right-[0rem] bottom-[20%] right-[-40%] lg:bottom-[12rem] xl:bottom-[-5%]">
                        <img src={Hund.src} alt="" />
                    </div>
                </div>
            </div>
            {/* SECTION 4 */}
            <div className="w-full col-span-12 relative h-full overflow-hidden py-12 lg:py-0" id="eistorten">
                <div className="container mx-auto grid grid-cols-12 h-full lg:h-[40rem] xl:h-[60rem]">
                    <div className="col-span-12 px-8 lg:px-0 lg:col-span-7 xl:col-span-6  relative">
                        <div className="kreis z-10 flex items-center lg:pl-24 xl:pl-36 lg:absolute justify-center lg:justify-start pt-8 lg:pt-0 lg:w-[73rem] xl:w-[130rem] lg:h-[40rem] xl:h-[60rem]  rounded-full bg-primaryColor-400">
                            <Swipo data={torten}></Swipo>
                        </div>
                    </div>
                    <div className="col-span-12 order-first lg:order-last px-8 lg:px-0 lg:col-span-4 xl:col-span-4 z-20 flex flex-col justify-center xl:pl-24">
                        <h2 className="text-primaryColor-50 uppercase mb-2 text-2xl lg:text-4xl xl:text-4xl leading-tight tracking-wide font-pantonblack">
                            Sags mit einer Eistorte!
                        </h2>{" "}
                        <h4 className="text-primaryColor-50 font-pantonsemibold text-xl tracking-wide">
                            Eine unserer Spezialitäten sind Eistorten !
                        </h4>
                        <div className="text mt-12">
                            <p className="font-pantonsemibold lg:text-lg xl:text-xl text-primaryColor-900 tracking-wide mb-8">
                                Wir gestalten ganz nach Ihren Wünschen Ihre Eistorte mit viel Liebe und großer Sorgfalt
                                zu Ihren ganz besonderen Anlässen !
                            </p>
                            <p className="font-pantonsemibold lg:text-lg xl:text-xl text-primaryColor-900 tracking-wide mb-8">
                                Rufen Sie uns einfach für ein unverbindliches Beratungsgespräch an:
                            </p>
                            <div className="flex space-x-6 font-pantonbold lg:text-lg xl:text-3xl text-primaryColor-900 tracking-wide">
                                <div className="left">
                                    <BsTelephoneFill></BsTelephoneFill>
                                </div>
                                <div className="right">06103 - 7339533</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="absolute w-full lg:w-[37%] h-full top-0 right-0 bg-primaryColor-400"></div>
            </div>
            {/* SECTION 4 */}
            <div className="col-span-12 container px-8 lg:px-0 mx-auto grid grid-cols-12 gap-2 lg:gap-8 relative text-center mt-8 lg:mt-16 mb-8 lg:mb-16">
                <div className="col-span-12">
                    <h2 className="text-secondaryColor-400 uppercase mb-6 text-2xl lg:text-4xl xl:text-4xl leading-tight tracking-wide font-pantonblack">
                        UNSERE KuchenSPezialitäten
                    </h2>{" "}
                    <p className="font-pantonsemibold xl:px-36 lg:text-lg xl:text-xl text-secondaryColor-900 tracking-wide mb-8">
                        Unsere hausgemachten täglich wechselnden Leckereien werden frisch von unserer hauseigenen
                        Bäckerin für Sie zubereitet und verführen dazu jeden Tag eine neue Spezialität zu probieren.
                        Klassiker wie unsere Schwarzwälder Kirschtorte, Käsekuchen… finden sich genauso in unserer
                        Kuchentheke, wie auch nach der jeweiligen Jahreszeit wechselnden Torten und Kuchenspezialitäten.
                        Angeboten werden auch glutenfreie Kuchen- und Tortenvarianten. Sprechen sie uns einfach an !
                    </p>
                </div>
                {kuchen.map((e, i) => {
                    return (
                        <div key={`kuchen${i}`} className="col-span-6 lg:col-span-3">
                            <img src={e.src} alt="" />
                        </div>
                    );
                })}
                <div className="col-span-12 font-pantonbold xl:px-36 lg:text-lg xl:text-3xl text-primaryColor-900 ">
                    und vieles mehr...
                </div>
            </div>
            {/* SECTION 4 */}
            <div className="col-span-12 container px-8 lg:px-0 mx-auto grid grid-cols-12 gap-2 lg:gap-8 relative text-center mt-8 lg:mt-16 mb-8 lg:mb-16">
                <div className="col-span-12">
                    <h2 className="text-primaryColor-400 uppercase mb-6 text-2xl lg:text-4xl xl:text-4xl leading-tight tracking-wide font-pantonblack">
                        UNSERE KAFFEESPEZIALIÄTEN
                    </h2>{" "}
                    <p className="font-pantonsemibold xl:px-36 lg:text-lg xl:text-xl text-primaryColor-900 tracking-wide mb-8">
                        Für unsere Kaffeespezialitäten verwenden wir Kaffeesorten die Exklusiv und eigens für unser Café
                        zusammengestellt und Geröstet werden. Damit erreichen wir einen unverwechselbares
                        Geschmackserlebnis das überzeugt.
                    </p>
                </div>
                {cafe.map((e, i) => {
                    return (
                        <div key={`cafe${i}`} className="col-span-6 lg:col-span-3">
                            <img src={e.src} alt="" />
                        </div>
                    );
                })}
                <div className="col-span-12 font-pantonbold xl:px-36 lg:text-lg xl:text-3xl text-primaryColor-900 ">
                    und vieles mehr...
                </div>
            </div>
            {/* SECTION 4 */}
            <div className="col-span-12 container px-8 lg:px-0 mx-auto grid grid-cols-12 gap-2 lg:gap-8 relative text-center mt-8 lg:mt-16 mb-8 lg:mb-16">
                <div className="col-span-12">
                    <h2 className="text-secondaryColor-400 uppercase mb-6 text-4xl xl:text-4xl leading-tight tracking-wide font-pantonblack">
                        UNSERE SNACKS
                    </h2>{" "}
                    <p className="font-pantonsemibold xl:px-36 lg:text-lg xl:text-xl text-secondaryColor-900 tracking-wide mb-8">
                        Entdecken Sie täglich frisch zubereitete, herzhafte Snacks bei uns. Von knusprigem Toast bis hin
                        zu aromatischen Baguettes und leckeren Brötchen bieten wir eine vielfältige Auswahl, um Ihren
                        Gaumen zu verwöhnen. Unsere hausgemachten Leckerbissen werden mit Sorgfalt ausgewählt und
                        garantieren Ihnen einen köstlichen Genuss.{" "}
                    </p>
                </div>
                {snacks.map((e, i) => {
                    return (
                        <div key={`snacks${i}`} className="col-span-6 lg:col-span-3 hidden lg:block">
                            <img src={e.src} alt="" />
                        </div>
                    );
                })}
                {snacks.slice(1, 3).map((e, i) => {
                    return (
                        <div key={`snackMobile${i}`} className="col-span-6 lg:col-span-3  lg:hidden">
                            <img src={e.src} alt="" />
                        </div>
                    );
                })}
                <div className="col-span-12 font-pantonbold xl:px-36 lg:text-lg xl:text-3xl text-primaryColor-900 ">
                    und vieles mehr...
                </div>
            </div>
            {/* SECTION 4 */}
            <div
                id="kontakt"
                className="col-span-12 container px-8 lg:px-0 mx-auto grid grid-cols-12 gap-2 lg:gap-8 relative text-center lg:text-left mt-8 lg:mt-16 mb-8 lg:mb-16"
            >
                <div className="col-span-12 lg:col-span-6">
                    <h2 className="text-primaryColor-400 mb-8 text-4xl xl:text-4xl leading-tight tracking-wide font-pantonblack">
                        Anreise & Parkmöglichkeiten
                    </h2>
                    <p className="font-pantonsemibold  lg:text-lg xl:text-xl text-secondaryColor-900 tracking-wide mb-8">
                        Im Herzen der romantischen Dreieichenhainer Altstadt finden Sie uns. Wir sind gut zu erreichen
                        und Sie finden reichlich Parkplätze nur wenige Meter entfernt:
                    </p>
                    <p className="font-pantonsemibold  lg:text-lg xl:text-xl text-secondaryColor-900 tracking-wide mb-8">
                        Kurzparkzonen und Kundenparkplätze innerhalb Dreieichenhains, ca. 100 Plätze. Kostenlos und
                        bequem parken Über 300 zentrale Parkplätze bei uns in der Altstadt Dreieichenhain Parkscheibe
                        nicht vergessen! Kostenloses Kurzparken für 1 Stunde direkt vor den Geschäften.{" "}
                    </p>
                    <p className="font-pantonsemibold  lg:text-lg xl:text-xl text-secondaryColor-900 tracking-wide mb-8">
                        4 große und zeitlich unbegrenzte Parkplätze in unmittelbarer Nähe, innerhalb und vor den Toren
                        unserer Altstadt.
                    </p>
                    <p className="font-pantonsemibold  lg:text-lg xl:text-xl text-secondaryColor-900 tracking-wide mb-8">
                        Parkscheibe nicht vergessen!
                    </p>
                    <p className="font-pantonbold   lg:text-lg xl:text-xl text-secondaryColor-500 tracking-wide mb-8">
                        Kostenlos und bequem parken
                    </p>
                    <p className="font-pantonsemibold  lg:text-lg xl:text-xl text-secondaryColor-900 tracking-wide mb-8">
                        Parkplatz „Altstadt“: vor dem Untertor (Kerbplatz), 60 Plätze Parkplatz „Bauamt“: gegenüber
                        Bushaltestelle am Weiher, 16 Plätze Parkplatz „Solmische-Weiher-Straße“: 26 Plätze Parkplatz
                        „Sportgelände“: beim TVD, max. 300m bis Obertor, 91 Plätze{" "}
                    </p>
                </div>
                <div className="col-span-12 lg:col-span-6">
                    <h2 className="text-primaryColor-400 mb-8 text-4xl xl:text-4xl leading-tight tracking-wide font-pantonblack">
                        Kontakt
                    </h2>
                    <div className="font-pantonsemibold  lg:text-lg xl:text-xl text-secondaryColor-900 tracking-wide mb-8">
                        <div className="font-pantonbold mb-4">Eis-Cafe Gelateria Altstadt</div>
                        Alte Bogengasse 37<br></br>
                        63303 Dreieich<br></br>
                        <br></br>
                        +49 6103 733 95 33
                    </div>
                    <div className="font-pantonsemibold  lg:text-lg xl:text-xl text-secondaryColor-900 tracking-wide mb-8">
                        <div className="font-pantonbold mb-4">Öffnungszeiten</div>
                        <div className="tel flex ">
                            <div className="">
                                <div
                                    className="noMargin grid grid-cols-2 gap-x-6"
                                    style={{ marginBottom: "0!important" }}
                                >
                                    <div>Von April bis August</div>
                                    <div className="font-pantonbold">9:30 – mind. 21:00</div>
                                    <div>September </div>
                                    <div className="font-pantonbold">10:00 – 19:00</div>
                                    <div>Oktober – März </div>
                                    <div className="font-pantonbold"> 10:00 – 19:00</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* SECTION 4 */}
            <div className="w-full col-span-12 bg-secondaryColor">
                <div className="col-span-12 container mx-auto flex justify-center  gap-12 relative mt-16 mb-16">
                    <Link className="hover:text-primaryColor-800 font-pantonsemibold" href="/impressum">
                        Impressum
                    </Link>{" "}
                    <Link className="hover:text-primaryColor-800 font-pantonsemibold" href="datenschutz">
                        Datenschutz
                    </Link>
                </div>
            </div>
        </MainContainer>
    );
}
