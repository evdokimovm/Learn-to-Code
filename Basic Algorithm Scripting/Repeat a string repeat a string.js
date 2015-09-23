function repeat(str, num) {
	var repeatStr = '';
	if (num <= 0 ) {
		return repeatStr;
	} else {
		for (var i = 0; i < num; i++) {
			repeatStr += str;
		}
	return repeatStr;
	}
}

repeat('abc', 3);