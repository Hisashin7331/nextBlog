import Image from 'next/image'

interface CoverImageProps {
    src: string
}

const CoverImage: React.FC<CoverImageProps> = ({ src }) => {
    return (
        <>
            <span className='absolute w-full h-full bg-black z-10 opacity-75' />
            <Image
                src={src}
                alt='cover image'
                layout='fill'
                objectFit='cover'
            />
        </>
    )
}

export default CoverImage
