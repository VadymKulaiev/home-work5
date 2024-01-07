import { useEffect, useState } from "react";

function Posts() {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(data => setPosts(data))
    }, [])

    return (
        <div>
        <h2>Posts</h2>
        <ul>
            {posts.map(post => {
                return <li key={post.id}>{post.title}</li>
            })}
        </ul>
        </div>
    )
}

export default Posts;