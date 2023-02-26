// Write a function calcFuel that calculates the minimum amount of fuel needed to produce a certain number of iron ingots. This function should return an object of the form {lava: 2, blazeRod: 1, coal: 1, wood: 0, stick: 0}




function calcFuel(n) {
    let fuel = {
      lava: 0,
      blazeRod: 0,
      coal: 0,
      wood: 0,
      stick: 0
    }
    let seconds = n*11
    
    fuel.lava = (seconds - (seconds % 800)) / 800
    seconds -= fuel.lava*800
    fuel.blazeRod = (seconds - (seconds % 120)) / 120
    seconds -= fuel.blazeRod*120
    fuel.coal = (seconds - (seconds % 80)) / 80
    seconds -= fuel.coal*80
    fuel.wood = (seconds - (seconds % 15)) / 15
    seconds -= fuel.wood*15
    fuel.stick = seconds
    
    
    return fuel
  };
  
  
  
