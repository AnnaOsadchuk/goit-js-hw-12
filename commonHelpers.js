import{a as L,S as x,i as d}from"./assets/vendor-5401a4b0.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const B="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAEZSURBVHgBrZVRDoMgDIar0fi6m2xH2Y3Ek2w3cFfZXXwBljFQCai0xemfoCaU/xNpKwAirXWrlDY5w8ViPhVmbgwIO14A3zeQKq/2IuwaqOu6A07+zaVUT8iUi+V28rd5NuSIOQs5wxyFUOZKqRtnmIpZQCZz3acWcgcXUjkF0b2bmwFSpAxskMAgYecaWSsFC8AgnHkMqIBR09TCGrnHsZic5iLs3By3ngWsITMgy9yphEyVJZjUM6esHUS9yfea7N7DAmJz/1niM2EhVBZR2UKl8DS/SFO80OhUnCBkoYWgz2MdNAx8q0jFOK/Fy1GQvdqYe50BQc3PgLDmRyCU+aYOfFsoCtPa+yXvp2/ue9rHqLATflCf5QflVUcNIrzeSwAAAABJRU5ErkJggg==";function y(o){return o.map(({webformatURL:r,largeImageURL:s,tags:i,likes:e,views:t,comments:n,downloads:m})=>`<li class="gallery-item js-item">
        
        <a class="gallery-link" href="${s}" >
          <img class="gallery-image" 
            src="${r}"
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
              <li>${m}</li>
            </label>
          </ul>
         </a>       
      </li>`).join("")}async function F(o,r=1){const s="https://pixabay.com/api/",i="36683727-e929c153efd1b0d2cc7c4f38c",e=`${o}`,t="photo",n="horizontal",m="true",f=`${r}`,h=15,C=`${s}?key=${i}&q=${e}&image_type=${t}&orientastion=${n}&seferearch=${m}&page=${f}&per_page=${h}`;try{const{data:u}=await L.get(C),E=f*h<=u.totalHits;if(u.hits.length===0)throw"Sorry, there are no images matching your search query. Please try again!";return[u.hits,E]}catch(u){throw new Error(u)}}const g=document.querySelector(".gallery"),b=document.querySelector(".input-search"),U=document.querySelector(".js-form"),l=document.querySelector(".loader"),c=document.querySelector(".js-load-button");U.addEventListener("submit",I);c.addEventListener("click",$);a(l);a(c);const S=new x(".gallery a",{captionsData:"alt",captionDelay:250});let p=1;function $(o){o.preventDefault();const r=b.value;A(l),p+=1,F(r,p).then(([s,i])=>{const e=y(s);if(g.insertAdjacentHTML("beforeend",e),S.refresh(),w(),a(l),!i){a(c);const t="We are sorry, but you have reached the end of search results";d.show({titleColor:"#FFFFFF",titleSize:"16px",messageSize:"16px",messageColor:"#FFFFFF",backgroundColor:"#799CD2",message:`${t}`,position:"bottomLeft",timeout:3e3})}}).catch(s=>{d.show({titleColor:"#FFFFFF",titleSize:"16px",messageSize:"16px",messageColor:"#FFFFFF",backgroundColor:"#799CD2",message:`${s}`,position:"bottomLeft",timeout:3e3}),a(l),a(c)})}function I(o){o.preventDefault();const r=b.value;A(l),F(r).then(([s,i])=>{const e=y(s);g.innerHTML="",g.insertAdjacentHTML("beforeend",e),S.refresh(),A(c),w(),a(l)}).catch(s=>{g.innerHTML="",d.error({titleColor:"#FFFFFF",titleSize:"16px",messageSize:"16px",messageColor:"#FFFFFF",backgroundColor:"#B51B1B",message:`${s}`,position:"topRight",timeout:3e3,iconUrl:B}),a(l),a(c)})}function w(){const r=document.querySelectorAll(".js-item").item(0).getBoundingClientRect();window.scrollBy({top:r.height*2,behavior:"smooth"})}function A(o){o.classList.remove("hidden")}function a(o){o.classList.add("hidden")}
//# sourceMappingURL=commonHelpers.js.map
