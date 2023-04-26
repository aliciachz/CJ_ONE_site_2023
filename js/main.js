// main.js

// 고객센터
// toggle()
// title = 고객센터 열기 → 고객센터 닫기
window.addEventListener('load', ()=>{
const topMenu = document.querySelectorAll("dl.topMenu > dd")
  topMenu[4].addEventListener("click", e =>{
    e.currentTarget.classList.toggle('on');
    if (e.currentTarget.classList.contains("on")) { 
      e.currentTarget.children[0].setAttribute('title','고객센터 닫기');
    } else { 
      e.currentTarget.children[0].setAttribute('title','고객센터 열기');
    }
  })

/* 주메뉴 */
// header_wrap.on
// nav.gnb>ul>li>ul.on

const headerWrap = document.querySelector(".header_wrap") //고객센터
const gnbMenu = document.querySelectorAll("nav.gnb>ul>li") //gnbMenu
const subMenu = document.querySelectorAll("nav.gnb>ul>li>ul") //subMenu//ul

  for(let i=0; i<gnbMenu.length; i++){
    gnbMenu[i].addEventListener("mousemove", () => {

      // 고객센터에 on 붙어 있으면 고객센터의 on을 지운다
      if(topMenu[4].classList.contains("on")){
        topMenu[4].classList.remove("on")
      }
      // 검색박스에 on 붙어 있으면 검색박스의 on을 지운다
      if(srchOpen.classList.contains("on")){
        srchOpen.classList.remove("on")
        formSrch.classList.remove("on")
      }
      headerWrap.classList.add('on');
      subMenu.forEach(item => {
        item.classList.add('on');
      })
    })
  
    gnbMenu[i].addEventListener("mouseout", () => {
      headerWrap.classList.remove('on');
      subMenu.forEach(item => {
        item.classList.remove('on');
      })
    });

    gnbMenu[i].children[0].addEventListener("focus", () => {
      headerWrap.classList.add('on');
      subMenu.forEach(item => {
        item.classList.add('on');
      })
    })

    gnbMenu[i].children[0].addEventListener("blur", () => {
      headerWrap.classList.remove('on');
      subMenu.forEach(item => {
        item.classList.remove('on');
      })
    })
  }


/* 검색열기닫기 */
const formSrch = document.querySelector("form.srch")
const srchOpen = document.querySelector("span.srch_open")

srchOpen.addEventListener("click", e =>{
  e.currentTarget.classList.toggle('on');
  formSrch.classList.toggle('on');
  if (e.currentTarget.classList.contains("on")) { 
    e.currentTarget.children[0].setAttribute('title','검색입력서식 닫기');
  } else { 
    e.currentTarget.children[0].setAttribute('title','검색입력서식 열기');
  }
})

// 로그인 이미지
//<img src="images/appear appear_000 00 ~ 000 56.png"
//<img src="images/loop loop_000 00 ~ 000 81.png"

let appear="";
for(let k=0;k<57;k++){
  if(k<10){
    appear += `<img src="images/appear/appear_0000${k}.png" alt="${k}"/>`;
  }else{
    appear += `<img src="images/appear/appear_000${k}.png" alt="${k}"/>`;
  }
}
document.querySelector("a.appear").innerHTML = appear;

let loop="";
for(let h=0; h<82;h++){
  if(h<10){
    loop += `<img src="images/loop/loop_0000${h}.png" alt="${h}" />`;
  }else{
    loop += `<img src="images/loop/loop_000${h}.png" alt="${h}" />`;
  }
}
document.querySelector("a.loop").innerHTML = loop;

// 로그인 애니메이션
//appear 0~56 이미지 각각에 anmation 속성적용 
// animation: ani 2.85s linear 0s 1
// animation: ani 2.85s linear 0.05s 1
// animation: ani 2.85s linear 0.10s 1
const delay = 0.05;
const appearImgs = document.querySelectorAll(".appear>img");
for(let i=0; i<appearImgs.length; i++){
  appearImgs[i].style.animation = `ani 2.85s linear ${i*delay}s 1`;
}
// const appearImgs = document.querySelectorAll("a.appear img");
// console.log(appearImgs);
// appearImgs.forEach((img, index) => {
//   img.style.animation = `ani 2.85s linear ${index * 0.05}s 1`;
// })


//loop 0~81 이미지각각에 animation 속성 적용
//animation: ani 4.1s linear 2.85s infinite;
//animation: ani 4.1s linear 2.90s infinite;
//animation: ani 4.1s linear 2.95s infinite;
const loopImgs = document.querySelectorAll(".loop>img")
  for(let j=0; j<loopImgs.length; j++){
    loopImgs[j].style.animation = `ani 2.85s linear ${2.85+(j*delay)}s infinite`;
  } 
// const loopImgs = document.querySelectorAll("a.loop img");
// loopImgs.forEach((img, index) => {
//   img.style.animation = `ani 4.1s linear ${2.85 + index * 0.05}s infinite`;
// });


// content1 - 퀵메뉴01~04 이미지
// for문 이용해서 <img>를 quick01_00000.png 생성
// <span>안에 넣기

const quickSpan = document.querySelectorAll('.content1 > ul > li > a > span');
for (let j = 0; j < quickSpan.length; j++) {
  let images = '';
  for (let i = 0; i < 20; i++) {
    if (i < 10) {
      images += `<img src="images/quick0${j + 1}/quick0${j + 1}_0000${i}.png" alt="img" />`;
    } else {
      images += `<img src="images/quick0${j + 1}/quick0${j + 1}_000${i}.png" alt="img" />`;
    }
  }
  quickSpan[j].innerHTML = images;
}

});
// content1
// li에 마우스 올렸을 때 이미지 에니메이션 적용
// 마우스 뗄 때 이미지 에니메이션 삭제

const content1Li = document.querySelectorAll(".content1 ul li");

for (let i = 0; i < content1Li.length; i++) {
  const delay = 0.05;
  content1Li[i].addEventListener("mouseover", e => {
    for (let k = 0; k < 20; k++) {
      const imgLi = e.currentTarget.querySelector('.content1 > ul > li > a > span > img:nth-child(' + (k + 1) + ')');
      imgLi.style.animation = `ani 1s linear ${delay * k}s 1`;
    }
  });
  content1Li[i].addEventListener("mouseout", e => {
    for (let k = 0; k < 20; k++) {
      const imgLi = e.currentTarget.querySelector('.content1 > ul > li > a > span > img:nth-child(' + (k + 1) + ')');
      imgLi.style.animation = 'none';
    }
  });
}


// 배너 
const banner = document.querySelector('.banner');
const bannerFrame = banner.querySelector('.banner_frame');
const bannerSections = bannerFrame.querySelectorAll('section');
const bannerRoll = banner.querySelector('.banner_roll');
const prev = banner.querySelector('.prev');
const next = banner.querySelector('.next');
const play = banner.querySelector('.play');
const rolling = bannerRoll.querySelectorAll('a');
const whiteSections = banner.querySelectorAll('.white');

let currentBannerIndex = 0;
let isPlaying = false;
let timerId;
//next 버튼을 눌렀을때
//배너번호 1증가
//배너번호가 마지막 배너번호보다 크면 배너번호가 다시 0으로
//배너프레임의 left값 변경해서 배너 움직이게
next.addEventListener('click', e => {
  e.preventDefault();
  currentBannerIndex++;
  if (currentBannerIndex >= bannerSections.length) {
    currentBannerIndex = 0;
  }
  moveBanner();
})
//prev버튼 눌렀을때
prev.addEventListener('click', e => {
  e.preventDefault();
  currentBannerIndex--;
  if (currentBannerIndex < 0) {
    currentBannerIndex = bannerSections.length - 1;
  }
  moveBanner();
})

//오토배너 작동 - setTimeout 사용, 재귀함수 사용, 5초 마다
function startAutoBanner() {
  timerId = setTimeout(() => {
    currentBannerIndex++;
    if (currentBannerIndex >= bannerSections.length) {
      currentBannerIndex = 0;
    }
    moveBanner();
    startAutoBanner();
  }, 5000);
}

function stopAutoBanner() {
  clearTimeout(timerId);
}
startAutoBanner();

// 재생/멈춤 버튼
play.addEventListener('click', () => {
  if (isPlaying) {
    stopAutoBanner();
    play.innerText = '재생';
  } else {
    startAutoBanner();
    play.innerText = '멈춤';
  }
  isPlaying = !isPlaying;
})

// 롤링 클릭
rolling.forEach((link, i) => {
  link.addEventListener('click', e => {
    e.preventDefault();
    currentBannerIndex = i;
    moveBanner();
  })
})


// 함수
function moveBanner() {
  const currentBanner = bannerSections[currentBannerIndex];
  bannerFrame.style.left = `-${currentBannerIndex * 100}%`;

// section에 .white가 있으면 각요소에 .white 붙이기
  bannerSections.forEach((section) => {
    if (section === currentBanner) {
      section.classList.add('white');
    } else {
      section.classList.remove('white');
    }
  });

  rolling.forEach((link, index) => {
    if (index === currentBannerIndex) {
      link.classList.add('on');
    } else {
      link.classList.remove('on');
    }
  });
}

//  section에 .white 가 있으면 각요소에 .white 붙이기 
const arrowA = document.querySelectorAll(".arrow > a");
const rollingA = document.querySelectorAll(".rolling a");
let secWhite = (bannerNumber) => {
  if(bnnSection[bannerNumber].classList.contains('white')){
    arrowA.forEach(item =>{
      item.classList.add("white");
    })
  }else{
    arrowA.forEach(item =>{
      item.classList.remove("white");
    })
    rollingA.forEach(item =>{
      item.classList.remove("white");
    })
  }
  bnn_rollA.forEach(item => {
    item.classList.remove('on');
  });
  bnn_rollA[bannerNumber].classList.add('on');
}


// 스크롤 이벤트
window.addEventListener('scroll', () =>{
  let scroll = document.querySelector('html').scrollTop;

  // 도넛
  const  doughnut_Left_L = document.querySelector(".doughnut_Left_L");
  const  doughnut_Left_s = document.querySelector(".doughnut_Left_s");
  const  combine_Left = document.querySelector(".combine_Left");

  combine_Left.style.top = `${scroll*0.7}px`;
  doughnut_Left_s.style.top = `${scroll*0.5}px`;
  doughnut_Left_L.style.top = `${1310-scroll*0.8}px`;


  const  doughnut_right_M = document.querySelector(".doughnut_right_M");
  const  doughnut_right_s = document.querySelector(".doughnut_right_s");
  const  doughnut_right = document.querySelector(".doughnut_right");

  doughnut_right.style.top = `${scroll*0.7}px`;
  doughnut_right_s.style.top = `${scroll*0.5}px`;
  doughnut_right_M.style.top = `${1310-scroll*0.8}px`;

  const  doughunt_Center_M = document.querySelector(".doughunt_Center_M");
  const  doughunt_Center_s = document.querySelector(".doughunt_Center_s");

  doughunt_Center_s.style.top = `${scroll*0.5}px`;
  doughunt_Center_M.style.top = `${1310-scroll*0.8}px`;
})

// content3
//li 하나하나에 마우스아웃 하면 .on 지우고 li 하나하나에 마우스오버하면 add on

let all = document.querySelectorAll(".content3_inner>div>ul>li");
all.forEach((all) => {
  all.addEventListener("mouseover", () => {
    all.classList.add("on");
  })
  all.addEventListener("mouseout", () => {
    all.classList.remove("on");
  })
})

// 선생님
// const content3Li = document.querySelectorAll(".content3_inner>div>ul>li");
// content3Li.forEach(item =>{
//   item.addEventListener('mouseover', e => {
//     e.currentTarget.classList.add('on');
//   })
//   item.addEventListener('mouseout', e => {
//     e.currentTarget.classList.remove('on');
//   });
// });


// 대분류
//li a 하나하나를 클릭했을때
//class 속성값을 가져와서 변수에 저장 
//변수값이랑 정확하게 일치하는 케이스 찾아서 
// 해당 클래스이름에 해당되는 li만 보이게 설정한다. - 각 클라스이름에 해당되는 li만 따로 모아서 저장해놓고
const group = document.querySelectorAll(".content3_inner>ul>li>a");
const liss = document.querySelectorAll(".content3_inner>div>ul>li") 
const ent = document.querySelectorAll(".content3_inner>div>ul>li.ent")
const shop = document.querySelectorAll(".content3_inner>div>ul>li.shop")
const dinner = document.querySelectorAll(".content3_inner>div>ul>li.dinner")
const box = document.querySelectorAll(".content3_inner>div>ul>li.box")

for(let i=0;i<group.length;i++){
  group[i].addEventListener("click",e=>{
    e.preventDefault();
    group.forEach(item=>{
      item.classList.remove("on")
    });
    e.currentTarget.classList.add("on")
    liss.forEach(item=>{
      item.style.display = "none";
    });
    let className = e.currentTarget.parentElement.getAttribute("class");
    switch(className){
      case "all" :
          liss.forEach(item=>{
            item.style.display = "block";
          })
            break;
      case "ent" :
          ent.forEach(item=>{
            item.style.display = "block";
          });
            break;
      case "shop" :
          shop.forEach(item=>{
            item.style.display = "block";
          });
            break;
      case "dinner" :
          dinner.forEach(item=>{
            item.style.display = "block";
          });
            break;
      case "box" :
          box.forEach(item=>{
            item.style.display = "block";
          });
            break;
    }
  })
}

window.addEventListener('load', ()=>{
// family site 
const site = document.querySelector(".footer_inner>dl>dd.family_site")
site.addEventListener("click", e =>{
    e.preventDefault();
    e.currentTarget.classList.toggle('on');
    if (e.currentTarget.classList.contains("on")) { 
      e.currentTarget.children[0].setAttribute('title','닫기');
    } else { 
      e.currentTarget.children[0].setAttribute('title','열기');
    }
  })
});

// 탑버튼 
window.addEventListener('scroll', () => {
  let scroll = document.querySelector('html').scrollTop;
  //let scroll = window.pageYOffset;
  console.log(scroll);
  if(scroll <= 0){
    top.classList.remove("on", "ab");
  }else if(scroll > 2700){
    top.classList.add("ab");
    btnTop.classList.add("on");
  }else{
    top.classList.remove("ab");
    top.classList.add("on");
  }
})

// 햄버거 버튼 클릭 div.mobBtn
// 1. div.mob.on
// 2. 닫기 div.mobBtn_close.on
// 3.div.bg.on,body.on

//모바일 닫기 클릭
window.addEventListener('load', ()=>{
const mobBtn = document.querySelector("div.mobBtn")
const mob = document.querySelector("div.mob")
const close = document.querySelector("div.mobBtn_close")
const bg = document.querySelector("div.bg")
const body = document.querySelector("body")

mobBtn.addEventListener("click", e =>{
  mob.classList.add('on');
  close.classList.add('on');
  bg.classList.add('on');
  body.classList.add('on');
})
close.addEventListener("click", e =>{
  mob.classList.remove('on');
  mobBtn.classList.remove('on');
  bg.classList.remove('on');
  body.classList.remove('on');
  close.classList.remove('on');
})


//햄버거 btn 하위 메뉴
const dd = document.querySelectorAll("dl.mob_topMenu>dd")
console.log(dd)

const li = document.querySelectorAll("nav.mob_gnb>ul>li")
const lis = document.querySelectorAll("nav.mob_gnb>ul>li>ul>li")


dd[4].addEventListener("click", e =>{
  dd[4].classList.toggle('on');
})


for(let k=0;k<li.length;k++){
  li[k].addEventListener("click", e =>{
    li[k].classList.toggle('on');
  })
  li[k].addEventListener("mouseleave", e =>{
    li[k].classList.remove('on');
  })
  // if(li[k].classList.contains("on")){ 
  //   li[k].classList.toggle('on');
  // };
}

for(let k=0;k<lis.length;k++){
  lis[k].addEventListener("mouseover", e =>{
    lis[k].classList.add('on');
  })
  lis[k].addEventListener("mouseleave", e =>{
    lis[k].classList.remove('on');
  })
}
});