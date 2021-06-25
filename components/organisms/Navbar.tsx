import Logo from 'components/atoms/Logo'

const Navbar = () => {
    return (
        <div className='w-full bg-red-500 box-border p-5 text-white text-2xl font-sans font-bold w-full flex justify-between'>
            <Logo />
        </div>
    )
}

export default Navbar
