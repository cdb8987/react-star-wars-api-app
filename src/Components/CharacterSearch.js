
// Update data in <form> elements using onChange handlers combined with state

function CharacterSearch(props) {
    console.log(props, props.getSearchResults)

    function handleChange(event) {
        console.log(event.target.value);
        props.getSearchResults(event.target.value)
      }
        
    return (
        <div style={{ textAlign: 'center' }}>
            <label htmlFor="characterinput">Select Character</label>
            <input type="text" id="characterinput" onChange={handleChange}/>

            {/* <button id="characterSearchButton">Search</button> */}
        </div>



    )
}






export default CharacterSearch