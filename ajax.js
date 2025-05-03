//create an instance
const obj = new XMLHttpRequest()
//call the open method
obj.open("get","https://jsonplaceholder.typicode.com/todos")
//request send
obj.send()
console.log(obj.readyState); // readyState is a property inside a class.the value is from 1-4.response will be get when it is 4
obj.onreadystatechange = ()=>{ //function to change the readystate property
    console.log(obj.readyState);
    if(obj.readyState == 4){
        if(obj.status >=200 && obj.status<300){
            let alltodos = JSON.parse(obj.responseText)
            console.log(alltodos);
            alltodos.forEach((item)=>{
                result.innerHTML += //+= is used to add all data.otherwise it will reassign the value
                `<tr>
                <td>${item.userId}</td>
                <td>${item.id}</td>
                <td>${item.title}</td>
                <td>${item.completed}</td>
                </tr>`
            })
            

            
        }
        else{
            console.log('no response');
            
        }
        
    }
    else{
        console.log('no response');
        
    }
    
}
//api call is an async function.it have time delay
