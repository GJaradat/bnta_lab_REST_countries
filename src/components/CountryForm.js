import { useEffect, useState } from "react";
import Select from "react-select";

const CountryForm = (props) => {
    
    const [countryOptions, setCountryOptions] = useState([]);
    const [currentOption, setCurrentOption] = useState("");
    useEffect(() => {
        // Get list of country names for dropdown - sorted alphabetically
        const countryNames = props.countries.map((country) => country.name.common).sort();

        // Generate Options in dropdown
        setCountryOptions(countryNames.map((countryName) => {
            return {
                value: countryName,
                label: countryName
            }
        }))
    }, [props.countries]);
    
    // Handle form submission to get chosen country
    const handleSubmit = (event) => {
        event.preventDefault();
        // get chosen country from dropdown value
        const chosenCountry = (props.countries.find((country) => country.name.common === event.target.chooseCountry.value));

        // Add chosen country to visited list
        props.setCountriesToVisit([...props.countriesToVisit, chosenCountry]);
        
        // TODO: Remove chosen country from country options
    }

    return (
        <>
            <form action="#" onSubmit={handleSubmit}>
                <label htmlFor="chooseCountry">Select a Country:</label>
                <Select name="chooseCountry" id="chooseCountry" 
                    options = {countryOptions}
                    
                    isSearchable = {true}
                    isClearable = {true}
                    
                    // This section is a bit hectic cause I am trying to make the current option show in the field
                    onChange={(event) => setCurrentOption(countryOptions.find((option) => option.value === event.value))}
                    getOptionLabel={(option) => option.label}
                    getOptionValue={(option) => option.value}
                    value = {currentOption}
                    />
                <input type="submit" value="Add to Bucket List"/>
            </form>
        </>
    )
}

export default CountryForm;