import{a as L,S as x,i as d}from"./assets/vendor-5401a4b0.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function n(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(e){if(e.ep)return;e.ep=!0;const o=n(e);fetch(e.href,o)}})();const B="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAEZSURBVHgBrZVRDoMgDIar0fi6m2xH2Y3Ek2w3cFfZXXwBljFQCai0xemfoCaU/xNpKwAirXWrlDY5w8ViPhVmbgwIO14A3zeQKq/2IuwaqOu6A07+zaVUT8iUi+V28rd5NuSIOQs5wxyFUOZKqRtnmIpZQCZz3acWcgcXUjkF0b2bmwFSpAxskMAgYecaWSsFC8AgnHkMqIBR09TCGrnHsZic5iLs3By3ngWsITMgy9yphEyVJZjUM6esHUS9yfea7N7DAmJz/1niM2EhVBZR2UKl8DS/SFO80OhUnCBkoYWgz2MdNAx8q0jFOK/Fy1GQvdqYe50BQc3PgLDmRyCU+aYOfFsoCtPa+yXvp2/ue9rHqLATflCf5QflVUcNIrzeSwAAAABJRU5ErkJggg==";function F(r){return r.map(({webformatURL:t,largeImageURL:n,tags:s,likes:e,views:o,comments:a,downloads:g})=>`<li class="gallery-item js-item">
        
        <a class="gallery-link" href="${n}" >
          <img class="gallery-image" 
            src="${t}"
            alt="${s}"
            width="360px"
            height="200px"
          />

          <ul class="gallery-item js-gallery">
            <label>
              Likes
              <li>${e}</li>
            </label>
            <label>
                Views
                <li>${o}</li>
             </label>
            <label>
              Comments
              <li>${a}</li>
              </label>
            <label>
              Downloads
              <li>${g}</li>
            </label>
          </ul>
         </a>       
      </li>`).join("")}async function b(r,t=1){const n="https://pixabay.com/api/",s="36683727-e929c153efd1b0d2cc7c4f38c",e=`${r}`,o="photo",a="horizontal",g="true",h=`${t}`,y=15,w=`${n}?key=${s}&q=${e}&image_type=${o}&orientastion=${a}&seferearch=${g}&page=${h}&per_page=${y}`;try{const{data:u}=await L.get(w),C=h*y<u.totalHits;if(u.hits.length===0)throw"Sorry, there are no images matching your search query. Please try again!";return[u.hits,C]}catch(u){throw new Error(u)}}const m=document.querySelector(".gallery"),U=document.querySelector(".input-search"),$=document.querySelector(".js-form"),l=document.querySelector(".loader"),c=document.querySelector(".js-load-button");$.addEventListener("submit",O);c.addEventListener("click",I);i(l);i(c);const S=new x(".gallery a",{captionsData:"alt",captionDelay:250});let A=1,f;function I(r){r.preventDefault(),p(l),A+=1,b(f,A).then(([t,n])=>{const s=F(t);if(m.insertAdjacentHTML("beforeend",s),S.refresh(),E(),i(l),!n){i(c);const e="We are sorry, but you have reached the end of search results";d.show({titleColor:"#FFFFFF",titleSize:"16px",messageSize:"16px",messageColor:"#FFFFFF",backgroundColor:"#799CD2",message:`${e}`,position:"bottomLeft",timeout:3e3})}}).catch(t=>{d.show({titleColor:"#FFFFFF",titleSize:"16px",messageSize:"16px",messageColor:"#FFFFFF",backgroundColor:"#799CD2",message:`${t}`,position:"bottomLeft",timeout:3e3}),i(l),i(c)})}function O(r){R(),r.preventDefault(),f=U.value,p(l),i(c),b(f).then(([t,n])=>{const s=F(t);m.innerHTML="",m.insertAdjacentHTML("beforeend",s),S.refresh(),n&&p(c),E(),i(l)}).catch(t=>{m.innerHTML="",d.error({titleColor:"#FFFFFF",titleSize:"16px",messageSize:"16px",messageColor:"#FFFFFF",backgroundColor:"#B51B1B",message:`${t}`,position:"topRight",timeout:3e3,iconUrl:B}),i(l),i(c)})}function E(){const t=document.querySelectorAll(".js-item").item(0).getBoundingClientRect();window.scrollBy({top:t.height*2,behavior:"smooth"})}function p(r){r.classList.remove("hidden")}function i(r){r.classList.add("hidden")}function R(){A=1}
//# sourceMappingURL=commonHelpers.js.map
