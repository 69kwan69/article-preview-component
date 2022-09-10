const shareBtn = document.querySelector('.share-btn');
const media = document.querySelector('.media');
const articleDetails = document.querySelector('.article-details');

shareBtn.addEventListener('click', () => {
    shareBtn.classList.toggle('active');
    media.classList.toggle('shown');
    console.log('button clicked');
})

document.addEventListener('click', e => {
    if (e.target != media 
        && !media.contains(e.target)
        && e.target != shareBtn 
        && !shareBtn.contains(e.target)) {
        shareBtn.classList.remove('active');
        media.classList.remove('shown');
        console.log('outside clicked');
    }
})
