class User {
    user(){
    console.log("user class");
    }
}

class Admin extends User{
    editData(){
        console.log('edit data');
    }
}

let adminObj = new Admin();
console.log(adminObj.editData());
