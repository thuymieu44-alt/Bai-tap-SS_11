let a = Number(prompt('Nhập cân nặng(kg):'));
let b = Number(prompt('Nhập chiều cao(m):'));
let c = a / Math.pow(b, 2);
c = c.toFixed(2);
if (c <= 18.5) {
    alert('Chỉ số BMI của bạn là ' + c + 'Phân lại theo WHO và DID&WPRO là: Gầy.');
} else if (18.5 <= c && c <= 22.9) {
    alert(" Chỉ số BMI của bạn là: " + c + "\n Phân lại theo WHO và DID & WPRO là: Bình thường. ");
} else if (23 <= c && c <= 24.9) {
    alert(" Chỉ số BMI của bạn là: " + c + "\n Phân lại theo WHO là: Bình thường.\n Và theo  DID & WPRO là: Thừa cân/ Tiền béo phì.");
}  else if (25 <= c && c <= 29.9) {
    alert(" Chỉ số BMI của bạn là: " + c + "\n Phân lại theo WHO là: Tiền béo phì.\n Và theo  DID & WPRO là: Béo phì cấp độ I.");
} else if (30 <= c && c <= 34.9) {
    alert(" Chỉ số BMI của bạn là: " + c + "\n Phân lại theo WHO là: Béo phì cấp độ I.\n Và theo  DID & WPRO là: Béo phì cấp độ II.");
} else if (35 <= c && c <= 39.9) {
    alert(" Chỉ số BMI của bạn là: " + c + "\n Phân lại theo WHO và DID & WPRO là: Béo phì cấp độ II.");
} else {
    alert(" Chỉ số BMI của bạn là: " + c + "\n Phân lại theo WHO và DID & WPROlà: Béo phì cấp độ III.");
}