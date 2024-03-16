'use strict';

{
  function setWord() {
    word = words.splice(Math.floor(Math.random() * words.length), 1)[0];
    target.textContent = word;
    loc = 0
  }

  const words = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
  let word;
  let loc = 0;
  let startTime;
  const comment = document.getElementById('comment');

  const target = document.getElementById('target');
  document.addEventListener('click', () => {
    startTime = Date.now();
    setWord();
  });

  document.addEventListener('keydown', e => {
    if (e.key === word[loc]) {
      loc++;
      target.textContent = '_'.repeat(loc)  + word.substring(loc);
    }  


    if (loc === word.length) {
     
      if (words.length === 0) {
        const elpsedTime = ((Date.now() - startTime) / 1000).toFixed(2);
        const result = document.getElementById('result');
        result.textContent = `終了!        記録  ${elpsedTime} 秒`;
        
      if (elpsedTime > 30) {
        comment.textContent = 'ざっこwwwwww';
      } else if (elpsedTime > 25) {
        comment.textContent = 'びみょ～';
      } else if (elpsedTime > 20) {
        comment.textContent = 'まぁまぁだな。'
      } else if (elpsedTime > 15) {
        comment.textContent = 'やるやんけ！'
      } else {
        comment.textContent = '神'
      }
      
      
      }
      setWord();
    }
  });
}