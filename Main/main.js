document.addEventListener('DOMContentLoaded', function () {
    const button = document.getElementById('myButton');
    const body = document.body;
    const firstBlock = document.querySelector('.firstblock');
    const secondContent = document.querySelector('.mainpage');

    button.addEventListener('click', function () {
        body.classList.add('white-screen');

        if (firstBlock) {
            firstBlock.classList.add('hidden-element');
        }

        const transitionDuration = 500;

        setTimeout(() => {
            if (secondContent) {
                secondContent.classList.add('visible-element');
                secondContent.querySelectorAll('*').forEach(child => {
                    child.classList.add('visible-element');
                });
                firstBlock.remove();
            }
        }, transitionDuration + 100);
    });
});
