const insertSortbtn = document.querySelector(".insertionSort");
insertSortbtn.addEventListener('click', async function(){
    disableSortingBtn();
    disableSizeSlider();
    disableNewArrayBtn();
    await insert();
    enableSortingBtn();
    enableSizeSlider();
    enableNewArrayBtn();
});


async function insert(){
    console.log('In insert()');
    let i ,j,key;
    const ele = document.querySelectorAll(".bar");
    ele[0].style.background = 'green';
    for(i=1;i<ele.length;i++){
        key=ele[i].style.height;
        j=i-1;
        ele[i].style.background = 'red';
        await waitforme(delay);
        while(j>=0 && parseInt(ele[j].style.height) > parseInt(key)){
            ele[j].style.background = 'red';
            ele[j + 1].style.height = ele[j].style.height;
            j=j-1;
            await waitforme(delay);
            // color
            for(let k = i; k >= 0; k--){
                ele[k].style.background = 'green';
            }
        }
        ele[j+1].style.height=key;
        ele[i].style.background = 'green';
    }
}