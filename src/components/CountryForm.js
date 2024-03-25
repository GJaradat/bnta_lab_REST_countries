import { useEffect, useState } from "react";

const CountryForm = (props) => {
    
    const [countryOptions, setCountryOptions] = useState([]);

    useEffect(() => {
        // Get list of country names for dropdown - sorted alphabetically
        const countryNames = props.countries.map((country) => country.name.common).sort();

        // Generate Options in dropdown
        setCountryOptions(countryNames.map((countryName) => {
            return <option key = {countryName} value = {countryName}>{countryName}</option>
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
                <label htmlFor="chooseCountry">Select Country</label>
                <select name="chooseCountry" id="chooseCountry" >
                    {countryOptions}
                </select>
                <input type="submit" value="Add to Bucket List"/>
            </form>
        </>
    )
}

export default CountryForm;