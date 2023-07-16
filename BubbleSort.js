// Bubble Sort Algorithm

async function bubbleSort() {
    document.getElementById("complexity").innerHTML = "Time Complexity : O(n^2)";
    document.getElementById("sorting-type").innerHTML = "Sorting Type : Bubble Sort";
    for (let i = 0; i < numbers.length; i++) {
        for (let j = 0; j < numbers.length - i - 1; j++) {
            if (numbers[j] > numbers[j + 1]) {
                await swap(j, j + 1);
            }
        }
    }
}