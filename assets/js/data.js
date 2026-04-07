
const CAFE_DATA = {
  brandName: "Nguyên Chất Coffee",
  brandSlogan: "Hương Vị Từ Đất Trời – Trao Gửi Yêu Thương",
  founded: "2015",
  phone: "0901 234 567",
  email: "hello@nguyenchat.vn",
  address: "123 Nguyễn Huệ, Quận 1, TP. Hồ Chí Minh",
  socials: {
    facebook: "#", instagram: "#", youtube: "#", zalo: "#"
  },
  products: [
    { id: 1, name: "Espresso Thuần Túy", category: "hot", price: "45.000đ", desc: "Cà phê nguyên chất pha bằng máy espresso ý, đậm đà, thơm nồng.", img: "assets/images/product_espresso_1775547105569.png", badge: "Bestseller" },
    { id: 2, name: "Cà Phê Sữa Đá", category: "iced", price: "35.000đ", desc: "Cà phê phin truyền thống kết hợp sữa đặc, đá bào tươi mát.", img: "assets/images/product_caphe_sua_1775547141213.png", badge: "Truyền Thống" },
    { id: 3, name: "Cold Brew Premium", category: "iced", price: "55.000đ", desc: "Ủ lạnh 24 giờ, vị ngọt tự nhiên, không đắng gắt, thanh mát.", img: "assets/images/product_cold_brew_1775547125882.png", badge: "Mới" },
    { id: 4, name: "Cappuccino Ý", category: "hot", price: "50.000đ", desc: "Espresso kết hợp milk foam mịn màng, lớp bọt sữa thơm béo.", img: "assets/images/product_espresso_1775547105569.png", badge: "" },
    { id: 5, name: "Bạc Xỉu Kem Tươi", category: "iced", price: "40.000đ", desc: "Cà phê nhạt béo ngậy với lớp kem tươi đặc biệt phía trên.", img: "assets/images/product_caphe_sua_1775547141213.png", badge: "" },
    { id: 6, name: "Cold Brew Dừa", category: "iced", price: "60.000đ", desc: "Cold brew hoà quyện nước cốt dừa tươi, hương vị nhiệt đới độc đáo.", img: "assets/images/product_cold_brew_1775547125882.png", badge: "Hot" },
    { id: 7, name: "Robusta Nguyên Chất 500g", category: "bag", price: "250.000đ", desc: "Hạt cà phê Robusta nguyên chất từ Buôn Ma Thuột, rang vừa, hương thơm mạnh, vị đậm đà đặc trưng. Phù hợp pha phin truyền thống.", img: "assets/images/product_bag_robusta_1775548599432.png", badge: "Bán Chạy" },
    { id: 8, name: "Arabica Đà Lạt 250g", category: "bag", price: "320.000đ", desc: "Arabica cao cấp từ vùng đất Đà Lạt mát lạnh, rang nhẹ, hương hoa quả tinh tế, vị chua thanh nhẹ nhàng. Lý tưởng cho pour-over và cold brew.", img: "assets/images/product_bag_arabica_1775548612603.png", badge: "Cao Cấp" },
    { id: 9, name: "Blend Đặc Biệt 500g", category: "bag", price: "290.000đ", desc: "Bộ phối trộn độc quyền giữa Robusta và Arabica theo tỷ lệ bí truyền, tạo nên hương vị cân bằng hoàn hảo, đậm đà nhưng không gắt.", img: "assets/images/product_bag_blend_1775548626561.png", badge: "Đặc Biệt" },
  ],
  news: [
    { id: 1, title: "Bí Quyết Pha Cà Phê Ngon Tại Nhà", date: "01/04/2026", category: "Mẹo Hay", excerpt: "Khám phá những bí quyết đơn giản để pha một ly cà phê hoàn hảo tại nhà theo phong cách barista chuyên nghiệp.", img: "assets/images/news_banner_1775547254502.png" },
    { id: 2, title: "Hành Trình Từ Nông Trại Đến Tách Cà Phê", date: "25/03/2026", category: "Câu Chuyện", excerpt: "Theo chân những người nông dân cao nguyên Đà Lạt để hiểu về hành trình gian nan tạo ra hạt cà phê chất lượng cao.", img: "assets/images/process_harvesting_1775547179908.png" },
    { id: 3, title: "Xu Hướng Cà Phê 2026: Cold Brew Lên Ngôi", date: "15/03/2026", category: "Xu Hướng", excerpt: "Cold brew đang dần chiếm lĩnh thị trường cà phê Việt Nam với hương vị mới lạ và cách thưởng thức hiện đại.", img: "assets/images/product_cold_brew_1775547125882.png" },
  ],
  process: [
    { icon: "🌿", step: "01", title: "Thu Hoạch Tại Nông Trại", desc: "Những hạt cà phê chín đỏ mọng được hái thủ công từ các nông trại đạt chuẩn tại Đà Lạt và Buôn Ma Thuột ở độ cao trên 1000m.", img: "assets/images/process_raw_beans_farm_1775548514995.png", location: "Ngoài Trời – Nông Trại" },
    { icon: "🚿", step: "02", title: "Phân Loại & Rửa Sạch", desc: "Quả cà phê được phân loại kỹ lưỡng, loại bỏ tạp chất rồi rửa sạch bằng nước suối tự nhiên tại cơ sở sơ chế.", img: "assets/images/process_sorting_washing_1775548530077.png", location: "Cơ Sở Sơ Chế" },
    { icon: "☀️", step: "03", title: "Phơi Khô Tự Nhiên", desc: "Hạt cà phê được trải đều trên các sân phơi hoặc giàn lưới cao, phơi dưới nắng tự nhiên từ 20-30 ngày, đảo đều để độ khô đồng nhất.", img: "assets/images/process_drying_sun_1775548545652.png", location: "Sân Phơi – Ngoài Trời" },
    { icon: "🔥", step: "04", title: "Rang Trong Nhà Máy", desc: "Hạt nhân được đưa vào nhà máy rang với hệ thống thùng rang công nghiệp hiện đại, kiểm soát nhiệt độ 200-230°C và thời gian chính xác đến từng giây.", img: "assets/images/process_factory_roasting_1775548564046.png", location: "Nhà Máy – Phân Xưởng Rang" },
    { icon: "📦", step: "05", title: "Đóng Gói Chuyên Nghiệp", desc: "Sau khi rang và làm nguội, cà phê được đóng gói trong dây chuyền khép kín với túi bảo quản van một chiều, đảm bảo hương vị tươi nguyên.", img: "assets/images/process_factory_packaging_1775548582253.png", location: "Nhà Máy – Dây Chuyền Đóng Gói" },
    { icon: "☕", step: "06", title: "Thành Phẩm & Phục Vụ", desc: "Sản phẩm hoàn chỉnh được kiểm tra chất lượng nghiêm ngặt trước khi xuất xưởng, đến tay người dùng và các cửa hàng trên toàn quốc.", img: "assets/images/process_roasting_1775547164124.png", location: "Hoàn Thành" },
  ]
};

// Style definitions for switcher
const STYLES = [
  { id: 1, name: "Dark Luxury", subtitle: "Sang trọng & Tối giản", color: "#C9A96E", bg: "#1A0F0A", desc: "Tone tối ấm, vàng đồng, cảm giác cao cấp" },
  { id: 2, name: "Fresh Garden", subtitle: "Xanh Tươi & Tự Nhiên", color: "#4CAF50", bg: "#F1F8E9", desc: "Màu xanh lá, tươi mát, thân thiện môi trường" },
  { id: 3, name: "Pure Minimal", subtitle: "Tinh Tế & Tối Giản", color: "#333333", bg: "#FFFFFF", desc: "Trắng tinh, typography mạnh, hiện đại" },
  { id: 4, name: "Vibrant Modern", subtitle: "Năng Động & Hiện Đại", color: "#FF6B35", bg: "#FFF8F5", desc: "Cam nóng, đỏ tươi, trẻ trung sôi động" },
  { id: 5, name: "Ocean Depth", subtitle: "Chuyên Nghiệp & Tin Cậy", color: "#1565C0", bg: "#E3F2FD", desc: "Xanh navy, chuyên nghiệp, đáng tin cậy" },
];
