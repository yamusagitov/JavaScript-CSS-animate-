window.addEventListener('load', function () {
    let btnShow = document.querySelector('.show-alert'),
        btnHide = document.querySelector('.hide-alert'),
        divAlert = document.querySelector('.animTarget')

    btnHide.addEventListener('click', function () {
        divAlert.classList.add('fade-leave-active')
        console.log(divAlert);

        let handler = function () {
            divAlert.style.display = 'none'
            divAlert.classList.remove('fade-leave-active')
            divAlert.removeEventListener('transitionend', handler)
        }

        divAlert.addEventListener('transitionend', handler)

    })
    btnShow.addEventListener('click', function () {
        let handler = function () {
            divAlert.classList.remove('fade-enter-active')
            divAlert.removeEventListener('transitionend', handler)
        }

        divAlert.style.display = 'block'
        divAlert.classList.add('fade-enter')

        raf(function () {
            divAlert.classList.add('fade-enter-active')
            divAlert.classList.remove('fade-enter')
        })
        divAlert.addEventListener('transitionend', handler)
        
    })
})

function raf(fn) {
    window.requestAnimationFrame(function () {
        window.requestAnimationFrame(function () {
            fn()
        })

    })
}