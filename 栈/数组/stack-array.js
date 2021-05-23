class StackArray {
	constructor() {
	    this.stackArr = []
	};
	push(element){
		this.stackArr.push(element)
	};
	pop(){
		return this.stackArr.pop()
	};
	isEmpty(){
		return this.stackArr.length === 0
	};
	peek(){
		return this.stackArr[this.stackArr.length-1]
	};
	size(){
		return this.stackArr.length
	};
	clear(){
		this.stackArr = []
	}
	// peek(){
	// 	if(this.stackArr.length === 0) return "";
	// 	var str = "";
	// 	for(let i=0; i<this.stackArr.length; i++){
	// 		str += this.stackArr[i] + ','
	// 		console.log(this.stackArr[i])
	// 	}
	// 	return str
	// }
}