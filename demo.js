console.log('new starting');

const obj = document.querySelectorAll('h2');
obj.forEach((h2)=>{
    let str=h2.textContent;
    if(str.includes('array')){
        h2.remove();
    }
});

//obj.forEach((h2)=>h2.textContent='hello');
//obj.forEach((h2)=>h2.remove())

const newItem = document.createElement('h2');
newItem.textContent = 'DOM learned';
document.querySelector('body').append(newItem);