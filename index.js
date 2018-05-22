var katzDeliLine = [];

function takeANumber(x, name){
  x.push(`${name}`) 
  return "Welcome, " + `${name}` + "." + " You are number " + x.length + " in line."
}

function nowServing(x){
  if(x.length === 0) {
    return "There is nobody waiting to be served!"
  }else {
    return (`Currently serving ${x.shift()}.`);
  }
}

function currentLine(line){
  if(line === true){
    for(var i = 0; i < line.length; i++){
      return "The line is currently: " + (i+1) + ". " + line[0]
    }
  }else{
    return "The line is currently empty."
  }
}