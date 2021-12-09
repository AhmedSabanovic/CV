/*
	Name : Ahmed Šabanović
	Course : CS412
	Assignment : 3

*/
window.onload = function() {
	document.getElementById('number').innerHTML = a;
	for (var i = 0; i < a; i++) {
		for (let j in sports[i]) 
			document.getElementById('Animation').innerHTML += sports[i][j] + " ";
	}
}
const sports = [
{
	sport: "Basketball,",
	athlete: "Kobe Bryant",
	
},
{
	sport: "Football,",
	athlete: "Edin Dzeko",
		
},
{
	sport: "F1 racing,",
	athlete: "Max Verstappen",	
	
},
{
	sport: "Tennis,",
	athlete: "Roger Federer",
		
},
];
