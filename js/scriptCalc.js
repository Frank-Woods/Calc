function add(x) {
	var res = document.getElementById("res").innerHTML;
	if (res === "0") {
		document.getElementById("res").innerHTML = "";
	}
	var length = res.length;
	if (length > 10) {
		return;
	}
	document.getElementById("res").innerHTML += x;
}
point.onclick = function scanPoint() {
	var res = document.getElementById("res").innerHTML;
	var length = res.length;
	if (length > 10) {
		return;
	}
	for (var i = 0; i <= length; i++) {
		if (res[i] === ".") {
			return;
		}
	}
	document.getElementById("res").innerHTML += ".";
}
C.onclick = function del() {
	document.getElementById("archive").innerHTML = "Hello"
	document.getElementById("res").innerHTML = "0"
}
delOne.onclick = function del_Last() {
	var res = document.getElementById("res").innerHTML;
	length = res.length;
	var res_del = res.substr(0,length-1);
	document.getElementById("res").innerHTML = res_del;
}
function count(x) {
	var num = document.getElementById("archive").innerHTML;
	var res = document.getElementById("res").innerHTML;
	if (res.substr(-1) === "+"||res.substr(-1) === "-"||res.substr(-1) === "*"||res.substr(-1) === "/") {
		document.getElementById("res").innerHTML = x;
		return;
	}
	var length = res.length;
	if (res === "") {
		document.getElementById("res").innerHTML = x;
	}else{
		if(num === "Hello"){
			document.getElementById("archive").innerHTML = res;
		}else{
			var sign = res.slice(0,1);
			num = Number(num);
			var num_second = Number(res.slice(1,length)); 
			switch(sign){
				case '+': 
					document.getElementById("archive").innerHTML = num+num_second;
					break;
				case '-': 
					document.getElementById("archive").innerHTML = num-num_second;
					break;
				case '*': 
					document.getElementById("archive").innerHTML = num*num_second;
					break;
				case '/': 
					document.getElementById("archive").innerHTML = num/num_second;
					break;
				default: 
					document.getElementById("archive").innerHTML = num_second;
					break;
			}		
		}
		document.getElementById("res").innerHTML = x;
	}
}
equ.onclick = function equ() {
	var num = document.getElementById("archive").innerHTML;
	var res = document.getElementById("res").innerHTML;
	if (res.substr(-1) === "+"||res.substr(-1) === "-"||res.substr(-1) === "*"||res.substr(-1) === "/") {
		document.getElementById("res").innerHTML = num;
		document.getElementById("archive").innerHTML = "Hello"
		return;
	}
	var length = res.length;
	if (res === "") {
		document.getElementById("res").innerHTML = num;
		document.getElementById("archive").innerHTML = "Hello"
	}else{
		if(num === "Hello"){
			return;
		}else{
			var sign = res.slice(0,1);
			num = Number(num);
			var num_second = Number(res.slice(1,length)); 
			switch(sign){
				case '+': 
					document.getElementById("res").innerHTML = num+num_second;
					break;
				case '-': 
					document.getElementById("res").innerHTML = num-num_second;
					break;
				case '*': 
					document.getElementById("res").innerHTML = num*num_second;
					break;
				case '/': 
					document.getElementById("res").innerHTML = num/num_second;
					break;
				default: 
					document.getElementById("res").innerHTML = num_second;
					break;
			}		
		}
		document.getElementById("archive").innerHTML = "Hello"
	}
}