function takeANumber(katzDeliLine, name) {
  var deliNumber = katzDeliLine.length + 1;
  var deliLoudspeaker = "Welcome, " + name + ". You are number " + deliNumber + " in line.";
  Line.push(name);
  console.log(deliLoudspeaker);
}

function nowServing(katzDeliLine) {
var deliNumber = katzDeliLine.length + 1;
var deliLoudspeaker;
if (katzDeliLine.length === 0){deliLoudspeaker = "There is nobody waiting to be served!"}
else{deliLoudspeaker = "Currently serving " + katzDeliLine[0] + "."
katzDeliLine.shift();
}
return deliLoudspeaker
}

function currentLine(katzDeliLine){
  var deliLoudspeaker;
  var deliNumber = katzDeliLine.length + 1;
if (katzDeliLine.length === 0){deliLoudspeaker = "The line is currently empty."}
else {
  deliLoudspeaker = "The line is currently: "
for(var i = 0; i < katzDeliLine.length ; i++){
if (i === 0){

deliLoudspeaker = deliLoudspeaker + (i+1) + ". " + katzDeliLine[i];
}
else{
deliLoudspeaker = deliLoudspeaker + ", " + (i+1) + ". " + katzDeliLine[i];
}
}
}


return deliLoudspeaker;
}
var line = []
takeANumber(line, "Ada")
takeANumber(line, "Grace")
nowServing(line)
nowServing(line)
takeANumber(line, "Steven")
takeANumber(line, "Blake")
takeANumber(line, "Avi")
nowServing(line)
nowServing(line)
takeANumber(line, "Bill")
takeANumber(line, "Jane")
takeANumber(line, "Ann")
currentLine(line)