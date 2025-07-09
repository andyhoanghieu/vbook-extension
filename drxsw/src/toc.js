function execute(url) {
    const doc = Http.get(url).html();

    const list = doc.select("ul#chapterList li a").map(it => ({
        name: it.text(),
        url: it.attr("href"),
        host: "https://www.drxsw.com"
    }));

    return Response.success(list);
}
