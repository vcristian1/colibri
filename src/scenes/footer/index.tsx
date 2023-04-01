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
                <h1 className="text-2xl">COLIBRI</h1>
                <p className="my-5">
                Colibri is committed to providing quality workmanship and customer service to our clients,  and our team of experienced professionals will ensure that all projects are completed on time and within budget.
                </p>
                <p>© Colibri All Rights Reserved.</p>
            </div>
            <div className="mt-16 basis-1/4 md:mt-0">
                <h4 className="font-bold">Links</h4>
                <AnchorLink
                    className="text-sm font-bold text-secondary-500 underline hover:text-[#FCA311]"
                    onClick={() => setSelectedPage(SelectedPage.ContactUs)}
                    href={`#${SelectedPage.Benefits}`}
                >
                    <p className="text-[16px] mt-2">Benefits</p>
                </AnchorLink>
                <AnchorLink
                    className="text-sm font-bold text-secondary-500 underline hover:text-[#FCA311]"
                    onClick={() => setSelectedPage(SelectedPage.ContactUs)}
                    href={`#${SelectedPage.OurClasses}`}
                >
                    <p className="text-[16px] mt-2">Our Classes</p>
                </AnchorLink>
                <AnchorLink
                    className="text-sm font-bold text-secondary-500 underline hover:text-[#FCA311]"
                    onClick={() => setSelectedPage(SelectedPage.ContactUs)}
                    href={`#${SelectedPage.ContactUs}`}
                >
                    <p className="text-[16px] mt-2">Learn More</p>
                </AnchorLink>
            </div>
            <div className="mt-16 basis-1/4 md:mt-0">
                <h4 className="font-bold">Contact Us</h4>
                <p className="my-5">customerservice@evogym.com</p>
                <p>+1 (333) 425 6825</p>
            </div>
        </div>
    </footer>
  )
}

export default Footer;