Num1.onclick = function scan1() {
	var value = document.getElementById("Num1").innerHTML;
	var res = document.getElementById("res").innerHTML;
	if (res === "0") {
		document.getElementById("res").innerHTML = "";
	}
	var length = res.length;
	if (length > 15) {
		fail;
	}
	document.getElementById("res").innerHTML += value;
}
Num2.onclick = function scan2() {
	var value = document.getElementById("Num2").innerHTML;
	var res = document.getElementById("res").innerHTML;
	if (res === "0") {
		document.getElementById("res").innerHTML = "";
	}
	var length = res.length;
	if (length > 15) {
		fail;
	}
	document.getElementById("res").innerHTML += value;
}
Num3.onclick = function scan3() {
	var value = document.getElementById("Num3").innerHTML;
	var res = document.getElementById("res").innerHTML;
	if (res === "0") {
		document.getElementById("res").innerHTML = "";
	}
	var length = res.length;
	if (length > 15) {
		fail;
	}
	document.getElementById("res").innerHTML += value;
}
Num4.onclick = function scan4() {
	var value = document.getElementById("Num4").innerHTML;
	var res = document.getElementById("res").innerHTML;
	if (res === "0") {
		document.getElementById("res").innerHTML = "";
	}
	var length = res.length;
	if (length > 15) {
		fail;
	}
	document.getElementById("res").innerHTML += value;
}
Num5.onclick = function scan5() {
	var value = document.getElementById("Num5").innerHTML;
	var res = document.getElementById("res").innerHTML;
	if (res === "0") {
		document.getElementById("res").innerHTML = "";
	}
	var length = res.length;
	if (length > 15) {
		fail;
	}
	document.getElementById("res").innerHTML += value;
}
Num6.onclick = function scan6() {
	var value = document.getElementById("Num6").innerHTML;
	var res = document.getElementById("res").innerHTML;
	if (res === "0") {
		document.getElementById("res").innerHTML = "";
	}
	var length = res.length;
	if (length > 15) {
		fail;
	}
	document.getElementById("res").innerHTML += value;
}
Num7.onclick = function scan7() {
	var value = document.getElementById("Num7").innerHTML;
	var res = document.getElementById("res").innerHTML;
	if (res === "0") {
		document.getElementById("res").innerHTML = "";
	}
	var length = res.length;
	if (length > 15) {
		fail;
	}
	document.getElementById("res").innerHTML += value;
}
Num8.onclick = function scan8() {
	var value = document.getElementById("Num8").innerHTML;
	var res = document.getElementById("res").innerHTML;
	if (res === "0") {
		document.getElementById("res").innerHTML = "";
	}
	var length = res.length;
	if (length > 15) {
		fail;
	}
	document.getElementById("res").innerHTML += value;
}
Num9.onclick = function scan9() {
	var value = document.getElementById("Num9").innerHTML;
	var res = document.getElementById("res").innerHTML;
	if (res === "0") {
		document.getElementById("res").innerHTML = "";
	}
	var length = res.length;
	if (length > 15) {
		fail;
	}
	document.getElementById("res").innerHTML += value;
}
zero.onclick = function scan0() {
	var value = document.getElementById("zero").innerHTML;
	var res = document.getElementById("res").innerHTML;
	if (res === "0") {
		document.getElementById("res").innerHTML = "";
	}
	var length = res.length;
	if (length > 15) {
		fail;
	}
	document.getElementById("res").innerHTML += value;
}
point.onclick = function scanPoint() {
	var value = document.getElementById("point").innerHTML;
	var res = document.getElementById("res").innerHTML;
	if (res.substr(-1) === ".") {
		fail;
	}
	var length = res.length;
	if (length > 15) {
		fail;
	}
	document.getElementById("res").innerHTML += value;
}
C.onclick = function del() {
	document.getElementById("archive").innerHTML = "Hello"
	document.getElementById("res").innerHTML = "0"
}
delOne.onclick = function del_Last() {
	var res = document.getElementById("res").innerHTML;
	length = res.length;
	var res_del = res.substring(0,length-1);
	document.getElementById("res").innerHTML = res_del;
}
plus.onclick = function plus() {
	var num = document.getElementById("archive").innerHTML;
	var res = document.getElementById("res").innerHTML;
	if (res.substr(-1) === "+"||res.substr(-1) === "-"||res.substr(-1) === "*"||res.substr(-1) === "/") {
		document.getElementById("res").innerHTML = "+";
		fail;
	}
	var length = res.length;
	if (res === "") {
		document.getElementById("res").innerHTML = "+";
	}else{
		if(num === "Hello"){
			document.getElementById("archive").innerHTML = res;
		}else{
			var sign = res.slice(0,1);
			num = parseFloat(num);
			var num_second = parseFloat(res.slice(1,length)); 
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
		document.getElementById("res").innerHTML = "+";
	}
}
minus.onclick = function minus() {
	var num = document.getElementById("archive").innerHTML;
	var res = document.getElementById("res").innerHTML;
	if (res.substr(-1) === "+"||res.substr(-1) === "-"||res.substr(-1) === "*"||res.substr(-1) === "/") {
		document.getElementById("res").innerHTML = "-";
		fail;
	}
	var length = res.length;
	if (res === "") {
		document.getElementById("res").innerHTML = "-";
	}else{
		if(num === "Hello"){
			document.getElementById("archive").innerHTML = res;
		}else{
			var sign = res.slice(0,1);
			num = parseFloat(num);
			var num_second = parseFloat(res.slice(1,length)); 
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
		document.getElementById("res").innerHTML = "-";
	}
}
mult.onclick = function mult() {
	var num = document.getElementById("archive").innerHTML;
	var res = document.getElementById("res").innerHTML;
	if (res.substr(-1) === "+"||res.substr(-1) === "-"||res.substr(-1) === "*"||res.substr(-1) === "/") {
		document.getElementById("res").innerHTML = "*";
		fail;
	}
	var length = res.length;
	if (res === "") {
		document.getElementById("res").innerHTML = "*";
	}else{
		if(num === "Hello"){
			document.getElementById("archive").innerHTML = res;
		}else{
			var sign = res.slice(0,1);
			num = parseFloat(num);
			var num_second = parseFloat(res.slice(1,length)); 
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
		document.getElementById("res").innerHTML = "*";
	}
}
div.onclick = function plus() {
	var num = document.getElementById("archive").innerHTML;
	var res = document.getElementById("res").innerHTML;
	if (res.substr(-1) === "+"||res.substr(-1) === "-"||res.substr(-1) === "*"||res.substr(-1) === "/") {
		document.getElementById("res").innerHTML = "/";
		fail;
	}
	var length = res.length;
	if (res === "") {
		document.getElementById("res").innerHTML = "/";
	}else{
		if(num === "Hello"){
			document.getElementById("archive").innerHTML = res;
		}else{
			var sign = res.slice(0,1);
			num = parseFloat(num);
			var num_second = parseFloat(res.slice(1,length)); 
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
		document.getElementById("res").innerHTML = "/";
	}
}
equ.onclick = function equ() {
	var num = document.getElementById("archive").innerHTML;
	var res = document.getElementById("res").innerHTML;
	if (res.substr(-1) === "+"||res.substr(-1) === "-"||res.substr(-1) === "*"||res.substr(-1) === "/") {
		document.getElementById("res").innerHTML = num;
		document.getElementById("archive").innerHTML = "Hello"
		fail;
	}
	var length = res.length;
	if (res === "") {
		document.getElementById("res").innerHTML = num;
		document.getElementById("archive").innerHTML = "Hello"
	}else{
		if(num === "Hello"){
			document.getElementById("archive").innerHTML = res;
		}else{
			var sign = res.slice(0,1);
			num = parseFloat(num);
			var num_second = parseFloat(res.slice(1,length)); 
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