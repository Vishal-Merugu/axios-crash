document.addEventListener('DOMContentLoaded',() => {

    async function always_run(){
        try{
            const response = await fetch('https://crudcrud.com/api/108be208744f4f0aa4f9c5c882aeee23/products'); ///urllllllllllll hereeeeeeeeeeeeeeeeeeeeee
            const data = await response.json();
            if(data){
                var total = 0;
                data.forEach((obj) =>{
                    total += parseInt(obj.price);
                    showOutput(obj)
                })
                document.querySelector('#total').textContent = `${total}`
            }
        }catch(err){
            console.log(err);
        }   
    }
    always_run();

    document.querySelector('form').onsubmit = (e) =>{
        e.preventDefault();

        const product = document.querySelector('#product').value;
        const price = document.querySelector('#price').value;

        const obj = {
            "product" : product,
            "price" :  price
        }
        postProduct(obj);
    }

    function showOutput(obj){
        const product = document.createElement('td');
        product.textContent = obj.product;

        const price = document.createElement('td');
        price.textContent = parseInt(obj.price);

        const del = document.createElement('td');
        btn = document.createElement('button');
        btn.innerHTML = "delete" ;
        btn.classList.add('btn', 'btn-sm','btn-danger'
        );
        btn.id = 'del'
        del.appendChild(btn);

        const row = document.createElement('tr');
        row.id = obj._id;

        row.append(product, price, del);

        document.querySelector('tbody').appendChild(row);
    }


    async function postProduct(obj){
        try{
            //url hereeeeeeeeeeeeeeeeeeeeeeeeeee
            const response = await fetch('https://crudcrud.com/api/108be208744f4f0aa4f9c5c882aeee23/products',{
                method : 'POST',
                headers : {
                    'Content-Type' : 'application/json'
                },
                body : JSON.stringify(obj)
            })
            const data = await response.json()
            const prev = document.querySelector('#total').textContent;
            total.textContent = parseInt(prev) + parseInt(data.price);
            showOutput(data)
        }catch(err){
            console.log(err);
        }
    }


    document.querySelector('.table').onclick = (e) =>{
        if(e.target.id === 'del'){
            const btn = e.target.parentNode;
            const id = e.target.parentNode.parentNode.id;
            const currprice = btn.previousElementSibling.textContent;
            document.getElementById(id).remove();
            prev = document.querySelector('#total').textContent;
            document.querySelector('#total').textContent  = parseInt(prev) - parseInt(currprice);
            deleteProduct(id);
        }
    }


    async function deleteProduct(id){
        try{
            const response = await fetch(`https://crudcrud.com/api/108be208744f4f0aa4f9c5c882aeee23/products/${id}`,{
                method : 'DELETE'
            })
        }catch(error){
            console.log(error);
        }
    }


});









// async function fetchData() {
//     try {
//         const response = await fetch('http://...com/data');
//         const data = await response.json();
//         console.log(data);
//       } catch (error) {
//         console.error(error);
//       }
// }