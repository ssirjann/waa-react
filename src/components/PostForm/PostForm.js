import { useRef, useState } from "react"


const PostForm = ({ onSubmit }) => {


    const [value, setValue] = useState([""]);

    const handleChange = event => {
        setValue(event.target.value);
    }

    const ref = useRef();

    const submit = (e) => {
        const form = ref.current;
        e.preventDefault();
        const title = form['title'].value;
        const content = form['content'].value;
        onSubmit({ title, content });
    }

    return (
        <form className="PostForm" onSubmit={submit} ref={ref}>
            <div className="InputField">
                <label htmlFor="title">Title</label>
                <input name="title" placeholder="New title for the first post." onChange={handleChange} />
            </div>
            <div className="InputField">
                <label htmlFor="content">Content:</label>
                <input name="content" placeholder="New title for the first post." onChange={handleChange} />
            </div>
            <input type="submit" className="SubmitBtn"></input>
        </form>
    );
}

export default PostForm;