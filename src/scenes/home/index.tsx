import useMediaQuery from "../../hooks/useMediaQuery";
import ActionButton from "../../shared/ActionButton";
import HomePageText from "../../assets/HomePageText.png";
import HomePageGraphic from "../../assets/HomePageGraphic.png";
import SponsorForbes from "../../assets/SponsorForbes.png";
import SponsorFortune from "../../assets/SponsorFortune.png";
import SponsorAG from "../../assets/SponsorAG.png";
import { SelectedPage } from '../../shared/types';
import AnchorLink from "react-anchor-link-smooth-scroll";
import { motion } from "framer-motion";


type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}

const Home = ({ setSelectedPage }: Props) => {
  const isAboveMediumScreens = useMediaQuery("(min-width:1060px)");

  return (
    <section
     id="home"
     className="gap-16 bg-[#E5E5E5] md:bg-benefitrenovation lg:bg-benefitremodel py-10 md:h-full md:w-full"
    >
        {/* Image and Main Header Here */}
        <motion.div 
         className="md:flex mx-auto w-5/6 items-center justify-center md:h-5/6"
         onViewportEnter={() => setSelectedPage(SelectedPage.Home)}
         initial="hidden"
         whileInView="visible"
         viewport={{ once: true, amount: 0.5 }}
         transition={{ duration: 0.5 }}
         variants={{
         hidden: { opacity:0, x:-50},
         visible: { opacity: 1, x: 0},
         }}
        >
            {/* Main Header Here */}
            <div className="z-10 mt-32 md:basis-3/5">
                {/* Headings Here */}
                <motion.div 
                 className="md:-mt-20"
                 initial="hidden"
                 whileInView="visible"
                 viewport={{ once: true, amount: 0.5 }}
                 transition={{ delay: 0.5, duration: 0.5 }}
                 variants={{
                    hidden: { opacity:0, x:-50},
                    visible: { opacity: 1, x: 0},
                 }}
                >
                    <div className="relative">
                        <div className="before:absolute before:-top-20 before:-left-20 before:z-[-1] md:-mb-5">
                            <img src={HomePageText} alt="home-page-text" />
                            <h1 className="text-[#FCA311] font-semibold text-3xl mt-5 ml-1 md:ml-0 md:mt-2 md:mb-10">Construction Services</h1>
                        </div>
                    </div>
                    <p className="mt-8 text-[15px] font-semibold">
                    Colibri is a full-service construction company located in Chicago, IL. We specialize in residential and commercial construction projects, including remodeling, additions, renovations, and repairs. We are committed to providing quality workmanship and customer service to our clients.
                    </p>
                </motion.div>

                {/* Action Buttons Here */}
                <motion.div 
                 className="mt-8 flex items-center gap-8 md:justify-start"
                 initial="hidden"
                 whileInView="visible"
                 viewport={{ once: true, amount: 0.5 }}
                 transition={{ delay: 1, duration: 0.5 }}
                 variants={{
                    hidden: { opacity:0, x:-50},
                    visible: { opacity: 1, x: 0},
                 }}
                 >
                    <ActionButton 
                     setSelectedPage={setSelectedPage}
                    > Request an Estimate 
                    </ActionButton>
                    
                </motion.div>
            </div>
            {/* Image Here */}
            <div className="flex basis-3/5 justify-center md:z-10 md:ml-40 md:mt-16 md:justify-items-end">
                <img src={HomePageGraphic} alt="home-page-graphic" />
            </div>
        </motion.div>

        {/* Sponsors Here */}
        {isAboveMediumScreens && (
            <div className="lg:mt-4 h-[158px] w-full bg-[#FFC132] py-10">
                <motion.div 
                 className="mx-auto w-5/6"
                 initial="hidden"
                 whileInView="visible"
                 viewport={{ once: true, amount: 0.5 }}
                 transition={{ delay: 1.3, duration: 0.5 }}
                 variants={{
                    hidden: { opacity:0, x:-50},
                    visible: { opacity: 1, x: 0},
                 }}
                >
                    <div className="flex w-3/5 items-center justify-between gap-8">
                        <img className="mt-5 md:mt-5" src={SponsorForbes} alt="sponsor-forbes" />
                        <img className="mt-5 md:mt-5" src={SponsorFortune} alt="sponsor-fortune" />
                        <img className="mt-5 md:mt-5" src={SponsorAG} alt="sponsor-ag" />
                    </div>
                </motion.div>
            </div>
        )}
    </section>
  )
}

export default Home