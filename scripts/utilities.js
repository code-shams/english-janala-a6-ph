// ? Main Url - which can be used later to access other APIs dynamically.
const mainUrl = "https://openapi.programming-hero.com/api/"
// ? An async function which can be called inside other async functions to fetch data from a given API endpoint.
const fetchData = async (url) => {
    const response = await fetch(url);
    const data = await response.json();
    return data;
};