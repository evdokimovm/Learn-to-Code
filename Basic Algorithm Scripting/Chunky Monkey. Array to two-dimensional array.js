function chunk(arr, size) {
	var newArray = [];
		i = 0;
	for (var i; i < arr.length; i += size) { // or with while (i < arr.length)
		newArray.push(arr.slice(i, i + size));
	}
	return newArray;
}

chunk(['a', 'b', 'c', 'd'], 2);
