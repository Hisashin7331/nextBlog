import { Fragment, useState } from 'react'
import client from 'utils/apolloClient'
import { GetStaticProps } from 'next'
import { gql } from '@apollo/client'
import { AppProps } from 'next/dist/next-server/lib/router/router'
import { Waypoint } from 'react-waypoint'

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
    const howMuchToLoad: number = 6
    const [limit, setLimit] = useState(5)

    return (
        <div className='grid md:grid-cols-2 lg:grid-cols-3 md:gap-4'>
            {result
                .slice(0, limit)
                .map((post: Post, index: number) => (
                    <Fragment key={post.id}>
                        <Tile
                            image={post.coverImage.url}
                            title={post.title}
                            content={post.content.html}
                            slug={post.slug}
                        />
                        {index === limit - 1 && (
                            <Waypoint
                                onEnter={() => {
                                    setLimit(limit + howMuchToLoad)
                                    console.log(limit)
                                }}
                            />
                        )}
                    </Fragment>
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
