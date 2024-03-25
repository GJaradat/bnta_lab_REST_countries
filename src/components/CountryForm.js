import { createElement, useState } from "react";
import Country from "../components/Country";

const CountryForm = (props) => {
    
    // State for chosen country
    const [chosenCountry, setChosenCountry] = useState("");

    // Get list of country names for dropdown
    const countryNames = props.countries.map((country) => country.name.common);

    // Populate country names in dropdown
    const countryOptions = countryNames.map((countryName) => {
        return <option key = {countryName} value = {countryName}>{countryName}</option>
    });
    
    // Handle form submission to get chosen country
    const handleSubmit = (event) => {
        event.preventDefault();

        console.log(event.target.chooseCountry.value);
        setChosenCountry(props.countries.find((country) => country.name.common === event.target.chooseCountry.value));
        console.log(chosenCountry);
    }

    return (
        <>
            <form action="#" onSubmit={handleSubmit}>
                <label htmlFor="chooseCountry">Select Country</label>
                <select name="chooseCountry" id="chooseCountry">
                    {countryOptions}
                </select>
                <input type="submit" value="Add to Bucket List"/>
            </form>
        </>
    )
}

export default CountryForm;