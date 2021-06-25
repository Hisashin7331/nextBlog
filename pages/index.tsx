import Head from 'next/head'
import Image from 'next/image'
import client from 'utils/apolloClient'
import { GetStaticProps } from 'next'
import { gql } from '@apollo/client'
import { AppProps } from 'next/dist/next-server/lib/router/router'

const Home = ({ result }: AppProps) => {
    interface Post {
        id: string
        coverImage: {
            url: string
        }
    }

    return <div>jk</div>
}

export const getStaticProps: GetStaticProps = async context => {
    const { data } = await client.query({
        query: gql`
            query MyQuery {
                posts {
                    id
                    coverImage {
                        url
                    }
                }
            }
        `,
    })

    return {
        props: {
            result: data.posts,
        },
    }
}

export default Home
