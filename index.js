var katzDeliLine = [];

function takeANumber(x, name){
  x.push(`${name}`) 
  return "Welcome, " + `${name}` + "." + " You are number " + `${x.length}` + " in line."
}

function nowServing(x){
  if(x.length === 0) {
    return "There is nobody waiting to be served!"
  }else {
    return (`Currently serving ${x.shift()}.`);
  }
}

function currentLine(x){
  var i = 0;
  while(i < x.length){
  var line = (katzDeliLine[i] + 1) + ". " + katzDeliLine[i]
  if(x === true){
      return "The line is currently: " + `${line}` // create line variable
 
    } else {
        return "The line is currently empty." //iinsrrt variable with number position eg: 1.sara 2. 
    }
}
}