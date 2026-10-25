const data={
"Hình sự":[
["Đơn đề nghị / yêu cầu trong tố tụng hình sự","Biểu mẫu phục vụ các yêu cầu, đề nghị trong tố tụng hình sự.","forms/hinh-su/don-de-nghi.pdf"],
["Đơn yêu cầu bồi thường thiệt hại","Biểu mẫu liên quan đến yêu cầu bồi thường trong vụ án hình sự.","forms/hinh-su/yeu-cau-boi-thuong.pdf"],
["Đơn kháng cáo","Biểu mẫu kháng cáo theo quy định tố tụng hình sự.","forms/hinh-su/don-khang-cao.pdf"]],
"Dân sự":[
["Đơn khởi kiện","Mẫu đơn khởi kiện vụ án dân sự.","forms/dan-su/don-khoi-kien.pdf"],
["Đơn yêu cầu giải quyết việc dân sự","Mẫu đơn yêu cầu Tòa án giải quyết việc dân sự.","forms/dan-su/don-yeu-cau.pdf"],
["Đơn kháng cáo","Mẫu đơn kháng cáo trong vụ án dân sự.","forms/dan-su/don-khang-cao.pdf"],
["Đơn đề nghị miễn, giảm án phí","Mẫu đề nghị miễn, giảm án phí, lệ phí Tòa án.","forms/dan-su/mien-giam-an-phi.pdf"]],
"Hành chính":[
["Đơn khởi kiện vụ án hành chính","Mẫu đơn khởi kiện vụ án hành chính.","forms/hanh-chinh/don-khoi-kien.pdf"],
["Đơn kháng cáo vụ án hành chính","Mẫu đơn kháng cáo trong tố tụng hành chính.","forms/hanh-chinh/don-khang-cao.pdf"],
["Đơn đề nghị xem xét theo thủ tục giám đốc thẩm","Mẫu đơn đề nghị theo thủ tục giám đốc thẩm.","forms/hanh-chinh/giam-doc-tham.pdf"]]
};
function showCategory(cat){
 document.querySelectorAll(".category").forEach(x=>x.classList.toggle("active",x.dataset.category===cat));
 document.getElementById("selectedName").textContent=cat;
 const list=data[cat]||[];
 document.getElementById("count").textContent=list.length+" biểu mẫu";
 document.getElementById("formsList").innerHTML=list.map((x,i)=>`<article class="form-card"><div><h4>${i+1}. ${x[0]}</h4><p>${x[1]}</p></div><a class="download" href="${x[2]}" target="_blank">Tải xuống ↓</a></article>`).join("");
}
showCategory("Hình sự");
