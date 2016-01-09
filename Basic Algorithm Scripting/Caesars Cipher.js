function rot13(encodedString) {

	// https://en.wikipedia.org/wiki/Caesar_cipher
	// https://en.wikipedia.org/wiki/ROT13
	// http://unicodelookup.com/

	var encodedStringArray = encodedString.split("");
	var decryptedSting = [];

	for (var i = 0; i < encodedStringArray.length; i++) {

		if (encodedStringArray[i].charCodeAt(0) >= 65 && encodedStringArray[i].charCodeAt(0) <= 90) {
			// decryptedSting[i] = String.fromCharCode(encodedStringArray[i].charCodeAt(0) + 13);
			console.log(decryptedSting);
			decryptedSting[i] = String.fromCharCode((encodedStringArray[i].charCodeAt(0) + 13 - 65) % 26 + 65);
		} else {
			decryptedSting[i] = encodedStringArray[i];
		}

		// if (encodedStringArray[i].charCodeAt(0) >= 78 && encodedStringArray[i].charCodeAt(0) <= 90) {
		// 	decryptedSting[i] = String.fromCharCode(encodedStringArray[i].charCodeAt(0) - 13);
		// }

		// if (encodedStringArray[i].charCodeAt(0) < 65 || encodedStringArray[i].charCodeAt(0) > 90) {
		// 	decryptedSting[i] = String.fromCharCode(encodedStringArray[i].charCodeAt(0));
		// }
	}

	return decryptedSting.join("");

}

rot13("");
