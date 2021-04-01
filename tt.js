function hex_to_ascii(str1)
{
	var hex  = str1.toString();
	var str = '';
	for (var n = 0; n < hex.length; n += 2) {
		str += String.fromCharCode(parseInt(hex.substr(n, 2), 16));
	}
	return str;
}

function reverseString(str) {
    var newString = "";
    for (var i = str.length - 1; i >= 0; i--) {
			if (i % 2)
        newString += str[i-1];
			else
				newString += str[i+1];
    }
    return newString;
}

let meterNumberBuff = Buffer.from('fhqwhgads', 'utf8');
console.log(reverseString('03081117000639'));
