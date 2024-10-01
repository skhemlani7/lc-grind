var MinStack = function() {
    this.items = [];
    this.minItems = [];
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {
    if (this.items.length === 0) {
        this.minItems.push(val);
    } else {
        this.minItems.push(Math.min(val, this.minItems[this.minItems.length - 1]));
    }
    this.items.push(val);
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    this.items.pop();
    this.minItems.pop();
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.items[this.items.length - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    return this.minItems[this.minItems.length - 1];
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */