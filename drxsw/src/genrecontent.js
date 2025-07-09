// genrecontent.js
function execute(url, page) {
  if (!page) page = "";

  let response = fetch(url + page);
  if (!response.ok) return null;

  let doc = response.html();
  const data = [];

  doc.select(".section2 .bookbox").forEach(e => {
    let name = e.select(".bookname").text();
    let link = e.select("a").attr("href");
    let cover = e.select(".bookimg img").attr("data-src");
    let description = e.select(".intro_line").text();

    data.push({
      name: name,
      link: link,
      cover: cover,
      description: description
    });
  });

  // phân trang
  let next = doc.select(".pagelink .next").attr("href");
  if (next && next !== "javascript:;") {
    return Response.success(data, next);
  }

  return Response.success(data);
}
