import{i}from"./vendor-bfaa29c8.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const d="44806240-6b3f320b71171cc3cb97c5da2",u="https://pixabay.com/api/";async function f(s){const r=await fetch(`${u}?key=${d}&q=${encodeURIComponent(s)}&image_type=photo&orientation=horizontal&safesearch=true`);if(!r.ok)throw new Error("Network response was not ok");return(await r.json()).hits}function m(s,r){const o=s.map(e=>`
    <div class="gallery-item">
      <a href="${e.largeImageURL}" class="gallery-link">
        <img src="${e.webformatURL}" alt="${e.tags}" loading="lazy" />
      </a>
      <div class="info">
        <p>Likes: ${e.likes}</p>
        <p>Views: ${e.views}</p>
        <p>Comments: ${e.comments}</p>
        <p>Downloads: ${e.downloads}</p>
      </div>
    </div>
  `).join("");r.insertAdjacentHTML("beforeend",o),new SimpleLightbox(".gallery a",{}).refresh()}const p=document.querySelector("#search-form"),c=document.querySelector("#gallery"),l=document.querySelector("#loader");async function y(s){s.preventDefault();const r=s.target.elements.query.value.trim();if(!r){i.error({title:"Error",message:"Search query cannot be empty!"});return}l.classList.remove("hidden"),c.innerHTML="";try{const o=await f(r);o.length===0?i.warning({title:"No results",message:"Sorry, there are no images matching your search query. Please try again!"}):m(o,c)}catch{i.error({title:"Error",message:"Something went wrong. Please try again later."})}finally{l.classList.add("hidden")}}p.addEventListener("submit",y);
//# sourceMappingURL=main-db356fed.js.map
