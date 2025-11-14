//정규표현식 객체 생성 + 확인하기
document.querySelector("#btn1").addEventListener("click", ()=>{
  //정규표현식 객체생성
  const regExp1=new RegExp("script");
  //"script"와 일치하는 문자열이 있는지 검사하는 정규표현식

  const regExp2=/java/;
  //"java"와 일치하는 문자열이 있는지 검사하는 정규표현식

  //확인하기
  const str1="저희는 지금 javascript를 공부하고 있음";
  const str2="jsp(java server page)도 곧 할거여";
  const str3="java, java, java";

  console.log(regExp1.test(str1));
  console.log(regExp1.exec(str1));

  console.log(regExp2.test(str2));
  console.log(regExp2.exec(str2));

  console.log(regExp2.test(str3));
  console.log(regExp2.exec(str3));
})

//메타문자 확인학
document.querySelector("#btn2").addEventListener("click", ()=>{

  //[abcd]
  const regExp1=/[abdc]/; //1개만 해당하면 됨
  console.log(regExp1.test("apple")); //t
  console.log(regExp1.test("ssbss")); //t
  console.log(regExp1.test("qwerty")); //f

  //^캐럿
  const regExp2=/^group/; //문자열의 시작이 group인지 확인
  console.log(regExp2.test("group100")); //t
  console.log(regExp2.test("group100")); //t

  //$달러
  const regExp3=/group$/; //문자열의 끝이 group인지 확인
  console.log(regExp3.test("group100")); //f
  console.log(regExp3.test("100group")); //t
});


//이름 유효성 검사
document.getElementById("inputName").addEventListener("keyup", (e)=>{
  //결과 출력용 span 요소 얻어오기
  const span = document.getElementById("inputNameResult");

  //한글 2~5글자 정규표현식 객체만들기
  const regExp = /^[ㄱ-힣]{2,5}$/;

  //빈칸인지 검사
  if(e.target.value.length==0) {
    span.innerText="";
    return;
  }

  //유효성 검사
  if(regExp.test(e.target.value)) {
    span.innerText="유효!";
    span.style.color="green";
    span.style.fontWeight="bold";

  } else {
    span.innerText="무효!";
    span.style.color="red";
    span.style.fontWeight="bold";
  }
});

document.getElementById("inputPno").addEventListener("keyup", (e)=>{
  const span = document.getElementById("inputPnoResult");
  //-------깃확인
  const regExp = /^[0-9]{6}-[1-4][0-9]{6}$/; //^\d{6}





  if(e.target.value.length==0) {
    span.innerText="";
    return;
  }

    if(regExp.test(e.target.value)) {
    span.innerText="유효!";
    span.classList.add("confirm");

  } else {
    span.innerText="무효!";
    span.classList.add("error");
  }
});
