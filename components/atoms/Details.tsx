import Link from 'next/link'

interface DetailsProps {
    name: string
    title: string
}

const Details: React.FC<DetailsProps> = ({ name, title }) => {
    return (
        <div className='p-4'>
            <h1 className='font-bold text-xl'>{name}</h1>
            <h3 className='text-xs'>{title}</h3>
        </div>
    )
}

export default Details
