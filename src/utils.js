//http://stackoverflow.com/questions/24004791/can-someone-explain-the-debounce-function-in-javascript
export function debounce(func, wait, immediate) {
    let timeout;           

    return function() {
        const context = this; 
        const args = arguments;

        const call_now = immediate && !timeout;

        clearTimeout(timeout);   

        timeout = setTimeout(function(){
             timeout = null;

             if (!immediate) {
               func.apply(context, args);
             }
        }, wait);

        if (call_now) func.apply(context, args);  
     };
}

//https://davidwalsh.name/essential-javascript-functions
export function once(context) {
    let result;

	return function() { 
		if(fn) {
			result = fn.apply(context || this, arguments);
			fn = null;
		}

		return result;
	};
}