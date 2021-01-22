             
  // kilometerToMeter

 function kilometerToMeter(kilometer){
 var Meter = kilometer * 1000;
   return Meter;

 }

 var kilometer1 = kilometerToMeter(5)
 console.log(kilometer1);







// budgetCalculator

function budgetCalculator(watch, mobile, laptop){
  var totallAmount = watch * 50 + mobile * 100 + laptop * 500;
  return totallAmount;
}
var result = budgetCalculator(4,6,8);
console.log(result);



// HotelCost
 function hotelCost(){
   var totalDay = [0];
   var totallCost = 0;
   if(totalDay <= 10){
     totallCost = totalDay * 100;
   }
   else if (totalDay <= 20){
     var part1 = 10 * 100;
     var free = totalDay - 10;
     var part2 = free * 80;
     totalCost = part2 + part2;

   }
   else{
     var part1 = 10 * 100;
     var part2 = 10 * 80;
     var free = totalDay - 20;
     var part3 = free * 50;
     totalCost = part1 + part2 + part3;
   }
   return totalCost;
 }
 var totalday = (10);
 console.log(result);
 





  // megaFriend 

 var friendsName = ["akkas", "vakkas", "makkas", "nakkas", "bubakas"];
 function megaFriend(arr) {
   var long1 = '';
   for (i = 0; i < arr.length; i++) {
     if (arr[i].length > long1.length) {
       long1 = arr[i];
    }
   }
   return long1;
  
 }

 console.log(megaFriend(friendsName));








 