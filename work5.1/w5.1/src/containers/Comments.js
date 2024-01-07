import { useEffect, useState } from "react";

function Comments() {
    const [comments, setComments] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/comments')
            .then(response => response.json())
            .then(data => setComments(data))
    }, [])

    return (
        <div>
            <h2>Comments</h2>
            <ul>
                {comments.map(comment => {
                    return <li key={comment.id}>{comment.name}</li>
                })}
            </ul>
        </div>
    )
}

export default Comments;