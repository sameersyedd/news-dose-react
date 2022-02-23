import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let {title, description, imageUrl, newsUrl} = this.props;
    return (
      <div className="my-3">
        <div className="card" style={{width: "20rem"}}>
          <img src={!imageUrl?"https://imgk.timesnownews.com/story/asteroid.png?tr=w-560,h-292,fo-top":imageUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">
              {description}...
            </p>
            <a href={newsUrl}  target="_blank" className="btn btn-sm btn-warning">
              Detailed News
            </a>
          </div>
        </div>
      </div>
    );
  }
};

export default NewsItem;
