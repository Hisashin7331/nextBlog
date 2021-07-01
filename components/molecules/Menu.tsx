import Link from 'next/link'

interface MenuProps {
    isOpen: boolean
}

interface Hrefs {
    href: string
    text: string
}

const Menu: React.FC<MenuProps> = ({ isOpen }) => {
    const menuStyles: string = `text-black bg-white transition duration-700 z-40 flex flex-col justify-center items-center w-screen h-screen top-0 left-0 fixed transform ${
        !isOpen ? '-translate-y-full' : 'translate-y-0'
    }`

    const hrefs = [
        {
            href: '/',
            text: 'Home',
        },
        {
            href: '/search',
            text: 'Search',
        },
        {
            href: '/authors',
            text: 'Authors',
        },
    ]

    return (
        <div className={menuStyles}>
            {hrefs.map((item: Hrefs) => (
                <Link key={item.href} href={item.href}>
                    <a className='m-6 text-purple-500 text-4xl'>
                        {item.text}
                    </a>
                </Link>
            ))}
        </div>
    )
}

export default Menu
