const TOKEN = '7817758515:AAEfM3Xi6noYyZS5qZKyHz7zyU48gnzm5qM';
const CHAT_ID = '-4843953659';
const URL_API = `https://api.telegram.org/bot${TOKEN}/sendMessage`

const succes = document.querySelector('.succes');

document.getElementById('form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    let message = 'Отзыв с сайта/n' + 'Отзыв' + this.review.value;
    
    axios.post(URL_API, {
        chet_id: CHAT_ID,
        parse_mode: 'html',
        text:message
    })
    .then((res) => {
        succes.classList.remove('disp');
    })
    .catch((err) => {
        console.warn(err);
    })
    .finally(() => {
        console.log('Скрипт виконаний');
    })

})