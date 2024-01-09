const quoteAPI = "https://api.quotable.io/random";
const photoAPI = 'https://picsum.photos/1000';

const getQuote = () => {
    fetch(quoteAPI)
        .then(res => res.json())
        .then(data => parseQuote(data))
        .catch(err => console.error('Error', err));
}

const parseQuote = (obj) => {
    const {content, author, length} = obj;

    $('#text').text(content);
    $('#author').text(`-${author}`);

    console.log(obj)

    if (length < 35) {
        $(".quote-text").css('fontSize', '48px');
    } else if (length < 65) {
        $(".quote-text").css('fontSize', '34px');
    } else {
        $(".quote-text").css('fontSize', '28px');
    }
}

const getImage = () => {
    const arr = []
    fetch(photoAPI)
        .then(res => res)
        .then(data => {
            // Time for some dumbass shit only to retrieve the picsum id
            // It's either this or reading exif meta-data. This only exists to give author credit
            for (var pair of data.headers.entries()) {
                console.log(pair[0]+ ': '+ pair[1]);
                arr.push(pair[1]);
            }
            parseImage(`https://picsum.photos/id/${arr[3]}/info`);
        })
        .catch(err => console.error('Error', err));
}

const parseImage = (api) => {
    fetch(api)
        .then(res => res.json())
        .then(data => {
            const {author, download_url, url} = data;

            $('body').css("backgroundImage", `url('${download_url}')`);
            $('#photographer').text(author);
            $('#photographer').attr('href', url);
        })
        .catch(err => console.error('Error ', err));
}

$(document).ready(function(){
    getQuote();
    getImage();
  
});

$('#new-quote').click(function (e) { 
    e.preventDefault();
    getQuote();
    //getImage();

});


