import React from 'react';

// const fetchHelper = (url) => {
//   fetch(url)
//     .then(response => response.json())
//     .then(data => data.opening_crawl)
//     .then(openCrawl => this.setState({openCrawl}))
//     .catch(error => this.setState({error: error.message}))
// }

const fetchHelper = async (url) => {
  const response = await fetch(url)
  try {
    return response.json()
  } catch {
    throw Error('Failed to retrieve data, please try again')
  }
}

export default fetchHelper;