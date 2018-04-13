/* 
const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];

function init() {
  let index = 0;

  document.body.addEventListener('keydown', function(e) {
    const key = parseInt(e.which || e.detail);

    if (code[index] === key) {
      index++;

      if (index === code.length) {
        alert('Hurray!');

        index = 0;
      }
    } else {
      index = 0;
    }
  });
} 

*/



const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]


function init() {
  const body = document.querySelector('body')
  
  body.addEventListener('keydown', function keytrigger(e) {
    let key = parseInt(e.which || e.detail)
    for (let i = 0; i < code.length; i++) {
      if (key === code[i]) {
        alert("Congrats, you made it!")
        } else {
          code[i]
        }
    }
  }
  )
}