import "./Post.css"

const Post = ({ title, author }) => {
    return <div className="Content">
        <blockquote><b>{title}</b></blockquote>
        <div className="Field">- {author}</div>
    </div>
}

export default Post;










