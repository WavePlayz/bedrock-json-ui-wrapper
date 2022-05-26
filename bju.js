

const ElementTypes = [ "label", "image", "panel" ]

class Variable {
	constructor () {
		
	}
	
	setVariable (name, value) {
		this[name] = value
	}
	
}


class Element {
	constructor () {
		
	}
}

class Label {
	constructor (text) {
		this.type = ElementTypes[0]
		this.text = text
	}
}



class BJU {
	constructor(namespace) {
		this.namespace = namespace
	}
	
	addElement (name, element) {
		this[name] = element
	}
	
	newElement (name) {
		this[name]
	}
}

