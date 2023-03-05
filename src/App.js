import logo from './logo.svg';
import './App.css';
import Table from './Components/Table';
import CharacterSearch from './Components/CharacterSearch'
import MyHeader from './Components/MyHeader'
import SearchResultsPageNavBar from './Components/SearchResultsPageNavBar'
import {useState} from 'react';



function App() {
  let stateUpdateCount = 0
  
  let characterArray = [
    {name: 'test',
    birthDate: 'test',
    height: 'test',
    mass: 'test',
    homeworld: 'test', 
    species: 'test'  
  },
    {name: 'test',
    birthDate: 'test',
    height: 'test',
    mass: 'test',
    homeworld: 'test', 
    species: 'test'  
  },
    {name: 'test',
    birthDate: 'test',
    height: 'test',
    mass: 'test',
    homeworld: 'test', 
    species: 'test'  
    }]
    
  const [propsArray, setPropsArray] = useState(characterArray)

  function getJSON(url) {
    return fetch(url)
      .then(response => {
        if (!response.ok) {
          throw new Error('CUSTOM ERROR - JSON/API Request failed')
        };
        return response.json()
      })
      .then(response => {
  
        return response
      })
      .catch(error => { console.log(`ERROR! ${error}`) })
  }
  
  
function getCharacter(url, i, limit) {  //gets character from api and pushes to characterArray at index i
  console.log('Request getCharacter ran') 
  let characterProfile = {}
    
    getJSON(url)
      .then((profile) => {
        characterProfile = {
            name: profile.name, 
            birthDate: profile.birth_year, 
            height: profile.height, 
            mass: profile.mass
        };
  
    getJSON(profile.homeworld)
      .then((homeworld) => {
        characterProfile['homeworld'] = homeworld.name
  
            if (profile.species[0]) {
              getJSON(profile.species)
                .then((species) => {
                  if (!species) {
                    characterProfile['species'] = 'unknown'
                    characterArray.push(characterProfile)
                    
                    if(characterArray.length === limit){stateUpdateCount += 1; console.log(`setPropsArray executed ${stateUpdateCount} times`);
                      setPropsArray(characterArray)}
                    
                  }
                  characterProfile['species'] = species.name
                  characterArray.push(characterProfile)
              
                  if(characterArray.length === limit){stateUpdateCount += 1; console.log(`setPropsArray executed ${stateUpdateCount} times`);
                      setPropsArray(characterArray)}
                })
            }
            else {
              characterProfile['species'] = 'unknown'
              characterArray.push(characterProfile)
            
              if(characterArray.length === limit){stateUpdateCount += 1; console.log(`setPropsArray executed ${stateUpdateCount} times`);
                      setPropsArray(characterArray)}
            }
          })
      })
      .catch((err) => {console.log(err); characterArray.push({name: '', birthDate: '', height: '', mass: '', species: '', homeworld: ''});if(characterArray.length === 10){stateUpdateCount += 1; console.log(`setPropsArray executed ${stateUpdateCount} times`);
      setPropsArray(characterArray)}})
  }

  const RequestTenCharacters = function (startingindex=0) {
    // console.log('Request 10 characters ran')  
    characterArray = []
    for (let i = startingindex; i < startingindex + 10; i++) {
      getCharacter(`https://swapi.dev/api/people/${i+1}/`, i, 10)
    }
    setTimeout(()=> console.log(JSON.stringify(characterArray)), 5000)
    return ''
  }
    
  const getSearchResults = function (searchstring) {
    console.log('getsearchresult ran!')
    characterArray = []
    console.log('getsearchresults RAN AS A PROP then an error :)')
    getJSON(`https://swapi.dev/api/people/?search=${searchstring}`)
      .then(result => {
        console.log(result.results);
        result.results.forEach((char) => {console.log(result.results.length); getCharacter(char.url, 0, result.results.length)})
      })
      setTimeout(()=> console.log(JSON.stringify(characterArray)), 5000)
  }
  
  const pageChangeButtons = (

        
      <div id='SearchResultsPageNavBar'>
          <button onClick={()=>RequestTenCharacters()}className="btn btn-primary">1</button><button onClick={()=>RequestTenCharacters(10)}className="btn btn-primary">2</button><button onClick={()=>RequestTenCharacters(20)}className="btn btn-primary">3</button><button onClick={()=>RequestTenCharacters(30)}className="btn btn-primary">4</button><button onClick={()=>RequestTenCharacters(40)}className="btn btn-primary">5</button><button onClick={()=>RequestTenCharacters(50)}className="btn btn-primary">6</button><button onClick={()=>RequestTenCharacters(60)}className="btn btn-primary">7</button><button onClick={()=>RequestTenCharacters(70)}className="btn btn-primary">8</button><button onClick={()=>RequestTenCharacters(80)}className="btn btn-primary">9</button>
      </div>
  )


  //we have a infinte loop here because we rerender table whenever the character limit is hit.  However when we rerender the table we rerender character search which calls get search results.  
 
  return (
    <>
    <MyHeader />
    <CharacterSearch getSearchResults={getSearchResults}/>
    <Table characterArray={propsArray}/>
    <div>{pageChangeButtons}</div>
    {/* <SearchResultsPageNavBar /> */}
    
    
    </>
  );
}



export default App;






  
  

 