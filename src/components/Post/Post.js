import "./Post.css"

const Post = ({ title, author, onSelected }) => {
    return <div className="Content" onClick={onSelected}>
        <blockquote><b>{title}</b></blockquote>
        <div className="Field">- {author}</div>
    </div>
}

export default Post;










