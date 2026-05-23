import {getDefaultEvents, getOneEvent} from "./api";
import {renderEvents, renderEventModal, renderPagination} from "./render";
let page = 0;

async function app() {
    const events = await getDefaultEvents(page);
    renderEvents(events);
}
app();
renderPagination();

document.querySelector(".cards_list").addEventListener("click", (e) => {
    const card = e.target.closest(".cards_item");

    if (!card) {
        return;
    }

    const id = card.dataset.id;

    getOneEvent(id)
        .then(event => renderEventModal(event));
});


document.querySelector(".cards_pag").addEventListener("click", (e) => {

    const pagBtn = e.target.closest(".pag_item");

    if (!pagBtn) {
        return;
    }

    page = Number(pagBtn.dataset.page);

    app();
});