import client from '../../utils/apolloClient'
import { GetStaticProps } from 'next'
import { gql } from '@apollo/client'
import { AppProps } from 'next/dist/next-server/lib/router/router'
import Author from 'components/molecules/Author'

interface Author {
    id: string
    name: string
    title: string
    picture: {
        url: string
    }
}

const Authors: React.FC<AppProps> = ({ authors }) => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid-rows-auto items-center justify-items-center align-content-center my-4'>
            {authors.map((author: Author) => (
                <Author
                    key={author.id}
                    id={author.id}
                    name={author.name}
                    title={author.title}
                    picture={author.picture.url}
                />
            ))}
        </div>
    )
}

export const getStaticProps: GetStaticProps = async context => {
    const { data } = await client.query({
        query: gql`
            query GetAuthors {
                authors {
                    name
                    id
                    title
                    picture {
                        url
                    }
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
