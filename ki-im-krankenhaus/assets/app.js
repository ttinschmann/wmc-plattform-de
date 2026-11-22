/* Größenordnung für das eigene Haus: Betten x 2,2 Vollkräfte x jede zweite x 0,5 Stunden x 21 Arbeitstage */
(function(){
  var b=document.getElementById("beds"),o=document.getElementById("hours"),v=document.getElementById("bedsv");
  if(!b||!o)return;
  function f(){var n=+b.value,h=Math.round(n*2.2*0.5*0.5*21/100)*100;o.textContent=h.toLocaleString("de-DE");v.textContent=n.toLocaleString("de-DE");}
  b.addEventListener("input",f);f();
})();
/* Film: Wenn er nicht lädt, bleibt der Hinweistext stehen */
(function(){var f=document.querySelector("video[data-film]");if(!f)return;function off(){var s=f.closest(".film");if(s)s.classList.add("off");}
  f.addEventListener("error",off);setTimeout(function(){if(f.readyState===0)off();},4000);})();
