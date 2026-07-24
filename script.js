
// Đảm bảo toàn bộ HTML đã được tải xong mới chạy các lệnh tương tác
document.addEventListener('DOMContentLoaded', function() {
    
    // 1. TẠO HIỆU ỨNG ĐỔ BÓNG CHO HEADER KHI CUỘN TRANG
    const header = document.querySelector('.header-main');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 10) {
            // Khi cuộn xuống, bóng đổ đậm hơn để phân tách Header và Nội dung
            header.style.boxShadow = '0 4px 10px rgba(0,0,0,0.2)';
            header.style.transition = 'box-shadow 0.3s ease';
        } else {
            // Khi ở trên cùng, trả về bóng đổ mặc định
            header.style.boxShadow = '0 2px 5px rgba(0,0,0,0.1)';
        }
    });

    // 2. XỬ LÝ SỰ KIỆN NÚT TÌM KIẾM
    const searchBtn = document.querySelector('.search-box button');
    const searchInput = document.querySelector('.search-box input');

    searchBtn.addEventListener('click', function(e) {
        e.preventDefault(); // Ngăn trình duyệt load lại trang
        const keyword = searchInput.value.trim();
        
        if (keyword !== '') {
            alert('Bạn đang tìm: "' + keyword + '"\n\n*Ghi chú: Tính năng lọc sản phẩm sẽ hoạt động khi bạn kết nối với cơ sở dữ liệu thực tế.');
        } else {
            alert('Vui lòng nhập tên xe điện, pin hoặc phụ tùng bạn muốn tìm!');
            searchInput.focus(); // Đưa con trỏ chuột quay lại ô nhập
        }
    });

    // 3. XỬ LÝ CUỘN MƯỢT (SMOOTH SCROLL) CHO DANH MỤC
    const categoryLinks = document.querySelectorAll('.category-list a');
    
    categoryLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // Chỉ áp dụng cho các link trỏ đến các thành phần trong cùng 1 trang (bắt đầu bằng #)
            if (this.getAttribute('href').startsWith('#')) {
                e.preventDefault();
                const targetId = this.getAttribute('href');
                console.log('Khách hàng vừa bấm vào danh mục:', targetId);
                // Sau này khi bạn tạo các khối <div> chứa sản phẩm tương ứng, 
                // có thể dùng lệnh window.scrollTo() để cuộn trang đến đúng vị trí đó.
            }
        });
    });

});
