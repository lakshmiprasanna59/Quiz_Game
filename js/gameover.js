const storedName = localStorage.getItem("userName");
const reward_money = localStorage.getItem("reward");

let n = document.querySelector('#player');
n.textContent = `${storedName}`;

let p = document.querySelector('#money');
p.textContent = `${reward_money}`;

console.log(storedName);