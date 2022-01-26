var header=document.querySelector('.header');
let sticky= header.offsetLeft;


window.addEventListener('scroll',function(){
   if(window.pageYOffset > sticky){
      header.classList.add('sticky');
   }else{
       header.classList.remove('sticky');
   }
})