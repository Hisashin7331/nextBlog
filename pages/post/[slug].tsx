import client from 'utils/apolloClient'
import { GetStaticProps, GetStaticPaths } from 'next'
import { gql } from '@apollo/client'
import Slug from '../../.history/pages/post/[slug]_20210629023509'

interface PostProps {
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

const Post: React.FC<PostProps> = ({ title }) => {
    return <div>{title}</div>
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

    const paths = posts.map((post: PostProps) => ({
        params: {
            id: post.id,
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
                    where: { slug: "${params?.slug}" }
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

    console.log(posts.coverImage)

    return {
        props: {
            id: posts?.id,
            image: posts?.coverImage.url,
            title: posts?.title,
            content: posts?.content.html,
            slug: posts?.slug,
            authorName: posts?.author.name,
            authorImage: posts?.author.picture.url,
        },
    }
}

export default Post
