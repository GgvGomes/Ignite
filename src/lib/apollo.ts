import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
    uri: "https://api-sa-east-1.graphcms.com/v2/cl59l5vyp5wda01ug18k28l1l/master",
    // uri: import.meta.env.VITE_API_URL,
    // headers: {
    //     'Authorization': `Bearer ${import.meta.env.VITE_API_URL}`
    // },
    headers: {
        'Authorization': `Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImdjbXMtbWFpbi1wcm9kdWN0aW9uIn0.eyJ2ZXJzaW9uIjozLCJpYXQiOjE2NTcyMTQ2NTQsImF1ZCI6WyJodHRwczovL2FwaS1zYS1lYXN0LTEuZ3JhcGhjbXMuY29tL3YyL2NsNTlsNXZ5cDV3ZGEwMXVnMThrMjhsMWwvbWFzdGVyIiwiaHR0cHM6Ly9tYW5hZ2VtZW50LW5leHQuZ3JhcGhjbXMuY29tIl0sImlzcyI6Imh0dHBzOi8vbWFuYWdlbWVudC5ncmFwaGNtcy5jb20vIiwic3ViIjoiMGJmYzYzMmYtYjRlZC00ZjcyLTkxN2EtMmYzNDBjYzVjODU0IiwianRpIjoiY2w1YmF0ZjZ0MDE4bjAxdWxoNDh6NWNpNyJ9.PQbhFFZKA-1m15mQaUFhxVhbK8gTMWyR5nHsLXWilUWhU1Q9vEEULq76UiLlfvzwTGWCIy0REFPk5hlY8sI_XuSfDYZp1-PMMuxSPF3v_cbGEcSDEYF9LphCQoQqYlR5aR1WbCCqWDf3zYybNdbjMpeTzdama2KFeDROnrOdpE85hXBfSOut5gJStx2Avyh0Cr0i7RYA-JIpWj8mI7QIFcP0T5s7_qLzFybjkvZHztuLRqVZ1xFvkmZl972__UQBWGGqbZ_YcBqMDvPzTrZHhQRV7emEgnBBVTAD6bSriFQbRwVZAQpaZlcZrs5frT_hHUS-MGnA9BaL0Z5_gSMVaa96ZsEZSUZcuaZUQ0R5IgoOAhFdEONSDhacUQOmn0omaNPtRGfEnjnLn5kLs35Wuuhs-5TAcePSWwweXRKtK2g1O-YXZvxYTvj16chrk0TZMMlrNKh0w-pjBkfNVs3KVRThU1NKOruvW3m45E3unNUDNdxq95ilfOMxzxwkU8RBD_dwHvS9-F9_gEQLiSKQcT-fWRjFhCKq8Wv3HAjiqDPdooyqJ55VFxxfHlOa1RqwrhQxsbjXuV1B4P5s7MPDuRpP2GTH2nogCXEORltHbrM6rkdUiu3eN2XudcJKs9KnWI7hcBnzGnIXOrVjJo1Mn2hfrrusKeSRUtbjYk5AT1w`
    },
    cache: new InMemoryCache()
})