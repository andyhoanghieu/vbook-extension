function execute(key, page) {
  var url = "https://www.drxsw.com/s.php?searchkey=" + encodeURIComponent(key);
  var response = fetch(url);
  if (!response.ok) return Response.error("Lỗi tìm kiếm");

  var doc = response.html();
  var list = doc.select(".result-list li");

  var data = [];

  for (var i = 0; i < list.size(); i++) {
    var el = list.get(i);
    var name = el.select("h3 a").text();
    var link = el.select("h3 a").attr("href");
    var cover = el.select("img").attr("src");
    var description = el.select(".result-game-item-desc").text();

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
