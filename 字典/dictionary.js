import { defaultToString } from '../utils.js'
// import ValuePair from '../ValuePair.js'

class ValuePair {
	constructor(key, value) {
		this.key = key
		this.value = value
	}
	toString() {
		return `[#${this.key}: ${this.value}]`
	}
}

export default class Dictionary {
	constructor(toStrFn = defaultToString) {
		this.toStrFn = toStrFn
		this.table = {}
	}
	hasKey(key) {
		return this.table[this.toStrFn(key)] != null
	}
	set(key, value) {
		if (key != null && value != null) {
			const tableKey = this.toStrFn(key)
			this.table[tableKey] = new ValuePair(key, value)
			return true
		}
		return false 
	}
	remove(key) {
		if (this.hasKey(key)) {
			delete this.table[this.toStrFn(key)]
			return true
		}
		return false
	}
	get(key) {
		const valuePair = this.table[this.toStrFn(key)]
		return valuePair == null ? undefined : valuePair.value 
	}
	// get(key) {
	// 	if (this.hasKey(key)) {
	// 		return this.table[this.toStrFn(key)]
	// 	}
	// 	return undefined
	// }
	// Object.values()返回对象自身的所有可枚举属性值的数组
	keyValues() {
		return Object.values(this.table)
	}
	// keyValues() {
	// 	const valuePairs = []
	// 	for (const k in this.table) {
	// 		if (this.hasKey(k)) {
	// 			valuePairs.push(this.table[k])
	// 		}
	// 	}
	// 	return valuePairs
	// }
	keys() {
		return this.keyValues().map(valuePair => valuePair.key )
	}
	values() {
		return this.keyValues().map(valuePair => valuePair.value)
	}
	forEach(callbackFn) {
		const valuePairs = this.keyValues()
		for (let i = 0; i < valuePairs.length; i++) {
			const result = callbackFn(valuePairs[i].key, valuePairs[i].value)
			if (result === false) {
				break
			}
		}
	}
	size() {
		return Object.keys(this.table).length
	}
	isEmpty() {
		return this.size() === 0
	}
	toString() {
		if (this.isEmpty()) {
			return ''
		}
		const valuePairs = this.keyValues()
		let objString = `${valuePairs[0].toString()}`
		for (let i = 1; i < valuePairs.length; i++) {
			objString = `${objString},${valuePairs[i].toString()}`
		}
		return objString
	}
}