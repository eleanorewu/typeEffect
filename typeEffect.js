var texts=["平面設計師","攝影師","插畫工作者"]    // 陣列
var speed=1000;                                //打字速度
var index=0;                                   //編號
var count=0;                                   //字數

// // 測試
// document.getElementById("type-box").innerHTML=texts[0];

// 定義方法
function type(){
    var box = document.getElementById(id);
    box.innerHTML = texts[index];
}

// 當網頁載入完成時執行方法 type
document.addEventListener("DOMContentLoaded", type);