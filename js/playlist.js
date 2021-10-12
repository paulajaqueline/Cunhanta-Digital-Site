let listVideo = document.querySelectorAll('.video-list .vid');
let mainVideo = document.querySelector('.main-video iframe');
let title = document.querySelector('.main-video .titulo');
let sinopse = document.querySelector('.main-video .sinopse');
clicks = 1;

function capturaClick() {
  if (clicks === 1) {
    listVideo.forEach(iframe=>{
        iframe.onclick = () =>{
            listVideo.forEach(vid => vid.classList.remove('active'));
            iframe.classList.add('active');
            if(iframe.classList.contains('active')){
                let src = iframe.children[1].getAttribute('src');
                mainVideo.src = src;
                let textTitle = iframe.children[2].innerHTML;
                title.innerHTML = textTitle;
                let texSinopse = iframe.children[3].innerHTML;
                sinopse.innerHTML = texSinopse;
            };
        };
    });
  }
}