import{S as d,i as l}from"./assets/vendor-208e3228.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function t(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(e){if(e.ep)return;e.ep=!0;const o=t(e);fetch(e.href,o)}})();const u="44806240-6b3f320b71171cc3cb97c5da2",f="https://pixabay.com/api/";async function m(s){const r=await fetch(`${f}?key=${u}&q=${encodeURIComponent(s)}&image_type=photo&orientation=horizontal&safesearch=true`);if(!r.ok)throw new Error("Network response was not ok");return(await r.json()).hits}function y(s,r){const t=s.map(e=>`
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
  `).join("");r.insertAdjacentHTML("beforeend",t),new d(".gallery a",{}).refresh()}const h=document.querySelector("#search-form"),c=document.querySelector("#gallery"),n=document.querySelector("#loader");async function p(s){s.preventDefault();const r=s.target.elements.query.value.trim();if(!r){l.error({title:"Error",message:"Search query cannot be empty!"});return}console.log("Showing loader"),n.classList.remove("hidden"),console.log("Loader is now:",n.classList.contains("hidden")?"hidden - remove":"visible - remove"),c.innerHTML="";try{const t=await m(r);t.length===0?l.warning({title:"No results",message:"Sorry, there are no images matching your search query. Please try again!"}):y(t,c)}catch(t){console.log(t),l.error({title:"Error",message:"Something went wrong. Please try again later."})}finally{console.log("Hiding loader"),n.classList.add("hidden"),console.log("Loader is now:",n.classList.contains("hidden")?"hidden":"visible"),n.style.display="none"}}h.addEventListener("submit",p);
//# sourceMappingURL=commonHelpers.js.map
