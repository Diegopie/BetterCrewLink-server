document.querySelector('#serverCopy').addEventListener('click', (e) => {
    if (navigator.clipboard.writeText) {
        let copyText = window.location.origin;
        navigator.clipboard.writeText(copyText);
        $('#serverCopy').text("Copied!")
    } else {
        $('#serverCopy').text("Your browser does not support this feature :/")
    }
});
