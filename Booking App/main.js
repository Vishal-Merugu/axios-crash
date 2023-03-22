const url = 'http://localhost:3000/booking'

function showOutput(res){
    const li = document.createElement('li');
    li.id = res.id;
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
    axios
    .get(`${url}/users`)  //here urlllllllllllllllllllll
    .then(response => {
        if(response.data){
            response.data.forEach((res) => {
                showOutput(res)
            } )
        }
    })
    .catch(err => console.log(err))

    document.querySelector('form').onsubmit = (e) =>{
        e.preventDefault();
        const name = document.querySelector('#name').value;
        const email = document.querySelector('#email').value;
        const phone = document.querySelector('#phone').value;
        const userId = document.querySelector('#userId').value;
        let obj = {
            "name" : name,
            "email" : email,
            "phone" : phone
        }
        if (userId !== ''){
            putUser(obj,userId)
        }else{
            postuser(obj);
        }
        document.querySelector('#name').value = '';
        document.querySelector('#email').value = '';
        document.querySelector('#phone').value = '';    
    }


    function postuser(obj){
        axios
        .post(`${url}/user`,obj)  //here urllllllllllllllllllll
        .then(res => {
            showOutput(res.data)
        })
    }


    document.querySelector("#list").onclick = (e) =>{
        if(e.target.id === "xbtn"){
            const id = e.target.parentElement.parentElement.id;
            deleteuser(id)
        }

        else if(e.target.id === "editbtn"){
            const id = e.target.parentElement.parentElement.id;
            document.getElementById(id).remove();
            getuser(id);
        }

        function deleteuser(id){
            document.getElementById(id).remove();
            axios
            .delete(`${url}/user/${id}`)  //here urlllllllllllllllllllll   
            return
        }

        function edituser(obj){
            document.querySelector('#name').value = obj.name;
            document.querySelector('#email').value = obj.email;
            document.querySelector('#phone').value = obj.phone;
            document.querySelector('#userId').value = obj.id;
        }

        function getuser(id){
            axios
            .get(`${url}/user/${id}`)   //here urlllllllllllllllllllll
            .then(res =>{
                edituser(res.data)
            })
         }  
        
    }
    function putUser(obj,userId){
        axios
        .put(`${url}/user/${userId}`,obj)
        .then(res => {
            showOutput(res.data)
        })
    }
        
});