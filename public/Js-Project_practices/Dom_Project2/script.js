const form = document.querySelector("form")

form.addEventListener("submit", (e) => {
e.preventDefault();

const height = parseInt(document.querySelector('#height').value);
const weight = parseInt(document.querySelector('#weight').value);
const results = document.querySelector ('#result');

if(height === '' || height <0 || isNaN(height)){
    results.innerHTML = `please enter valid height ${height}`;
}else if (weight === '' || weight <0 || isNaN(weight)){
    results.innerHTML = ` please enter valid weight ${weight}`;
} else {
  const bmi =   (weight/ ((height*height)/ 10000)).toFixed(2)
  //show the result 
  results.innerHTML = `<span>${bmi}</span>`
}


    //     } else if (operator == "*") {
    //         number2=1;
    //         return number1*number2
    //     } else if (operator == "/") {
    //         number2=1;
    //         return number1/number2
    //     }
    // }  else {
    //     if (operator == "+") {
    //         return number1+number2
    //     } else if (operator == "-") {
    //         return number1-number2
    //     } else if (operator == "*") {
    //         return number1*number2
    //     } else if (operator == "/") {
    //         return number1/number2
     
    

})



	// <![CDATA[  <-- For SVG support
	// if ('WebSocket' in window) {
	// 	(function () {
	// 		function refreshCSS() {
	// 			let sheets = [].slice.call(document.getElementsByTagName("link"));
	// 			let head = document.getElementsByTagName("head")[0];
	// 			for (let i = 0; i < sheets.length; ++i) {
	// 				let elem = sheets[i];
	// 				let parent = elem.parentElement || head;
	// 				parent.removeChild(elem);
	// 				let rel = elem.rel;
	// 				if (elem.href && typeof rel != "string" || rel.length == 0 || rel.toLowerCase() == "stylesheet") {
	// 					let url = elem.href.replace(/(&|\?)_cacheOverride=\d+/, '');
	// 					elem.href = url + (url.indexOf('?') >= 0 ? '&' : '?') + '_cacheOverride=' + (new Date().valueOf());
	// 				}
	// 				parent.appendChild(elem);
	// 			}
	// 		}
	// 		let protocol = window.location.protocol === 'http:' ? 'ws://' : 'wss://';
	// 		let address = protocol + window.location.host + window.location.pathname + '/ws';
	// 		let socket = new WebSocket(address);
	// 		socket.onmessage = function (msg) {
	// 			if (msg.data == 'reload') window.location.reload();
	// 			else if (msg.data == 'refreshcss') refreshCSS();
	// 		};
	// 		if (sessionStorage && !sessionStorage.getItem('IsThisFirstTime_Log_From_LiveServer')) {
	// 			console.log('Live reload enabled.');
	// 			sessionStorage.setItem('IsThisFirstTime_Log_From_LiveServer', true);
	// 		}
	// 	})();
	// }
	// else {
	// 	console.error('Upgrade your browser. This Browser is NOT supported WebSocket for Live-Reloading.');
	// }
	
