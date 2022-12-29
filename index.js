// スマホ画面の際にメニュー画面引き下げる。

window.addEventListener('DOMContentLoaded',function(){
  const menu_up = document.getElementsByName('menu_up');
  const removeBtn = document.getElementById('remove-btn1');
  removeBtn.addEventListener('click', removeFunc,false);
  
  function removeFunc(){
    for(let i = 0; i < menu_up.length; i++){
      menu_up[i].checked = false; 
    }
  }
});

window.addEventListener('DOMContentLoaded',function(){
    const menu_up = document.getElementsByName('menu_up');
    const removeBtn = document.getElementById('remove-btn2');
    removeBtn.addEventListener('click', removeFunc,false);
    
    function removeFunc(){
      for(let i = 0; i < menu_up.length; i++){
        menu_up[i].checked = false; 
      }
    }
  });

  window.addEventListener('DOMContentLoaded',function(){
    const menu_up = document.getElementsByName('menu_up');
    const removeBtn = document.getElementById('remove-btn3');
    removeBtn.addEventListener('click', removeFunc,false);
    
    function removeFunc(){
      for(let i = 0; i < menu_up.length; i++){
        menu_up[i].checked = false; 
      }
    }
  });

  window.addEventListener('DOMContentLoaded',function(){
    const menu_up = document.getElementsByName('menu_up');
    const removeBtn = document.getElementById('remove-btn4');
    removeBtn.addEventListener('click', removeFunc,false);
    
    function removeFunc(){
      for(let i = 0; i < menu_up.length; i++){
        menu_up[i].checked = false;
      }
    }
  });