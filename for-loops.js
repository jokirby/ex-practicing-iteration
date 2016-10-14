for (var i = 5; i <= 120; i+=10) {
console.log(i)} 

for (var i = 4096; i >= 1; i= i/2) {
console.log(i)} 

var americanPresidents =["George Washington", "Johns Adams", "Thomas Jefferson"]
	

	for (var i = 0; i < americanPresidents.length; i++) {
		console.log("President #" + [i+1] + " " + americanPresidents[i])
	}

var antSpecies = {
  argentine: {},
  army: {},
  bigHeaded: {},
  black: {},
  bull: {},
  carpenter: {},
  crazy: {},
  fire: {},
  glider: {},
  honeyPot: {},
  jackJumper: {}
}

for (prop in antSpecies) {
	console.log(prop);
}