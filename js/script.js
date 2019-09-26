let data = prompt("Enter number task");
    
switch(data) {
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
};

function taskOne() { // отступ между ) и { - кругом в начале функции
  let age = prompt("Укажите ваш возрост"); // отступ возьле prompt не нужен

  function checkAge(age) {
    return ( age > 18 ) ? "true" : confirm ("А родители розрешили?"); // в начале строчки вместо переменной можно просто юзать return, лишний отступ ниже
  } // отступ между окончанием функции и следующей строчкой кода

  checkAge(age);
}; // закрывай каждую функцию этим - ; (добавь ко всему коду)

function taskTwo(){
  let a = prompt("a?"); // не правильный отступ
  let b = prompt("b?"); // не правильный отступ

	function number(a, b) {
  		if (a < b) {
        alert (a);
      } else { // не правильный отступ
        alert (b); // не правильный отступ
        } // не правильный отступ
  } // не правильный отступ, отступ между окончанием функции и следующей строчкой кода

  number(a, b);
}

function taskThree() {
    let x = prompt("x?"); // не правильный отступ
    let n = prompt("n?"); // не правильный отступ

	function pow(x, n) {
        let result = x; // не правильный отступ

		for (let i=1; i<n; i++) { // нужен отступ
			result *= x;
	    } // не правильный отступ и снизу добавился отступ

		return result; // отступ снизу лишний
	} //  отступ между окончанием функции и следующей строчкой кода

	alert ( pow (x, n) );
} // подобавляй ;
