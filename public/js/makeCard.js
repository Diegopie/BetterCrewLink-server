let currentClass = "note-gambit"

$('#mine').click((e) => {
    e.preventDefault()
    $('#change').removeClass(currentClass);
    $('#change').addClass("note-mine");
    currentClass = "note-mine"    
});