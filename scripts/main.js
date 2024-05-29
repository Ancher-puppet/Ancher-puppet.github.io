let myImage = document.querySelector("img");

myImage.onclick = function () {
  let mySrc = myImage.getAttribute("src");
  if (mySrc === "images/picture1.jpg") {
    myImage.setAttribute("src", "images/picture2.jpg");
  } else {
    myImage.setAttribute("src", "images/picture1.jpg");
  }
};


let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

if (!localStorage.getItem("name")) {
    setUserName();
} else {
    let storedName = localStorage.getItem("name");
    myHeading.textContent = "Mozilla 酷毙了，" + storedName;
}

function setUserName() {
    let myName = prompt("请输入你的名字。");
    if (!myName) {//如果输入是NULL再次执行函数：要求再次输入
      setUserName();
    } else {
      localStorage.setItem("name", myName);
      myHeading.textContent = "Mozilla 酷毙了，" + myName;
    }
  }

myButton.onclick = function () {
    setUserName();
};
  