console.log("안녕");

const searchEl = document.querySelector('.search');
const searchInputEl = searchEl.querySelector('input');

searchEl.addEventListener('click',function(){
  searchInputEl.focus();
});
searchInputEl.addEventListener('focus',function(){
  searchInputEl.setAttribute('placeholder' , '통합검색');
  searchEl.classList.add('focused');
})
searchInputEl.addEventListener('blur',function(){
  searchEl.classList.remove('focused');
  searchInputEl.setAttribute('placeholder' , '');
})
// console.log(searchE1);
// console.log(searchInputE1);

const badgesEl = document.querySelector('#head_layout .badges');
const totopEl = document.querySelector('#to-top');
// 0.3초마다 기능을 불러오는 거
window.addEventListener('scroll',_.throttle(function(){
  if(window.scrollY > 500){
  //배지숨기기
  // badgesEl.style.display = 'none';
  // gsap.to.(요소,지속시간,옵션)
  gsap.to(badgesEl,.6,{
    opacity:0
  })
  // 상단버튼 보이기
  gsap.to(totopEl,.3,{
    x:0
  })
  }else{
    //배지보이기
    // badgesEl.style.display = 'block';
    gsap.to(badgesEl,.6,{
    opacity:1
  })
  //상단버튼 숨기기
  gsap.to(totopEl,.3,{
    x:100
  })
  }
},300));
// 상단으로 이동
totopEl.addEventListener('click',function(){
  gsap.to(window,.7,{
    scrollTo:0
  })
})

const fadeinEls = document.querySelectorAll('section.banner .fade-in');
// console.log(fadeinEl);
fadeinEls.forEach(function(fadeEl,index){
  gsap.to(fadeEl,.5,{
    opacity:1,  
    delay:(index +1) *.3
  })
});

 const swiper = new Swiper('.notice-line .swiper-container',{
  direction : 'vertical', //수직 슬라이드
  autoplay:true , //자동재생 여부
  loop:true
});

new Swiper('.promotion .swiper-container',{
    slidesPerView : 3, //한번에 보여주는 슬라이드 개수
    spaceBetween : 10, //슬라이드 사이 여백
    centeredSlides : true, //1번 슬라이드가 가운데 보이기
    loop:true,
    autoplay:{
      delay:5000},
      pagination:{
        el:'.promotion .swiper-pagination',
        clickable : true
      },
      navigation:{
        prevEl:'.promotion .swiper-prev',
        nextEl:'.promotion .swiper-next'
      }
});

//promotion 슬라이드 토글 기능
//슬라이드 기능
const promotionEl = document.querySelector('.promotion');
// 슬라이드 영역 토글하는 버튼
const promotionToggleEl = document.querySelector('.toggle-promotion');

// console.log(promotionEl);
// console.log(toggle-promotion);
promotionToggleEl.addEventListener('click',function(){
  // console.log(promotionEl.classList.contains('hide'));
  if(promotionEl.classList.contains('hide')){
    //요소에 hide 클래스 존재
    promotionEl.classList.remove('hide');
  }else{
    //요소에 hide 클래스
    promotionEl.classList.add('hide')
  }
});

// 스크롤 영역감지 
const spyEls = document.querySelectorAll('section.scroll-spy');
console.log(spyEls);

spyEls.forEach(function(spyEl){
  new ScrollMagic.Scene({ //Scene 감지할 요소 추가
    triggerElement:spyEl //보여짐 여부를 감지할 요소
    ,triggerHook:.8 //화면 80%지점에서 보여짐 여부 감지
  }).setClassToggle(spyEl,'show')//요소가 화면에 감지되면 show 클래스 추가
  .addTo(new ScrollMagic.Controller()); //코드 내부에 기능 할당(필수!)
});

// AWARDS SWIPE
new Swiper('.awards .swiper-container',{
  slidesPerView:5,
  loop:true,
  spaceBetween:30,
  autoplay:{
    delay:3000
  },
  navigation:{
    prevEl : '.awards .swiper-prev',
    nextEl : '.awards .swiper-next'
  }
});


