
const container = document.getElementById("bar-container");
const barCount = 50;
const delay = 50; // milliseconds
var numbers = [];

// Initial render
init();

// Generate an array of random numbers
function init(){
    for(let i=0; i<barCount; i++){
        numbers[i] = Math.floor(Math.random() * 100) + 1;
    }
    renderBars();

}

// Render the bars
function renderBars() {
    container.innerHTML = "";
    for (let i = 0; i < numbers.length; i++) {
        const bar = document.createElement("div");
        bar.classList.add("bar");
        bar.style.height = numbers[i]*3 + "px";
        container.appendChild(bar);
    }
}

// Swap two elements in the array and re-render
async function swap(a, b) {
    const bars = container.getElementsByClassName('bar');
    bars[a].style.backgroundColor = "red";
    bars[b].style.backgroundColor = "red";
    await sleep(delay);
    [numbers[a], numbers[b]] = [numbers[b], numbers[a]];
    renderBars();
}

// Utility function to introduce delay
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}


