document.querySelector(".selectionSort").addEventListener('click', async function(){
    disableSortingBtn();
    disableSizeSlider();
    disableNewArrayBtn();
    await select();
    enableSortingBtn();
    enableSizeSlider();
    enableNewArrayBtn();
});

async function select(){
    console.log('In selection()');
    const ele = document.querySelectorAll(".bar");
    for(let i = 0; i < ele.length; i++){
        console.log('In ith loop');
        let min_index = i;
        ele[i].style.background = 'blue';
        for(let j = i+1; j < ele.length; j++){
            console.log('In jth loop');
            ele[j].style.background = 'red';

            await waitforme(delay);
            if(parseInt(ele[j].style.height) < parseInt(ele[min_index].style.height)){
                console.log('In if condition height comparision');
                if(min_index !== i){
                    ele[min_index].style.background = '#A683E3';
                }
                min_index = j;
            } 
            else{
                ele[j].style.background = '#A683E3';
            }   
        }
        await waitforme(delay);
        swap(ele[min_index], ele[i]);
        ele[min_index].style.background = '#A683E3';
        ele[i].style.background = 'green';
    }
}