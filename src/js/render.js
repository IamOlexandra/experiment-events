const cardsList = document.querySelector(".cards_list")

export function renderEvents(events) {
    cardsList.innerHTML = "";
    events.forEach(event => {
        cardsList.innerHTML += `
            <li class="cards_item event" data-id="${event.id}">
                <img src="${event.images[0].url}" alt="${event.name}" class="cards_poster event">
                <h2 class="cards_name event">${event.name}</h2>
                <p class="cards_date event">${event.dates.start.localDate}</p>
                <p class="cards_place event">${event._embedded.venues[0].name}</p>
            </li>
        `;
    });
}

export function renderEventModal(event) {
    const modal = document.createElement("div");
    modal.classList.add("modal");

    modal.innerHTML = `
        <div class="modal_content">
            <h2>${event.name}</h2>
            <p>${event.dates?.start?.localDate}</p>
            <p>${event._embedded?.venues?.[0]?.name}</p>
            <button class="modal_close">Close</button>
        </div>
    `;

    document.body.appendChild(modal);

    modal.querySelector(".modal_close").addEventListener("click", () => {
        modal.remove();
    });
}