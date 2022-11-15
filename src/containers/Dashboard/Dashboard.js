import React, { useState } from "react";
import PostForm from "../../components/PostForm/PostForm";
import Posts from "../Posts/Posts";
import "./Dashboard.css"

const Dashboard = () => {
    const [posts, setPosts] = useState([
        { id: 0, title: "Harry Potter", content: "content", author: "JK Rowling" },
        { id: 1, title: "This is how we do", content: "c", author: "Katy Perry" },
        { id: 2, title: "Let's go crazy", content: "c", author: "Prince" }
    ])

    const updateTitle = title => {
        posts[0].title = title;
        setPosts([...posts]);
    }

    return <div className="Container">
        <Posts posts={posts} />
        <PostForm onSubmit={(title) => updateTitle(title)} />
    </div>
}

export default Dashboard;