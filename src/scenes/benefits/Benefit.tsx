import { SelectedPage } from "../../shared/types";
import { motion } from "framer-motion";
import AnchorLink from "react-anchor-link-smooth-scroll";

const childVariant = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1 },
};

type Props = {
  icon: JSX.Element;
  title: string;
  description: string;
  setSelectedPage: (value: SelectedPage) => void;
};

const Benefit = ({ icon, title, description, setSelectedPage }: Props) => {
  return (
    <motion.div
      variants={childVariant}
      className={`mt-5 rounded-md border-2 border-[#14213D] px-5 py-16 text-center bg-secondary-500`}
    >
      <div className="mb-4 flex justify-center">
        <div className="rounded-full border-2 border-[#14213D] bg-[#14213D] p-4">
          {icon}
        </div>
      </div>

      <h4 className="font-bold">{title}</h4>
      <p className="my-3">{description}</p>
      <AnchorLink
        className="text-sm font-bold hover:text-[#FCA311] transition duration-500 underline text-secondary-500"
        onClick={() => setSelectedPage(SelectedPage.ContactUs)}
        href={`#${SelectedPage.ContactUs}`}
      >
        <p className="text-[#14213D] hover:text-white transition duration-500">Request a Quote</p>
      </AnchorLink>
    </motion.div>
  );
};

export default Benefit;