// homecontent.js
function execute(url, page) {
  if (!page) page = "";

  let response = fetch(url + page);
  if (!response.ok) return null;

  let doc = response.html();
  const data = [];

  doc.select("dl").forEach(e => {
    let name = e.select("dd a").first().text();
    let link = e.select("dd a").first().attr("href");
    let cover = e.select("dt img").attr("src");
    let description = e.select("dd.name").text();

    data.push({
      name: name,
      link: link,
      cover: cover.startsWith("http") ? cover : "https://www.drxsw.com" + cover,
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
