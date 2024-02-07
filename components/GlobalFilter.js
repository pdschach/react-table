import { set } from "date-fns";

const GlobalFilter = ( {filter, setFilter} ) => {

    return(

        <span>
            Search:{' '}
            <input value={filter || ''} onChange={e => setFilter(e.target.value)}>
            </input>
        </span>
    )

}

export default GlobalFilter;