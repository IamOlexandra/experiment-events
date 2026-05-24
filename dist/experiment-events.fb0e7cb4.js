let e="https://app.ticketmaster.com/discovery/v2/",t="JIZUA78ORWWvAkFITEgp9n4NpYKrXysZ";async function a(a){let n=await fetch(e+`events.json?apikey=${t}&size=20&page=${a}`);return await n.json()}async function n(a){let n=await fetch(e+`events/${a}.json?apikey=${t}`);return await n.json()}async function s(a,n){let s=await fetch(e+`events.json?apikey=${t}&size=20&page=${a}&keyword=${n}`);return await s.json()}let c=document.querySelector(".cards_list");function d(e){c.innerHTML="",e.forEach(e=>{c.innerHTML+=`
            <li class="cards_item" data-id="${e.id}">
                <div class="cards_poster">
                    <img src="${e.images[0].url}" alt="${e.name}" class="cards_image">
                </div>
                <h2 class="cards_name">${e.name}</h2>
                <p class="cards_date">${e.dates.start.localDate}</p>
                <p class="cards_place">${e._embedded.venues[0].name}</p>
            </li>
        `})}let l=document.querySelector(".cards_pag");function r(e,t,a){let n=document.createElement("button");n.type="button",n.classList.add("pag_button"),a&&n.classList.add("pag_current"),n.dataset.page=e,n.textContent=t;let s=document.createElement("li");return s.append(n),s}function i(e,t){l.innerHTML="",e>29&&(e=29),0===t?l.append(r(t,t+1,!0),r(t+1,">",!1),r(e,e+1,!1)):t===e?l.append(r(0,1,!1),r(t-1,"<",!1),r(t,t+1,!0)):l.append(r(0,1,!1),r(t-1,"<",!1),r(t,t+1,!0),r(t+1,">",!1),r(e,e+1,!1))}let o=0,u=null;async function p(){let e=await a(o);d(e._embedded.events),i(e.page.totalPages,o)}async function m(){let e=await s(o,u);d(e._embedded.events),i(e.page.totalPages,o)}p(),document.querySelector(".nav_wrap").addEventListener("submit",e=>{e.preventDefault(),o=0,u=document.querySelector("input.nav_inp").value,m()}),document.querySelector(".cards_list").addEventListener("click",e=>{let t=e.target.closest(".cards_item");t&&n(t.dataset.id).then(e=>{let t;(t=document.createElement("div")).classList.add("modal"),t.innerHTML=`
        <div class="modal_content">
            <h2>${e.name}</h2>
            <p>${e.dates?.start?.localDate}</p>
            <p>${e._embedded?.venues?.[0]?.name}</p>
            <button class="modal_close">Close</button>
        </div>
    `,document.body.appendChild(t),t.querySelector(".modal_close").addEventListener("click",()=>{t.remove()})})}),document.querySelector(".cards_pag").addEventListener("click",e=>{let t=e.target.closest(".pag_button");t&&(o=Number(t.dataset.page),u?m():p())});
//# sourceMappingURL=experiment-events.fb0e7cb4.js.map
