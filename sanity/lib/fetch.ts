import { createClient } from "next-sanity";

const client = createClient({
    projectId: process .env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
    useCdn:true,
    apiVersion:'2025-01-12'
})

export async function sanityFetch({query,params = {}}:{query:string,params?:any}){
    return await client.fetch(query,params)
}