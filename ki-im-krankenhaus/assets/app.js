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
