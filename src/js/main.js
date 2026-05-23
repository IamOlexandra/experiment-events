import {getDefaultEvents, getOneEvent} from "./api";
import {renderEvents, renderEventModal, renderPagination} from "./render";
let page = 0;

async function app() {
    const data = await getDefaultEvents(page);
    renderEvents(data._embedded.events);
    renderPagination(data.page.totalPages, page);
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


document.querySelector(".cards_pag").addEventListener("click", (e) => {

    const pagBtn = e.target.closest(".pag_button");

    if (!pagBtn) {
        return;
    }

    page = Number(pagBtn.dataset.page);

    app();
});