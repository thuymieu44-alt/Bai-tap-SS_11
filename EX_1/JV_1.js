let year = Number(prompt('Nhập vào 1 năm:'));
let a = year % 4;//phép chia lấy dư//
let b = year % 100;
let c = year % 400;

if (a === 0 && b !== 0) {
    alert('Năm ' + year + ' là năm NHUẬN.');
} else if (c ===0){
    console.log('Năm ' + year + ' là năm NHUẬN');
} else {
    alert('Năm ' + year + ' KHÔNG phải là năm nhuận.');
}