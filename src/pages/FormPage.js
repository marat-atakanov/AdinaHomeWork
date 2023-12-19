import React, {useState} from 'react';

function FormPage(props) {
    const [post, setPost] = useState({});
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault()
        setPost({
            title,
            description: desc
        })
    }

    return (
        <form onSubmit={handleSubmit}>

            <input onChange={(e)=>{setTitle(e.target.value)}} placeholder="title" type="text"/>
            <input onChange={(e)=>{setDesc(e.target.value)}} placeholder="description" type="text"/>
            <button>submit</button>
            <p>{post.title}</p>
            <p>{post.description}</p>
        </form>
    );
}

export default FormPage;
