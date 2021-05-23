class Set {
	constructor() {
		this.items = {}
	}
	// 返回表示对象在原型链上是否有特定属性的布尔值
	// has(element) {
	// 	return element in this.items
	// }
	// 返回一个表明对象是否具有特定属性的布尔值
	has(element) {
		return Object.prototype.hasOwnProperty.call(this.items, element)
	}
	add(element) {
		if (!this.has(element)) {
			this.items[element] = element;
			return true
		}
		return false
	}
	delete(element) {
		if (this.has(element)) {
			delete this.items[element];
			return true
		}
		return false
	}
	clear() {
		this.items = {}
	}
	//hasOwnProperty()返回是否是对象自身的属性的布尔值
	sizeLegacy() {
		let count = 0;
		for(let key in this.items) {
			if (this.items.hasOwnProperty(key)) {
				count++
			}
		}
		return count
	}
	// es6 Object.values()返回一个包含给定对象所有属性值的数组
	// values() {
	// 	return Object.values(this.items)
	// }
	valuesLegacy() {
		let values = [];
		for(let key in this.items) {
			if (this.items.hasOwnProperty(key)) {
				values.push(key)
			}
		}
		return values
	}
}