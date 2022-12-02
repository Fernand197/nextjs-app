

export default function PostDetails({post}) {


    return (
        <div key={post.id}>
            <h2>{post.id} {post.title}</h2>
            <p>{post.body}</p>
        </div>
    )
}

export async function getStaticProps(context) {
    const {params} = context
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`)
    const data = await response.json()
    return {
        props: {
            post: data
        }
    }
}

export async function getStaticPaths(context) {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts")
    const data = await response.json()

    const paths = data.map(post => {
        return {
            params: {
                postId: `${post.id}`
            }
        }
    })
    return {
        paths: [],
        fallback: 'blocking'
    }
}
