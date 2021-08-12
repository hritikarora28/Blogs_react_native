import React,{useContext}  from "react";
import { StyleSheet,} from "react-native";
import {Context} from '../context/BlogContext';
import BlogPostForm from "../componets/blogPostForm";

const EditScreen = ({ navigation}) =>{
    const id = navigation.getParam('id')
    const {state,editBlogPost} = useContext(Context)
    const blogPost = state.find(blogPost=> blogPost.id == id)
    
    return <BlogPostForm 
    intitialValues={{ title: blogPost.title, content: blogPost.content }}
    onSubmit={(title, content) => {
        editBlogPost(id,title,content)
    }}/>


};

const styles = StyleSheet.create({});


export default EditScreen;