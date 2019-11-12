module.exports = {
	isPrime: function(n) {
		if(n <=1) {
			return false;
		}
		let div = 2;
		while(div <= Math.sqrt(n)) {
			if(n % div === 0) {
				return false;
			}
			div++;
		}
		return true;
	},

	print: function(arr) {
		let i = 0;
		while(i<arr.length){
			console.log(arr[i]);
			i++;
		}
	},

	primeDetector: function(r1,r2) {
		let i = r1;
		const arr = [];
		while(i<=r2){
			if(module.exports.isPrime(i)){
				arr.push(i);
			}
			i++;
		}
		return arr;
	}

	
}
