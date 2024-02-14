const btns = document.querySelectorAll('.tab-btn');
const about = document.querySelector('.about');
const articles = document.querySelectorAll('.content');

about.addEventListener('click', function(e) {
    const id = e.target.dataset.id;
    if(id) {
// remove class active from all the buttons
    btns.forEach(function (btn) {
        btn.classList.remove('active');
        e.target.classList.add('active');
    });
// hide other articles and select the one w/ matching 'id'
    articles.forEach(function(article) {
        article.classList.remove('active');
    });
    const element = document.getElementById(id);
        element.classList.add('active');
    }
});