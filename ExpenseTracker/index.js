var items = []
const add = ()=>{
    const amount = document.getElementById("amount").value
    const category = document.getElementById("category").value
    const date = document.getElementById("date").value
    const purpose = document.getElementById("purpose").value  
    const item = {
        id: new Date().getTime(),
        amount : amount,
        category:category,
        date:date,
        purpose:purpose
    } 
    items.push(item)
    render()
    console.log(items)
   

}

// const update = (element,amount,category,date,purpose)=>{

// }

const editItem = (id)=>{
  const element = items.filter((i)=>i.id===id)
  console.log(element)
  
//   console.log(element[0].amount)
//   console.log(index)
    document.getElementById("amount").value = element[0].amount
    document.getElementById("category").value = element[0].category
    document.getElementById("date").value = element[0].date
    document.getElementById("purpose").value = element[0].purpose 
    const amount = document.getElementById("amount").value
    const category = document.getElementById("category").value
    const date = document.getElementById("date").value
    const purpose = document.getElementById("purpose").value  
    // update(element,amount,category,date,purpose)
    
 
}

const deleteItem = (id)=>{
    items = items.filter((i)=>i.id!==id)
    render()
}
const render = ()=>{
    document.getElementById("result").innerHTML=""
    items.map((e)=> 
        document.getElementById("result").innerHTML +=       
        `<tr><td>${e.amount}</td><td>${e.category}</td><td>${e.date}</td><td>${e.purpose}</td><td><button onclick=deleteItem(${e.id})>Delete</button></td><td><button onclick=editItem(${e.id})>Edit</button></td></tr>`
    ) 


//  const flag = false;
} 



