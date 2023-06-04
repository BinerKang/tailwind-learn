const initApp = () => {
    const hamburgerBtn = document.getElementById('mobile-open-button')
    const mobileMenu = document.getElementById('mobile-menu')
    const toggleMenu = () => {
        mobileMenu.classList.toggle('hidden')
        mobileMenu.classList.toggle('flex')
        hamburgerBtn.classList.toggle('toggle-btn')
    }
    hamburgerBtn.addEventListener('click', toggleMenu)
    mobileMenu.addEventListener('click', toggleMenu)

    // init theme
    if(window.matchMedia('(prefers-color-scheme: dark)').matches){
        document.documentElement.classList.add('dark')
    }

    const darkBtn = document.getElementById('moon')
    const lightBtn = document.getElementById('sun')
    darkBtn.addEventListener('click', () => document.documentElement.classList.add('dark'))
    lightBtn.addEventListener('click', () => document.documentElement.classList.remove('dark'))
}
document.addEventListener('DOMContentLoaded', initApp)