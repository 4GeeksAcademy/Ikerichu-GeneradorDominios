import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let pronoun = ['the', 'our'];
  let adj = ['great', 'big'];
  let noun = ['jogger', 'racoon'];
  for(let i=0; pronoun.length > i; i++){
    for(let x=0; adj.length > x; x++){
      for(let z=0; noun.length > z; z++){
        console.log(pronoun[i]+adj[x]+noun[z]+".com");
      }
    }
  }
};
