import React from 'react';

const Crawl = (props) => {
  const {title, crawl, release_date } = props.movieCrawl
  return (
    <section className="star-wars">
      <div className="crawl">
        <div className="title">
          <p>{title}</p>
          <h1>{release_date}</h1>
          {crawl}
        </div>
      </div>
    </section>
  )
}

export default Crawl
