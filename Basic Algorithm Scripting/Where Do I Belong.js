/*
Return the lowest index at which a value (second argument) 
should be inserted into an array (first argument) once it has been sorted.
*/

function where(arr, num) {
	arr.push(num);
	return arr.sort().indexOf(num); // once it has been sorted
}

where([40, 60], 50);
