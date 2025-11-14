//window.setTimeout()

document.getElementById("btn1").addEventListener("click", ()=>{
  window.setTimeout(function(){ //변수2개 1.함수, 2.지연시간(ms단위, 3초=3000)
    alert("3초 후 출력!") //비동기와 밀접한 관계
  }, 3000); 
});

//window.setInterval()

//현재 시간을 문자열로 반환하는 함수
function currentTime() {
  const now = new Date(); //window 내장객체
  let hour = now.getHours();
  let min = now.getMinutes();
  let sec = now.getSeconds();
  //1의 자리만 나올때 1, 2 이렇게 나옴
  //디지털 시계모양에 따라 1의 자리일때 01, 02 .. 로 표현
  if(hour < 10) hour="0"+hour;
  if(min < 10) min="0"+min;
  if(sec < 10) sec="0"+sec;
  return hour + " : " + min + " : " + sec;
  //return `${hour} : ${min} : ${sec}
}

let interval; //setIntervla을 저장하기 위한 변수

function clockFn() {
  const clock = document.getElementById("clock");
  clock.innerText=currentTime(); //현재 시간을 구해서 문자열로 반환한걸 화면상에 띄워줌

  Interval=setInterval(function() {
    clock.innerText=currentTime();
  }, 1000);
}

clockFn();

document.getElementById("stop").addEventListener("click", ()=>{
  window.clearInterval();

})
