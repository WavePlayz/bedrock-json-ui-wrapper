

const ElementTypes = [ "label", "image", "panel" ]

class Variable {
	constructor () {
		
	}
	
	setVariable (name, value) {
		this[name] = value
	}
	
}


class Element extends Variable {
	constructor () {
		super()
	}
}

class Label extends Element {
	constructor (text) {
		super()
		this.type = ElementTypes[0]
		this.text = text
	}
}

class Image extends Element {
	constructor (text) {
		super()
		this.type = ElementTypes[0]
		
	}
}

class Panel extends Element {
	constructor (text) {
		super()
		this.type = ElementTypes[0]
		
	}
}

class Binding {
	constructor (name, nameOverride) {
		this.binding_name = "#" + name
		this.binding_name_override = "#" + nameOverride
	}
}


class Animation {
	constructor (type, from, to, duration, easing, next) {
		this.anim_type = type
		this.from = from
		this.to = to
		this.duration = duration
		this.easing = easing
		this.next = next
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
		this[name] = 
	}
}

