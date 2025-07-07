function execute(url) {
  var response = fetch(url);
  if (!response.ok) return Response.error("Không lấy được dữ liệu");

  var doc = response.html();

  var name = doc.select("div.book-title > h1").text();
  var author = doc.select("div.book-title > p").text().replace("作者：", "").trim();
  var cover = doc.select("div.book-img img").attr("src");
  var description = doc.select("div.book-intro").text();
  var ongoing = doc.select("div.book-title > p").text().indexOf("连载中") !== -1;
  var detail = doc.select("div.book-title > p").text();

  return Response.success({
    name: name,
    cover: cover,
    host: "https://www.drxsw.com",
    author: author,
    description: description,
    detail: detail,
    ongoing: ongoing
  });
}
