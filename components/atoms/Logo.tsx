import Link from 'next/link'

const Logo: React.FC = () => {
    return (
        <Link href='/'>
            <a className='text-purple-500 text-7xl font-bold align-center my-8'>
                NEXT.BLOG
            </a>
        </Link>
    )
}

export default Logo
