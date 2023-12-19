import React, {useState} from 'react';

function PostsPage() {

    const [posts, setPosts] = useState([]);

    console.log("отрисован")

    async function getPosts() {
        try {
            const response = await fetch("https://dummyjson.com/posts")
            const data = await response.json()
            setPosts(data.posts)
            console.log(data.posts)
        } catch (e) {
            console.log(e)
        }
    }

    return (
        <div>
            <button style={{border: "1px solid black"}} onClick={getPosts}>get posts</button>
            <div>
                {posts.map((post) => {
                        return (
                            <div key={post.id}>
                                <p>{post.id}</p>
                                <p>{post.title}</p>
                            </div>
                        )
                    }
                )}
            </div>
        </div>
    );
}

export default PostsPage;