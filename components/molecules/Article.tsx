import React from 'react'
import parse from 'html-react-parser'

type ArticleProps = {
    content: string
}

const Article: React.FC<ArticleProps> = ({ content }) => {
    return (
        <article className='m-8 lg:mt-8 lg:m-0 article'>
            {parse(content)}
        </article>
    )
}

export default Article
