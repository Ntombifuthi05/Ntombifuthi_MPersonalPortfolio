
function downloadCV() {
  const link = document.createElement("a");
  link.href = "assets/ntombifuthiP_updatedCv.pdf";
  link.download = "ntombifuthiP_updatedCV.pdf";
  link.click();
}

function scrollToProjects(){
  document.getElementById('projects').scrollIntoView({behavior:'smooth'});
}

const roles=["IT Graduate","C#, ASP.Net Developer","Flutter Developer","Web Developer"];
let i=0,j=0,isDeleting=false;

function type(){
  let current=roles[i];
  document.getElementById("typing").textContent=current.substring(0,j);

  if(!isDeleting && j<current.length) j++;
  else if(isDeleting && j>0) j--;

  if(j===current.length) isDeleting=true;
  if(j===0 && isDeleting){ isDeleting=false; i=(i+1)%roles.length; }

  setTimeout(type,isDeleting?50:100);
}





document.addEventListener("DOMContentLoaded", () => {

  const toggleBtn = document.getElementById("theme-toggle");
  const body = document.body;
  const icon = toggleBtn.querySelector("i");

  // Load saved theme
  if (localStorage.getItem("theme") === "light") {
    body.classList.add("light-mode");
    icon.classList.replace("fa-moon", "fa-sun");
  }

  // Toggle theme
  toggleBtn.addEventListener("click", () => {

    body.classList.toggle("light-mode");

    if (body.classList.contains("light-mode")) {
      icon.classList.replace("fa-moon", "fa-sun");
      localStorage.setItem("theme", "light");
    } else {
      icon.classList.replace("fa-sun", "fa-moon");
      localStorage.setItem("theme", "dark");
    }

  });
  
  type();

});

