
(function(){
  const btn = document.getElementById("navToggle");
  const menu = document.getElementById("navMenu");
  if(btn && menu){
    btn.addEventListener("click", ()=> menu.classList.toggle("open"));
  }
  const y = document.getElementById("year");
  if(y) y.textContent = new Date().getFullYear();

  // simple lightbox for gallery images
  const lb = document.getElementById("lightbox");
  const lbImg = document.getElementById("lightboxImg");
  if(lb && lbImg){
    document.querySelectorAll("[data-lightbox]").forEach(img=>{
      img.addEventListener("click", ()=>{
        lbImg.src = img.getAttribute("src");
        lb.classList.add("open");
      });
    });
    lb.addEventListener("click", ()=> lb.classList.remove("open"));
  }
})();