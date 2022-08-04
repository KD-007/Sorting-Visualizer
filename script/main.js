var container =document.querySelector(".container");
// var size =document.querySelector("#size");

// size.value=Math.floor(Math.random()*101)

var range = 20;

const generateArrays = async ()=>{

for (let i =0 ; i<range ; i++) {
    height = Math.floor(Math.random()*35)+2

    const col = document.createElement("div");
    // console.log(height);
    col.style=` height:${height}rem;`;
    col.classList.add('bar')
    const label  = document.createElement("label");
    label.textContent=height;
    label.classList.add('label')
    col.appendChild(label);
    container.appendChild(col);


}



}
generateArrays()
const genNewArray = document.querySelector(".genNewArray");
genNewArray.addEventListener("click",(e)=>{
    location.reload();
});
// console.log(genNewArray)



//-------------------------------------------------------------------------------------------------------
var bars = document.querySelectorAll(".bar");
var labels = document.querySelectorAll(".label");
var bubbleSortBtd = document.querySelector(".bubbleSort")
const bubbleSort = async function(r) {
        for(var i=0; i<r;i++){
            await new Promise((resolve) =>
		    setTimeout(() => {
		    resolve();
		    }, 300)
	);

            for(let j =0;j<(r-1-i);j++){
                bars[j].classList.remove("blue");
                bars[j+1].classList.remove("blue");
                bars[j].classList.add("red");
                bars[j+1].classList.add("red");
                await new Promise((resolve) =>
                setTimeout(() => {
                resolve();
                }, 80)
            );
        
                const height1 = parseInt(labels[j].innerHTML);
                const height2 = parseInt(labels[j+1].innerHTML);
                if(height1 > height2){
                    bars[j].style = `height:${height2}rem`
                    bars[j+1].style = `height:${height1}rem`
                    labels[j].textContent = `${height2}`
                    labels[j+1].textContent = `${height1}`


                }
                bars[j].classList.add("blue");

            }
            
            bars[r-i-1].classList.add("green")
           


        }
    }
 


bubbleSortBtd.addEventListener("click",()=>{  
    bubbleSort(range)
})    

//-----------------------------------------------------------------------------------------------------------------
const selectionSortBtd = document.querySelector(".selectionSort")

const selectionSort = async ()=>{
    for(var i=0; i<range-1;i++){
        await new Promise((resolve) =>
        setTimeout(() => {
        resolve();
        }, 200)
        )
        bars[i].classList.add("blue");
            let smallIndex=i;
            for(let j=1+i;j<range;j++){
                bars[j].classList.remove("blue");
                bars[j].classList.add("red");
                await new Promise((resolve) =>
                setTimeout(() => {
                resolve();
                }, 100)
                )

                if(parseInt(labels[smallIndex].innerHTML)>parseInt(labels[j].innerHTML)){
                    smallIndex=j;
                    
                }
                bars[j].classList.add("blue");
            }
            // await new Promise((resolve) =>
            //         setTimeout(() => {
            //         resolve();
            //         }, 100)
            //         )
            const height1 = parseInt(labels[i].innerHTML);
            const height2 = parseInt(labels[smallIndex].innerHTML);        

            
            labels[smallIndex].innerHTML=height1
            labels[i].innerHTML=height2;
            
            bars[i].style = `height:${height2}rem`
            bars[smallIndex].style = `height:${height1}rem`
            bars[i].classList.add("green")
        }
        bars[range-1].classList.add("green")
}

selectionSortBtd.addEventListener("click", ()=>{
    selectionSort()
})


//-------------------------------------------------------------------------------------------------------
const insertionSortBtd =document.querySelector(".insertionSort")

const insertionSort =async ()=>{
    for(let i =1; i<range;i++){
        await new Promise((resolve) =>
        setTimeout(() => {
        resolve();
        }, 100)
        )
        let current=parseInt(labels[i].innerHTML);
        let j=i-1;

        while(j>=0 && parseInt(labels[j].innerHTML)>current){
            bars[j+1].classList.add("red")
            await new Promise((resolve) =>
            setTimeout(() => {
            resolve();
            }, 70)
            )
            labels[j+1].innerHTML=parseInt(labels[j].innerHTML)
            bars[j+1].classList.add("green")
            bars[j+1].style.height=`${parseInt(labels[j].innerHTML)}rem`
            j--;
        }
        labels[j+1].innerHTML=current;
        bars[j+1].classList.add("green")
        bars[j+1].style.height=`${current}rem`
    }
}

insertionSortBtd.addEventListener("click" , ()=>{
    insertionSort()
})