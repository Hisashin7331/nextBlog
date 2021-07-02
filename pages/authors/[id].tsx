import { Fragment, useState } from 'react'
import { GetStaticProps, GetStaticPaths } from 'next'
import client from 'utils/apolloClient'
import { gql } from '@apollo/client'
import Author from 'components/molecules/Author'
import { AppProps } from 'next/dist/next-server/lib/router/router'
import Tile from 'components/molecules/Tile'
import { Waypoint } from 'react-waypoint'

interface AuthorObject extends AppProps {
    id: string
}

interface AuthorProps extends AuthorObject {
    name: string
    title: string
    biography: string
    picture: string
}

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

const AuthorPage: React.FC<AuthorProps> = ({
    id,
    name,
    title,
    biography,
    picture,
    posts,
}) => {
    const howMuchToLoad: number = 6
    const [limit, setLimit] = useState(5)

    return (
        <div>
            <div className='w-full flex flex-col lg:flex-row lg:justify-between'>
                <span className='my-4'>
                    <Author
                        id={id}
                        name={name}
                        title={title}
                        picture={picture}
                    />
                </span>
                <p className='border-box px-4'>{biography}</p>
            </div>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 md:gap-4'>
                {posts
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
                    ))}
            </div>
        </div>
    )
}

export const getStaticPaths: GetStaticPaths = async () => {
    const {
        data: { authors },
    } = await client.query({
        query: gql`
            query GetAuthor {
                authors {
                    id
                }
            }
        `,
    })

    const paths = authors.map((author: AuthorObject) => ({
        params: {
            id: author.id,
        },
    }))

    return {
        paths,
        fallback: false,
    }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const { data } = await client.query({
        query: gql`
            query GetAuthors {
                authors(where: { id: "${params?.id}"} first: 1) {
                    id
                    name
                    title
                    biography
                    picture {
                        url
                    }
                }
            }
        `,
    })

    const posts = await client.query({
        query: gql`
            query GetPosts {
                posts(where: {author: {id: "${params?.id}"}}) {
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
            id: data.authors[0].id,
            name: data.authors[0].name,
            title: data.authors[0].title,
            biography: data.authors[0].biography,
            picture: data.authors[0].picture.url,
            posts: posts.data.posts,
        },
    }
}

export default AuthorPage
