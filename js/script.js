let data = prompt("Enter number task");
    
switch(data){
  case("1"):
    taskOne();
    break;
  case("2"):
    taskTwo();
    break;
  case("3"):
  	taskThree();
    break;
  default:
    alert('Not number task!!!');        
}

function taskOne(){

  let age = prompt ("Укажите ваш возрост");

  function checkAge(age) {
    let message = ( age > 18 ) ? "true" : confirm ("А родители розрешили?");
   
  }
  checkAge(age);
}

function taskTwo(){

	function number(a, b) {
  		if (a < b) {
    		alert (a);
  	} 	else {
   			alert (b);
  }
}
  number();

}

function taskThree() {

		let x = prompt("x?");
		let n = prompt("n?");

	function pow(x, n) {
			let result = x;

		for(let i=1; i<n; i++) {
			result *= x;
	}
		return result;
		
	}
	alert ( pow (x, n) );
}
