import { motion } from 'framer-motion';
import { SelectedPage } from '../../shared/types';
import { useForm } from 'react-hook-form';
import ContactUsPageGraphic from "../../assets/ContactUsPageGraphic.png";
import HText from '../../shared/HText';

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}

const ContactUs = ({ setSelectedPage }: Props) => {
  const inputStyles = `w-full rounded-lg bg-[#14213D] px-5 py-3 placeholder-white mt-5 text-white`

  const {
    register,
    trigger,
    formState: { errors }
  } = useForm();

  const onSubmit = async (e: any) => {
    const isValid = await trigger();
    if (!isValid) {
        e.preventDefault();
    }
  }

  return (
    <section id="contactus" className='mx-auto w-5/6 pt-24 pb-32'>
        <motion.div
         onViewportEnter={() => setSelectedPage(SelectedPage.ContactUs)}
        >
            {/* HEADER HERE */}
            <motion.div
             className="md:w-3/5"
             initial="hidden"
             whileInView="visible"
             viewport={{ once: true, amount: 0.5 }}
             transition={{ duration: 0.5 }}
             variants={{
                hidden: { opacity: 0, x: -90 },
                visible: { opacity: 1, x: 0 },
             }}
            >
                <HText>
                    SCHEDULE YOUR FREE<span className="text-[#FCA311]"> ESTIMATE</span>
                </HText>
                <p className="my-5 lg:text-[20px] lg:mt-[40px]">
                With over 20 years of experience in the construction industry, allow Colibri to manage and complete your project within your requested time frame and budget. Our team of experienced professionals will respond to your inquiry within one business day.
                </p>
            </motion.div>

            {/* FORM AND IMAGE HERE */}
            <div className="mt-10 justify-between gap-8 md:flex">
                <motion.div
                 className='mt-10 basis-3/5 md:mt-0 '
                 initial="hidden"
                 whileInView="visible"
                 viewport={{ once: true, amount: 0.5 }}
                 transition={{ duration: 0.5 }}
                 variants={{
                    hidden: { opacity: 0, x: -90 },
                    visible: { opacity: 1, x: 0 },
                 }}
                >
                    <form 
                     action="https://formsubmit.co/09821b6ccaa4f7a4347fa2a6712cb014"
                     target="_blank"
                     onSubmit={onSubmit}
                     method="POST"
                    >
                        <input className={inputStyles} type="text" placeholder='NAME' required {...register ("name", {
                            required: true, maxLength: 100,
                        })}/>
                        {errors.name && (
                            <p className="mt-1 text-primary-500">
                              {errors.name.type === "required" && "This field is required."}
                              {errors.name.type === "maxLength" && "Max Length is 100 characters."}
                            </p>
                        )}

                        <input className={inputStyles} type="text" placeholder='EMAIL' required {...register ("name", {
                            required: true, pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        })}/>
                        {errors.email && (
                            <p className="mt-1 text-primary-500">
                              {errors.email.type === "required" && "This field is required."}
                              {errors.email.type === "pattern" && "Invalid email address."}
                            </p>
                        )}

                        <input className={inputStyles} type="text" placeholder='PHONE NUMBER' required {...register ("name", {
                            required: true
                        })}/>
                        {errors.phone && (
                            <p className="mt-1 text-primary-500">
                              {errors.phone.type === "required" && "This field is required."}
                            </p>
                        )}
                        
                        <input className={inputStyles} type="date" placeholder='APPOINTMENT DATE REQUESTED' required {...register ("name", {
                            required: true
                        })}/>
                        {errors.apptDate && (
                            <p className="mt-1 text-primary-500">
                              {errors.apptDate.type === "required" && "This field is required."}
                            </p>
                        )}

                        <textarea
                            className={inputStyles}
                            placeholder="TELL US ABOUT YOUR PROJECT"
                            rows={4}
                            cols={50}
                            {...register("message", {
                            required: true,
                            maxLength: 2000,
                            })}
                        />
                        {errors.message && (
                            <p className="mt-1 text-primary-500">
                            {errors.message.type === "required" &&
                                "This field is required."}
                            {errors.message.type === "maxLength" &&
                                "Max length is 2000 char."}
                            </p>
                        )}

                        <button
                            type="submit"
                            className="text-[18px] mt-5 rounded-lg bg-secondary-500 hover:bg-[#FCA311] px-20 py-3 transition duration-500 hover:text-white hover:bg-primary lg:mt-[80px]"
                        >
                            SUBMIT
                        </button>                        
                    </form>
                </motion.div>

                <motion.div
                    className="relative mt-16 basis-2/5 md:mt-0"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ delay: 0.5, duration: .5 }}
                    variants={{
                    hidden: { opacity: 0, y: 90 },
                    visible: { opacity: 1, y: 0 },
                    }}
                >
                    <div className="w-full before:absolute before:-bottom-20 before:-right-10 before:z-[-1]">
                    <img
                        className="w-full"
                        alt="contact-us-page-graphic"
                        src={ContactUsPageGraphic}
                    />
                    </div>
                </motion.div>
            </div>
        </motion.div>
    </section>
  )
}

export default ContactUs