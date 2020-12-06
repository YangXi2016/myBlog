let sortFun = (article1, article2) => {
    let date1 = article1.frontmatter.date ? new Date(article1.frontmatter.date) : article1.lastUpdated;
    let date2 = article2.frontmatter.date ? new Date(article2.frontmatter.date) : article2.lastUpdated;
    return date2 - date1;
}
export {sortFun}
