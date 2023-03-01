
axios
.get('https://crudcrud.com/api/9592d8ce8fbb46f7977a866714f50519/userdetails')  //here urlllllllllllllllllllll
.then(response => {
    console.log(response.data);
    if(response.data){
        response.data.forEach((res) => {
            showOutput(res)
        } )
    }
})
.catch(err => console.log(err))


function showOutput(res){
    const li = document.createElement('li');
    li.id = res._id;
    li.innerHTML = `${res.name} ${res.email} ${res.phone}`;

    const xbtn = document.createElement('button');
    xbtn.classList.add('btn','btn-sm','btn-danger','me-2');
    xbtn.classList.add('btn','btn-sm','btn-danger','me-2');
    xbtn.type = 'button';
    xbtn.id = 'xbtn'
    xbtn.textContent = 'X';

    const editbtn = document.createElement('button');
    editbtn.classList.add('btn','btn-sm','btn-primary');
    editbtn.type = 'button';
    editbtn.id = 'editbtn';
    editbtn.textContent = 'Edit';

    const div = document.createElement('div');
    div.appendChild(editbtn);
    div.appendChild(xbtn);
    div.classList.add('btn-group','float-end');

    li.appendChild(div);

    document.querySelector('#list').append(li);

}


document.addEventListener('DOMContentLoaded', ()=>{

    document.querySelector('form').onsubmit = (e) =>{
        e.preventDefault();
        const name = document.querySelector('#name').value;
        const email = document.querySelector('#email').value;
        const phone = document.querySelector('#phone').value;
        const obj = {
            "name" : name,
            "email" : email,
            "phone" : phone
        }
        
        postuser(obj);

        document.querySelector('#name').value = '';
        document.querySelector('#email').value = '';
        document.querySelector('#phone').value = '';
        
    }


    function postuser(obj){
        axios
        .post('https://crudcrud.com/api/9592d8ce8fbb46f7977a866714f50519/userdetails',obj)  //here urllllllllllllllllllll
        .then(res => {
            showOutput(res.data)
        })
    }
   


    


});