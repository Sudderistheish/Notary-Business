
'use strict'

let stores= [
{store: "seattle", minCust: 23, maxCust: 65, avgNotarysale: 6.3},
{store: "tokyo", minCust: 3, maxCust: 24, avgNotarysale: 1.2},
{store: "dubai", minCust: 11, maxCust: 38, avgNotarysale: 3.7},
{store: "paris", minCust: 20, maxCust: 38, avgNotarysale: 2.3},
{store: "lima", minCust: 2, maxCust: 16, avgNotarysale: 4.6}]



let hours = [24];

   
  function RandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random)() * (max - min) + min;

}

console.log ("hello world")
function seattle (min,max,avgNotarysale)
   this.min = min;  
   this.max = max;
   this.avgNotarysale = avgNotarysale;

   seattle.prototype.store
   = function() {
    console.log
    ('This is a 
    ${this.min}
    ${this.max} with
    ${this.avgNotarysale.');
    
   }

   let seattle = new
   this.store();