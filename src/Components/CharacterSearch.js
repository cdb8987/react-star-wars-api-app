function CharacterSearch(props) {
    
    function handleChange(event) {
        console.log(event.target.value);
        props.getSearchResults(event.target.value)
      }
        
    return (
        <div style={{ textAlign: 'center', backgroundColor: 'lightgray' }}>
            <label htmlFor="characterinput">Select Character</label>
            <input type="text" id="characterinput" onChange={handleChange}/>
        </div>
    )
}
export default CharacterSearch