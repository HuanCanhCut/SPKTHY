const overlay = document.querySelector('.overlay')
const userName = document.querySelector('.name')
const hope = document.querySelector('.hope')
const thapHuong = document.querySelector('.btn')
const closeBtn = document.querySelector('.close-btn')
const nhang = document.querySelector('.nhang')
const title = document.querySelector('.title')

const openModal = () => {}

const closeModal = () => {
    overlay.classList.remove('open')
}

const handleThapHuong = () => {
    if (userName.value.trim() == '' || hope.value.trim() == '') {
        overlay.classList.add('open')
    } else {
        nhang.style.opacity = 1
        document.querySelector('.smoke').style.opacity = 1
        nhang.style.transform = 'translateY(65px)'
        title.classList.remove('hidden')
        document.querySelector('.audio').play()
    }
}

thapHuong.onclick = () => {
    handleThapHuong()
}

closeBtn.onclick = () => {
    closeModal()
}

overlay.onclick = () => {
    closeModal()
}

const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
        handleThapHuong()
    }
}

window.addEventListener('keydown', handleKeyDown)
