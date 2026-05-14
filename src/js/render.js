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