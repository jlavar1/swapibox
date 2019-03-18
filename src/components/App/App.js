import React, { Component } from 'react';
import Header from '../Header/Header';
import Button from '../Button/Button';
import CardContainer from '../CardContainer/CardContainer';
import Crawl from '../Crawl/Crawl';
import fetchHelper from '../../helper/fetchHelper';


class App extends Component {
  constructor() {
    super();
    this.state = {
      movieCrawl: {},
      error: '',
      vehicles: [],
      planets: [],
      people: [],
      enabled: ''
    }
  }

  componentDidMount() {
    this.fetchCrawl()
  }

  randomizeFilm = () => {
    return Math.floor(Math.random() * 8);
  }
  
  fetchCrawl = async () => {
    const url = `https://swapi.co/api/films/${this.randomizeFilm()}/`
    const data = await fetchHelper(url)
    this.setState({
      movieCrawl: {
        title: data.title,
        crawl: data.opening_crawl,
        release_date: data.release_date
      }
    })
  }

  fetchCategory = (category) => {
    switch(category) {
      case 'people':
        this.fetchPeople()
        break;
      case 'planets':
        this.fetchPlanets();
        break;
      case 'vehicles':
        this.fetchVehicles();
        break;
      default:
        // do nothing
    }
  }

  enableCategory = (category) => {
    this.setState({
      enabled: category
    })
  }

  fetchPeople = async () => {
    const url = 'https://swapi.co/api/people/';
    const people = await fetchHelper(url)
    const mappedPeople = await this.streamlinePeople(people.results)
    this.setState({
      people: mappedPeople
    })
  }

  streamlinePeople = (people) => {
    const streamlinedPeople = people.map(async (person) => {
      const fetchedHomeworld = await this.fetchHomeworld(person.homeworld)
      const fetchedSpecies = await this.fetchSpecies(person.species)
      return {
        name: person.name,
        homeworld: fetchedHomeworld.name,
        species: fetchedSpecies.classification,
        homeworld_population: fetchedHomeworld.population
      }
    })
    return Promise.all(streamlinedPeople)
  }

  fetchHomeworld = async (homeworlds) => {
    const fetchedHomeworld = await fetchHelper(homeworlds)
    const planet = await fetchedHomeworld
    return planet
  }

  fetchSpecies = async (species) => {
    const fetchedSpecies = await fetchHelper(species)
    const speciesData = await fetchedSpecies
    return speciesData
  }

  fetchVehicles = async () => {
    const url = 'https://swapi.co/api/vehicles/'
    const vehicles = await fetchHelper(url)
    const mapVehicles = await this.streamlineVehicles(vehicles.results);
    this.setState({
      vehicles: mapVehicles
    })
  }
  
  streamlineVehicles = vehicles => {
    const streamlinedVehicles = vehicles.map(vehicle => {
      return {
        name: vehicle.name,
        model: vehicle.model,
        class: vehicle.vehicle_class,
        numberOfPassengers: vehicle.passengers,
        id: vehicle.created
      }
    })
    return streamlinedVehicles
  }

  fetchPlanets = async () => {
    const url = 'https://swapi.co/api/planets/';
    const planetsPromised = await fetchHelper(url)
    const planets = await planetsPromised.results
    const mappedPlanets = await this.streamlinedPlanets(planets)
    this.setState({
      planets: mappedPlanets
    })
  }

  streamlinedPlanets = planets => {
    const streamlinedPlanets = planets.map( async (planet) => {
      const residents = await this.fetchResidents(planet.residents)
      return {
        name: planet.name,
        terrain: planet.terrain,
        population: planet.population,
        climate: planet.climate,
        residents: residents
      }
    })
    return Promise.all(streamlinedPlanets)
  }

  fetchResidents = (residents) => {
    let unresolvedResidents = residents.map(async (resident) => {
      const fetchedResident = await fetchHelper(resident)
      return fetchedResident.name
    })
    return Promise.all(unresolvedResidents)
  }

  render() {
    const { enabled, movieCrawl, error, vehicles, people, planets } = this.state
      return (
        <div className="grid-container">
          <div className="movieCrawl">
            <Crawl movieCrawl={movieCrawl}/>
          </div>
          <div className="Header">
            <Header/>
          </div>
          <div className="Buttons">
            <Button 
              fetchCategory={this.fetchCategory}
              enableCategory={this.enableCategory}
              vehicles={vehicles}
              people={people}
              planets={planets}/>
          </div>
          <div className="Card-Area">
            <CardContainer 
              vehicles={vehicles}
              people={people}
              planets={planets}
              enabled={enabled}
              category={this.state}/>
          </div>
          { error && error }
        </div>
      )
  }
}

export default App;
