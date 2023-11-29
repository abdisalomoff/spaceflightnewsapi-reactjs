import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ArticlePage = () => {
  const { articleId } = useParams();
  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        const newsURL = `https://api.spaceflightnewsapi.net/v3/articles/${articleId}`;
        setLoading(true);
        const res = await fetch(newsURL);
        const data = await res.json();
        setArticle(data);
        setLoading(false)
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    };

    fetchArticle();
  }, [articleId]);

  if (!article) {
    return <div className="loading">
        <span className="loader"></span>
    </div>
}


const {title, summary, imageUrl,newsSite, publishedAt} = article


const dateObj = new Date(publishedAt);

  const hours = dateObj.getHours().toString().padStart(2, '0');
  const minutes = dateObj.getMinutes().toString().padStart(2, '0');
  const day = dateObj.getDate().toString().padStart(2, '0');
  const month = (dateObj.getMonth() + 1).toString().padStart(2, '0');
  const year = dateObj.getFullYear();

  return (
    <div className="container">
      <div className="mt-3 w-50 mx-auto">
        <div className="card-body gap-3 p-0">
            <div>
                <h3>{title}</h3>
                <p className="card-text fs-5 mt-3">{summary}</p>
            </div>
            <img className="article-img my-3" src={imageUrl} alt={title} />
        </div>
        <div className="card-footer d-flex justify-content-between align-items-center fs-6">
          <p className="newssite m-0 text-primary"> @{newsSite}</p>
          <time className="text-secondary">{`${hours}:${minutes} / ${day}.${month}.${year}`}</time>
        </div>
    </div>
    </div>
  );
};

export default ArticlePage;
