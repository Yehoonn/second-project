// 유저는 할일을 추가할 수 있다.
// 각 할일에 삭제와 체크버튼이 있다.
// 삭제버튼을 클릭하면 할일이 리스트에서 삭제된다.
// 체크버튼을 누르면 할일이 끝난것으로 간주하고 밑줄이간다.
// 끝난 할일은 되돌리기 버튼을 클릭하면 다시 되돌릴 수 있다.
// 탭을 이용해 아이템들을 상태별로 나누어서 볼 수 있다.
// 모바일 버전에서도 확인할 수 있는 반응형 웹이다

let word = document.getElementById("user");
let plus = document.getElementById("plus");
let addbt = document.getElementById("addbt");
let tabs = document.querySelectorAll(".task-tab div");
let all = document.getAnimations("all");
let ing = document.getAnimations("ing");
let fin = document.getAnimations("fin");
let mode = "all";
let filterlist = [];

let list = [];
let donelist = [];

plus.addEventListener("click", plusb);

for (let i = 1; i < tabs.length; i++) {
  tabs[i].addEventListener("click", filter);
}

function filter(event) {
  mode = event.target.id;

  if (mode == "all") {
    addbottom();
  } else if (mode == "ing") {
    for (let ii = 0; ii < list.length; ii++) {
      if (list[ii].isComplete == false) filterlist.push(list[ii]);
    }
    addbottom();
  } else if (mode == "fin") {
    for (let ii = 0; ii < list.length; ii++) {
      if (list[ii].isComplete == true) filterlist.push(list[ii]);
    }
    addbottom();
  }
}

function plusb() {
  let task = {
    id: randomID(),
    taskContent: word.value,
    isComplete: false,
  };
  list.push(task);
  console.log(list);
  addbottom();
}

function checkb(id) {
  for (let ii = 0; ii < list.length; ii++) {
    if (list[ii].id == id) {
      list[ii].isComplete = !list[ii].isComplete;
      break;
    }
  }
  addbottom();
}

function deleteb(id) {
  for (let ii = 0; ii < list.length; ii++) {
    if (list[ii].id == id) {
      list.splice(ii, 1);
      break;
    }
  }
  addbottom();
}

function addbottom() {
  let listt = [];

  if (mode == "all") {
    listt = list;
  }
  else if (mode == "ing" || mode == "fin"){
    listt = filterlist;
  }

  let result = "";
  for (let i = 0; i < listt.length; i++) {
    if (listt[i].isComplete == true) {
      result += `<div class = "task" id = "${listt[i].id}">
      <div class ="done">${listt[i].taskContent}</div>
      <div>
          <button onclick = "checkb('${listt[i].id}')"><i class="fa-solid fa-arrow-rotate-left"></i></button>
          <button onclick = "deleteb('${listt[i].id}')"><i class="fa-solid fa-trash"></button>
          
      </div>
  </div>`;
    } else {
      if (listt[i].isComplete == false)
        result += `<div class = "task" id = "${listt[i].id}">
      <div>${listt[i].taskContent}</div>
      <div>
          <button onclick = "checkb('${listt[i].id}')"><i class="fa-solid fa-check"></i></button>
          <button onclick = "deleteb('${listt[i].id}')"><i class="fa-solid fa-trash"></i></button>
      </div>
  </div>`;
    }
  }
  addbt.innerHTML = result;
}

function randomID() {
  return "_" + Math.random().toString(36).substr(2, 9);
}
