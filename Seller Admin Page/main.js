document.addEventListener('DOMContentLoaded',() => {

    axios
    .get('https://https://crudcrud.com/api/22204bc202e848278c921829c1edebc0/products')  //urlllllllllll hereeeeeeeeeeeeeeeee
    .then(res => {
        if(res.data){
            var  total = 0
            res.data.forEach((obj) =>{
                total += parseInt(obj.price);
                showOutput(obj)
            }) 
            document.querySelector('#total').textContent  = `total price = ${total}`
        }       
    })
    .catch(err => {
        console.log('Something went wrong ');
        console.log("error : ",err);
    })

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
        price.textContent = obj.price;

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


    function postProduct(obj){
        axios
        .post('https://crudcrud.com/api/22204bc202e848278c921829c1edebc0/products',obj)  //urlllllll hereeeeeeeeeeeeeee 
        .then(res => {
            prev = document.querySelector('#total').textContent;
            total.textContent = parseInt(prev) + parseInt(res.data.price);
            showOutput(res.data)
        })
        .catch(err =>{
            console.log('Something Went Wrong');
            console.log("error : ", err);
        })
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


    function deleteProduct(id){
        axios
        .delete(`https://crudcrud.com/api/22204bc202e848278c921829c1edebc0/products/${id}`)
    }


});