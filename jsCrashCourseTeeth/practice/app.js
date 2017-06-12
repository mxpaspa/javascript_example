console.log('connected')

var chompers = document.getElementById('teeth');

var coffeeBtn = document.getElementById('coffeeBtn');

var teeth = document.getElementById('teethCleaning');

var cavity = document.getElementById('cavity')

var els = document.getElementById('header')

var word = '';
var clickCount = 0

coffeeBtn.addEventListener('click', function coffeeTime(){
  console.log('coffee clicked');
  chompers.style.backgroundColor='#E7E1AD';
  clickCount ++;
  console.log(clickCount);
  if (clickCount >5){
    (cavity.style.backgroundColor = 'black');
    alert('youve got a cavity');
  }

  else{

  }
});

teeth.addEventListener('click', function cleaningTime(){
  console.log('coffee clicked');
  chompers.style.backgroundColor='white';
  clickCount = 0;
  console.log(clickCount);
});


els.addEventListener('click', function selectText(){
  // console.log('section made');
  word = window.getSelection().toString();
  console.log(word);
});

// function getWord (){
//   word = window.getSelection().toString();
//   console.log(word);
// }
