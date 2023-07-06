
// converts numbers 1-3999
function convertToRoman(num) {
  

    let number = num // create a copy of num to not corrupt the original
  
   // condition if passed parameter is not  an integer 
  
    if(num%1!=0){
      console.log('Has to be an Integer !')
      return undefined
    }
    
    
    // condition for if integer is negative or less than 0
    if(num<=0 | num>3999){
      console.log('Has to be an integer greater than 0 and less than or equal to 3999')
      return undefined
    }
  
  
   // Look up table for roman numerals
  const romanNumerals_LUT = {
  
    1:"I",
  
    4:"IV",
  
    5:"V",
  
    9:"IX",
  
    10:"X",
  
    40:"XL",
  
    50:"L",
  
    90:"XC",
  
    100:"C",
  
    400:"CD",
  
    500:"D",
  
    900:"CM",
  
    1000:"M",
  
  } 
  
  // function that converts Integer to roman numeral  
  function romanNumeralConversion(integer){
    
   
    let num = integer // number that is passed into function
    let subtrahend // value that will be subtracted
    let difference // difference of the subtraction
  
    // array of look up table keys
    let lutKeys = Object.keys(romanNumerals_LUT)
  
    // look up table index
    let lutIndex
  
    // container that will contain roman numerals to later return 
    let numeralContainer = ''
  
  
    // (num - subtrahend) = difference
  
    do{
      // for-loop that searches for greatest number that fits in num
      for(let i=0;i<lutKeys.length;i++){
        lutIndex=i
        //console.log(lutKeys[i])
        if(lutKeys[i]>num){
          
          lutIndex--
          //console.log(lutIndex)
          //console.log(lutKeys[lutIndex])
          break
        }
        else if(lutKeys[i]==num){
          break
        }
  
      }
  
     
      // greatest number that fits into num
      subtrahend = lutKeys[lutIndex]
     
     // console.log(subtrahend) 
  
     // gets the   difference
      difference = num - subtrahend
  
    // new number to breakdown is difference of previous subtraction
      num = difference
  
     // console.log(num)
  
    //after every subtraction lookup new Roman numeral to           concatanate onto existing string
      
      numeralContainer = numeralContainer.concat(romanNumerals_LUT[lutKeys[lutIndex]])// stores the roman numeral associated with subtrahend
  
    }while(difference>0)
  
  
  console.log(numeralContainer)
  
  return numeralContainer // returns the roman Numeral string
  
  }
   
  return romanNumeralConversion(number)
   
  }
  convertToRoman(3999);
   
  