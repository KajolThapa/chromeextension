// let array = ['google.com', 'facebook.com', 'codewars.com']

// function linkRandomizer(array){
// for (let i = 0; i < array.length; i++){
  
// }

// }

var ul = document.querySelector('ul');
for (var i = ul.children.length; i >= 0; i--) {
    ul.appendChild(ul.children[Math.random() * i | 0]);
}