// You are given a string s consisting of the following characters: '(', ')', '{', '}', '[' and ']'.

// The input string s is valid if and only if:

//     Every open bracket is closed by the same type of close bracket.
//     Open brackets are closed in the correct order.
//     Every close bracket has a corresponding open bracket of the same type.

// Return true if s is a valid string, and false otherwise.


function isValid(s) {
    if (s.length % 2 == 1) return false;
    let parentheses = {
        '(': ')', 
        '{': '}',
        '[': ']'
    }
    let stack = [];
    for (let i = 0; i < s.length; i++) {
        if (!parentheses[s.charAt(i)]) {
            if (stack.length == 0) return false;
            let top = stack.pop();
            if (parentheses[top] != s.charAt(i)) return false;
        } else {
            stack.push(s.charAt(i));
        }
    }
    return stack.length == 0 ? true : false;
}

console.log(isValid("((((("));