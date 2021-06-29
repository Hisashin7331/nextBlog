import CoverImage from 'components/atoms/CoverImage'
import Author from 'components/atoms/Author'
import Title from 'components/atoms/Title'

interface HeadingProps {
    image: string
    title: string
    authorName: string
    authorImage: string
}

const Heading: React.FC<HeadingProps> = ({
    image,
    title,
    authorName,
    authorImage,
}) => {
    return (
        <header className='relative w-full h-64'>
            <CoverImage src={image} />
            <div className='absolute w-full h-full z-20 p-4 box-border'>
                <Title title={title} />
                <Author name={authorName} picture={authorImage} />
            </div>
        </header>
    )
}

export default Heading
