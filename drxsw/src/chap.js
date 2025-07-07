function execute(url) {
  var response = fetch(url);
  if (!response.ok) return Response.error("Không lấy được nội dung chương");

  var doc = response.html();
  var content = doc.select("#htmlContent").html();

  return Response.success(content);
}
