import { GetServerSideProps } from 'next'
import client from 'utils/apolloClient'
import { gql } from '@apollo/client'
import { AppProps } from 'next/dist/next-server/lib/router/router'
import { Fragment, useState } from 'react'
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

const Search: React.FC<AppProps> = ({ posts }) => {
    const howMuchToLoad: number = 6
    const [limit, setLimit] = useState(5)

    return (
        <div className='grid md:grid-cols-2 lg:grid-cols-3 md:gap-4'>
            {posts?.length > 0 ? (
                posts
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
                                    onEnter={() =>
                                        setLimit(
                                            limit + howMuchToLoad,
                                        )
                                    }
                                />
                            )}
                        </Fragment>
                    ))
            ) : (
                <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center'>
                    <h1 className='text-2xl text-purple-500 font-bold'>
                        No posts found 😓
                    </h1>
                </div>
            )}
        </div>
    )
}

export const getServerSideProps: GetServerSideProps =
    async context => {
        const { query } = context.query
        const { data } = await client.query({
            query: gql`
                query GetPosts {
                    posts(where: { _search: "${query}" }) {
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
                posts: data.posts,
            },
        }
    }

export default Search
