// detail.js
function execute(url) {
    var doc = Http.get(url).html();

    var name = doc.select("div.bookright h1").text();
    var author = doc.select("div.bookright span.p_author").text().replace("作者：", "").trim();
    var cover = doc.select("#bookimg img").attr("src");
    var description = doc.select("#bookintro").text();
    var ongoingText = doc.select("#count li").first().text();
    var ongoing = ongoingText.indexOf("连载") !== -1; // true nếu đang ra, false nếu hoàn thành

    // Thêm domain nếu cover là dạng tương đối
    if (cover && !cover.startsWith("http")) {
        cover = "https://www.drxsw.com" + cover;
    }

    return Response.success({
        name: name,
        cover: cover,
        host: "www.drxsw.com",
        author: author,
        description: description,
        detail: "",
        ongoing: ongoing,
        genres: [],
        suggests: [],
        comments: []
    });
}
