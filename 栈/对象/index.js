class Stack{
	constructor(){
		this.count = 0;
		this.stack = {};
	}
	push(element){
		this.stack[this.count] = element;
		this.count++;
	}
	size(){
		return this.count;
	}
	isEmpty(){
		return this.count === 0;
	}
	pop(){
		if(this.isEmpty()) return undefined;
		this.count--;
		const result = this.stack[this.count];
		delete this.stack[this.count];
		return result;
	}
	peek(){
		if(this.isEmpty()) return undefined;
		return this.stack[this.count-1];
	}
	clear(){
		this.stack = {};
		this.count = 0;
	}
	toString(){
		if(this.isEmpty()) return '';
		let objString = `${this.stack[0]}`;
		for(let i=1; i<this.count; i++){
			objString = `${objString}, ${this.stack[i]}`;
		}
		return objString;
	}
}