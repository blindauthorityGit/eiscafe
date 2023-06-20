import Head from "next/head";
import { useEffect } from "react";
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

import Eisdeko from "../assets/eisdeko.png";
// import Eiscafe2 from "../assets/eiscafe2.jpg";
import { menuItems, socialMedia } from "../components/menues/config";
import { RxHamburgerMenu } from "react-icons/rx";
import { BsTelephoneFill } from "react-icons/bs";

export default function Home() {
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
        "JOGHURETTE#",
        "MOZART#",
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
    }, []);

    return (
        <MainContainer width="max-w-[100%]">
            <Head>
                <title>Site title</title>
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
            <div className="w-full col-span-12 relative">
                <Hero fullHeight={true} colspan="col-span-12"></Hero>
                <div className="absolute h-full bg-primaryColor-400 w-2/4 top-0 z-[-1]"></div>
                <div className="absolute h-full bg-secondaryColor-400 w-2/4 right-0 top-0 z-[-1]"></div>
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
                            <div className="col-span-6 lg:col-span-3">
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
                                    <div className="eis text-base xl:text-lg text-secondaryColor-900 font-pantonsemibold mb-2">
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
                                    <div className="eis text-base xl:text-lg text-secondaryColor-900 font-pantonsemibold mb-2">
                                        {e}
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                    <div className="absolute lg:w-[100%] lg:right-[-24rem] xl:right-[-36rem] bottom-[20%] right-[-50%] lg:bottom-[12rem] xl:bottom-[16rem]">
                        <img src={Eisdeko.src} alt="" />
                    </div>
                    <div className="col-span-8 lg:col-span-4 relative mt-8">
                        <div className="absolute left-[200px] xl:left-[300px]">
                            <div className="kreis w-24 h-24 xl:h-32 xl:w-32 rounded-full bg-primaryColor-400 font-pantonblack text-3xl text-white flex justify-center items-center ">
                                NEU
                            </div>
                        </div>
                        <img src={Hundeeis.src} alt="" />
                    </div>
                    <div className="col-span-12 lg:col-span-8 relative flex flex-col justify-center" id="hundeeis">
                        <h2 className="text-primaryColor-400 mb-2 text-4xl xl:text-4xl leading-tight tracking-wide font-pantonblack">
                            Hundeeis
                        </h2>
                        <p className="font-pantonsemibold lg:text-base xl:text-xl text-secondaryColor-700 tracking-wide mb-8">
                            Verwöhne deinen besten Freund mit dem coolsten Genuss! <br />
                            <br />
                            Jetzt erhältlich: <br />
                            Hundeeis, das ultimative Leckerchen für heiße Pfoten
                        </p>
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
                        <div className="col-span-6 lg:col-span-3">
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
                        <div className="col-span-6 lg:col-span-3">
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
                        <div className="col-span-6 lg:col-span-3 hidden lg:block">
                            <img src={e.src} alt="" />
                        </div>
                    );
                })}
                {snacks.slice(1, 3).map((e, i) => {
                    return (
                        <div className="col-span-6 lg:col-span-3  lg:hidden">
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
                <div className="col-span-12 container mx-auto grid grid-cols-12  gap-12 relative mt-16 mb-16">
                    <Link className="hover:text-red-500 font-semibold" href="/impressum">
                        Impressum
                    </Link>{" "}
                    <Link className="hover:text-red-500 font-semibold" href="datenschutz">
                        Datenschutz
                    </Link>
                </div>
            </div>
        </MainContainer>
    );
}
