
import {gql} from "apollo-server-express";


export const typeDefs= gql`
type post{
    id:ID
    title:String
    description:String
}
type Query{
    hello: String

    getAllPosts:[post]
    getpost(id:ID):post
}


input postInput{
    title:String
    description:String
}

type Mutation{
    createPost(post:postInput):post
    deletepost(id:ID):String
    updatepost(id:ID,post:postInput):post
}
`