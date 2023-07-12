const todo = [
    {
        task: 'Get Fresh', 
        completed: true
    },
    {
        task: 'Breakfast', 
        completed: true
    },
    {
        task: 'Pack your lunch tiffin', 
        completed: true
    },
    {
        task: 'Come to office', 
        completed: false
    },
    {
        task: 'Complete Your project', 
        completed: false
    },
    {
        task: 'back to PG',
        completed: false
    },
    {
        task: 'Dinner', 
        completed: false
    },
    {
        task: 'watch movie', 
        completed: false
    }
   ];

const count = todo.filter((item)=>(!item.completed))
const noOfPendingTask = document.createElement('h2');
noOfPendingTask.textContent = `you have ${count.length} pending task`;
document.querySelector('body').appendChild(noOfPendingTask);

todo.forEach((item)=>{
    let nameOfTask = document.createElement('p');
    nameOfTask.textContent = item.task;
    document.querySelector('body').appendChild(nameOfTask);
    let button = document.createElement('button');
    button.textContent = 'Status';
    document.querySelector('body').appendChild(button);
})



const buttonobj = document.querySelectorAll('button');
for(let i=0; i<=7; i++){
    buttonobj[i].addEventListener('click',()=> {
        let status = document.createElement('h3');
        status.textContent = todo[i].completed;
        document.querySelector('body').appendChild(status);
    })
}

/*buttonobj.forEach((item,index) => { console.log(todo.item)
    //button.addEventListener('click',showStatus=()=>buttonobj.findIndex(button));
    })*/

