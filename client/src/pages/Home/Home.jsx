import {posts} from "client/src/data";
import Card from "client/src/components/Card/Card";


const Home = () => {
    return (
        <div className="home">
            {posts.map(post=>(
                <Card key={post.id} post={post}/>
            ))}
        </div>
    )
}

export default Home
