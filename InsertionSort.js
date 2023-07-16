// Insertion Sort Algorithm

async function insertionSort() {
    document.getElementById("complexity").innerHTML = "Time Complexity : O(n^2)";
    document.getElementById("sorting-type").innerHTML = "Sorting Type : Insertion Sort";
    for(let i=0; i<numbers.length; i++){
        var index = i;
        while(index>0 && numbers[index-1]>=numbers[index]){
            await swap(index-1, index);
            index = index-1;
        }
        
    }
}