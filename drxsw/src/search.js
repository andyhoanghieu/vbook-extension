function execute(key, page) {
    let doc = Http.post("https://www.drxsw.com/s.php", {
        data: {
            searchkey: key,
            searchtype: "articlename"
        }
    }).html();

    let list = [];
    doc.select("dl#nr").forEach(dl => {
        let name = dl.selectFirst("dd h3 a")?.text();
        let link = dl.selectFirst("dd h3 a")?.attr("href");
        let cover = dl.selectFirst("dt img")?.attr("data-src");
        let description = dl.selectFirst("dd.book_des")?.text();

        list.push({
            name,
            link,
            cover,
            description
        });
    });

    return Response.success(list);
}
