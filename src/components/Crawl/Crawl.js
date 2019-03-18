import React from 'react';
import PropTypes from 'prop-types';

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

Crawl.propTypes = {
  category: PropTypes.shape({
    movieCrawl: PropTypes.shape({
      title: PropTypes.string,
      crawl: PropTypes.string,
      release_date: PropTypes.string
    })
  })
}

export default Crawl
