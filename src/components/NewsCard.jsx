import React from "react";
import { Link } from "react-router-dom";

const NewsCard = (props) => {
  const { title, imageUrl, newsSite, summary, publishedAt, id} = props.data;
  
  const dateObj = new Date(publishedAt);

  const hours = dateObj.getHours().toString().padStart(2, '0');
  const minutes = dateObj.getMinutes().toString().padStart(2, '0');
  const day = dateObj.getDate().toString().padStart(2, '0');
  const month = (dateObj.getMonth() + 1).toString().padStart(2, '0');
  const year = dateObj.getFullYear();


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
          <time className="text-secondary">{`${hours}:${minutes} / ${day}.${month}.${year}`}</time>
        </div>
    </li>
  );
};

export default NewsCard;
