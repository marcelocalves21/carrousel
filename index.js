const images = document.querySelectorAll('.images')
let eleIndex = 0
setInterval(() => {
    images.forEach((element, index, eleArr) => {
        if (element.classList.contains('active')) {
            element.classList.remove('active')
            eleIndex = index + 1
        }
        if (eleIndex === eleArr.length) {
            eleIndex = 0
        }
    })

    images[eleIndex].classList.add('active')
}, 5000)
