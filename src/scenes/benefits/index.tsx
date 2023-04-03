import React from 'react'
import { BenefitType, SelectedPage } from '../../shared/types';
import { HomeModernIcon, BuildingOfficeIcon, WrenchIcon } from "@heroicons/react/24/solid";
import { motion } from 'framer-motion';
import HText from '../../shared/HText';
import Benefit from './Benefit';
import ActionButton from '../../shared/ActionButton';
import BenefitsPageGraphic from '../../assets/BenefitsPageGraphic.png';

// Telling typescript that this is an array with a BenefitType of Object. Always make sure your objects are type'd
const benefits: Array<BenefitType> = [
    {
        icon: <HomeModernIcon className='h-6 w-6 text-white' />,
        title: "Remodeling",
        description: "Kitchen/Bathroom Remodels, Room Additions, Basement Finishing, etc."
    },
    {
        icon: <BuildingOfficeIcon className='h-6 w-6 text-white' />,
        title: "Renovations",
        description: "Interior/Exterior Renovations, Structural Repairs, etc."
    },
    {
        icon: <WrenchIcon className='h-6 w-6 text-white' />,
        title: "Repairs",
        description: "Plumbing Repairs, Electrical Repairs, HVAC Repairs, etc."
    },
]

const container = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.2}
    }
}

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}

const Benefits = ({ setSelectedPage }: Props) => {
  return (
    <section
     id='benefits'
     className='mx-auto min-h-full w-5/6 py-20'
    >
        <motion.div 
         onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}
        >
            {/* HEADER HERE */}
            <motion.div
             className='md:my-5 md:w-3/5 lg:w-4/5'
             initial="hidden"
             whileInView="visible"
             viewport={{ once: true, amount: 0.5 }}
             transition={{ duration: .5 }}
             variants={{
               hidden: { opacity: 0, x: -90 },
               visible: { opacity: 1, x: 0 },
             }}
            >
                <HText>THE BENEFTIS OF HIRING {" "}<span className='text-[#FCA311]'>COLIBRI</span></HText>
                <p className="my-5 md:text-[20px] lg:text-[25px] lg:mt-[80px]">
                Colibri has been in the Construction Industry for over 20 years and has managed hundreds of successful home renovation and repair projects. We specialize in residential and commercial construction projects, including remodeling, additions, renovations, and repairs.
                </p>
                <p className="my-5 md:text-[20px] lg:text-[25px]">We are committed to providing quality workmanship and customer service to our clients,  and our team of experienced professionals will ensure that all projects are completed on time and within budget. We will strive to exceed our clients’ expectations by providing superior service and quality workmanship.</p>
                
            </motion.div>

            <motion.div
             className='flex flex-wrap items-center gap-10 md:gap-14 lg:gap-20 mt-16 mb-16'
             initial="hidden"
             whileInView="visible"
             viewport={{ once: true, amount: 0.5 }}
             transition={{ delay: 0.50, duration: .5 }}
             variants={{
               hidden: { opacity: 0, x: -90 },
               visible: { opacity: 1, x: 0 },
             }}
            >
                <h4 className='md:mb-14 md:mt-14 xs:text-[40px] text-[30px] xs:leading-[53px] leading-[43px] text-[#14213D] lg:text-[35px]font-semibold'>500{""}<span className='text-[#FCA311]'>+</span></h4>
                <p className='md:mb-14 md:mt-14 xs:text-[20px] text-[20px] xs:leading-[26px] leading-[21px] text-[#14213D] lg:text-[25px] uppercase font-semibold'>Completed Projects</p>
                <h4 className='md:mb-14 md:mt-14 xs:text-[40px] text-[30px] xs:leading-[53px] leading-[43px] text-[#14213D] lg:text-[35px] font-semibold'>20{""}<span className='text-[#FCA311]'>+</span></h4>
                <p className='md:mb-14 md:mt-14 xs:text-[20px] text-[20px] xs:leading-[26px] leading-[21px] text-[#14213D] lg:text-[25px] font-semibold uppercase'>Years of Experience</p>
                <h4 className='md:mb-14 md:mt-14 xs:text-[40px] text-[30px] xs:leading-[53px] leading-[43px] text-[#14213D] lg:text-[35px] font-semibold'>200{""}<span className='text-[#FCA311]'>+</span></h4>
                <p className='md:mb-14 md:mt-14 xs:text-[20px] text-[20px] xs:leading-[26px] leading-[21px] text-[#14213D] lg:text-[25px] uppercase font-semibold '>Trusted Customers</p>
            </motion.div>

            {/* BENEFITS HERE */}
            <motion.div 
             className='mt-5 items-center justify-between gap-8 md:flex'
             initial="hidden"
             whileInView="visible"
             viewport={{  once: true, amount: .5 }}
             transition={{ delay: 0.5, duration: .5 }}
             variants={container}             
            >
                {benefits.map((benefit: BenefitType) => (
                    <Benefit 
                     key={benefit.title}
                     icon={benefit.icon}
                     title={benefit.title}
                     description={benefit.description}
                     setSelectedPage={setSelectedPage}
                    />
                ))}
            </motion.div>

            {/* BENEFITS GRAPHICS AND DESCRIPTION HERE */}
            <motion.div 
             className='mt-16 items-center justify-between gap-20 md:mt-28 md:flex'
             initial="visible"
             whileInView="visible"
             viewport={{ once: true, amount: 0.5 }}
             transition={{ duration: 0.5 }}
             variants={{
              hidden: { opacity: 0, x: 90 },
              visible: { opacity: 1, x: 0 },
            }}
            >

                {/* GRAPHIC HERE */}
                <img className="mx-auto" src={BenefitsPageGraphic} alt="benefits-page-graphic" />

                {/* DESCRIPTION HERE */}
                <div className='mb-[120px] md:mb-[60px] lg:mb-16'>
                    {/* TITLE HERE */}
                    <div className='relative'>
                        <div className='mt-[120px] md:mt-[60px] lg-mt-[80px] lg:mb-[80px]'>
                            <motion.div
                             className='md:my-5 md:w-3/5'
                             initial="hidden"
                             whileInView="visible"
                             viewport={{ once: true, amount: 0.5 }}
                             transition={{ delay: 0.5, duration: 0.5 }}
                             variants={{
                               hidden: { opacity: 0, x: 90 },
                               visible: { opacity: 1, x: 0 },
                             }}
                            >
                                <HText>COLIBRI'S{" "}
                                <span className='text-[#FCA311]'> TESTIMONIALS</span>
                                </HText>
                            </motion.div>
                        </div>
                    </div>

                    {/* DESCRIPTION PT2 HERE */}
                    <motion.div
                        className=''
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ delay: 0.5, duration: .5 }}
                        variants={{
                        hidden: { opacity: 0, x: 90 },
                        visible: { opacity: 1, x: 0 },
                        }}
                    >
                        
                        <blockquote className="text-xl italic font-semibold text-[#14213d] dark:text-[#14213D]">
                            <svg aria-hidden="true" className="mt-10 w-10 h-10 text-[#14213D] dark:text-[#14213D" viewBox="0 0 24 27" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" fill="currentColor"/></svg>
                            <p className=''>"It was a best decision to use Colibri construction services for my recent kitchen remodeling. Carlos is a true expert and ensured I received quality items, and great designs."</p>
                            <div className='flex items-center mt-5'>
                                <img className="h-10 w-10 rounded-full" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="headshot"></img>
                                <p className='ml-5'>Ruth Tolentino{""}</p>
                                <p className='ml-5 text-[#fca311]'>2020</p>
                            </div>
                        </blockquote>

                        <blockquote className="text-xl italic font-semibold text-[#14213d] dark:text-[#14213D]">
                            <svg aria-hidden="true" className="mt-10 w-10 h-10 text-[#14213D] dark:text-[#14213D" viewBox="0 0 24 27" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" fill="currentColor"/></svg>
                            <p className=''>"From start to finish, Colibri exceeded all of my expectations and truly went above and beyond to ensure that my project was a success. The attention to detail and precision was very noticeable."</p>
                            <div className='flex items-center mt-5'>
                                <img className="h-10 w-10 rounded-full" src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="headshot"></img>
                                <p className='ml-5'>Santino Ross{""}</p>
                                <p className='ml-5 text-[#fca311]'>2021</p>
                            </div>
                        </blockquote>

                        <blockquote className="text-xl italic font-semibold text-[#14213d] dark:text-[#14213D]">
                            <svg aria-hidden="true" className="mt-10 w-10 h-10 text-[#14213D] dark:text-[#14213D" viewBox="0 0 24 27" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" fill="currentColor"/></svg>
                            <p className=''>"My house was destroyed by fire, Colibri construction services came and completely restored my house. The restoration was breathtaking, the quality of their work was outstanding. It was a total gut rehab and they rehabbed everything."</p>
                            <div className='flex items-center mt-5'>
                                <img className="h-10 w-10 rounded-full" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80" alt="headshot"></img>
                                <p className='ml-5'>Edwin Reyes{""}</p>
                                <p className='ml-5 text-[#fca311]'>2022</p>
                            </div>
                        </blockquote>

                    </motion.div>
                </div>                
            </motion.div>
        </motion.div>
    </section>
  )
}

export default Benefits