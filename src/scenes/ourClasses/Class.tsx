
type Props = {
    name: string;
    description?: string;
    image: string;
}

const Class = ({ name, description, image}: Props) => {
  const overlayStyles = `p-5 absolute z-30 flex h-[380px] w-[450px] flex-col items-center justify-center whitespace-normal bg-[#E5E5E5] text-center text-[#14213D] opacity-0 transition duration-500 hover:opacity-90`
  return (
    <li className='relative mx-5 inline-block h-[380px] w-[450px]'>
        <div className={overlayStyles}>
            <p className="tex-2xl">{name}</p>
            <p className="mt-5">{description}</p>
        </div>
        <img src={image} alt={`${image}`} />
    </li>
  )
}

export default Class;