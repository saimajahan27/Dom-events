const Form = document.querySelector("form");
const Name = Form.querySelector("#name");
const Email = Form.querySelector("#email");
const Password = Form.querySelector("#password");
// const Name = Form.querySelector("#name");
// const Mn = Form.querySelector("#mn");

// console.log(Email);


Form.addEventListener("Submit", formHandler);

function formHandler(e) {
    e.preventDefault();
    // console.log(e);
    

    const formInfo = {
        Name: Name.value,
        Email: Email.value,
        Password: Password.value,
    }
    Name.value="";
    Email.value="";
    Password.value="";
    
    
    console.log(formInfo);

}