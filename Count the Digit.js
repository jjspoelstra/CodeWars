function nbDig(n, d) {
    let array = []
    let digits = 0
    for (let i = 0; i <= n; i++){
      let num = (i*i)
      if (num.toString().includes(d)){
        let digits = num.toString().split('')
        let newDigits = [] 
        for (let i = 0; i < digits.length; i++){
          if (digits[i] === d.toString()){
            newDigits.push(digits[i])
          }
        }
        array.push(newDigits.join(''))
      }
    }
  return array.join('').length
}



//refactored
//simply condenses everything, much more readable. 



function nbDig(n, d) {
    let digits = 0

    for (let i = 0; i <= n; i++){
        digits += (i*i).toString().split('').filter(n => n == d).length 
    }
    
  return digits
}