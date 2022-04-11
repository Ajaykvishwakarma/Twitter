import SearchIcon from '@mui/icons-material/Search';
import "./TwitterSearch.css";

export const Search = () => {

    return(
        <div className="widget_search_input">
                <SearchIcon className='widget_search_icon'/>
                <input placeholder="Search Twitter" type="text" />
        </div>
    )
}