

$("#serverName").text(window.location.origin);



document.querySelector('#serverCopy').addEventListener('click', (e) => {
    if (navigator.clipboard.writeText) {
        let copyText = document.querySelector('span').innerText;
        navigator.clipboard.writeText(copyText);
        $('#serverCopy').text("Copied!")
    } else {
        $('#serverCopy').text("Your browser does not support this feature :/")
    }
});