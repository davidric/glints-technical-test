// Solution 1
alert("1. FACTORIALS");
console.log("1. FACTORIALS");
var N = prompt("Input Factorial: ");
function factorial_1(N) {
	if (N == 0) {
		return 1;
	}
	return N * factorial_1(N - 1);
}
console.log("Factorial N = " + factorial_1(N));

/*
Explanation:

For an input N = 3
factorial_1(3) 
return 3 * factorial_1( return 2 * factorial_1( return 1 * factorial_1( return 1)))
-> 1 * 1 * 2 * 3 = 6

*/

// Solution 2
function factorial_2(N) {
	var F = N;
	var X = N;
	for (i=1; i<F; i++) {
		X = X - 1;
		N = N * X;
	}
	return N;
}

/*
Explanation:

For inital variable, N = F = X
F used for iteration, N used for the result of calculation, and X as a decreasing number every loop occurred

*/