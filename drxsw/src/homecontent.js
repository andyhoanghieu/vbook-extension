// homecontent.js
function execute(url, page) {
  let doc = Http.get(url).html();
  let books = doc.select("div[class=channel] dl");
  let data = [];

  for (let i = 0; i < books.size(); i++) {
    let e = books.get(i);
    let name = e.selectFirst("dd > a")?.text();
    let link = e.selectFirst("dd > a")?.attr("href");
    let cover = e.selectFirst("dt img")?.attr("src");
    let description = e.selectFirst("dd.name")?.text();

    if (name && link) {
      data.push({
        name: name,
        link: link.startsWith("http") ? link : "https://www.drxsw.com" + link,
        cover: cover?.startsWith("http") ? cover : "https://www.drxsw.com" + cover,
        description: description?.trim()
      });
    }
  }

  return Response.success(data);
}
