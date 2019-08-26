function calculateRectangleArea(length, width){
  let area = length * width
  if(length <= 0 || width < 0){
    area = (undefined);
  } return area;
}

function calculateTriangleArea(base, height){
  let area = base * height / 2
  if(base <= 0 || height < 0){
    area = (undefined);
  } return area;
}

function calculateCircleArea(radius){
  let area = Math.PI * radius * radius
  if(radius <= 0){
    area = (undefined);
  } return area;
}


console.log(calculateRectangleArea(-1, 0));
console.log(calculateTriangleArea(-1, 0));
console.log(calculateCircleArea(-1));