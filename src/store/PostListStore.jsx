import { createContext, useReducer } from "react";


export const PostList = createContext({
    PostList:[],
    addPost:()=>{},
    deletePost:()=>{}
})


const postListReducer= (currPostList, action)=>{
    let newPostList=currPostList
    if(action.type==="DELETE_POST"){
        newPostList=currPostList.filter(post=>post.id!==action.payload.postId)
    }
    return newPostList;
}




const PostListProvider=({children})=>{
const [postList, dispatchPostList] = useReducer(postListReducer,DEFAULT_POST_LIST);
const addPost=()=>{

}
const deletePost=(postId)=>{
   dispatchPostList({
    type:"DELETE_POST",
    payload:{
        postId,
    }
   })
}
return <PostList.Provider value={
{  postList,
    addPost,
    deletePost}
}>
{children}
</PostList.Provider>
}

const DEFAULT_POST_LIST=[{
    id:"1",
    title:"Going to Dhaka",
    body:"Hi friends, I am going to Dhaka for my vacations. Hope to enjoy a lot. Peace out.",
    reactions:2,
    userId:"user-9",
    tags:["vacation","dhaka","enjoying"]
},
{
    id:"2",
    title:"Passing the exam",
    body:"after 2 years studies result is Pass.",
    reactions:15,
    userId:"user-12",
    tags:["graduating","unvelievable"]
}
]
export default PostListProvider