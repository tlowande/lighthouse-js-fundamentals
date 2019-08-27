var someArray = []

function range(start, end, step){
  if(start < end && step > 0 && start != undefined && end != undefined && step != undefined){
    for(var i = start; i <= end; i += step){
      someArray.push(i)
    } 
  }return someArray;
}

console.log(range(0,10,2));