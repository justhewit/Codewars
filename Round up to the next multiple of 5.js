//Round up to the next multiple of 5 - CodeWars 7kyu
//Description:
//Given an integer as input, can you round it to the next (meaning, "higher") multiple of 5?
function roundToNext5(n){
    if(n % 5 === 0){
      return n
     }else if(n < 0 && n % 5 !== 0){
       return n + (Math.abs(n % 5));
     }else{
       return n + (5 - (n % 5))
     }
    }
       