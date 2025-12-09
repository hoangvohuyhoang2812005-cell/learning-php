document.getElementById('btndangki').addEventListener('click', function(event){
    
    // ⭐ 1. Ngăn chặn hành vi mặc định (tải lại trang)
    event.preventDefault(); 
    
    // 2. Lấy dữ liệu
    const tk = document.getElementById('account').value.trim();
    const mk = document.getElementById('password').value; 
    const xnmk = document.getElementById('confirm-password').value; 
    const email = document.getElementById('email').value.trim();
    const sdt = document.getElementById('phonenumber').value.trim();
    const ghichu = document.getElementById('note').value.trim();
    const selectCity = document.getElementById('city-select'); 
    const city = selectCity.value;

    // 3. Kiểm tra dữ liệu (Validation cơ bản)
    if (mk !== xnmk) {
        alert('Lỗi: Mật khẩu và Mật khẩu nhập lại không khớp nhau.');
        console.error('Lỗi Validation: Mật khẩu không khớp.');
        return; // Dừng hàm lại nếu có lỗi
    }

    if (!tk || !mk || !email || !city) {
        alert('Lỗi: Vui lòng điền đầy đủ các trường bắt buộc (Tài khoản, Mật khẩu, Email và Thành phố).');
        return;
    }
    
    // 4. In thông tin ra console (chỉ khi validation thành công)
    console.log('--- THÔNG TIN ĐĂNG KÝ HỢP LỆ ---');
    console.log('Tài khoản:', tk);
    console.log('Mật khẩu:', mk); // Cẩn thận khi log mật khẩu thật
    console.log('Mật khẩu nhập lại:', xnmk);
    console.log('Email:', email);
    console.log('Số điện thoại:', sdt);
    console.log('Ghi chú:', ghichu);
    console.log('Thành phố:', city);

    alert('Đăng ký thành công! Dữ liệu đã được in ra Console.');
    
    // Ở bước này, bạn sẽ gửi dữ liệu lên server (ví dụ: dùng fetch API)
});