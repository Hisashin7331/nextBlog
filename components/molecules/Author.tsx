import Link from 'next/link'
import Picture from 'components/atoms/Picture'
import Details from 'components/atoms/Details'

interface AuthorsProps {
    id: string
    name: string
    title: string
    picture: string
}

const Author: React.FC<AuthorsProps> = ({
    id,
    name,
    title,
    picture,
}) => {
    return (
        <Link href={`/authors/${id}`}>
            <a className='h-24 w-11/12 flex'>
                <Picture picture={picture} name={name} />
                <Details name={name} title={title} />
            </a>
        </Link>
    )
}

export default Author
