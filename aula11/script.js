const btn = document.querySelector('.btn');

function convJSON(response) {
  console.log(response)
  return response.json();
};

function showData(data) {
  return console.log(data)
};

function getError(response) {
  if(response.status == 404) {
    console.log('ondé que eu tô?');
  }
};

btn.onclick = () => 
  fetch('https://jsonplaceholder.typicode.com/userssss')
    .then(convJSON)
    .then(showData)
    .catch(getError);
  

