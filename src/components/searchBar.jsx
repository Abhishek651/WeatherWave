import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import SearchIcon from '@mui/icons-material/Search';
import { useState, useEffect } from 'react';
import axios from 'axios';

function SearchBar({onSearch}) {
    const [city, setCity] = useState({});
    const [options, setOptions] = useState([]);
    const [results, setResults] = useState([]);

    const apiKey = import.meta.env.VITE_GEOAPIFY_KEY;
    const autoUrl = import.meta.env.VITE_GEOAPIFY_AUTO_URL;

    //receiving the user input data and retriving the results from the autocomplete api
    async function handleInput(event, value) {
        const val = value;
        setCity({name:val});
        if (val.length < 2) return setOptions([]);

        //getting suggestions of city from the geoapify based on the user input
        const response = await axios.get(`${autoUrl}${val}&format=json&apiKey=${apiKey}`);
        //save all the results of suggestions
        setResults(response.data.results);

        //filter out the formatted city names only, to show in the input dropdown
        setOptions(response.data.results.map(c => c.formatted));
    }

    //when the user select the dropdown suggested cities
    function handleSelect(event, value) {
        //comparing the user selected city in the results list to get the lat and lon of that cities
        const selected = results.find(r => r.formatted === value);
        if (selected) {
            //save the retrived lat and lon to the city
            setCity(prev =>({...prev, latitude:selected.lat, longitude:selected.lon}))
        }
    }

    //when search btn clicked, and user entered city name manually so handleSelect func don't run and can't get lat and lon
    //getting lat and lon on manual search
    async function handleSearch() {
        //checking latitude is missing 
        if (!city.latitude) {
            const response = await axios.get(`${autoUrl}${city.name}&format=json&apiKey=${apiKey}`);
            const first = response.data.results[0];
            if (first) {
                const resolved = { name: first.formatted, latitude: first.lat, longitude: first.lon };
                //save the city name, lat, lon
                setCity(resolved);
                //passing the city details to the parent func to get the weather data
                onSearch(resolved);
                return;
            }
        }
        //passing the city details to the parent func to get the weather data
        onSearch(city);
    }



    return (
        <div className='flex flex-row items-center gap-2 w-full max-w-xs md:max-w-sm lg:max-w-md mx-auto p-1'>
            {/*react component */}
            <Autocomplete
                freeSolo
                options={options}
                className='flex-1'
                //capture the user entered values
                //no using the spread operator will save the each letter in diff obj instead of in one obj
                onInputChange={handleInput}
                //when dropdown suggestions are selected
                onChange={handleSelect}
                renderInput={(params) => (
                    <TextField {...params} label="Search city"
                        variant="outlined"
                        size="small"
                        slotProps={{ input: { ...params.InputProps } }}
                    />
                )}
            />
            
            <button onClick={handleSearch} className='flex items-center justify-center bg-violet-700 hover:bg-violet-800 text-white rounded-md p-2 cursor-pointer'><SearchIcon /></button>
        </div>
    );
}

export default SearchBar;
