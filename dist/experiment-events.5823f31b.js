let e="https://app.ticketmaster.com/discovery/v2/",t="JIZUA78ORWWvAkFITEgp9n4NpYKrXysZ";async function a(a){let s=await fetch(e+`events.json?apikey=${t}&size=20&page=${a}`);return(await s.json())._embedded.events}async function s(a){let s=await fetch(e+`events/${a}.json?apikey=${t}`);return await s.json()}let n=document.querySelector(".cards_list");(async function(){var e;e=await a(0),n.innerHTML="",e.forEach(e=>{n.innerHTML+=`
            <li class="cards_item event" data-id="${e.id}">
                <img src="${e.images[0].url}" alt="${e.name}" class="cards_poster event">
                <h2 class="cards_name event">${e.name}</h2>
                <p class="cards_date event">${e.dates.start.localDate}</p>
                <p class="cards_place event">${e._embedded.venues[0].name}</p>
            </li>
        `})})(),document.querySelector(".cards_list").addEventListener("click",e=>{let t=e.target.closest(".cards_item");t&&s(t.dataset.id).then(e=>{let t;(t=document.createElement("div")).classList.add("modal"),t.innerHTML=`
        <div class="modal_content">
            <h2>${e.name}</h2>
            <p>${e.dates?.start?.localDate}</p>
            <p>${e._embedded?.venues?.[0]?.name}</p>
            <button class="modal_close">Close</button>
        </div>
    `,document.body.appendChild(t),t.querySelector(".modal_close").addEventListener("click",()=>{t.remove()})})});
//# sourceMappingURL=experiment-events.5823f31b.js.map
