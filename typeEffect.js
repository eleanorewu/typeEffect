var texts = ["平面設計師", "插畫工作者", "攝影師"];   // 陣列
var speed = 1000;                                   // 打字速度
var index = 0;                                      // 編號
var count = 0;                                      // 字數
var id = "type-box";                                // 要寫入文字的 ID

// 定義方法
function type(){
    var box = document.getElementById(id);

    // 變數 切割完的文字 = 文字陣列[編號].切割(開始位置，切幾個);
    var slice = texts[index].slice(0, count++);

    // 盒子.插入內容 = 切割完的文字;
    box.innerHTML = slice;

    setTimeout(type,500);

    if (count > texts[index].length+3) {
        count=0;
        index++;
    }

    if (index == texts.length) {
        index = 0;
        
    }
}

// 當網頁載入完成時執行方法 type
document.addEventListener("DOMContentLoaded", type);