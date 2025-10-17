import bg1 from "./assets/images/bgimg1.jpg"
import bg2 from "./assets/images/bgimg2.jpg"
import logostesso from "./assets/images/logo-stesso.png"
import gallery1 from "./assets/images/cordino.png"
import gallery2 from "./assets/images/cover.png"
import gallery3 from "./assets/images/cubi-pouf.jpg"
import gallery4 from "./assets/images/De Nora Infografica Business v4_ENG.png"
import gallery5 from "./assets/images/DeNora_Infografica_H2-01.png"
import gallery6 from "./assets/images/e6689f83-43c1-4516-8b00-3c17e924f3af.jpg"
import gallery7 from "./assets/images/gadgets.png"
import gallery8 from "./assets/images/image copia 2.png"
import gallery9 from "./assets/images/image copia.png"
import gallery10 from "./assets/images/image-2 copia.png"
import gallery11 from "./assets/images/image-2.png"
import gallery12 from "./assets/images/image-3 copia 2.png"
import gallery14 from "./assets/images/web1.png"
import gallery15 from "./assets/images/image-4 copia.png"
import gallery16 from "./assets/images/image-4.png"
import gallery17 from "./assets/images/image-5 copia.png"
import gallery18 from "./assets/images/image-5.png"
import gallery19 from "./assets/images/image-6.png"
import gallery20 from "./assets/images/MM-studio.jpg"
import gallery21 from "./assets/images/Pareti-LB2.jpg"
import gallery22 from "./assets/images/PenPal-logo-def-01.jpg"
import gallery23 from "./assets/images/poster1.jpg"
import gallery24 from "./assets/images/poster3.png"
import gallery25 from "./assets/images/poster4.png"
import gallery26 from "./assets/images/proposta logo-01-2.jpg"
import gallery27 from "./assets/images/newimg(1).jpg"
import gallery28 from "./assets/images/web2.png"
import gallery29 from "./assets/images/web3.png"
import gallery30 from "./assets/images/newimg(4).jpg"
import gallery31 from "./assets/images/newimg(5).jpg"
import gallery32 from "./assets/images/newimg(6).jpg"
import gallery33 from "./assets/images/newimg(7).jpg"
import gallery34 from "./assets/images/newimg(8).png"
import gallery35 from "./assets/images/newimg(9).png"
import gallery36 from "./assets/images/newimg(10).png"

const logotext = logostesso;
const meta = {
    title: "Alexandra Higgins",
    description: "Gaphic Designer _ Creative Designs",
};

const introdata = {
    title: "Alexandra Higgins",
    animated: {
        first: "Design your dreams",
        second: "Make it real",
        third: "Design to inspire",
    },
    description: "My name is Alexandra Higgins. I'm a Graphic Designer and marketing content specialist based in Richmond, Virginia. I create digital designs for clients ranging from individuals to small businesses. I help my clients by creating clean, modern designs that help them stand out from the crowd.",
    your_img_url: [bg1, bg2]
};

const dataabout = {
    title: "A bit about my self",
    aboutme: `Creative and detail-oriented professional with a proven track record in designing impactful
visual content and implementing successful communication strategies. Highly adaptable and
results-driven, with strong problem-solving skills and the ability to perform under pressure.
Trilingual Spanish, Italian, and English) with over 5 years of experience in digital marketing and
graphic design. A collaborative team player with excellent interpersonal skills and a passion
for building meaningful connections.`,
};

const education = [{
    school: "Degree in Industrial Product Design - University, Politecnico di Milano",
    where: "Milan -Italy",
    date: "2016-2019"
},
{
    school: "Professional Certificate in Digital Marketing - Google Career Certificates",
    where: "Online",
    date: "2020"
},
{
    school: "Masters in digital Strategy - University: Politecnico di Milano",
    where: "Milan - Italy",
    date: "2020 - 2021"
},
{
    school: "Digital Video Editing Course (Premiere) - IED European Institute of Design",
    where: "Online",
    date: "2024"
},
{
    school: "Web Design Without Code Using Elementor & WordPress - Domestika",
    where: "Online",
    date: "2025"
},



]
const worktimeline = [{
    jobtitle: "Content Creator & Social Media Strategist - Hook S.R.L",
    where: "Milan, Italy",
    date: "2021 - 2023",
},
{
    jobtitle: "Graphic Designer And Social Media Specialist - Industrie De Nora",
    where: "Milan, Italy",
    date: "2023 - 2024",
},
{
    jobtitle: "Graphic Designer & Marketing Specialist - Ampa Events",
    where: "Henrico - Virginia, United States ",
    date: "May 2024 - Nov 2024",
},
{
    jobtitle: "Graphic Designer and Digital Marketing Specialist - Worthen Furniture",
    where: "Henrico - Virginia, United States ",
    date: "Nov 2024 - Current",
}
];
import { SiAdobeindesign } from "react-icons/si";
import { SiAdobeillustrator } from "react-icons/si";
import { SiAdobephotoshop } from "react-icons/si";
import { SiAdobepremierepro } from "react-icons/si";
import Autocad from "./assets/images/autocad.svg"
import KeyShot from "./assets/images/icons8-keyshot.svg"
// import { SiAutoCAD } from "react-icons/si";
import { SiAutodesk } from "react-icons/si"
import Office from "./assets/images/icons8-microsoft-office.svg"
import { FaElementor } from "react-icons/fa";
import { SiAdobeacrobatreader } from "react-icons/si";



const skills = [{
    name: "Adobe InDesign",
    icon: SiAdobeindesign,
},
{
    name: "Adobe Illustrator",
    icon: SiAdobeillustrator,
},
{
    name: "Adobe Photoshop",
    icon: SiAdobephotoshop,
},
{
    name: "Adobe Premiere Pro",
    icon: SiAdobepremierepro,
},
{
    name: "AutoDesk",
    icon: SiAutodesk,
},
{
    name: "KeyShot",
    icon: KeyShot,
},
{
    name: "AutoCad",
    icon: Autocad,
},
{
    name: "Microsft Office",
    icon: Office
},
{
    name: "Elementor",
    icon: FaElementor,
},
{
    name: "Adobe Acrobat",
    icon: SiAdobeacrobatreader,
},
];

const services = [
  {
    title: "Branding & Logo Design",
    description: "I create a unique and memorable visual identity for your brand. From a powerful logo to a cohesive color palette that will set you apart from the competition."
  },
  {
    title: "Web Portfolio",
    description: "I design and develop a professional and elegant web portfolio for you to showcase your best work and attract the clients you're looking for."
  },
  {
    title: "Website Design & Development",
    description: "I build modern, fast, and optimized websites for all devices. I handle the visual design   to ensure your online presence is flawless."
  },
  {
    title: "Brochure & Flyer Design",
    description: "I design attractive brochures and flyers that communicate your message clearly and directly, perfect for events, promotions, or presenting your business."
  },
  {
    title: "Social Media Marketing & Content",
    description: "I create visual and strategic content for your social media to help you increase your reach, engage with your audience, and turn followers into customers."
  },
  {
    title: "Graphic Content Creation",
    description: "I produce all types of graphic content your brand needs: from banners and ads to infographics and posts to make you stand out in the digital world."
  }
];

const dataportfolio = [{
    img: gallery1,

    group: "gadget"
},
{
    img: gallery2,

    group: "gadget"
},
{
    img: gallery3,

    group: "gadget"
},
{
    img: gallery4,

    group: "other"
},
{
    img: gallery5,

    group: "other"
},
{
    img: gallery6,

    group: "gadget"
},

{
    img: gallery7,

    group: "gadget"
},
{
    img: gallery8,

    group: "brochure"
},
{
    img: gallery9,

    group: "brochure"
},
{
    img: gallery10,

    group: "brochure"
},
{
    img: gallery11,

    group: "brochure"
},
{
    img: gallery12,

    group: "social-media"
},
{
    img: gallery14,

    group: "website-design"
},
{
    img: gallery15,

    group: "brochure"
},
{
    img: gallery16,

    group: "visual-content"
},
{
    img: gallery17,

    group: "visual-content"
},
{
    img: gallery18,

    group: "gadget"
},
{
    img: gallery19,

    group: "website-design"
},
{
    img: gallery20,

    group: "logotipe"
},
{
    img: gallery21,

    group: "visual-content"
},
{
    img: gallery22,

    group: "logotipe"
},
{
    img: gallery23,

    group: "visual-content"
},
{
    img: gallery24,

    group: "visual-content"
},
{
    img: gallery25,

    group: "visual-content"
},
{
    img: gallery26,

    group: "logotipe"
},
{
    img: gallery27,

    group: "visual-content"
},
{
    img: gallery28,

    group: "website-design"
},
{
    img: gallery29,

    group: "website-design"
},
{
    img: gallery30,

    group: "gadget"
},
{
    img: gallery31,

    group: "visual-content"
},
{
    img: gallery32,

    group: "visual-content"
},
{
    img: gallery33,

    group: "visual-content"
},
{
    img: gallery34,

    group: "logotipe"
},
{
    img: gallery35,

    group: "logotipe"
},
{
    img: gallery36,

    group: "logotipe"
}

];

const contactConfig = {
    YOUR_EMAIL: "alehiggins.design@gmail.com",
    YOUR_FONE: "+1 (804) 200-3948",
    description: "I'm available for freelance work. Connect with me via phone or email and let's talk.",
    // creat an emailjs.com account 
    // check out this tutorial https://www.emailjs.com/docs/examples/reactjs/
    YOUR_SERVICE_ID: "service_b79tdjq",
    YOUR_TEMPLATE_ID: "template_svy3yni",
    YOUR_USER_ID: "uKhW-e17BA_AaKEfr",
};

const socialprofils = {
    instagram: "https://www.instagram.com/guaramodesign/",
    linkedin: "https://www.linkedin.com/in/alexandra-higgins-26560ba2/",
};
export {
    meta,
    dataabout,
    dataportfolio,
    worktimeline,
    skills,
    services,
    introdata,
    contactConfig,
    socialprofils,
    logotext,
    education,
};