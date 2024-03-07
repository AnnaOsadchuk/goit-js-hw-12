import{S as x,i as g}from"./assets/vendor-5b791d57.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const U="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAEZSURBVHgBrZVRDoMgDIar0fi6m2xH2Y3Ek2w3cFfZXXwBljFQCai0xemfoCaU/xNpKwAirXWrlDY5w8ViPhVmbgwIO14A3zeQKq/2IuwaqOu6A07+zaVUT8iUi+V28rd5NuSIOQs5wxyFUOZKqRtnmIpZQCZz3acWcgcXUjkF0b2bmwFSpAxskMAgYecaWSsFC8AgnHkMqIBR09TCGrnHsZic5iLs3By3ngWsITMgy9yphEyVJZjUM6esHUS9yfea7N7DAmJz/1niM2EhVBZR2UKl8DS/SFO80OhUnCBkoYWgz2MdNAx8q0jFOK/Fy1GQvdqYe50BQc3PgLDmRyCU+aYOfFsoCtPa+yXvp2/ue9rHqLATflCf5QflVUcNIrzeSwAAAABJRU5ErkJggg==";function p(s){return s.map(({webformatURL:o,largeImageURL:r,tags:i,likes:e,views:t,comments:n,downloads:d})=>`<li class="gallery-item js-item">
        
        <a class="gallery-link" href="${r}" >
          <img class="gallery-image" 
            src="${o}"
            alt="${i}"
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
                <li>${t}</li>
             </label>
            <label>
              Comments
              <li>${n}</li>
              </label>
            <label>
              Downloads
              <li>${d}</li>
            </label>
          </ul>
         </a>       
      </li>`).join("")}function F(s,o=1){const r="https://pixabay.com/api/",i="36683727-e929c153efd1b0d2cc7c4f38c",e=`${s}`,t="photo",n="horizontal",d="true",m=`${o}`,A=15,L=`${r}?key=${i}&q=${e}&image_type=${t}&orientastion=${n}&seferearch=${d}&page=${m}&per_page=${A}`,f="Sorry, there are no images matching your search query. Please try again!";return fetch(L).then(l=>{if(!l.ok)throw new Error(f);return l.json()}).then(l=>{if(l.hits.length===0)throw new Error(f);const C=m*A<=l.totalHits;return[l.hits,C]})}const u=document.querySelector(".gallery"),y=document.querySelector(".input-search"),$=document.querySelector(".js-form"),b=document.querySelector(".loader");$.addEventListener("submit",I);const a=document.querySelector(".js-load");c();const S=new x(".gallery a",{captionsData:"alt",captionDelay:250});let h=1;a.addEventListener("click",B);function B(s){s.preventDefault();const o=y.value;w(),h+=1,F(o,h).then(([r,i])=>{const e=p(r);if(u.insertAdjacentHTML("beforeend",e),S.refresh(),E(),c(),!i){a.hidden=!0;const t="We are sorry, but you have reached the end of search results";g.show({titleColor:"#FFFFFF",titleSize:"16px",messageSize:"16px",messageColor:"#FFFFFF",backgroundColor:"#2E2F42",message:`${t}`,position:"bottomLeft",timeout:3e3})}}).catch(r=>{g.show({titleColor:"#FFFFFF",titleSize:"16px",messageSize:"16px",messageColor:"#FFFFFF",backgroundColor:"#2E2F42",message:`${r}`,position:"bottomLeft",timeout:3e3}),c(),a.hidden=!0})}function I(s){s.preventDefault();const o=y.value;w(),F(o).then(([r,i])=>{const e=p(r);u.innerHTML="",u.insertAdjacentHTML("beforeend",e),S.refresh(),a.hidden=!1,E(),c()}).catch(r=>{u.innerHTML="",g.error({titleColor:"#FFFFFF",titleSize:"16px",messageSize:"16px",messageColor:"#FFFFFF",backgroundColor:"#B51B1B",message:`${r}`,position:"topRight",timeout:3e3,iconUrl:U}),c(),a.hidden=!0})}function E(){const o=document.querySelectorAll(".js-item").item(0).getBoundingClientRect();window.scrollBy({top:o.height*2,behavior:"smooth"})}function w(){b.classList.remove("hidden")}function c(){b.classList.add("hidden")}
//# sourceMappingURL=commonHelpers.js.map
