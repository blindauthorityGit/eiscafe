import { FaFacebook, FaInstagram } from "react-icons/fa";

const menuItems = [
    {
        title: "Das Cafe",
        slug: "#cafe",
        subMenu: false,
        subMenuItems: [
            {
                title: "Winterakademie 2023",
                slug: "about",
            },
            {
                title: "Frühlingsakademie 2023",
                slug: "sammlungen",
            },
            {
                title: "Sommerakademie 2023",
                slug: "https://cdn.sanity.io/files/7all625u/dev/5a6f73b99aceb4c681ca63eb1b1ac1f447064ae7.pdf",
                external: true,
            },
            {
                title: "Herbstakademie 2023",
                slug: "blog",
            },
        ],
    },
    {
        title: "Unser eis",
        slug: "#eis",
        subMenu: false,
    },
    {
        title: "Hundeeis",
        slug: "#hundeeis",
        subMenu: false,
    },
    {
        title: "Eistorten",
        slug: "#eistorten",
        subMenu: false,
    },
    {
        title: "Kontakt",
        slug: "#kontakt",
        subMenu: false,
    },
];
const socialMedia = [
    {
        title: "Facebook",
        link: "https://www.facebook.com/eiscafegelateriaaltstadt",
        icon: <FaFacebook></FaFacebook>,
    },
    {
        title: "Instagram",
        link: "https://www.instagram.com/altstadt_eiscafe/",
        icon: <FaInstagram></FaInstagram>,
    },
];

export { menuItems, socialMedia };
