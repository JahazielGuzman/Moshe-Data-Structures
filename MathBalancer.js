const MyStack = require('./MyStack.js');

module.exports = class MathBalancer {
	
	constructor(expression) {

		this.expression = expression;
		this.expressionLength = expression.length;
	}

	isBalanced() {	

		let stack = new MyStack(this.expressionLength);

		for (let i = 0; i < this.expressionLength; i ++) {

			const symbol = this.expression[i]
			if (symbol == '(' ||  symbol == '[' || symbol == '<' || symbol == '{') {
				stack.push(symbol)
			}


			else if (symbol == ')' || symbol == ']' || symbol == '>' || symbol == '}') {
				if (stack.isEmpty) {
					return false;
				}
				let top = stack.pop();
				if (symbol == ')' && top != '(' || 
					symbol == ']' && top != '[' || 
					symbol == '>' && top != '<' || 
					symbol == '}' && top != '{') {
					return false;
				}
			}

		}

		return stack.isEmpty()
	}
}