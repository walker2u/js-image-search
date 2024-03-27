const apiKey = "3Y2SJSO95T4KuYf2dbeW7fGyHxiVaH9vaGvV9KwLpbg";

const mainCont = document.getElementById('main');
const ser_inp = document.getElementById('ser-inp');
const ser_btn = document.getElementById('ser-btn');
const show = document.getElementById('show');
let page_num = 1;
let allCards = '';


ser_btn.addEventListener('click', () => {
    let input_data = ser_inp.value;
    getImages(page_num,input_data);
});
show.addEventListener('click', () => {
    let input_data = ser_inp.value;
    page_num++;
    getImages(page_num,input_data);
});

async function getImages(page_num,input_data) {
    let url = `https://api.unsplash.com/search/photos?page=${page_num}&query=${input_data}&client_id=${apiKey}`;

    const response = await fetch(url);
    const data = await response.json();
    const results = await data.results;
    console.log(results[0]);    
    results.forEach((img) => {
        allCards += `<div class="col-md-3 my-2">
        <div class="card mx-auto" style="width: 18rem;">
            <img class="card-img-top" style="height: 290px;" src="${img.urls.small}" alt="${img.description}">
            <div class="card-body">
                <p class="card-text">${img.description == null ? input_data : (img.description.length>50 ? img.description.slice(0,50)+"..." : img.description)}</p>
            </div>
        </div>
    </div>`;
    });
    mainCont.innerHTML = allCards;
};