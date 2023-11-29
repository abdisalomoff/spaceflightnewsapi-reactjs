import { useEffect, useState } from "react"

import NewsCard from "./NewsCard";


const HomePage = () => {

const [articles, setArticles] = useState([]);
const [loading, setLoading] = useState(false);

let articleId = '';

const fetchData = async () =>{
    try {
        let newsURL = `https://api.spaceflightnewsapi.net/v3/articles/${articleId}`;
        setLoading(true);
        const res = await fetch(newsURL);
        const data = await res.json();
        setArticles(data)
        setLoading(false)
    } catch (error) {
        console.error(error)
        setLoading(false);
    }
}

useEffect(()=>{
    fetchData()
}, []);


if (loading) {
    return <div className="loading">
        <span className="loader"></span>
    </div>
}

return (
    <div className="container">
        <h1 className="text-center my-3">Today's news</h1>
        <ul className="card-list d-grid gap-4 mb-5">
            {articles.map((article, index)=>(
                <NewsCard key={index} data={article}/>
            ))}
        </ul>
    </div>
    )


}


export default HomePage