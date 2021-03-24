function signin(){

    password = hex_sha256(document.getElementById("password").value); 
    console.log(password);
}