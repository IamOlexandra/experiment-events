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
                <p class="cards_place">${event._embedded?.venues[0]?.name}</p>
            </li>
        `;
    });
}

export function renderEventModal(event) {

    const modal = document.createElement("div");
    modal.classList.add("modal");

    modal.innerHTML = `
        <div class="modal_content">

            <button class="modal_close"></button>
            <div class="modal_circle"></div>

            <div class="modal_placing">
                <img 
                    src="${event.images[1].url}" 
                    alt="${event.name}"
                    class="modal_img"
                >

                <div class="modal_wrap">
                    <h2 class="modal_title">INFO</h2>
                    <p class="modal_text">${event.info || "No info"}</p>

                    <h2 class="modal_title">WHEN</h2>
                    <p class="modal_text">${event.dates?.start?.localDate}<br>${event.dates?.start?.localTime} (${event.dates?.timezone || "underfined timezone"})</p>

                    <h2 class="modal_title">WHERE</h2>
                    <p class="modal_text">${event._embedded?.venues?.[0]?.city?.name}, ${event._embedded?.venues?.[0]?.country?.name}<br>${event._embedded?.venues?.[0]?.name}</p>

                    <h2 class="modal_title">WHO</h2>
                    <p class="modal_text">${event.name}</p>

                    <a href="${event.url}" target="_blank" class="modal_button">
                        BUY TICKETS
                    </a>
                    <button class="modal_favorite">Add to favourites</button>
                </div>
            </div>
        </div>
    `;

    document.body.appendChild(modal);

    modal.querySelector(".modal_close").addEventListener("click", () => {
        modal.remove();
    });
    
    modal.querySelector(".modal_favorite").addEventListener("click", () => {

        const favorites = JSON.parse(localStorage.getItem("favorites")) || [];

        favorites.push(event.id);

        localStorage.setItem("favorites", JSON.stringify(favorites));

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
    } else {
        totalPages--;
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