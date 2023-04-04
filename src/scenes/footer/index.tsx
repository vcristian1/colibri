import AnchorLink from "react-anchor-link-smooth-scroll";
import Logo from "../../assets/Logo.png";
import { SelectedPage } from "../../shared/types";

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}

const Footer = ({ setSelectedPage }: Props) => {
  return (
    <footer className="bg-[#14213D] py-16 text-white">
        <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
            <div className="mt-16 basis-1/2 md:mt-0">
                {/* <img src={Logo} alt="logo" /> */}
                <h1 className="text-2xl">COLIBRI CONSTRUCTION SERVICES</h1>
                <p className="my-5">
                <span className="text-[#fca311]">Colibri</span> is committed to providing quality workmanship and customer service to our clients,  and our team of experienced professionals will ensure that all projects are completed on time and within budget.
                </p>
                <p>©2023 Colibri All Rights Reserved.</p>
                <a target="_blank" rel="noreferrer" href="https://my-portfolio-beta-three-79.vercel.app/" className="text-[12px] hover:text-[#fca311] transition duration-500">Built by Cristian Carlos Vargas</a>
            </div>
            <div className="mt-16 basis-1/4 md:mt-0">
                <h4 className="font-bold">Links</h4>
                <AnchorLink
                    className="text-sm font-bold text-secondary-500 underline hover:text-[#FCA311] transition duration-500"
                    onClick={() => setSelectedPage(SelectedPage.ContactUs)}
                    href={`#${SelectedPage.Benefits}`}
                >
                    <p className="text-[16px] mt-2">Benefits</p>
                </AnchorLink>
                <AnchorLink
                    className="text-sm font-bold text-secondary-500 underline hover:text-[#FCA311] transition duration-500"
                    onClick={() => setSelectedPage(SelectedPage.ContactUs)}
                    href="#projects"
                >
                    <p className="text-[16px] mt-2">Projects</p>
                </AnchorLink>
                <AnchorLink
                    className="text-sm font-bold text-secondary-500 underline hover:text-[#FCA311] transition duration-500"
                    onClick={() => setSelectedPage(SelectedPage.ContactUs)}
                    href={`#${SelectedPage.ContactUs}`}
                >
                    <p className="text-[16px] mt-2">Learn More</p>
                </AnchorLink>
            </div>
            <div className="mt-16 basis-1/4 md:mt-0">
                <h4 className="font-bold">Contact Us</h4>
                <p className="my-5">customerservice@colibri.com</p>
                📞<a href="tel:773-706-5634" className="underline transition duration-500 hover:text-[#FCA311]">(773)-706-5634</a>
            </div>
        </div>
    </footer>
  )
}

export default Footer;