// homecontent.js
function execute(url, page) {
  var doc = Http.get(url).html();
  var books = doc.select("div.channel dl");
  var data = [];

  for (var i = 0; i < books.size(); i++) {
    var e = books.get(i);
    var aTag = e.select("dd > a").first();
    var imgTag = e.select("dt img").first();
    var descTag = e.select("dd.name").first();

    if (aTag != null) {
      var name = aTag.text();
      var link = aTag.attr("href");
      var cover = imgTag != null ? imgTag.attr("src") : null;
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
