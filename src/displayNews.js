function displayNews(data)
{
    const news=document.getElementById("news");
    data.articles.forEach(article =>{
        const title=article.title;
        const author=article.author;
        news.innerHTML+=`<div class=article><p><a href=${article.url}> ${title} </a></p>
                            <p>${author}`;
    })
}

export default displayNews;