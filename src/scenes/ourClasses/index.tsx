import { ClassType, SelectedPage } from "../../shared/types";
import image1 from "../../assets/image1.png";
import image2 from "../../assets/image2.png";
import image3 from "../../assets/image3.png";
import image4 from "../../assets/image4.png";
import image5 from "../../assets/image5.png";
import image6 from "../../assets/image6.png";
import { motion } from "framer-motion";
import HText from "../../shared/HText";
import Class from "./Class";


const classes: Array<ClassType> = [
  {
    name: "Basement Renovation",
    description:
      "A completely finished residential basement that was originally unfinished.",
    image: image1,
  },
  {
    name: "Bathroom Renovation",
    image: image2,
  },
  {
    name: "Ab Core Classes",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    image: image3,
  },
  {
    name: "Adventure Classes",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    image: image4,
  },
  {
    name: "Fitness Classes",
    image: image5,
  },
  {
    name: "Training Classes",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    image: image6,
  },
];

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}

const OurClasses = ({ setSelectedPage }: Props) => {
  return (

  <section id="ourclasses" className="w-full bg-secondary-500 py-40">
    <motion.div
     onViewportEnter={() => setSelectedPage(SelectedPage.OurClasses)}
    >
      <motion.div
       className="mx-auto w-5/6"
       initial="hidden"
       whileInView="visible"
       viewport={{ once: true, amount: 0.5 }}
       transition={{ duration: 0.5 }}
       variants={{
       hidden: { opacity:0, x:-50},
       visible: { opacity: 1, x: 0},
       }}
      >
        <div>
          <HText>VIEW OUR COMPLETED PROJECTS</HText>
          <p className="py-5">
            Colibri has completed numerous residential and commercial construction projects for clients such as the Cultural Center of Chicago, Jessie Brown VA Hospital, Belmont Assembly of God, etc.
          </p>
        </div>
      </motion.div>

      {/* Side Scroll Here */}
      <div className="mt-10 h-[353px] w-full overflow-x-auto overflow-y-hidden">
        <ul className="w-[2800px] whitespace-nowrap">
          {classes.map((item: ClassType, index) => (
            <Class 
            key={`${item.name}-${index}`}
            name={item.name}
            description={item.description}
            image={item.image}
            />
          ))}
        </ul>
      </div>
    </motion.div>
  </section>  
)
}

export default OurClasses