var katzDeliLine = [];

function takeANumber(x, name){
  x.push(`${name}`) 
  var pos = x.indexOf(name) + 1
  return "Welcome, " + name + "." + " You are number " + pos + " in line."
}

function nowServing(x){
  if(x === true) {
    var person = x[0]
    return "Currently serving " + person + "."
    
  }else {
      return "There is nobody waiting to be served!"
  }
  x.shift(0)
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