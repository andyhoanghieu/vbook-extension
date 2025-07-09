// homecontent.js
function execute(url, page) {
  if (!page) page = 1;
  let doc = Http.get(url + (page > 1 ? `index_${page}.html` : "")).html();

  let books = [];
  doc.select("div.lbox > ul > li").forEach(li => {
    let aTag = li.selectFirst("a");
    let name = aTag.attr("title");
    let link = aTag.absUrl("href");
    let cover = aTag.selectFirst("img").attr("data-src");
    let description = li.selectFirst("dd").text();

    books.push({
      name: name,
      link: link,
      cover: cover,
      description: description
    });
  });

  // Xác định phân trang
  let next = null;
  let hasNext = doc.selectFirst("a.next") !== null;
  if (hasNext) {
    next = page + 1;
  }

  return Response.success(books, next);
}
