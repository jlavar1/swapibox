import React from 'react';
import PropTypes from 'prop-types';

const Card = (props) => {
  let { people, planets, vehicles } = props.category
  switch (props.enabled) {
    case 'people':
      return people.map((person) => {
        return (
          <div className="card people">
            <h4>{person.name}</h4>
            <p>Species: {person.species}</p>
            <p>Homeworld: {person.homeworld}</p>
            <p>Population: {person.homeworld_population}</p>
            <button>Add to Favorites</button>
          </div>
        )
      });
    case 'planets':
      return planets.map((planet) => {
        return (
          <div className='card planet'>
            <h4>{planet.name}</h4>
            <p>Population: {planet.population}</p>
            <p>Climate: {planet.climate}</p>
            <p>Terrain: {planet.terrain}</p>
            <ul>      
              Residents: 
                {!planet.residents.length && 
                    <li>None</li>
                }
                {planet.residents.map((resident) => {
                  return (
                    <li>{resident}</li>
                  )
                })
              }
            </ul>
          </div>
        )
      })
    case 'vehicles':
      return vehicles.map((vehicle) => {
        return (
          <div className="card vehicle">
            <h4>{vehicle.name}</h4>
            <p>Model: {vehicle.model}</p>
            <p>Class: {vehicle.class}</p>
            <p>Passengers: {vehicle.numberOfPassengers}</p>
            <button>Add to Favorites</button>
          </div>
        )
      })
    default: 
      // do nothing
  }
  
  Card.propTypes = {
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
}

export default Card;