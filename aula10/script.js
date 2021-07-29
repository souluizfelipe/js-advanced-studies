const userData = document.querySelector('.user');
let content = ""

const xhttp = new XMLHttpRequest();

xhttp.onreadystatechange = function() {
  if(this.readyState == 4 && this.status == 200) {
    let data = JSON.parse(this.responseText);
    for(let item of data) {
      
      content += `
        <li>
          <p>${item.name}</p> 
          <p>${item.email}</p> 
        </li>
      `;
    };
    userData.innerHTML = content;
  };

};

xhttp.open('GET', 'https://jsonplaceholder.typicode.com/users', true);
xhttp.send();


