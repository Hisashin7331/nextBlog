import Image from 'next/image'
import Link from 'next/link'

interface TileProps {
    image: string
    title: string
    content: string
    slug: string
}

const Tile: React.FC<TileProps> = ({
    image,
    title,
    content,
    slug,
}) => {
    const cutContent: string = `${content.slice(0, 128)}...`

    return (
        <Link href={`/post/${slug}`}>
            <a className='p-4 lg:p-0 flex flex-col w-full h-auto font-sans'>
                <div className='relative w-full aspect-w-16 aspect-h-9'>
                    <Image
                        src={image}
                        alt='Article image'
                        layout='fill'
                    />
                </div>
                <div className='w-full box-border py-4 flex flex-col justify-between'>
                    <h1 className='font-bold text-xl'>{title}</h1>
                    <div
                        className='my-4 text-gray-500'
                        dangerouslySetInnerHTML={{
                            __html: cutContent,
                        }}
                    />
                </div>
            </a>
        </Link>
    )
}

export default Tile
