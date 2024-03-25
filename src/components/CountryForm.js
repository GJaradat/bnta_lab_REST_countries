import { createElement, useState } from "react";
import Country from "../components/Country";

const CountryForm = (props) => {
    
    // Get list of country names for dropdown
    const countryNames = props.countries.map((country) => country.name.common);

    // Populate country names in dropdown
    const countryOptions = countryNames.map((countryName) => {
        return <option key = {countryName} value = {countryName}>{countryName}</option>
    });
    
    // const mappedCountries = props.countries.map((country) => <Country country={country} />);

    return (
        <>
            <form action="#">
                <label htmlFor="chooseCountry">Select Country</label>
                <select name="chooseCountry" id="chooseCountry" >
                    {countryOptions}
                </select>
            </form>
        </>
    )
}

export default CountryForm;