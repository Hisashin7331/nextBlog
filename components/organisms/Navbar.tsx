import { useState } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/router'
import Hamburger from 'hamburger-react'
import Logo from 'components/atoms/Logo'

import back from 'public/assets/icons/arrow_back.svg'

const Navbar: React.FC = () => {
    const router = useRouter()
    const [isOpen, setOpen] = useState(false)
    return (
        <div className='relative w-full box-border p-5 text-white text-2xl font-sans font-bold w-full flex justify-between flex-row-reverse'>
            <Hamburger
                size={20}
                color='#a32cc4'
                toggled={isOpen}
                toggle={setOpen}
            />
            <span className='block absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-black md:hidden'>
                <Logo />
            </span>
            {router.pathname !== '/' && (
                <Image
                    className='cursor-pointer'
                    src={back}
                    alt='back'
                    onClick={router.back}
                />
            )}
        </div>
    )
}

export default Navbar
