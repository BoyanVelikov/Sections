function create(words) {
   for (each of words) {
      let div = document.createElement("div");
      let par = document.createElement("p");
      par.textContent = each;
      par.style.display = "none";
      div.appendChild(par);
      div.addEventListener("click", sectionsF);

      function sectionsF() {
         par.style.display = "inline-block";
      }
      cont = document.getElementById("content");
      cont.appendChild(div);
   }
}