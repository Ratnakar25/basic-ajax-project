var xhr = new XMLHttpRequest();
xhr.open("GET", "https://reqres.in/api/products/3", true);
xhr.onload = function() {
    console.log(xhr.responseText);
};
xhr.send();

fetch('https://jsonplaceholder.typicode.com/users?utm_source=Mailerlite&utm_medium=E-mail&utm_campaign=Test%20Series&utm_term=2022-08-09')
    .then(response => response.json())
    .then(json => console.log(json))