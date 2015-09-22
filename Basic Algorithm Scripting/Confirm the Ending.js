function end (str, target) {
	var stringLength = target.length;

	if(str.substr(-stringLength) == target) {
		return true;
	else {
		return false;
	}
}

end('Bastian', 'n');
