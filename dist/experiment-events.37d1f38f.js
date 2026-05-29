let e="https://app.ticketmaster.com/discovery/v2/",t="JIZUA78ORWWvAkFITEgp9n4NpYKrXysZ";async function a(a){let n=await fetch(e+`events.json?apikey=${t}&size=20&page=${a}`);return await n.json()}async function n(a){let n=await fetch(e+`events/${a}.json?apikey=${t}`);return await n.json()}async function s(a,n){let s=await fetch(e+`events.json?apikey=${t}&size=20&page=${a}&keyword=${n}`);return await s.json()}async function l(a,n){let s=await fetch(e+`events.json?apikey=${t}&size=20&page=${a}&countryCode=${n}`);return await s.json()}let c=document.querySelector(".cards_list");function d(e){c.innerHTML="",e.forEach(e=>{c.innerHTML+=`
            <li class="cards_item" data-id="${e.id}">
                <div class="cards_poster">
                    <img src="${e.images[0].url}" alt="${e.name}" class="cards_image">
                </div>
                <h2 class="cards_name">${e.name}</h2>
                <p class="cards_date">${e.dates.start.localDate}</p>
                <p class="cards_place">${e._embedded?.venues[0]?.name}</p>
            </li>
        `})}let o=document.querySelector(".cards_pag");function r(e,t,a){let n=document.createElement("button");n.type="button",n.classList.add("pag_button"),a&&n.classList.add("pag_current"),n.dataset.page=e,n.textContent=t;let s=document.createElement("li");return s.append(n),s}function i(e,t){o.innerHTML="",e>29?e=29:e--,0===t?o.append(r(t,t+1,!0),r(t+1,">",!1),r(e,e+1,!1)):t===e?o.append(r(0,1,!1),r(t-1,"<",!1),r(t,t+1,!0)):o.append(r(0,1,!1),r(t-1,"<",!1),r(t,t+1,!0),r(t+1,">",!1),r(e,e+1,!1))}let u=0,m=null,p=null;async function v(){let e=await a(u);d(e._embedded.events),i(e.page.totalPages,u)}async function _(){let e=await s(u,m);d(e._embedded.events),i(e.page.totalPages,u)}v(),document.querySelector(".nav_wrap").addEventListener("submit",e=>{e.preventDefault(),m=document.querySelector("input.nav_inp").value,p=null,u=0,document.querySelector(".cards_info").textContent=`Search resulst for "${m}":`,_()}),document.querySelector(".cards_list").addEventListener("click",e=>{let t=e.target.closest(".cards_item");t&&n(t.dataset.id).then(e=>{let t;(t=document.createElement("div")).classList.add("modal"),t.innerHTML=`
        <div class="modal_content">

            <button class="modal_close"></button>

            <div class="modal_circle"></div>

            <div class="modal_placing">
                <img 
                    src="${e.images[1].url}" 
                    alt="${e.name}"
                    class="modal_img"
                >

                <div class="modal_wrap">
                    <h2 class="modal_title">INFO</h2>
                    <p class="modal_text">${e.info||"No info"}</p>

                    <h2 class="modal_title">WHEN</h2>
                    <p class="modal_text">${e.dates?.start?.localDate}<br>${e.dates?.start?.localTime} (${e.dates?.timezone||"underfined timezone"})</p>

                    <h2 class="modal_title">WHERE</h2>
                    <p class="modal_text">${e._embedded?.venues?.[0]?.city?.name}, ${e._embedded?.venues?.[0]?.country?.name}<br>${e._embedded?.venues?.[0]?.name}</p>

                    <h2 class="modal_title">WHO</h2>
                    <p class="modal_text">${e.name}</p>

                    <a href="${e.url}" target="_blank" class="modal_button">
                        BUY TICKETS
                    </a>
                </div>
            </div>
        </div>
    `,document.body.appendChild(t),t.querySelector(".modal_close").addEventListener("click",()=>{t.remove()}),t.addEventListener("click",e=>{e.target===t&&t.remove()}),document.addEventListener("keydown",e=>{"Escape"===e.key&&t.remove()})})}),document.querySelector(".cards_pag").addEventListener("click",e=>{let t=e.target.closest(".pag_button");t&&(u=Number(t.dataset.page),m?_():p?$():v())});let y=document.querySelector(".nav_select");async function $(){let e=await l(u,p);d(e._embedded.events),i(e.page.totalPages,u)}y.addEventListener("change",()=>{p=y.value,m=null,u=0,document.querySelector(".cards_info").textContent=`Resulst from the country of ${y.querySelector(`option[value=${y.value}]`).textContent}:`,$()});
//# sourceMappingURL=experiment-events.37d1f38f.js.map
