import axios from "axios";
import { useEffect, useState } from "react";

const PostDetail = ({ id, onDelete }) => {

    const [postDetail, setPostDetail] = useState({ id, title: '..', content: '..', author: '..' });

    const fetchDetail = () => {
        axios.get("http://localhost:8080/api/v1/users/1/posts/" + id)
            .catch(log => console.log(log))
            .then(response => setPostDetail(response.data));
    }

    useEffect(() => {
        fetchDetail();
    }, [id]);

    return <div className="PostDetail">
        <div className="">
            <blockquote><b>{postDetail.title}</b></blockquote>
            <p>
                {postDetail.content}
            </p>
            <div className="Field">- {postDetail.author}</div>
            <div>
                <span className="DetailAction" onClick={() => console.log('Editing')}>Edit</span>
                <span className="DetailAction" onClick={() => onDelete(id)}>Delete</span>
            </div>
        </div>
    </div>
}

export default PostDetail;