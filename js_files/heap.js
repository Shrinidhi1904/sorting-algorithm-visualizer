document.querySelector(".heapSort").addEventListener('click', async function(){
    let ele = document.querySelectorAll('.bar');
    disableSortingBtn();
    disableSizeSlider();
    disableNewArrayBtn();
    await heapSort(ele,ele.length);
    enableSortingBtn();
    enableSizeSlider();
    enableNewArrayBtn();
});
async function heapSort(ele, n)
{
    // Build heap (rearrange array)
    for (let i = n / 2 - 1; i >= 0; i--)
        heapify(ele, n, i);
    // One by one extract an element from heap
    for (let i = n - 1; i > 0; i--) {
        // Move current root to end
        await waitforme(delay);
        swap(ele[0], ele[i]);
        ele[i].style.background='green';
        ele[i].style.background='yellow';
        // call max heapify on the reduced heap
        heapify(ele, i, 0);
        await waitforme(delay);
        ele[i].style.background='blue';
        ele[i].style.background='green';
    }
    ele[0].style.background='green';
}
async function heapify(ele, n, i)
{
    let largest = i; // Initialize largest as root
    let l = 2 * i + 1; // left = 2*i + 1
    let r = 2 * i + 2; // right = 2*i + 2
 
    // If left child is larger than root
    if (l < n &&  parseInt(ele[l].style.height) > parseInt(ele[largest].style.height)){
        if(largest!=i){
            ele[largest].style.background='blue';//Color update
        }
        largest = l;
        ele[largest].style.background='red';
    }
        
 
    // If right child is larger than largest so far
    if (r < n && parseInt(ele[r].style.height) > parseInt(ele[largest].style.height)){
        if(largest!=i){
            ele[largest].style.background='blue';//Color update
        }
        largest = r;
        ele[largest].style.background='red';
    }
        
 
    // If largest is not root
    if (largest != i) {
        swap(ele[i], ele[largest]);
        
        // Recursively heapify the affected sub-tree
        heapify(ele, n, largest);
    }
}