// Nexia Living — shared behaviour
(function(){
  var nav = document.getElementById('nav');
  if(nav){
    var solid = nav.classList.contains('solid');
    var onScroll = function(){ nav.classList.toggle('scrolled', window.scrollY > 40); };
    if(!solid){ onScroll(); window.addEventListener('scroll', onScroll, {passive:true}); }
    else { nav.classList.add('scrolled'); }
  }
  var burger = document.getElementById('burger');
  var links = document.getElementById('navlinks');
  if(burger && links){
    burger.addEventListener('click', function(){
      burger.classList.toggle('open'); links.classList.toggle('open');
    });
    links.querySelectorAll('a').forEach(function(a){
      a.addEventListener('click', function(){ burger.classList.remove('open'); links.classList.remove('open'); });
    });
  }
  var io = new IntersectionObserver(function(entries){
    entries.forEach(function(e){ if(e.isIntersecting){ e.target.classList.add('in'); io.unobserve(e.target);} });
  }, {threshold:0.12, rootMargin:'0px 0px -8% 0px'});
  document.querySelectorAll('.reveal').forEach(function(el){ io.observe(el); });
})();
