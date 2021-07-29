const form = document.querySelector('#mainForm');
const btn = document.querySelector('.btn');
const gif = document.querySelector('.gif');
const msg = document.querySelector('#msg');

form.addEventListener('submit', event =>{
  event.preventDefault();
  
  if(!msg.value) {
    btn.classList.toggle('off');
    gif.classList.toggle('off');

    
    return setTimeout(() => {
      btn.classList.toggle('off');
      gif.classList.toggle('off');
      
      btn.nextSibling.nextSibling.textContent = 'digite uma mensagem';
    }, 2000)
  };
  
  let showMsg = msg.value;
  
  btn.classList.toggle('off');
  gif.classList.toggle('off');
  
  setTimeout(() => {
    gif.classList.toggle('off');
    msg.classList.toggle('off');
    btn.nextSibling.nextSibling.textContent = showMsg;
  }, 1500);
  
});
