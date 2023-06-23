

import  express  from "express";
import {ApolloServer,gql} from "apollo-server-express";

import mongoose from "mongoose";

import { resolvers } from "./resolvers/resolver";
import { typeDefs } from "./typeDefs/typedef";






async function startserver(){
    const app=express();
    const apolloserver=new ApolloServer({
        typeDefs,
        resolvers
    })


    await apolloserver.start()

    apolloserver.applyMiddleware({app:app});

    app.use((req,res)=>{
      res.send("here app is running on express server")
    })
  await mongoose.connect('mongodb://127.0.0.1:27017/GQLSERVER',{
    useUnifiedTopology:true,
    useNewUrlParser:true
  })
  console.log("mongoose connected......");
  
    app.listen(4000,()=>{
        console.log("server is running on 4000 ");
        
    })

}
startserver()