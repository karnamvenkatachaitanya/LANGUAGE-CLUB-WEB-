

function showMessage() {
    const button = document.querySelector("button");
    button.style.transform = "scale(1.2)";
    button.style.transition = "transform 0.3s";
    
    setTimeout(() => {
        alert("Thank you for your interest! We will reach out to you soon.");
        button.style.transform = "scale(1)";
    }, 300);
}// your code goes here
document.addEventListener("DOMContentLoaded", function () {
    const eventList = document.getElementById("event-list");
    const events = [
        
    ];
    
    events.forEach(event => {
        let li = document.createElement("li");
        li.textContent = event;
        li.classList.add("fade-in");
        eventList.appendChild(li);
    });
});

function showMessage() {
    const button = document.querySelector("button");
    button.style.transform = "scale(1.2)";
    button.style.transition = "transform 0.3s";
    
    setTimeout(() => {
        alert("Thank you for your interest! We will reach out to you soon.");
        button.style.transform = "scale(1)";
    }, 300);
}
function showMessage() {
    const button = document.querySelector("button");
    button.style.transform = "scale(1.2)";
    button.style.transition = "transform 0.3s ease-in-out";
    
    setTimeout(() => {
        alert("Thank you for your interest! We will reach out to you soon.");
        button.style.transform = "scale(1)";
    }, 300);
}
