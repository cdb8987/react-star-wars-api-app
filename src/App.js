import logo from './logo.svg';
import './App.css';
import Table from './Components/Table';

let startingTable = [
  {
      name: 'TestCharacter1',
      birthDate: 'TestBirthdate',
      height: 'TestHeight', 
      mass: 'TestMass', 
      homeworld: 'TestHomeworld', 
      species: 'TestSpecies'
  },
  {
      name: 'TestCharacter2',
      birthDate: 'TestBirthdate',
      height: 'TestHeight', 
      mass: 'TestMass', 
      homeworld: 'TestHomeworld', 
      species: 'TestSpecies'
  },{
    name: 'TestCharacter3',
    birthDate: 'TestBirthdate',
    height: 'TestHeight', 
    mass: 'TestMass', 
    homeworld: 'TestHomeworld', 
    species: 'TestSpecies'
},
{
    name: 'TestCharacter4',
    birthDate: 'TestBirthdate',
    height: 'TestHeight', 
    mass: 'TestMass', 
    homeworld: 'TestHomeworld', 
    species: 'TestSpecies'
},
  {
      name: 'TestCharacter5',
      birthDate: 'TestBirthdate',
      height: 'TestHeight', 
      mass: 'TestMass', 
      homeworld: 'TestHomeworld', 
      species: 'TestSpecies'
  },

]



function App() {
  return (
    <>
    
    <Table characterArray={startingTable}/>
    
    </>
  );
}

export default App;
