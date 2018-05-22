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

function currentLine(katzDeli) {
  for (let i = 0; i < katzDeli.length; i++) {
    line.push(` `+[i+1]+`. `  + katzDeli[i])
   }
   return(`The line is currently:` + line);
 }

