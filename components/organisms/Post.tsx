import Heading from 'components/molecules/Heading'
import Article from 'components/molecules/Article'

interface PostProps {
    id: string
    image: string
    title: string
    content: string
    slug: string
    authorName: string
    authorImage: string
}

const Post: React.FC<PostProps> = ({
    id,
    image,
    title,
    content,
    slug,
    authorName,
    authorImage,
}) => {
    return (
        <div className='w-full h-64'>
            <Heading
                image={image}
                title={title}
                authorName={authorName}
                authorImage={authorImage}
            />
            <Article content={content} />
        </div>
    )
}

export default Post
