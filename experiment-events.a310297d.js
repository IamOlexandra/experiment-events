let e="https://app.ticketmaster.com/discovery/v2/",t="JIZUA78ORWWvAkFITEgp9n4NpYKrXysZ";async function a(a){let n=await fetch(e+`events.json?apikey=${t}&size=20&page=${a}`);return await n.json()}async function n(a){let n=await fetch(e+`events/${a}.json?apikey=${t}`);return await n.json()}async function s(a,n){let s=await fetch(e+`events.json?apikey=${t}&size=20&page=${a}&keyword=${n}`);return await s.json()}let c=document.querySelector(".cards_list");function d(e){c.innerHTML="",e.forEach(e=>{c.innerHTML+=`
            <li class="cards_item" data-id="${e.id}">
                <div class="cards_poster">
                    <img src="${e.images[0].url}" alt="${e.name}" class="cards_image">
                </div>
                <h2 class="cards_name">${e.name}</h2>
                <p class="cards_date">${e.dates.start.localDate}</p>
                <p class="cards_place">${e._embedded.venues[0].name}</p>
            </li>
        `})}let r=document.querySelector(".cards_pag");function l(e,t,a){let n=document.createElement("button");n.type="button",n.classList.add("pag_button"),a&&n.classList.add("pag_current"),n.dataset.page=e,n.textContent=t;let s=document.createElement("li");return s.append(n),s}function i(e,t){r.innerHTML="",e>29&&(e=29),0===t?r.append(l(t,t+1,!0),l(t+1,">",!1),l(e,e+1,!1)):t===e?r.append(l(0,1,!1),l(t-1,"<",!1),l(t,t+1,!0)):r.append(l(0,1,!1),l(t-1,"<",!1),l(t,t+1,!0),l(t+1,">",!1),l(e,e+1,!1))}let o=0,p=null;async function u(){let e=await a(o);d(e._embedded.events),i(e.page.totalPages,o)}async function m(){let e=await s(o,p);d(e._embedded.events),i(e.page.totalPages,o)}u(),document.querySelector(".nav_wrap").addEventListener("submit",e=>{e.preventDefault(),o=0,p=document.querySelector("input.nav_inp").value,document.querySelector(".cards_info").textContent=`Search resulst for "${p}":`,m()}),document.querySelector(".cards_list").addEventListener("click",e=>{let t=e.target.closest(".cards_item");t&&n(t.dataset.id).then(e=>{let t;(t=document.createElement("div")).classList.add("modal"),t.innerHTML=`
        <div class="modal_content">

            <button class="modal_close">x</button>

            <img 
                src="${e.images[0].url}" 
                alt="${e.name}"
                class="modal_img"
            >

            <h2>INFO</h2>
            <p>${e.info||"No info"}</p>

            <h2>WHEN</h2>
            <p>${e.dates?.start?.localDate}</p>

            <h2>WHERE</h2>
            <p>${e._embedded?.venues?.[0]?.name}</p>

            <h2>WHO</h2>
            <p>${e.name}</p>

            <h2>PRICES</h2>
            <p>
                Standard ${e.priceRanges?.[0]?.min||"-"} 
                -
                ${e.priceRanges?.[0]?.max||"-"} USD
            </p>

            <a href="${e.url}" target="_blank">
                BUY TICKETS
            </a>

        </div>
    `,document.body.appendChild(t),t.querySelector(".modal_close").addEventListener("click",()=>{t.remove()}),t.addEventListener("click",e=>{e.target===t&&t.remove()}),document.addEventListener("keydown",e=>{"Escape"===e.key&&t.remove()})})}),document.querySelector(".cards_pag").addEventListener("click",e=>{let t=e.target.closest(".pag_button");t&&(o=Number(t.dataset.page),p?m():u())});
//# sourceMappingURL=experiment-events.a310297d.js.map
