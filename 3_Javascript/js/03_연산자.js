//console.log('js file loaded');

//document HTML 문서내에서
//get 얻어오다
//Element HTML 요소
//ById 아이디로(아이디가 일치하는)
//전역변수, 변하지 않는 수라서 전역에 둬도 됨->값이 변하는 것들은 함수가 호출되는 시점에 다가가 값을 갖고와야돼
const number1=document.getElementById("input1");
console.log(number1);
const number2=document.getElementById("input2");
const result=document.getElementById("calcResult");

//두 수를 더해서 화면에 출력하는 함수
function plusFn() {
  //input요소.value:input 요소에 작성된 값 얻어오기
  const value1=number1.value; //number1의 value값을 담겠다
  const value2=number2.value;

  console.log(value1, value2);
  console.log(value1+value2);
  //inout 요소에 작성된 값은 무조건 문자열(string) 형태라서 더했을때 이어쓰기 되는 문제 발생!
  //->문자열을 숫자로 변경하는 코드 수행
  //숫자만 작성된 무자열("123")을 진짜 숫자타입으로 변경하는 방법
  //->Number("123")-->123

  console.log(Number(value1)+Number(value2));
  //두 수의 합을
  //result 변수(아이디가 calcResult인 span 요소)의
  //내부글자(innerTest, HTML 요소의 content/span 사이)로 대입하기
  result.innerText=Number(value1)+Number(value2);
}

/*const value1=number1.value;
  const value2=number2.value;
  전역변수, 이미 여기서 수행되서 받아올 값이 없음*/

function minusFn() {
  const value1=number1.value; //호출되는 시점에 값을 받아와야돼
  const value2=number2.value;
  result.innerText=Number(value1)-Number(value2);
}

function multiFn() {
  const value1=number1.value;
  const value2=number2.value;
  result.innerText=Number(value1)*Number(value2);
}

function divFn() {
  const value1=number1.value;
  const value2=number2.value;
  result.innerText=Number(value1)/Number(value2);
}

function modFn() {
  const value1=number1.value;
  const value2=number2.value;
  result.innerText=Number(value1)%Number(value2);
}
