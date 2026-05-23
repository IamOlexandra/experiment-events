let e="https://app.ticketmaster.com/discovery/v2/",t="JIZUA78ORWWvAkFITEgp9n4NpYKrXysZ";async function a(a){let s=await fetch(e+`events.json?apikey=${t}&size=20&page=${a}`);return await s.json()}async function s(a){let s=await fetch(e+`events/${a}.json?apikey=${t}`);return await s.json()}let n=document.querySelector(".cards_list"),c=document.querySelector(".cards_pag");function d(e,t,a){let s=document.createElement("button");s.type="button",s.classList.add("pag_button"),a&&s.classList.add("pag_current"),s.dataset.page=e,s.textContent=t;let n=document.createElement("li");return n.append(s),n}let l=0;async function r(){var e,t,s;let r=await a(l);e=r._embedded.events,n.innerHTML="",e.forEach(e=>{n.innerHTML+=`
            <li class="cards_item" data-id="${e.id}">
                <div class="cards_poster">
                    <img src="${e.images[0].url}" alt="${e.name}" class="cards_image">
                </div>
                <h2 class="cards_name">${e.name}</h2>
                <p class="cards_date">${e.dates.start.localDate}</p>
                <p class="cards_place">${e._embedded.venues[0].name}</p>
            </li>
        `}),t=r.page.totalPages,s=l,c.innerHTML="",t>29&&(t=29),0===s?c.append(d(s,s+1,!0),d(s+1,">",!1),d(t,t+1,!1)):s===t?c.append(d(0,1,!1),d(s-1,"<",!1),d(s,s+1,!0)):c.append(d(0,1,!1),d(s-1,"<",!1),d(s,s+1,!0),d(s+1,">",!1),d(t,t+1,!1))}r(),document.querySelector(".cards_list").addEventListener("click",e=>{let t=e.target.closest(".cards_item");t&&s(t.dataset.id).then(e=>{let t;(t=document.createElement("div")).classList.add("modal"),t.innerHTML=`
        <div class="modal_content">
            <h2>${e.name}</h2>
            <p>${e.dates?.start?.localDate}</p>
            <p>${e._embedded?.venues?.[0]?.name}</p>
            <button class="modal_close">Close</button>
        </div>
    `,document.body.appendChild(t),t.querySelector(".modal_close").addEventListener("click",()=>{t.remove()})})}),document.querySelector(".cards_pag").addEventListener("click",e=>{let t=e.target.closest(".pag_button");t&&(l=Number(t.dataset.page),r())});
//# sourceMappingURL=experiment-events.56d937c6.js.map
