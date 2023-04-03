import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { SelectedPage } from './types';

type Props = {
    children: React.ReactNode;
    setSelectedPage: (value: SelectedPage) => void;
}

const ActionButton = ({ children, setSelectedPage }: Props) => {
  return (
    <AnchorLink
     className='rounded-md bg-secondary-500 px-10 py-2 md:px-8 md:py-2 font-semibold text-[#14213D] hover:bg-[#FCA311] hover:text-white transition duration-500 '
     onClick={() => setSelectedPage(SelectedPage.ContactUs)}
     href={`#${SelectedPage.ContactUs}`}
    >
        {children}
    </AnchorLink>
  )
}

export default ActionButton