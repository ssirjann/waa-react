import { useState } from "react"


const PostForm = ({ onSubmit }) => {


    const [value, setValue] = useState([""]);

    const handleChange = event => {
        setValue(event.target.value);
    }

    return (
        <form className="PostForm" onSubmit={(s) => {
            s.preventDefault();
            onSubmit(value);
        }}>
            <div className="InputField">
                <label htmlFor="newTitle">New Title</label>
                <input name="newTitle" placeholder="New title for the first post." onChange={handleChange} />
            </div>
        </form>
    );
}

export default PostForm;