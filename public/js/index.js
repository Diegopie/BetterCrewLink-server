// * Query Selector for Copy Buttons
document.querySelector('#serverCopy').addEventListener('click', (e) => {
    e.preventDefault();
    if (navigator.clipboard.writeText) {
        const path = $('#serverCopy')[0].children[0];
        let copyText = window.location.origin;
        navigator.clipboard.writeText(copyText);
        $(path).text("Copied!")
    } else {
        $(path).text("Your browser does not support this feature :/")
    }
});
