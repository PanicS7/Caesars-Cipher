/* Part for freeCodeCamp certification
  https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/javascript-algorithms-and-data-structures-projects/caesars-cipher
*/

function rot13 (str) {
	// All letters
	var letters = {
		"A" : "N",
		"B" : "O",
		"C" : "P",
		"D" : "Q",
		"E" : "R",
		"F" : "S",
		"G" : "T",
		"H" : "U",
		"I" : "V",
		"J" : "W",	
		"K" : "X",
		"L" : "Y",
		"M" : "Z",
		"N" : "A",
		"O" : "B",	
		"P" : "C",
		"Q" : "D",
		"R" : "E",
		"S" : "F",
		"T" : "G",	
		"U" : "H",
		"V" : "I",
		"W" : "J",
		"X" : "K",
		"Y" : "L",
		"Z" : "M"
	};
	
	// Convert string to array of letters
	var string = str.split("");
	
	// Replace each letters with right one
	var output = "";
	for (let l of string) {
		if (letters[l]) {
			output += letters[l];
		}
		else {
			output += l;
		}
	}

	document.write(output + "<br>");
}



rot13("SERR PBQR PNZC") // should decode to FREE CODE CAMP
rot13("SERR CVMMN!") // should decode to FREE PIZZA!
rot13("SERR YBIR?") // should decode to FREE LOVE?
rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.") // should decode to THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG.