function execute(url) {
  var response = fetch(url);
  if (!response.ok) return Response.error("Không lấy được dữ liệu");

  var doc = response.html();
  var list = doc.select("ul.chapter li a");
  var data = [];

  for (var i = 0; i < list.size(); i++) {
    var el = list.get(i);
    data.push({
      name: el.text(),
      url: el.attr("href"),
      host: "https://www.drxsw.com"
    });
  }

  return Response.success(data);
}
