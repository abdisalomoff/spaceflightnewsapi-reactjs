import { useEffect, useState } from "react"

import NewsCard from "./NewsCard";


const HomePage = () => {

const [articles, setArticles] = useState([]);
const [loading, setLoading] = useState(false);
const [searchNews, setSearchNews] = useState('');

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


const handleSearch = (evt) =>{
    setSearchNews(evt.target.value);
}

const filteredNews = articles.filter((article) =>
article.title.toLowerCase().includes(searchNews.trim().toLowerCase())
);


console.log(filteredNews);

return (
    <div className="container">
        <h1 className="text-center my-3">Today's news</h1>
        <input className="form-control w-75 mx-auto my-3 py-2" value={searchNews} onChange={handleSearch} placeholder="Search s news..." type="text" />
        <ul className="card-list d-grid gap-4 mb-5">
        {filteredNews.length > 0 ? (
          filteredNews.map((article, index) => (
            <NewsCard key={index} data={article} />
          ))
        ) : (
          <div className="text-center mt-5">Not Found!</div>
        )}

        </ul>
    </div>
    )


}


export default HomePage