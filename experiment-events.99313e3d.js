let e="https://app.ticketmaster.com/discovery/v2/",t="JIZUA78ORWWvAkFITEgp9n4NpYKrXysZ";async function a(a){let n=await fetch(e+`events.json?apikey=${t}&size=20&page=${a}`);return await n.json()}async function n(a){let n=await fetch(e+`events/${a}.json?apikey=${t}`);return await n.json()}async function s(a,n){let s=await fetch(e+`events.json?apikey=${t}&size=20&page=${a}&keyword=${n}`);return await s.json()}async function l(a,n){let s=await fetch(e+`events.json?apikey=${t}&size=20&page=${a}&countryCode=${n}`);return await s.json()}let o=document.querySelector(".cards_list");function c(e){o.innerHTML="",e.forEach(e=>{o.innerHTML+=`
            <li class="cards_item" data-id="${e.id}">
                <div class="cards_poster">
                    <img src="${e.images[0].url}" alt="${e.name}" class="cards_image">
                </div>
                <h2 class="cards_name">${e.name}</h2>
                <p class="cards_date">${e.dates.start.localDate}</p>
                <p class="cards_place">${e._embedded?.venues[0]?.name}</p>
            </li>
        `})}let d=document.querySelector(".cards_pag");function r(e,t,a){let n=document.createElement("button");n.type="button",n.classList.add("pag_button"),a&&n.classList.add("pag_current"),n.dataset.page=e,n.textContent=t;let s=document.createElement("li");return s.append(n),s}function i(e,t){d.innerHTML="",e>29?e=29:e--,0===t?d.append(r(t,t+1,!0),r(t+1,">",!1),r(e,e+1,!1)):t===e?d.append(r(0,1,!1),r(t-1,"<",!1),r(t,t+1,!0)):d.append(r(0,1,!1),r(t-1,"<",!1),r(t,t+1,!0),r(t+1,">",!1),r(e,e+1,!1))}let u=0,m=null,p=null,v=null;async function _(){let e=await a(u);c(e._embedded.events),i(e.page.totalPages,u)}async function f(){let e=await s(u,m);c(e._embedded.events),i(e.page.totalPages,u)}_(),document.querySelector(".nav_wrap").addEventListener("submit",e=>{e.preventDefault(),m=document.querySelector("input.nav_inp").value,p=null,v=null,u=0,document.querySelector(".cards_info").textContent=`Search resulst for "${m}":`,f()}),document.querySelector(".cards_list").addEventListener("click",e=>{let t=e.target.closest(".cards_item");t&&n(t.dataset.id).then(e=>{let t,a;return(t=document.createElement("div")).classList.add("modal"),t.innerHTML=`
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
                    <button class="modal_favorite">Add to favorites</button>
                </div>
            </div>
        </div>
    `,a=t.querySelector(".modal_favorite"),void(-1!==(JSON.parse(localStorage.getItem("favorites"))||[]).indexOf(e.id)&&(a.textContent="Remove from favorites"),document.body.appendChild(t),t.querySelector(".modal_close").addEventListener("click",()=>{t.remove()}),a.addEventListener("click",()=>{let t=JSON.parse(localStorage.getItem("favorites"))||[],n=t.indexOf(e.id);-1!==n?(t.splice(n,1),a.textContent="Add to favorites"):(t.push(e.id),a.textContent="Remove from favorites"),localStorage.setItem("favorites",JSON.stringify(t))}),t.addEventListener("click",e=>{e.target===t&&t.remove()}),document.addEventListener("keydown",e=>{"Escape"===e.key&&t.remove()}))})}),document.querySelector(".cards_pag").addEventListener("click",e=>{let t=e.target.closest(".pag_button");t&&(u=Number(t.dataset.page),m?f():p?h():v?$():_())});let g=document.querySelector(".nav_select"),y=document.querySelector(".favorites_button");async function h(){let e=await l(u,p);c(e._embedded.events),i(e.page.totalPages,u)}async function $(){let e=await [];for await(let t of v[u]){let a=await n(t);e.push(a)}c(e),i(v.length,u)}g.addEventListener("change",()=>{p=g.value,m=null,v=null,u=0,document.querySelector(".cards_info").textContent=`Resulst from the country of ${g.querySelector(`option[value=${g.value}]`).textContent}:`,h()}),y.addEventListener("click",()=>{let e=JSON.parse(localStorage.getItem("favorites"))||[];v=[],m=null,p=null;let t=[];e.forEach((e,a)=>{a%4==0&&0!==a?(v.push(t),(t=[]).push(e)):t.push(e)}),t!==[]&&v.push(t),u=0,$(),document.querySelector(".cards_info").textContent="Favorite events:"});
//# sourceMappingURL=experiment-events.99313e3d.js.map
