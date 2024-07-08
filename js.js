// var storage ;
//
// if(localStorage.getItem('list') == null ){
//     storage = [];
// }else{
//     storage = JSON.parse(localStorage.getItem('list'));
//     viewProducts();
// }

// function addProduct(){
//     var products={
//         name: document.getElementById('name').value,
//         category:document.getElementById('category').value,
//         price: document.getElementById('price').value,
//         descrption: document.getElementById('description').value,
//     }
//     storage.push(products);
//     localStorage.setItem('list',JSON.stringify(storage));
//     viewProducts();
//
// }
// function viewProducts(){
//     var products ='';
//     for(var i = 0 ; i<storage.length;i++){
//         products +=`<tr>
//         <td>`+i+`</td>
//         <td>`+storage[i].name+`</td>
//         <td>`+storage[i].price+`</td>
//         <td>`+storage[i].category+`</td>
//         <td>`+storage[i].descrption+`</td>
//         <td><button id="delete" class="btn btn-danger" onclick="deleteProduct(`+i+`)" ><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash3" viewBox="0 0 16 16">
//         <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5M11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47M8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5"/>
//       </svg></button></button>     </td>
//         </tr>`;
//     }
//     document.getElementById('tableBody').innerHTML=products;
// }
// (function(){
//     var products ='';
//     for(var i = 0 ; i<storage.length;i++){
//         products +=`<tr>
//         <td>`+storage[i].name+`</td>
//         <td>`+storage[i].price+`</td>
//         <td>`+storage[i].category+`</td>
//         <td>`+storage[i].descrption+`</td>
//         <td><button id="delete" class="btn btn-danger" > remove</button>     </td>
//         </tr>`;        
//     }
//     document.getElementById('tableBody').innerHTML=products;       
// })();

// function search(term){
//     var products = ``;
//     var searchbar = ``;
//     for(var i = 0 ; i < storage.length ; i++){
//     if(storage[i].name.includes(term.trim())){
//         products +=`<tr>
//         <td>`+i+`</td>
//         <td>`+storage[i].name+`</td>
//         <td>`+storage[i].price+`</td>
//         <td>`+storage[i].category+`</td>
//         <td>`+storage[i].descrption+`</td>
//         <td><button id="delete" class="btn btn-danger" onclick="deleteProduct(`+i+`)"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash3" viewBox="0 0 16 16">
//         <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5M11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47M8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5"/>
//       </svg></button></button></td>
//         </tr>`;
//         var test = storage[i].name.replace(term, `<span style="color:red">`+term+`</span>`)
//         searchbar +=`
//         <a class="d-block" href="#">`+test+`</a>`;
//         }
//     }
//     document.getElementById('tableBody').innerHTML=products;
//     document.getElementById('searchResult').innerHTML=searchbar;
// }
// function deleteProduct(index){
//     storage.splice(index,1);
//     localStorage.setItem('list',JSON.stringify(storage));
//     viewProducts();
// }



// let nums=[1,2,3,4,5,6,7,8,9,10];
// function sum(nums) {
//     let x=0;
//     for(let i=0;i<nums.length;i++){
//      x =x+ nums[i];
//     }
//     console.log(x);
// }
// sum(nums);

let person ={
    name: "Ahmed",
    age: 25,
    salary:7000,
    welcome: function(){
        console.log(`your age is ${this.age}`);
    },
    getSalary:function(){
        getTax = ()=>this.salary - this.salary *.1;
        return getTax();
    },
};
// console.log(person.getSalary());
// console.log(...[1,2,3,4,5,6,7,8,9,10]);
 let newObject = new Map();
// newObject.get('name');
// newObject.set('name',"Ahmed");
// newObject.has('name');
// newObject.size;
// newObject.delete("name","Ahmed");
// newObject.clear();

newObject.set("name",'khater').set("age",27).set("getSalary",7000).set('object',{
      firstName: "Ahmed",
      lastName: "Hossam",
    });
newObject.set("welcome",
    function(){
        return `your age is `;
    }
    );
// for(let [key,value] of newObject){
    // console.log(`the key is ${key} and the value is ${value.firstName}`);
// }
let mapObject = new Map(Object.entries(person));

 console.log(mapObject);
 let array=[1,2,3,4,5,6,7,8,9,10,9,8,7,6,5,4,3,2,1];
// let set = new Set(array);
let hellow= function(){
    return 'hello';
}
let s = new Set(array);
s.add(1).add('ahmed').add(hellow()).add(4).add(5).add(4).add(5).delete(10);
// s.clear();
// console.log(s.size);
for (item of s){
    console.log(item);
}