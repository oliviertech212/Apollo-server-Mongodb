
import Post from "../database/post.model"

export const resolvers={
    Query: {
        hello:()=>{
            return "hello oliviertech"
        } ,

    
        getAllPosts:async () => {
            const posts=await Post.find()
            return posts
        },

        getpost:async(parent:any,args:any,context:any,info:any)=>{
              const{id}=args;
                const post=await Post.findById(id)
               return post;

        }

    },

    Mutation:{
        createPost:async (parent:any,args:any,context:any,info:any)=>{
               const {title,description}=args.post;

               const post=new Post( {title,description})
               await post.save()

               return post

        },
        deletepost:async(parent:any,args:any,context:any,info:any)=>{
            const{id}=args;
              const post=await Post.findByIdAndDelete(id)
             return `deleted succssful`;

        },

        updatepost:async(parent:any,args:any,context:any,info:any)=>{
            const{id}=args;
            const {title,description}=args.post;

            const updates={}
            if (title !==undefined){
                updates.title=title
            }
            if (description!==undefined){
                updates.description=description
            }

              const post=await Post.findByIdAndUpdate(id,updates,{new:true}) // {new:true}  to retun new doc that have been saved to db
             return post;

        },
    }
}