const accessKey = "Qr--qIzfuPXomfqarffudTB1els_qmhePZh-4A49_3M"

const searchForm= document.querySelector("#search-form");
const searchBox= document.querySelector("#search-box");
const searchResult= document.querySelector(".search-result");
const showMoreBtn= document.querySelector("#show-more");


let keyword=""
let page=1;

async function searchImages(){
    keyword =searchBox.value;
    const url= `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accessKey}&per_page=12`
const response =await fetch(url);
const data =await response.json();
const results =data.results;

if(page===1){
    searchResult.innerHTML=""
}
results.map((result)=>{

    const image =document.createElement("img");
    image.src =result.urls.small;
    const imagelink =document.createElement("a");
    imagelink.href= result.links.html;
    imagelink.target="_blank";
    imagelink.appendChild(image);
    searchResult.appendChild(imagelink);
    console.log("hello")
})
showMoreBtn.style.display="block";
}
searchForm.addEventListener("submit", (e)=>{
    e.preventDefault();
    page =1;
    searchImages();
})
showMoreBtn.addEventListener("click", ()=>{
    page++;
    searchImages();
})