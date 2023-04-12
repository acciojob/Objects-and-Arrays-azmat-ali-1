const players = ["John", "Bob", "Alice", "Poppy"];

const person = {
  name: "John Doe",
  age: 80,
};

// Write your code here, make sure the name of variables is exactly same as mentioned in the problem statement
let team=players;

let team1=[];
for (let index = 0; index <players.length; index++) {
	team1[index]=players[index];
}
let cap1={};
cap1.name=person.name;
cap1.age=person.age;


window.players = players;
window.person = person;
window.team = team;
window.team1 = team1;
window.cap1 = cap1;
