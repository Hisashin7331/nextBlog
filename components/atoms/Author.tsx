import Image from 'next/image'
import Link from 'next/link'

interface AuthorProps {
    name: string
    picture: string
}

const Author: React.FC<AuthorProps> = ({ name, picture }) => {
    return (
        <Link href='/'>
            <a className='absolute bottom-4 z-20 h-auto w-auto flex items-center '>
                <span className='relative w-8 h-8 rounded mr-4'>
                    <Image
                        src={picture}
                        alt={name}
                        layout='fill'
                        objectFit='fill'
                    />
                </span>
                <h3 className='text-white font-bold'>{name}</h3>
            </a>
        </Link>
    )
}

export default Author
