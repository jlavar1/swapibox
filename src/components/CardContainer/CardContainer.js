import React from 'react';
import Card from '../Card/Card';
import PropTypes from 'prop-types';

const CardContainer = (props) => {
    const { enabled, category } = props;
    if (enabled !== '' && category[enabled].length > 0) {
      return (
        <section className='card-wrap'>
          <Card 
            enabled={enabled}
            category={category}/>
        </section>
      )
    } else if (enabled !== '' && category[enabled].length === 0) {
      return (
        <h3 className='empty-cards'>
          Cards are loading, please wait
        </h3>
      )
    } else {
      return (
        <h3 className='empty-cards'>
          Please choose a category
        </h3>
      )
    }
  }

  CardContainer.propTypes = {
    vehicles: PropTypes.array,
    people: PropTypes.array,
    planets: PropTypes.array,
    enabled: PropTypes.string,
    category: PropTypes.shape({
      movieCrawl: PropTypes.shape({
        title: PropTypes.string,
        crawl: PropTypes.string,
        release_date: PropTypes.string
      }),
      error: PropTypes.string,
      vehicles: PropTypes.array,
      planets: PropTypes.array,
      people: PropTypes.array,
      enabled: PropTypes.string
    })
  }
  
export default CardContainer