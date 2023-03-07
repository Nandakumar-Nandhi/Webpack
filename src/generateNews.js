import displayNews from "./displayNews";

function generateNews()
{
    const API="888955e4408b45a7aa5f2fcc638a5ac7";
    fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${API}`).then(function(response){
    return response.json()
        }
    )
    .then(function(data){
        console.log(data);
        displayNews(data);
    })
    
}

export default generateNews;