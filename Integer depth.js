function computeDepth (x){
    let digits = [0, 1,2,3,4,5,6,7,8,9]
    let multiple
    let i = 0
  
    while (digits.length){
      multiple = (x * ++i).toString()
      digits = digits.filter(num => multiple.indexOf(num) === -1)
    }
    
    return i
  }
  