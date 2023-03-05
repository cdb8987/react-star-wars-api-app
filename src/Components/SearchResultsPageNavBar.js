
import RequestTenCharacters from './Table'


function SearchResultsPageNavBar() {
    return (
        <div id='SearchResultsPageNavBar'>
            <button onClick={()=>RequestTenCharacters()}className="btn btn-primary">1</button><button onClick={()=>RequestTenCharacters()}className="btn btn-primary">2</button><button onClick={()=>RequestTenCharacters()}className="btn btn-primary">3</button><button onClick={()=>RequestTenCharacters()(31)}className="btn btn-primary">4</button><button onClick={()=>RequestTenCharacters()}className="btn btn-primary">5</button><button onClick={()=>RequestTenCharacters()}className="btn btn-primary">6</button><button onClick={()=>RequestTenCharacters()}className="btn btn-primary">7</button><button onClick={()=>RequestTenCharacters()}className="btn btn-primary">8</button><button onClick={()=>RequestTenCharacters()}className="btn btn-primary">9</button>
        </div>
    )
}
export default SearchResultsPageNavBar