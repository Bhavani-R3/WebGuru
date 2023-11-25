let menu = document.querySelector(".nav-links");
let btn = document.querySelector(".btn-responsive");
let questions = document.querySelectorAll('.accordion-header');

function toggle() {
    menu.classList.toggle("responsive");
}

// accordion toggle script

questions.forEach(button => {
    button.addEventListener('click', function() {
        const aContent = button.nextElementSibling;

        button.classList.toggle('active');

        if(button.classList.contains('active')) {
            aContent.style.maxHeight = aContent.scrollHeight + 'px';
        } else {
            aContent.style.maxHeight = 0;
        }

        // close rest other accordion-items
        questions.forEach(oBtn => {
            if(oBtn !== button) {
                oBtn.classList.remove('active');
                oBtn.nextElementSibling.style.maxHeight = 0;
            }
        })
    })
});

// year
document.getElementById("yr").innerText = new Date().getFullYear();