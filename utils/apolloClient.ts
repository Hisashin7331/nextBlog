import { ApolloClient, InMemoryCache } from '@apollo/client'

export default new ApolloClient({
    uri: process.env.CMS_URI,
    cache: new InMemoryCache(),
})
