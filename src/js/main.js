import {getDefaultEvents, getOneEvent} from "./api";
import {renderEvents, renderEventModal} from "./render";
let page = 0;

async function app() {
    const events = await getDefaultEvents(page);
    renderEvents(events);
}
app();


document.querySelector(".cards_list").addEventListener("click", (e) => {
    const card = e.target.closest(".cards_item");

    if (!card) {
        return;
    }

    const id = card.dataset.id;

    getOneEvent(id)
        .then(event => renderEventModal(event));
});