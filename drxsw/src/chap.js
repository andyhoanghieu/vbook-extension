function execute(url) {
    var doc = Http.get(url).html();
    var contentEl = doc.select("#TextContent");

    // Xoá các đoạn quảng cáo hoặc script nếu có
    contentEl.select("script").remove();
    contentEl.select("ins").remove();
    contentEl.select("iframe").remove();

    var content = contentEl.html();
    return Response.success(content);
}
