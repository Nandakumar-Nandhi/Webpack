import './styles/main.scss'

var newsBtn=document.getElementById("newsBtn");


newsBtn.addEventListener("click",()=>{
    import('./generateNews').then((module)=>{
        module.default();
    }).catch(console.error);

});
