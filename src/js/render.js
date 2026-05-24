const cardsList = document.querySelector(".cards_list")

export function renderEvents(events) {
    cardsList.innerHTML = "";
    events.forEach(event => {
        cardsList.innerHTML += `
            <li class="cards_item" data-id="${event.id}">
                <div class="cards_poster">
                    <img src="${event.images[0].url}" alt="${event.name}" class="cards_image">
                </div>
                <h2 class="cards_name">${event.name}</h2>
                <p class="cards_date">${event.dates.start.localDate}</p>
                <p class="cards_place">${event._embedded.venues[0].name}</p>
            </li>
        `;
    });
}

export function renderEventModal(event) {

    const modal = document.createElement("div");
    modal.classList.add("modal");

    modal.innerHTML = `
        <div class="modal_content">

            <button class="modal_close">x</button>

            <img 
                src="${event.images[0].url}" 
                alt="${event.name}"
                class="modal_img"
            >

            <h2>INFO</h2>
            <p>${event.info || "No info"}</p>

            <h2>WHEN</h2>
            <p>${event.dates?.start?.localDate}</p>

            <h2>WHERE</h2>
            <p>${event._embedded?.venues?.[0]?.name}</p>

            <h2>WHO</h2>
            <p>${event.name}</p>

            <h2>PRICES</h2>
            <p>
                Standard ${event.priceRanges?.[0]?.min || "-"} 
                -
                ${event.priceRanges?.[0]?.max || "-"} USD
            </p>

            <a href="${event.url}" target="_blank">
                BUY TICKETS
            </a>

        </div>
    `;

    document.body.appendChild(modal);

    modal.querySelector(".modal_close").addEventListener("click", () => {
        modal.remove();
    });

    modal.addEventListener("click", (e) => {

        if (e.target === modal) {
            modal.remove();
        }

    });

    document.addEventListener("keydown", (e) => {

        if (e.key === "Escape") {
            modal.remove();
        }

    });

}

const cardsPag = document.querySelector(".cards_pag");
function createPaginationElements(dataPage, text, isCurrent) {
    const button = document.createElement("button");
    button.type = "button";
    button.classList.add("pag_button");
    if(isCurrent) {
        button.classList.add("pag_current");
    }
    button.dataset.page = dataPage;
    button.textContent = text;
    const li = document.createElement("li");
    li.append(button);
    return li;
}
export function renderPagination(totalPages, page) {
    cardsPag.innerHTML = "";
    if (totalPages > 29) {
        totalPages = 29;
    }
    if (page === 0) {
        cardsPag.append(createPaginationElements(page, page + 1, true), createPaginationElements(page + 1, ">", false), createPaginationElements(totalPages, totalPages + 1, false))
    } else if (page === totalPages) {
        cardsPag.append(createPaginationElements(0, 1, false), createPaginationElements(page - 1, "<", false),  createPaginationElements(page, page + 1, true));
    } else {
        cardsPag.append(createPaginationElements(0, 1, false), createPaginationElements(page - 1, "<", false),  createPaginationElements(page, page + 1, true), createPaginationElements(page + 1, ">", false), createPaginationElements(totalPages, totalPages + 1, false));
    }
    // for (let i = 0; i <= totalPages; i++) {
    //     const item = document.createElement("li");
    //     item.innerHTML = `<button type="button" class="pag_button" data-page="${i}">${i + 1}</button>`;
    //     if (i === page) {
    //         item.querySelector(".pag_button").classList.add("pag_current")
    //     }
    //     cardsPag.append(item);
    // }
}