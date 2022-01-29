const custid = document.getElementById('custid');
const sname = document.getElementById('name');
const addBtn = document.getElementById('addBtn');
const updateBtn = document.getElementById('updateBtn');
const removeBtn = document.getElementById('removeBtn');
const readBtn = document.getElementById('readBtn');

const database = firebase.database();
const usersRef = database.ref('/users');

addBtn.addEventListener('click', (e) => {
    e.preventDefault();
    usersRef.child(custid.value).set({
        s_name: sname.value,
    });

});

updateBtn.addEventListener('click', e => {
    e.preventDefault();
    const newData = {
        s_name: sname.value,

    };
    usersRef.child(custid.value).update(newData);
});

removeBtn.addEventListener('click', e => {
    e.preventDefault();
    usersRef.child(rollno.value).remove()
        .then(() => {
            console.log('User Deleted !');
            alert('User Deleted !')
        })
        .catch(error => { console.error(error); });
});


readBtn.addEventListener("click", () => {

    let via = custid.value;
    let dbref = firebase.database().ref().child("users/" + via);
    dbref.on('value', function(snapshot) {
        let x = snapshot.val().s_name;
        console.log(x);
    });

});