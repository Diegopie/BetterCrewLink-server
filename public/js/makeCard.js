let currentClass = "note-gambit"
const imgPath = "../img/card/"
let dbStyle = ["note-gambit", "gambitMotes-01.png"]

$('#mine').click((e) => {
    e.preventDefault()
    // Change Color
    $('#change').removeClass(currentClass);
    $('#change').addClass("note-mine");
    currentClass = "note-mine"; 
    // Change Image
    $('.img').attr('src', imgPath + 'mineGrass-01.png')
    dbStyle = ["note-mine", "'mineGrass-01.png"]
});

$('#gambo').click((e) => {
    e.preventDefault()
    // Change Color
    $('#change').removeClass(currentClass);
    $('#change').addClass("note-gambit");
    currentClass = "note-gambit"; 
    // Change Image
    $('.img').attr('src', imgPath + 'gambitMotes-01.png')
    dbStyle = ["note-gambit", "gambitMotes-01.png"]
});

$('#empire').click((e) => {
    e.preventDefault()
    // Change Color
    $('#change').removeClass(currentClass);
    $('#change').addClass("note-age");
    currentClass = "note-age"; 
    // Change Image
    $('.img').attr('src', imgPath + 'ageEmpire-01.png')
    dbStyle = ["note-age", "ageEmpire-01.png"]
});

$('#submit').click(e => {
    e.preventDefault();
    const userNote = document.querySelector('.note').value;
    console.log(userNote);
    const userSignature = document.querySelector('.signature').value;
    console.log(userSignature);

    if (!userNote) {
        console.log('ass');
    }

    // fetch('/api/note/new', {
    //     headers: {
    //         'Content-Type': 'application/json'
    //     },
    //     body: JSON.stringify({
    //         note: userNote,
    //         signature: userSignature,
    //         style: dbStyle
    //     }),
    //     method: 'POST'
    // })
    // .then (response => {
    //     console.log(response.json());
    // })
})