const sliderLine = document.querySelector('.portfolioSliderLine')
const buttonLeft = document.querySelector('.buttonLeft')
const buttonRight = document.querySelector('.buttonRight')

let offset = 0;

buttonRight.addEventListener('click', function(){
    offset = offset - 100;
    sliderLine.style.transition = 'all 1s ease 0s'
    console.log(offset);
    if(offset < - 300) {
        setTimeout(function(){
            offset = 0
            sliderLine.style.transition = 'none'
            sliderLine.style.left = offset + '%'
        },1000)
    }
    sliderLine.style.left = offset + '%'
})

buttonLeft.addEventListener('click', function(){
    offset = offset + 100;
    sliderLine.style.transition = 'all 1s ease 0s'
    console.log(offset);
    if(offset > 0) {
        sliderLine.style.transition = 'none'
        offset = - 400
        sliderLine.style.left = offset + '%'
        setTimeout(function(){
            sliderLine.style.transition = 'all 1s ease 0s'
            offset +=100
            sliderLine.style.left = offset + '%'
        },0)
    }
    sliderLine.style.left = offset + '%'
})

"use strict"
//==========================================
const TELEGRAM_BOT_TOKEN = '6353731643:AAHUOQaV1QetqNEgWk2j0qh0htX_zp7vu_U';
const TELEGRAM_CHAT_ID = '@ArchitecturalAndDesignStudio';
const API = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`

async function sendEmailTelegram(event) {
    event.preventDefault();

    const form = event.target;
    const formBtn = document.querySelector('.form__submit-button button')
    const formSendResult = document.querySelector('.form__send-result')
    formSendResult.textContent = '';

    const { name, email, phone, pass } = Object.fromEntries(new FormData(form).entries());
    
    const text = `Заявка от ${name}!\nEmail: ${email}\nТелефон: ${phone}\nИнформация о проекте: ${pass}`;

    try {
        formBtn.textContent = 'Loading...';

        const response = await fetch(API, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                chat_id: TELEGRAM_CHAT_ID,
                text,
            })
        })
        
        if (response.ok) {
            formSendResult.textContent = 'Thank you for your message! We will contact you shortly.';
            form.reset()
        } else {
            throw new Error(response.statusText);
        }

    } catch (error) {
        console.error(error);
        formSendResult.textContent = 'The form has not been sent! Try later.';
        formSendResult.style.color = 'red';

    } finally {
        formBtn.textContent = 'SEND FORM';
    }
}

var acc = document.getElementsByClassName("accordion");
      var i;

      for (i = 0; i < acc.length; i++) {
        acc[i].addEventListener("click", function () {
          this.classList.toggle("active");
          this.parentElement.classList.toggle("active");

          var pannel = this.nextElementSibling;

          if (pannel.style.display === "block") {
            pannel.style.display = "none";
          } else {
            pannel.style.display = "block";
          }
        });
      }

const sliderLineAbout = document.querySelector('.picWorkArchSlider');
        
let offset2 = 0;

setInterval(() => {
     nextSlide()
}, 2000);
      
function nextSlide() {
    offset2 = offset2 - 100;
    sliderLineAbout.style.transition = 'all 1s ease 0s'
    console.log(offset2);
    if(offset2 < - 200) {
        setTimeout(function(){
            offset2 = 0
            sliderLineAbout.style.transition = 'none'
            sliderLineAbout.style.left = offset2 + '%'
        },1000)
    }
    sliderLineAbout.style.left = offset2 + '%'
}
