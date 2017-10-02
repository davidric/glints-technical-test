var r = 1;
var m = 2;
var n = 3;

for (i=0; i<m; i++) {
	eval("a" + i + "=prompt('Enter value in row ' + (i+1)).split(' ').map(Number)");
}

for (i=0; i<m; i++) {
	console.log(eval("a" + i));
	eval("b" + i + "= eval('a' + i)");
}

var b0 = a0;
var b1 = a1;
b2 = b0;

// console.log(b0);

for (i=0; i<m; i++) {
	console.log(b2);
	if (i==0) {
		for (j=0; j<n; j++) {
			if (j == n-1) {
				eval("a" + i)[j] = eval("a" + r)[j];
			}
			else {
				eval("a" + i)[j] = eval("a" + i)[j+r];
			}
		}
	}
	else if (i== m-1) {
		for (j=0; j<n; j++) {
			if (j == 0) {
				// eval("a" + i)[j] = eval("a" + (i-r))[j];
				eval("a" + i + "= eval('b' + 0)");
			}
			else {
				// eval("a" + i)[j] = eval("a" + i)[j-r];
			}
		}
	}
}

// console.log("Rotate " + r + " = " + "\n" + a0);
// console.log("Rotate " + r + " : ");
// console.log(b0);
// console.log(b1);
// console.log(a0);
// console.log(a1);