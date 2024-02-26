var storage ;

if(localStorage.getItem('list') == null ){
    storage = [];
}else{
    storage = JSON.parse(localStorage.getItem('list'));
    viewProducts();
}

function addProduct(){
    var products={
        name: document.getElementById('name').value,
        category:document.getElementById('category').value,
        price: document.getElementById('price').value,
        descrption: document.getElementById('description').value,
    }
    storage.push(products);
    localStorage.setItem('list',JSON.stringify(storage));
    viewProducts();

}
function viewProducts(){
    var products ='';
    for(var i = 0 ; i<storage.length;i++){
        products +=`<tr>
        <td>`+i+`</td>
        <td>`+storage[i].name+`</td>
        <td>`+storage[i].price+`</td>
        <td>`+storage[i].category+`</td>
        <td>`+storage[i].descrption+`</td>
        <td><button id="delete" class="btn btn-danger" onclick="deleteProduct(`+i+`)" ><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash3" viewBox="0 0 16 16">
        <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5M11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47M8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5"/>
      </svg></button></button>     </td>
        </tr>`;        
    }
    document.getElementById('tableBody').innerHTML=products;       
}
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

function search(term){
    var products = ``;
    var searchbar = ``;
    for(var i = 0 ; i < storage.length ; i++){
    if(storage[i].name.includes(term.trim())){
        products +=`<tr>
        <td>`+i+`</td>
        <td>`+storage[i].name+`</td>
        <td>`+storage[i].price+`</td>
        <td>`+storage[i].category+`</td>
        <td>`+storage[i].descrption+`</td>
        <td><button id="delete" class="btn btn-danger" onclick="deleteProduct(`+i+`)"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash3" viewBox="0 0 16 16">
        <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5M11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47M8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5"/>
      </svg></button></button></td>
        </tr>`;   
        var test = storage[i].name.replace(term, `<span style="color:red">`+term+`</span>`)
        searchbar +=`
        <a class="d-block" href="#">`+test+`</a>`;    
        }
    }
    document.getElementById('tableBody').innerHTML=products;
    document.getElementById('searchResult').innerHTML=searchbar;
}
function deleteProduct(index){
    storage.splice(index,1);
    localStorage.setItem('list',JSON.stringify(storage));
    viewProducts();
}