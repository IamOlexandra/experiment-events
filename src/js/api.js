const MAIN_URL = "https://app.ticketmaster.com/discovery/v2/",
    API_KEY = "JIZUA78ORWWvAkFITEgp9n4NpYKrXysZ",
    PER_PAGE = 20;

export async function getDefaultEvents(page) {
    const response = await fetch(MAIN_URL + `events.json?apikey=${API_KEY}&size=${PER_PAGE}&page=${page}`),
        data = await response.json();
    return data;
}

export async function getOneEvent(id) {
    const response = await fetch(MAIN_URL + `events/${id}.json?apikey=${API_KEY}`),
        data = await response.json();
    return data;
}

export async function getEventsByQuery(page, query) {
    const response = await fetch(MAIN_URL + `events.json?apikey=${API_KEY}&size=${PER_PAGE}&page=${page}&keyword=${query}`),
        data = await response.json();
    return data;
}

export async function getEventsByCountry(page, country) {
    const response = await fetch(MAIN_URL + `events.json?apikey=${API_KEY}&size=${PER_PAGE}&page=${page}&countryCode=${country}`),
        data = await response.json();
    return data;
}