async function e(){let e=await fetch("https://app.ticketmaster.com/discovery/v2/events.json?apikey=JIZUA78ORWWvAkFITEgp9n4NpYKrXysZ&size=20&page=1"),a=await e.json();return console.log(a),a._embedded.events}let a=document.querySelector(".cards_list");!async function(){var s;s=await e(),a.innerHTML="",s.forEach(e=>{a.innerHTML+=`
            <li class="cards_item event" data-id="${e.id}">
                <img src="${e.images[0].url}" alt="${e.name}" class="cards_poster event">
                <h2 class="cards_name event">${e.name}</h2>
                <p class="cards_date event">${e.dates.start.localDate}</p>
                <p class="cards_place event">${e._embedded.venues[0].name}</p>
            </li>
        `})}();
//# sourceMappingURL=experiment-events.6f0e0dde.js.map
