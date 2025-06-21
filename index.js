document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.getElementById('hamburger')
    const xmark = document.getElementById('xmark')
    const mobilemenu = document.getElementById('mobile-menu')

    if (hamburger && mobilemenu) {
        hamburger.addEventListener('click', () => {
            mobilemenu.classList.remove('hidden');
        });
    }
    
    if (xmark && mobilemenu) {
        xmark.addEventListener('click', () => {
            mobilemenu.classList.add('hidden');
        });
    }
});