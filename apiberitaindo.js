(function(){
    setTimeout(() => {
    let style1 = document.createElement('link')
    style1.setAttribute(
      'href',
      'https://akbarmaliki.github.io/portofolio/style.css'
    )
    
    style1.setAttribute(
        'rel',
        'stylesheet'
      )
    document.head.appendChild(style1)
    let style2 = document.createElement('link')
    style2.setAttribute(
      'href',
      'https://fonts.googleapis.com/css2?family=Raleway:wght@500&display=swap'
    )
    style2.setAttribute(
        'rel',
        'stylesheet'
      )
    document.head.appendChild(style2)
        // !END WOW JS
    let apiBerita = document.querySelector('#api-berita');
    let elementHtml=`
    <div class="row">
    <div class="col-12">
        <p class="pl-3 text-red-500 text-2xl">Top Berita</p>    
        <hr class="mt-1 mb-1">
    </div>
    <div class="col-12">
    <div class="shadow-lg rounded-lg p-2 row">
       
        `;
    fetch('https://newsapi.org/v2/top-headlines?country=id&apiKey=bc4bc81683e9491fae598c584fb0c277').then(e=>e.json()).then(res=>{
        let latestNews = res.articles.slice(0,5);
        latestNews.forEach(e=>{
            elementHtml=elementHtml+
            `
            <div class="col-9">
                <a href="${e.url}" target="__blank" class="text-black " style="text-decoration:none;">
                    <div class=" cursor-pointer p-1 rounded-lg hover:bg-blue-200 anim">
                        <div style="font-size:11px;color:black;" class="font-bold ">${e.title}</div>
                        <div style="font-size:11px;" class=" text-gray-600 float-right">${get_time_diff(e.publishedAt)}</div>
                        <hr class="mt-3 mb-1">
                    </div>
                </a>
            </div>
            <div class="col-3">
                <a href="${e.url}" target="__blank" class="cursor-pointer hover:text-black" style="text-decoration:none;">
                    <div style="height:50px;" class="d-flex justify-content-center align-items-center ">
                        <div>
                            <img src="${e.urlToImage}" class="img-fluid" style="height:45px;"/>
                        </div>
                    </div>
                </a>
            </div>
            `
            ;
        })
        elementHtml=elementHtml+`
        </div>
        </div>
        </div>
        `;
        apiBerita.innerHTML=elementHtml;
        var date1 = new Date('2021-07-11T09:27:59Z');
    function get_time_diff( datetime )
    {
        var datetime = typeof datetime !== 'undefined' ? datetime : "";

        var datetime = new Date( datetime ).getTime();
        var now = new Date().getTime();

        if( isNaN(datetime) )
        {
            return "";
        }


        if (datetime < now) {
            var milisec_diff = now - datetime;
        }else{
            var milisec_diff = datetime - now;
        }

        var days = Math.floor(milisec_diff / 1000 / 60 / (60 * 24));

        var date_diff = new Date( milisec_diff );
        let hasil=``;
        if(days>0){
            hasil=hasil+`${days} hari`;
        }
        if(date_diff.getHours()>0){
            hasil=hasil+`${date_diff.getHours()} jam `;
        }
        if(date_diff.getMinutes()>0){
            hasil=hasil+`${date_diff.getMinutes()} menit`;
        }else{
            hasil=hasil+`Kurang dari 1 menit`;
        }
        hasil=hasil+` yang lalu`;
        return hasil;
    }
    })
}, 1000);
    return {
        hello:'world'
    }
})()