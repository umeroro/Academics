function chng_style() {
  para.style.color = "Green";
  para.style.fontSize = "20px";
}

var image = document.getElementById("img_off");
function tu_on() {
  image.src = "images/on.jpg";
  document.body.style.background = "Black";
}
function tu_off() {
  image.src = "images/off.jpg";
  document.body.style.background = "#FFF";
}

document.getElementById("head-over").addEventListener("mouseover", function () {
  document.getElementById("h1_over").innerText = "Thank You";
});
document.getElementById("head-over").addEventListener("mouseout", function () {
  document.getElementById("h1_over").innerText = "Mouse over me";
});

function clk_me() {
  document
    .getElementById("head_click")
    .addEventListener("mousedown", function () {
      head_click.style.backgroundColor = "red ";
      head_click.innerText = "Release Me";
    });
  document
    .getElementById("head_click")
    .addEventListener("mouseup", function () {
      head_click.style.backgroundColor = "green";
      head_click.innerText = "Thank You";
    });
}

function chk_date() {
  document.getElementById("demo1").innerText = Date();
}

function up1(){
  row_1_p.style.display = "block";
  row_2_p.style.display = "none";
  row_3_p.style.display = "none";
  tabup1.style.boxShadow = '0px 10px 5px rgb(213, 211, 211)';
  tabup2.style.boxShadow = 'none';
  tabup3.style.boxShadow = 'none';
}
function up2(){
  row_1_p.style.display = "none";
  row_2_p.style.display = "block";
  row_3_p.style.display = "none";
  tabup1.style.boxShadow = 'none';
  tabup2.style.boxShadow = '0px 10px 5px rgb(213, 211, 211)';
  tabup3.style.boxShadow = 'none';
}
function up3(){
  row_1_p.style.display = "none";
  row_2_p.style.display = "none";
  row_3_p.style.display = "block";
  tabup1.style.boxShadow = 'none';
  tabup2.style.boxShadow = 'none';
  tabup3.style.boxShadow = '0px 10px 5px rgb(213, 211, 211)';
}