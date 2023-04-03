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
    description: "A finished residential basement in the Chicagoland area that was originally unfinished completed by Colibri in 2022.",
    image: image1,
  },
  {
    name: "Bathroom Renovation",
    description: "A renovated residential bathroom in the Chicagoland area by Colibri in 2022.",
    image: image2,
  },
  {
    
    name: "Painting",
    description:
      "A living room in the Chicagoland area plastered and painted by Colibri in 2023.",
    image: image4,
  },
  {
    name: "Kitchen Renovation",
    description:
      "A gut kitchen renovation in the Chicagoland area completed by Colibri in 2021.",
    image: image3,
  },
  {
    name: "Flooring",
    description: "Laminate flooring installed by Colibri in 2022",
    image: image5,
  },
  {
    name: "Light Fixture Installation",
    description:
      "Colibri installed the light fixtures in this home in 2022, as well as installed the floors and painted the walls.",
    image: image6,
  },
];

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}

const OurClasses = ({ setSelectedPage }: Props) => {
  return (

  <section id="projects" className="w-full bg-secondary-500 py-40 md:py-20">
    <motion.div
     className="relative"
     onViewportEnter={() => setSelectedPage(SelectedPage.OurClasses)}
    >
      <motion.div
       className="mx-auto w-5/6 before:-top-20 before:-left-20 before:z-[-1] sm:before:content-renovationtext md:before:content-renovationtext lg:before:content-renovationtext"
       initial="hidden"
       whileInView="visible"
       viewport={{ once: true, amount: 0.5 }}
       transition={{ duration: 0.5 }}
       variants={{
       hidden: { opacity:0, x:-90},
       visible: { opacity: 1, x: 0},
       }}
      >
        
        <HText>FEATURED PROJECTS</HText>
        <p className="mt-8 text-[20px] md:text-[20px] font-semibold lg:text-[25px] lg:mt-[40px]">
        We strive to exceed our clients’ expectations by providing superior service and quality workmanship.        </p>
        
      </motion.div>

      {/* Side Scroll Here */}
      <motion.div 
       className="mt-10 md:mt-10 lg:mt-[80px] h-[353px] w-full overflow-x-auto overflow-y-hidden"
       initial="hidden"
       whileInView="visible"
       viewport={{ once: true, amount: 0.5 }}
       transition={{ delay: 0.75, duration: .5 }}
       variants={{
         hidden: { opacity: 0, x: -90 },
         visible: { opacity: 1, x: 0 },
       }}
      >
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
      </motion.div>
      <p className="md:hidden lg:hidden mt-12 text-center font-semibold sm:text-[16px]">Swipe for more → </p>
      
    </motion.div>
  </section>  
)
}

export default OurClasses