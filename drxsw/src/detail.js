// detail.js
function execute(url) {
  let response = fetch(url);
  if (!response.ok) return null;

  let doc = response.html();
  let name = doc.select(".booktitle").text();
  let cover = doc.select(".bookimg img").attr("src");
  let author = doc.select(".bookinfo p").first().text().replace("作者：", "").trim();
  let description = doc.select(".bookintro").text();
  let detail = doc.select(".bookinfo p").last().text();  // ngày cập nhật + trạng thái

  let ongoing = detail.indexOf("连载") >= 0 || detail.indexOf("更新") >= 0;

  return Response.success({
    name: name,
    cover: cover.startsWith("http") ? cover : "https://www.drxsw.com" + cover,
    host: "https://www.drxsw.com",
    author: author,
    description: description,
    detail: detail,
    ongoing: ongoing
  });
}
