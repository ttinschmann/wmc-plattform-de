/* Größenordnung für das eigene Haus: Betten x 2,2 Vollkräfte x jede zweite x 0,5 Stunden x 21 Arbeitstage */
(function(){
  var b=document.getElementById("beds"),o=document.getElementById("hours"),v=document.getElementById("bedsv");
  if(!b||!o)return;
  function f(){var n=+b.value,h=Math.round(n*2.2*0.5*0.5*21/100)*100;o.textContent=h.toLocaleString("de-DE");v.textContent=n.toLocaleString("de-DE");}
  b.addEventListener("input",f);f();
})();
/* Film: Bereich ausblenden, solange der Film nicht da ist; sobald er spielbar ist, wieder zeigen */
(function(){var f=document.querySelector("video[data-film]");if(!f)return;var s=f.closest(".film");
  function off(){if(s)s.classList.add("off");}
  function on(){if(s)s.classList.remove("off");f.removeAttribute("data-off");}
  f.addEventListener("error",off);f.addEventListener("loadeddata",on);f.addEventListener("canplay",on);
  if(f.readyState>=2)on();else setTimeout(function(){if(f.readyState<2)off();},6000);})();

/* v10: Menü links folgt dem Scrollen, Text blendet ein, Zahlen zählen hoch */
(function(){
  var links=[].slice.call(document.querySelectorAll(".fx-nav a")),items=[].slice.call(document.querySelectorAll(".fx-item"));
  if(links.length&&"IntersectionObserver" in window){
    var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){links.forEach(function(a){a.setAttribute("aria-current",a.getAttribute("href")==="#"+e.target.id?"true":"false");});}});},{rootMargin:"-30% 0px -60% 0px"});
    items.forEach(function(i){io.observe(i);});links[0].setAttribute("aria-current","true");
  }
  var ruhig=window.matchMedia&&window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if(!("IntersectionObserver" in window)||ruhig)return;
  var rv=[].slice.call(document.querySelectorAll("main .sec h2, main .sec .lead, main .pil .body, .fx-item, .zeich, .ft > div, .way li, .alt tbody tr, .map"));
  rv.forEach(function(e){e.classList.add("rv");});
  var io2=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add("da");io2.unobserve(e.target);}});},{rootMargin:"0px 0px -8% 0px"});
  rv.forEach(function(e){io2.observe(e);});
  setTimeout(function(){rv.forEach(function(e){var r=e.getBoundingClientRect();if(r.top<innerHeight)e.classList.add("da");});},60);
  var z=[].slice.call(document.querySelectorAll("[data-z]"));
  var io3=new IntersectionObserver(function(es){es.forEach(function(e){if(!e.isIntersecting)return;io3.unobserve(e.target);var n=+e.target.getAttribute("data-z"),t0=null;
    function f(t){if(!t0)t0=t;var k=Math.min(1,(t-t0)/900);e.target.textContent=Math.round(n*(1-Math.pow(1-k,3)));if(k<1)requestAnimationFrame(f);}requestAnimationFrame(f);});},{rootMargin:"0px 0px -10% 0px"});
  z.forEach(function(e){io3.observe(e);});
})();
