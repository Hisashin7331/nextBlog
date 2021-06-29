import client from 'utils/apolloClient'
import { GetStaticProps, GetStaticPaths } from 'next'
import { gql } from '@apollo/client'
import Post from 'components/organisms/Post'

interface PostObject {
    id: string
    coverImage: {
        url: string
    }
    title: string
    content: {
        html: string
    }
    slug: string
    author: {
        name: string
        picture: {
            url: string
        }
    }
}

interface PostProps {
    id: string
    image: string
    title: string
    content: string
    slug: string
    authorName: string
    authorImage: string
}

const Slug: React.FC<PostProps> = ({
    id,
    image,
    title,
    content,
    slug,
    authorImage,
    authorName,
}) => {
    return (
        <Post
            id={id}
            image={image}
            title={title}
            content={content}
            slug={slug}
            authorImage={authorImage}
            authorName={authorName}
        />
    )
}

export const getStaticPaths: GetStaticPaths = async () => {
    const {
        data: { posts },
    } = await client.query({
        query: gql`
            query GetPosts {
                posts {
                    id
                    slug
                }
            }
        `,
    })

    const paths = posts.map((post: PostObject) => ({
        params: {
            slug: post.slug,
        },
    }))

    return {
        paths,
        fallback: false,
    }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const {
        data: { posts },
    } = await client.query({
        query: gql`
            query GetPosts {
                posts(
                    where: { slug: "${params?.slug}" }, first: 1
                ) {
                    id
                    coverImage {
                        url
                    }
                    title
                    content {
                        html
                    }
                    slug
                    author {
                        name
                        picture {
                            url
                        }
                    }
                }
            }
        `,
    })

    return {
        props: {
            id: posts[0].id,
            image: posts[0].coverImage.url,
            title: posts[0].title,
            content: posts[0].content.html,
            slug: posts[0].slug,
            authorName: posts[0].author.name,
            authorImage: posts[0].author.picture.url,
        },
    }
}

export default Slug
