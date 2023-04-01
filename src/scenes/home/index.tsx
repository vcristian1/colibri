import useMediaQuery from "../../hooks/useMediaQuery";
import ActionButton from "../../shared/ActionButton";
import HomePageText from "../../assets/HomePageText.png";
import HomePageGraphic from "../../assets/HomePageGraphic.png";
import SponsorForbes from "../../assets/SponsorForbes.png";
import SponsorFortune from "../../assets/SponsorFortune.png";
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
     className="gap -16 bg-gray-20 py-10 md:h-full"
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
                 transition={{ duration: 0.5 }}
                 variants={{
                    hidden: { opacity:0, x:-50},
                    visible: { opacity: 1, x: 0},
                 }}
                >
                    <div className="relative">
                        <div className="before:absolute before:-top-20 before:-left-20 before:z-[-1] md:before:content-evolvetext">
                            <img src={HomePageText} alt="home-page-text" />
                        </div>
                    </div>
                    <p className="mt-8 text-sm">
                    Colibri is a full-service construction company located in Chicago, IL. We specialize in residential and commercial construction projects, including remodeling, additions, renovations, and repairs. We are committed to providing quality workmanship and customer service to our clients.
                    </p>
                </motion.div>

                {/* Action Buttons Here */}
                <motion.div 
                 className="mt-8 flex items-center gap-8 md:justify-start"
                 initial="hidden"
                 whileInView="visible"
                 viewport={{ once: true, amount: 0.5 }}
                 transition={{ delay: 0.2, duration: 0.5 }}
                 variants={{
                    hidden: { opacity:0, x:-50},
                    visible: { opacity: 1, x: 0},
                 }}
                 >
                    <ActionButton 
                     setSelectedPage={setSelectedPage}
                    > Request a Quote 
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
            <div className="h-[150px] w-full bg-[#FFC132] py-10">
                <div className="mx-auto w-5/6">
                    <div className="flex w-3/5 items-center justify-between gap-8">
                        <img src={SponsorForbes} alt="sponsor-forbes" />
                        <img src={SponsorFortune} alt="sponsor-fortune" />
                    </div>
                </div>
            </div>
        )}
    </section>
  )
}

export default Home