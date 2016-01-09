/*
Return true if the string in the first element of the array contains 
all of the letters of the string in the second element of the array.
*/

function mutation(arr) {

	var word1 = arr[0].toLowerCase().split('');
	var word2 = arr[1].toLowerCase().split('');

	for (var i = 0; i < word2.length; i++) {
		var value = word1.indexOf(word2[i]);
			if (value === -1) {
				return false;
			}
	}

	return true;

}

mutation(["hello", "hey"]);
