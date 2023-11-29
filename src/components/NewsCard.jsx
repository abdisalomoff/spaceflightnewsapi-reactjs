import React from "react";
import { Link } from "react-router-dom";

const NewsCard = (props) => {
  const { title, imageUrl, newsSite, summary, publishedAt, id} = props.data;
  
  return (
    <li className="card">
        <div className="card-body d-flex justify-content-between gap-3 p-0">
            <div className="p-3">
                <Link className="text-decoration-none text-dark" to={`/article/${id}`}><h4 className="card-title">{title}</h4></Link>
                <p className="card-text fs-5">{summary}</p>
            </div>
           <Link to={`/article/${id}`}> <img className="news-card-img"  src={imageUrl} alt={title} /></Link>
        </div>
        <div className="card-footer d-flex justify-content-between align-items-center">
          <p className="newssite m-0 text-primary"> {newsSite}</p>
          <time className="text-secondary">{publishedAt}</time>
        </div>
    </li>
  );
};

export default NewsCard;
