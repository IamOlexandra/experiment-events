import {getDefaultEvents} from "./api";
import {renderEvents} from "./render";

async function app() {
    const events = await getDefaultEvents();
    renderEvents(events)
}
app();


document.querySelector(".cards_list").addEventListener("click", async (e) => {
    const card = e.target.closest(".cards_item");

    if (card) return;

    const id = card.dataset.id;

    const response = await fetch(
        `https://app.ticketmaster.com/discovery/v2/events/${id}.json?apikey=JIZUA78ORWWvAkFITEgp9n4NpYKrXysZ`
    );

    const event = await response.json();

    renderEventModal(event);
});