function execute(url, page) {
  var response = fetch(url);
  if (!response.ok) return Response.error("Không lấy được danh sách truyện");

  var doc = response.html();
  var list = doc.select(".bookbox");

  var data = [];

  for (var i = 0; i < list.size(); i++) {
    var el = list.get(i);
    var name = el.select("h4 a").text();
    var link = el.select("h4 a").attr("href");
    var cover = el.select("img").attr("src");
    var description = el.select("dl dd").first().text();

    data.push({
      name: name,
      link: link,
      cover: cover,
      description: description,
      host: "https://www.drxsw.com"
    });
  }

  return Response.success(data);
}
