// Accordion
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
        } else {
        panel.style.maxHeight = panel.scrollHeight + "px";
        } 
    });
}

// Project boxes
function openProject(projectId) {
    document.querySelector(".projects").style.display = "none";

    document.querySelectorAll(".project-content").forEach(project => {
        project.style.display = "none";
    });

    document.getElementById(projectId).style.display = "block";
}

function closeProject() {
    document.querySelectorAll(".project-content").forEach(project => {
        project.style.display = "none";
    });

    document.querySelector(".projects").style.display = "flex";
}