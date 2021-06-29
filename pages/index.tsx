import client from 'utils/apolloClient'
import { GetStaticProps } from 'next'
import { gql } from '@apollo/client'
import { AppProps } from 'next/dist/next-server/lib/router/router'

import Tile from 'components/molecules/Tile'

interface Post {
    id: string
    coverImage: {
        url: string
    }
    title: string
    content: {
        html: string
    }
    slug: string
}

const Home: React.FunctionComponent<AppProps> = ({ result }) => {
    return (
        <div className='grid grid-cols-3 gap-4'>
            {result.map((post: Post) => (
                <Tile
                    key={post.id}
                    image={post.coverImage.url}
                    title={post.title}
                    content={post.content.html}
                    slug={post.slug}
                />
            ))}
        </div>
    )
}

export const getStaticProps: GetStaticProps = async context => {
    const { data } = await client.query({
        query: gql`
            query GetPosts {
                posts {
                    id
                    coverImage {
                        url
                    }
                    title
                    content {
                        html
                    }
                    slug
                }
            }
        `,
    })

    return {
        props: {
            result: data?.posts,
        },
    }
}

export default Home
