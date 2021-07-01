import client from '../../utils/apolloClient'
import { GetStaticProps } from 'next'
import { gql } from '@apollo/client'
import { AppProps } from 'next/dist/next-server/lib/router/router'

interface AuthorsProps {
    id: string
    name: string
    title: string
    biography: string
}

const Authors: React.FC<AppProps> = ({ authors }) => {
    return <div></div>
}

export const getStaticProps: GetStaticProps = async context => {
    const { data } = await client.query({
        query: gql`
            query GetAuthors {
                authors {
                    biography
                    name
                    id
                    title
                }
            }
        `,
    })
    return {
        props: {
            authors: data?.authors,
        },
    }
}

export default Authors
