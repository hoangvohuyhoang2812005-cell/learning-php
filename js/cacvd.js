//1
for(let i = 1; i<=10; i++){
    if(i%2===0){
        continue;
    }
    console.log(i);
}


//2
const students = [
  { STT: 1, "Họ Tên": "Đoàn Ngọc Anh", "Mã SV": "74DCTT28374", Nhóm: 2 },
  { STT: 2, "Họ Tên": "Bùi Nam Khánh", "Mã SV": "74DCTT28375", Nhóm: 2 },
  { STT: 3, "Họ Tên": "Nguyễn Hà Đức Việt", "Mã SV": "74DCTT23456", Nhóm: 2 },
  { STT: 4, "Họ Tên": "Phan Quang Minh", "Mã SV": "74DCTT87654", Nhóm: 2 },
  { STT: 5, "Họ Tên": "Quỳnh Đần", "Mã SV": "75DCTT01297", Nhóm: 2 }
];

console.table(students);
console.log("Tổng số sinh viên:", students.length);

//3
document.getElementById("myButton").onmouseover = function(){
    alert("bạn đã nhấn vào đây");
}

//4
document.getElementById("myForm")
.addEventListener("submit", function (event){
    let name = document.getElementById("name").value;
    if(name === ""){
        alert("vui lòng nhập họ tên");
        event.preventDefault();
        }
        else{
            alert(name);
        }
    }
);

//5
var x = "lap trinh web";
x = 10;
var y = "20";
var z = x + y;
var n = parseInt("50");

//6
function add(a,b){
    return a + b;
}
console.log(add(5,3));

//7
var multiply = function(a,b){
    return a + b;
}
console.log(multiply(5,3));

//8
const sayHi = (name) => {
    console.log("Hi" + name);
};
sayHi("web");

//9
function process(x, callback){
    console.log("gia tri: " + x);
    callback;
}

function done(){
    console.log("xu ly xong");
}
process(5,done);

//10
function factorial(n){
    if(n === 0) return 1;
    return n * factorial(n - 1);
}
console.log(factorial(5));

//11
let fruit = ["tao", "chuoi", "cam"];

for(let i=0; i< fruit.length; i++){
    console.log(fruit[i]);
}

//12
let person = {
    name: "nam",
    age: 25,
    job: "develop"
};

for (let key in person){
    console.log(key + ":" + person[key]);
}

//13--tang 1 don vi
let i=1;
while(i <= 5){
    console.log(i);
    i++;
}

//14
do{
    console.log(i);
    i++;
}while(i <= 5);

//15
for(let i = 1; i<=10; i++){
    if(i === 5){
        break;
    }
    console.log(i);
}

//16
/*setTimeout(() => {
    console.log("Chạy sau 3 giây!");
  }, 3000);

  setInterval(() => {
    console.log("Chạy mỗi 2 giây!");
  }, 2000);*/

//17----------
// 1. Khai báo chuỗi
let text = " JavaScript là một ngôn ngữ lập trình tuyệt vời! ";

// 2. Lấy độ dài chuỗi
console.log("Độ dài chuỗi:", text.length);

// 3. Lấy ký tự trong chuỗi
console.log("Ký tự đầu tiên:", text.charAt(0));
console.log("Mã ASCII của ký tự đầu:", text.charCodeAt(0));
console.log("Dùng cú pháp []:", text[0]);

// 4. Cắt chuỗi
console.log("slice(2, 10):", text.slice(2, 10));
console.log("substring(2, 10):", text.substring(2, 10));
console.log("substr(2, 10):", text.substr(2, 10));

// 5. Chuyển đổi chữ hoa, chữ thường
console.log("Viết hoa:", text.toUpperCase());
console.log("Viết thường:", text.toLowerCase());

// 6. Nối chuỗi
let str1 = "Xin chào";
let str2 = "JavaScript";
console.log("Nối bằng concat():", str1.concat(" ", str2));
console.log("Nối bằng + :", str1 + " " + str2);

// 7. Loại bỏ khoảng trắng
console.log("Chuỗi sau khi trim():", text.trim());
console.log("Chuỗi sau khi trimStart():", text.trimStart());
console.log("Chuỗi sau khi trimEnd():", text.trimEnd());

// 8. Kiểm tra chuỗi
console.log("Chuỗi có chứa 'JavaScript':", text.includes("JavaScript"));
console.log("Chuỗi có bắt đầu bằng 'JavaScript':", text.startsWith("JavaScript"));
console.log("Chuỗi có kết thúc bằng 'vời!':", text.endsWith("vời!"));

// 9. Tìm kiếm chuỗi
console.log("Vị trí đầu tiên của 'a':", text.indexOf("a"));
console.log("Vị trí cuối cùng của 'a':", text.lastIndexOf("a"));
console.log("Vị trí của 'lập trình':", text.search("lập trình"));

// 10. Thay thế chuỗi
console.log("Thay thế 'JavaScript' thành 'JS':", text.replace("JavaScript", "JS"));
console.log("Thay thế tất cả 'a' bằng 'A':", text.replaceAll("a", "A"));

// 11. Tách chuỗi
let words = "HTML, CSS, JavaScript, React";
console.log("Tách chuỗi thành mảng:", words.split(", "));

// 12. Sử dụng Template Literals
let name = "Alice";
let age = 25;
let message = `Tên: ${name}, Tuổi: ${age}, đang học ${str2}`;
console.log("Template Literals:", message);

// 13. Chuỗi nhiều dòng với Template Literals
let multiLine = `Dòng 1
Dòng 2
Dòng 3`;
console.log("Chuỗi nhiều dòng:\n", multiLine);

//18-----------
// 1. Tạo đối tượng ngày giờ mới
let myDate = new Date();
console.log("Thời gian hiện tại:", myDate);

// 2. Lấy năm, tháng, ngày
console.log("Năm:", myDate.getFullYear());
console.log("Tháng:", myDate.getMonth() + 1); // Tháng bắt đầu từ 0
console.log("Ngày:", myDate.getDate());

// 3. Lấy giờ, phút, giây
console.log("Giờ:", myDate.getHours());
console.log("Phút:", myDate.getMinutes());
console.log("Giây:", myDate.getSeconds());

// 4. Chỉnh sửa ngày tháng
myDate.setFullYear(2025);
myDate.setMonth(5);    // Tháng 6 (0–11)
myDate.setDate(15);
console.log("Sau khi chỉnh sửa:", myDate);

// 5. Định dạng ngày giờ
console.log("Chuỗi ngày đơn giản:", myDate.toDateString());
console.log("ISO format:", myDate.toISOString());
console.log(
  "Định dạng theo ngôn ngữ:",
  myDate.toLocaleDateString("vi-VN")
);

// 6. Lấy timestamp
console.log("Timestamp:", myDate.getTime());

// 7. Tính khoảng cách giữa hai ngày
let startDate = new Date("2024-03-01");
let endDate = new Date("2024-03-05");
let diffTime = endDate - startDate;
let diffDays = diffTime / (1000 * 60 * 60 * 24);

console.log(
  `Khoảng cách giữa ${startDate.toDateString()} và ${endDate.toDateString()} là ${diffDays} ngày`
);

// 8. Cộng / trừ ngày tháng
let newDate = new Date();

newDate.setDate(newDate.getDate() + 7); // Cộng thêm 7 ngày
console.log("7 ngày sau:", newDate);

newDate.setDate(newDate.getDate() - 14); // Trừ đi 14 ngày
console.log("14 ngày trước:", newDate);


//19-------------
// 1. Các hằng số toán học
console.log("Số PI:", Math.PI);
console.log("Số Euler (e):", Math.E);
console.log("Căn bậc hai của 2:", Math.SQRT2);

// 2. Giá trị tuyệt đối
console.log("Giá trị tuyệt đối của -10:", Math.abs(-10));

// 3. Làm tròn số
console.log("Làm tròn xuống 4.7:", Math.floor(4.7));
console.log("Làm tròn lên 4.3:", Math.ceil(4.3));
console.log("Làm tròn gần nhất 4.5:", Math.round(4.5));

// 4. Lũy thừa và căn bậc hai
console.log("2^3 =", Math.pow(2, 3));
console.log("Căn bậc hai của 16:", Math.sqrt(16));

// 5. Tìm số lớn nhất, nhỏ nhất
console.log("Số lớn nhất trong (10, 20, 5, 40):", Math.max(10, 20, 5, 40));
console.log("Số nhỏ nhất trong (10, 20, 5, 40):", Math.min(10, 20, 5, 40));

// 6. Hàm lượng giác (độ → radian)
console.log("Sin(90 độ):", Math.sin(90 * Math.PI / 180));
console.log("Cos(0 độ):", Math.cos(0 * Math.PI / 180));

// 7. Sinh số ngẫu nhiên
console.log("Số ngẫu nhiên từ 0 đến 1:", Math.random());
console.log(
  "Số ngẫu nhiên từ 1 đến 100:",
  Math.floor(Math.random() * 100) + 1
);

// 8. Logarit
console.log("Logarit tự nhiên của 10:", Math.log(10));
console.log("Logarit cơ số 10 của 100:", Math.log10(100));

//20--------------
// Khai báo mảng
let fruits = ["Táo", "Chuối", "Cam", "Dâu"];
console.log("Mảng ban đầu:", fruits);

// 1. length – Lấy độ dài mảng
console.log("Độ dài của mảng:", fruits.length);

// 2. push() – Thêm phần tử vào cuối mảng
fruits.push("Xoài");
console.log("Sau khi thêm Xoài:", fruits);

// 3. pop() – Xóa phần tử cuối cùng
fruits.pop();
console.log("Sau khi xóa phần tử cuối:", fruits);

// 4. unshift() – Thêm phần tử vào đầu mảng
fruits.unshift("Nho");
console.log("Sau khi thêm Nho vào đầu:", fruits);

// 5. shift() – Xóa phần tử đầu tiên
fruits.shift();
console.log("Sau khi xóa phần tử đầu tiên:", fruits);

// 6. slice() – Cắt một phần của mảng (không làm thay đổi mảng gốc)
let citrus = fruits.slice(1, 3);
console.log("Mảng citrus (cắt từ index 1 đến 2):", citrus);

// 7. concat() – Nối hai mảng
let moreFruits = fruits.concat(["Xoài", "Dưa hấu"]);
console.log("Mảng sau khi nối:", moreFruits);

// 8. indexOf() – Tìm vị trí phần tử
console.log("Vị trí của 'Cam':", fruits.indexOf("Cam"));

// 9. includes() – Kiểm tra phần tử có tồn tại hay không
console.log(
  "'Dưa hấu' có trong mảng không?",
  fruits.includes("Dưa hấu")
);

// 10. sort() – Sắp xếp mảng (thay đổi mảng gốc)
fruits.sort();
console.log("Mảng sau khi sắp xếp:", fruits);

// 11. reverse() – Đảo ngược mảng (thay đổi mảng gốc)
fruits.reverse();
console.log("Mảng sau khi đảo ngược:", fruits);

// 12. forEach() – Duyệt qua từng phần tử
console.log("Duyệt mảng bằng forEach():");
fruits.forEach(fruit => console.log(fruit));

// 13. map() – Tạo mảng mới từ mảng cũ
let upperCaseFruits = fruits.map(fruit => fruit.toUpperCase());
console.log("Mảng chữ in hoa:", upperCaseFruits);

// 14. filter() – Lọc phần tử theo điều kiện
let shortNames = fruits.filter(fruit => fruit.length <= 3);
console.log("Tên trái cây có 3 ký tự trở xuống:", shortNames);

// 15. reduce() – Tính toán tổng hợp trên mảng
let numbers = [10, 20, 30, 40];
let total = numbers.reduce((sum, num) => sum + num, 0);
console.log("Tổng các số trong mảng:", total);

let title = document.getElementById("title");
title.style.color = "blue"; // Đổi màu chữ

// Truy xuất bằng TagName
let paragraphs = document.getElementsByTagName("p");
paragraphs[0].style.fontSize = "20px"; // Thay đổi kích thước chữ đoạn đầu tiên

// Truy xuất bằng Class
let descriptions = document.getElementsByClassName("description");
descriptions[1].style.fontWeight = "bold"; // Làm đậm đoạn thứ hai

// Truy xuất bằng CSS Selector
let firstItem = document.querySelector("#list li");
firstItem.style.backgroundColor = "yellow"; // Đổi màu nền phần tử đầu tiên

let allItems = document.querySelectorAll("#list li");
allItems.forEach(item => {
    item.style.margin = "10px"; // Tăng khoảng cách giữa các mục
});

// Hàm thay đổi nội dung khi click button
function changeText() {
    title.textContent = "Nội dung đã thay đổi!";
    descriptions[0].classList.add("highlight"); // Thêm class CSS để đổi màu chữ
}

function replaceElement() {
    // Lấy phần tử ảnh cần thay thế
    let img = document.getElementById("image");

    // Tạo phần tử mới (đoạn văn)
    let newElement = document.createElement("p");
    newElement.textContent = "Hình ảnh đã được thay thế bằng đoạn văn!";
    newElement.style.fontSize = "18px";
    newElement.style.fontWeight = "bold";
    newElement.style.color = "red";

    // Lấy phần tử cha của ảnh
    let parent = img.parentNode;

    // Thay thế ảnh bằng đoạn văn
    parent.replaceChild(newElement, img);
}

function getStyle() {
            let element = document.getElementById("text");
            let style = window.getComputedStyle(element);

            let color = style.color;
            let fontSize = style.fontSize;
            let fontWeight = style.fontWeight;

            document.getElementById("result").innerHTML =
                `Màu chữ: ${color} <br> Kích thước chữ: ${fontSize} <br> Độ đậm: ${fontWeight}`;
        }

        function setStyle() {
            let element = document.getElementById("text");

            element.style.color = "red"; 
            element.style.fontSize = "25px"; 
            element.style.fontWeight = "normal"; 
            element.style.backgroundColor = "yellow"; 
        }