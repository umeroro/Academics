var img = document.createElement("img");
var head = document.querySelector(".head");
var divOne = document.createElement("div");
var divTwo = document.createElement("div");
var divThree = document.createElement("div");

img.src =
  "https://img.freepik.com/free-vector/golden-elegant-logo-flat-style_52683-17266.jpg?t=st=1722967966~exp=1722971566~hmac=f89e2b692cc3d96c9117a7e2c257f972e93d12565e3255fe93622785ba5940af&w=740";
img.setAttribute("id", "logo");
divOne.setAttribute("id", "one");
divTwo.setAttribute("id", "two");
divThree.setAttribute("id", "three");

head.appendChild(divOne), head.appendChild(divTwo), head.appendChild(divThree);
divOne.appendChild(img);

var ul = document.createElement("ul");
var menu = [
  { name: "HOME", url: "#" },
  { name: "ABOUT", url: "#" },
  { name: "SERVICES", url: "#" },
];

menu.forEach(function (menu) {
  var li = document.createElement("li");
  var a = document.createElement("a");
  a.textContent = menu.name;
  a.href = menu.url;
  li.appendChild(a);
  ul.appendChild(li);
});

divTwo.appendChild(ul);

var button = document.createElement("button");
button.setAttribute("class", "contact");
button.textContent = "CONTACT US";

divThree.appendChild(button);

// styling

var style = document.createElement("style");
style.innerHTML = `
    * {
        margin: 0;
        padding: 0;
    }
`;
document.body.appendChild(style);
(head.style.width = "100%"),
  (head.style.display = "flex"),
  (head.style.backgroundColor = "palegoldenrod");
img.style.width = "30%";
(divOne.style.width = "25%"), (divOne.style.textAlign = "center");
(divTwo.style.width = "50%"),
  (divTwo.style.alignSelf = "center"),
  (divTwo.style.textAlign = "center");
(divThree.style.width = "25%"),
  (divThree.style.textAlign = "center"),
  (divThree.style.alignSelf = "center");

(button.style.border = "1px solid black"),
  (button.style.color = "black"),
  (button.style.padding = "12px 24px"),
  (button.style.backgroundColor = "transparent"),
  (button.style.borderRadius = "25px"),
  (button.style.fontSize = "15px"),
  (button.style.lineHeight = "15px"),
  (button.style.fontWeight = "500"),
  (button.style.fontFamily = "Arial, helvetica, sans-serif"),
  (button.style.transition = "0.1s");

button.addEventListener("mouseover", function () {
  button.style.backgroundColor = "black";
  button.style.color = "white";
  button.style.cursor = "pointer";
});

button.addEventListener("mouseleave", function () {
  button.style.backgroundColor = "transparent";
  button.style.color = "black";
});
