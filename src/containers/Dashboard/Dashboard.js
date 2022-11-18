import axios from "axios";
import React, { useEffect, useState } from "react";
import PostDetail from "../../components/PostDetail/PostDetail";
import PostForm from "../../components/PostForm/PostForm";
import { SelectedPostContext } from "../../context/SelectedPostContext";
import Posts from "../Posts/Posts";
import "./Dashboard.css"

const postsUri = "http://localhost:8080/api/v1/users/1/posts/";

const Dashboard = () => {
    const [posts, setPosts] = useState([
        { id: 0, title: "..", content: "..", author: ".." },
    ]);

    const [selected, setSelected] = useState(null);

    useEffect(() => {
        fetchPosts();
    }, []);

    const apiErrorHandler = () => console.log("api error");

    const fetchPosts = () => {
        axios.get(postsUri)
            .then((response) => {
                setPosts(response.data);
                setSelected(null);
            })
            .catch(apiErrorHandler);
    }

    const deletePost = id => {
        axios.delete(postsUri + id)
            .then(fetchPosts)
            .catch(apiErrorHandler);
    }

    const addPost = (post) => {
        axios.post(postsUri, post)
            .then(response => {
                if (response.status == 201)
                    fetchPosts();
                else apiErrorHandler();
            }).catch(apiErrorHandler)
    }

    return <div className="Container">
        <Posts posts={posts} onSelected={setSelected} />
        {
            selected &&
            <SelectedPostContext.Provider value={{ id: selected, onDelete: deletePost }} >
                <PostDetail
                    id={selected}
                    onDelete={deletePost}
                />
            </SelectedPostContext.Provider>
        }
        <PostForm onSubmit={post => addPost(post)} />
    </div>
}

export default Dashboard;