const MAIN_URL = "https://app.ticketmaster.com/discovery/v2/",
    API_KEY = "JIZUA78ORWWvAkFITEgp9n4NpYKrXysZ",
    PER_PAGE = 20;
let page = 1;

export async function getDefaultEvents() {
    const responce = await fetch(MAIN_URL + `events.json?apikey=${API_KEY}&size=${PER_PAGE}&page=${page}`),
        data = await responce.json();
    console.log(data)
    return data._embedded.events;
}