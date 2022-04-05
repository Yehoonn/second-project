// 유저는 할일을 추가할 수 있다.
// 각 할일에 삭제와 체크버튼이 있다.
// 삭제버튼을 클릭하면 할일이 리스트에서 삭제된다.
// 체크버튼을 누르면 할일이 끝난것으로 간주하고 밑줄이간다.
// 끝난 할일은 되돌리기 버튼을 클릭하면 다시 되돌릴 수 있다.
// 탭을 이용해 아이템들을 상태별로 나누어서 볼 수 있다.
// 모바일 버전에서도 확인할 수 있는 반응형 웹이다

let word = document.getElementById("user");
let plus = document.getElementById("plus");
let addbt = document.getElementById("addbt")
let list = [];

plus.addEventListener("click", plusb);

function plusb() {
  let userword = word.value;
  list.push(userword);
  addbottom();
}

function addbottom() {
  let result = '';
  for (let i = 0; i < list.length; i++)
  {
      result += `<div class = "task">
      <div id = "add">${list[i]}</div>
      <div>
          <button>Check</button>
          <button>Delete</button>
      </div>
  </div>`
                
  }
    addbt.innerHTML = result;
}
