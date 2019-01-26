
  
  let hamContainer = document.getElementsByClassName('hamContainer')[0];
  let quaterSquare = document.getElementsByClassName('background')[0];

  hamContainer.addEventListener('click',function(){
    
      if(quaterSquare.classList.contains('open')){
        quaterSquare.classList.remove('open');
      }else{
        quaterSquare.classList.add('open');
      }  
  });




  

