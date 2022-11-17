import Post from "../../components/Post/Post";

const Posts = function ({ posts, onSelected }) {
    return <div className="Post">
        {posts.map(p => <Post
            onSelected={() => onSelected(p.id)}
            key={p.id}
            id={p.id}
            title={p.title}
            author={p.author}
        />
        )}
    </div>
}


export default Posts;