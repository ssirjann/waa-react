import Post from "../../components/Post/Post";

const Posts = function ({ posts }) {
    return <div className="Post">
        {posts.map(p => <Post
            key={p.id}
            id={p.id}
            title={p.title}
            author={p.author}
        />
        )}
    </div>
}


export default Posts;