let arrTodo=[];
let request=prompt("Enter your request list/add/delete/quit");

while(true){

    if(request=="quit")
    {
      console.log("you quit");
      break;
    }

    if(request=="list")
    {
        for(let i=0;i<arrTodo.length;i++)
        {
            console.log(arrTodo[i]);
        }
    }
    else if(request=="add")
    {
     task=prompt("Enter the tasks");
     arrTodo.push(task);
     console.log("Task Added");
    }
    else if(request=="delete")
    {
       let idx=prompt("Enter the index of the element you want to delete");
       arrTodo.splice(idx,1);
        console.log("Task Deleted");
    }
    else
    {
      console.log("Wrong Request");
    }

    request=prompt("Enter your request");
}