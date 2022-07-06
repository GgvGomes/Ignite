import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
    uri: 'https://api-sa-east-1.graphcms.com/v2/cl59l5vyp5wda01ug18k28l1l/master',
    cache: new InMemoryCache()
})