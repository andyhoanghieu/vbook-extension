function execute(url, page) {
  var doc = Http.get(url).html();
  var books = doc.select("dl#nr"); // mỗi truyện nằm trong <dl id="nr">
  var data = [];

  for (var i = 0; i < books.size(); i++) {
    var e = books.get(i);
    var aTag = e.select("dd h3 a").first();
    var imgTag = e.select("img.lazy").first();
    var descTag = e.select("dd.book_des").first();

    if (aTag != null) {
      var name = aTag.text();
      var link = aTag.attr("href");
      var cover = imgTag != null ? imgTag.attr("data-src") : null;
      var description = descTag != null ? descTag.text() : "";

      data.push({
        name: name,
        link: link.indexOf("http") === 0 ? link : "https://www.drxsw.com" + link,
        cover: cover != null && cover.indexOf("http") === 0 ? cover : "https://www.drxsw.com" + cover,
        description: description
      });
    }
  }

  return Response.success(data);
}
