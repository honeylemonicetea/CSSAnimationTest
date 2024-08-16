// glowing halo

let animation1Area = document.querySelector(".ball-wrapper")
let halo = document.querySelector(".ball-glow")
let headerBall = document.querySelector(".header-ball")

let moveHalo = (event) => {
    if (event.target.classList.contains("ball-glow")) {
        let mouseX = event.offsetX
        let mouseY = event.offsetY
        let offsetX = mouseX
        let offsetY = mouseY
        halo.style.transform = `translate(${offsetX / 2}px, ${offsetY / 2}px)`
    }
}

animation1Area.addEventListener("mousemove", moveHalo)

// scroll animation
let ballOffsetX = 0
let scale = 1
document.onwheel = function (event) {
    let scrollPos = window.scrollY
    if (scrollPos > 50) {
        halo.style.display = "none"
    } else {
        halo.style.display = "block"
    }
    let direction = event.deltaY
    if (direction > 0 && ballOffsetX < 400) {
        ballOffsetX += 20
        scale += 0.2
    } else if (direction < 0 && ballOffsetX > 0) {
        ballOffsetX -= 20
        scale -= 0.2
    }
    headerBall.style.transform = `translateX(${ballOffsetX}px) scale(${scale})`
}

let words = ["выдающимися", "вдохновляющими", "запоминающимися"]
let currentWord = []
let currentIndex = 0
let currentWordIndex = 0
let typeWriterSpan = document.querySelector(".typewriter-text")
let interval



function typeWord() {
    if (currentIndex < words[currentWordIndex].length) {
        currentWord.push(words[currentWordIndex][currentIndex])
        typeWriterSpan.innerHTML = currentWord.join("")
        currentIndex++
    }
    else if (currentIndex == words[currentWordIndex].length && currentWordIndex < words.length - 1) {
        currentWord.pop()
        typeWriterSpan.innerHTML = currentWord.join("")
        if (currentWord.length == 0) {
            currentWordIndex++
            currentIndex = 0
            console.log("next word")
        }
    } else if (currentWordIndex == words.length) {
        clearInterval(interval)
    }
}

interval = setInterval(typeWord, 200)

