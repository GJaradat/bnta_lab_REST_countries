import { useEffect, useState } from "react";
import Country from "../components/Country";
import CountryForm from "../components/CountryForm";
import CountriesToVisit from "../components/CountriesToVisit";
import VisitedCountries from "../components/VisitedCountries";

const BucketListContainer = () => {
    
    const [countries, setCountries] = useState([]);
    const [countriesToVisit, setCountriesToVisit] = useState([]);
    const [visitedCountries, setVisitedCountries] = useState([]);

    const fetchCountries = async () => {
        const response = await fetch("https://restcountries.com/v3.1/all")
        .catch(error => console.error(error));
        
        const data = await response.json();
        setCountries(data);
    }

    // Get API data when page loads
    useEffect(() => {
        fetchCountries();
    } , []);

    return (
        <>
            <CountryForm countries={countries} setCountriesToVisit={setCountriesToVisit}/>
            {/* <CountriesToVisit />
            <VisitedCountries /> */}
        </>
    )
}

export default BucketListContainer;