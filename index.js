function add(n) {
	document.getElementById("ans").innerHTML = document.getElementById("ans").innerHTML + n; 
}

function back(){
	tempValue = document.getElementById("ans").innerHTML;
	document.getElementById("ans").innerHTML = tempValue.slice(0, -1);
}

function op(o){
	oldValue = document.getElementById("ans").innerHTML;
	document.getElementById("ans").innerHTML = "";
	tempOp = o;
}

function answer(){
	newValue = document.getElementById("ans").innerHTML;
	if(tempOp == "+"){
		document.getElementById("ans").innerHTML = parseInt(oldValue) + parseInt(newValue);
	}else if(tempOp == "-"){
		document.getElementById("ans").innerHTML = parseInt(oldValue) - parseInt(newValue);
	}else if(tempOp == "*"){
		document.getElementById("ans").innerHTML = parseInt(oldValue) * parseInt(newValue);
	}else if(tempOp == "/"){
		document.getElementById("ans").innerHTML = parseInt(oldValue) / parseInt(newValue);
	}
}

function ce(){
	document.getElementById("ans").innerHTML = "";
	oldValue = "";
	newValue = "";
}