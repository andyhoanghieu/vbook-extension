function execute(url) {
    let doc = Http.get(url).html();

    let list = [];
    doc.select("ul#chapterList li a").forEach(it => {
        list.push({
            name: it.text(),
            url: it.attr("href"),
            host: "https://www.drxsw.com"
        });
    });

    return Response.success(list);
}
