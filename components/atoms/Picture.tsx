import Image from 'next/image'

interface PictureProps {
    picture: string
    name: string
}

const Picture: React.FC<PictureProps> = ({ picture, name }) => {
    return (
        <div className='relative h-24 w-24'>
            <Image
                src={picture}
                alt={`${name}'s picture`}
                layout='fill'
            />
        </div>
    )
}

export default Picture
