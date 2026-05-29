import {getDefaultEvents, getOneEvent, getEventsByQuery, getEventsByCountry} from "./api";
import {renderEvents, renderEventModal, renderPagination} from "./render";
let page = 0,
    currentSearch = null,
    currentCountry = null;

async function app() {
    const data = await getDefaultEvents(page);
    renderEvents(data._embedded.events);
    renderPagination(data.page.totalPages, page);
}
app();

async function searchResultsLoad() {
    const data = await getEventsByQuery(page, currentSearch);
    renderEvents(data._embedded.events);
    renderPagination(data.page.totalPages, page);
}
document.querySelector(".nav_wrap").addEventListener("submit", event => {
    event.preventDefault();
    currentSearch = document.querySelector("input.nav_inp").value;
    currentCountry = null;
    page = 0;
    document.querySelector(".cards_info").textContent = `Search resulst for "${currentSearch}":`;
    searchResultsLoad();
});

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

    if (currentSearch) {
        searchResultsLoad();
    } else if (currentCountry) {
        countryResultsLoad();
    } else {
        app();
    }
});

const select = document.querySelector(".nav_select");
async function countryResultsLoad() {
    const data = await getEventsByCountry(page, currentCountry);
    renderEvents(data._embedded.events);
    renderPagination(data.page.totalPages, page);
}
select.addEventListener("change", () => {
    currentCountry = select.value;
    currentSearch = null;
    page = 0;
    document.querySelector(".cards_info").textContent = `Resulst from the country of ${select.querySelector(`option[value=${select.value}]`).textContent}:`;
    countryResultsLoad();
});