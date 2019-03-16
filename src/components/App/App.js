import React, { Component } from 'react';
import Header from '../Header/Header';
import Button from '../Button/Button';
import CardContainer from '../CardContainer/CardContainer';
// import fetchHelper from '../../helper/fetchHelper';


class App extends Component {
  constructor() {
    super();
    this.state = {
      movieCrawl: {
        title: '',
        crawl: '',
        release_date: ''
      },
      error: '',
      vehicles: [],
      planets: [],
      people: []
    }
  }

  // componentDidMount() {
  // const url = `https://swapi.co/api/films/${this.randomizeFilm()}/`
  // fetch(url)
  //   .then(response => response.json())
  //   .then(data => data.opening_crawl)
  //   .then(openCrawl => this.setState({openCrawl}))
  //   .catch(error => this.setState({error: error.message}))
  // }

  componentDidMount() {
    this.fetchPeople()
  }

  randomizeFilm = () => {
    return Math.floor(Math.random() * 8);
  }
  
  fetchHelper = async (url) => {
    const response = await fetch(url);
    if (response.ok) {
      return response.json()
    } else {
      throw Error('Failed to retrieve data, please try again')
    }
  }

  fetchCrawl = async () => {
    const url = `https://swapi.co/api/films/${this.randomizeFilm()}/`
    const data = await this.fetchHelper(url)
    this.setState({
      movieCrawl: {
        title: data.title,
        crawl: data.opening_crawl,
        release_date: data.release_date
      }
    })
  }

  fetchPeople = async () => {
    const url = 'https://swapi.co/api/people/';
    const people = await this.fetchHelper(url)
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
    const fetchedHomeworld = await this.fetchHelper(homeworlds)
    const planet = await fetchedHomeworld
    return planet
  }

  fetchSpecies = async (species) => {
    const fetchedSpecies = await this.fetchHelper(species)
    const speciesData = await fetchedSpecies
    return speciesData
  }

  fetchVehicles = async () => {
    const url = 'https://swapi.co/api/vehicles/'
    const vehicles = await this.fetchHelper(url)
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
    const planetsPromised = await this.fetchHelper(url)
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
      const fetchedResident = await this.fetchHelper(resident)
      return fetchedResident.name
    })
    return Promise.all(unresolvedResidents)
  }

  render() {
    const { movieCrawl, error } = this.state
    return (
      <div className="App">
      {movieCrawl.title}
      {movieCrawl.release_date}
      {movieCrawl.crawl}
      <Header/>
      <Button />
      <CardContainer />
      {error && error}
      </div>
    )
  }
}

export default App;
