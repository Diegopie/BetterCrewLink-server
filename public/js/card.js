const siteURL = window.location.origin;


// I keep getting bad request response but the data comes threw in the error???
$.ajax({
    url: '/api/note/all',
    type: "GET",
    dataType: "json",
    success: (data) => {
        console.log(data.responseJSON.notes);
    },
    error: (error) => {
        console.log(error);
        console.log(error.responseJSON.notes);
        const noteData = error.responseJSON.notes

        noteData.forEach(note => {
            console.log(note);
            const newNote = `
                <article 
                    class="col-12 col-md-6 col-lg-2 note-card ${note.style[0]}" data-id="${note._id}"
                >
                    <h2 class="note">${note.note}</h2>
                    <h4 class="signature">- ${note.signature}</h4>
                    <img 
                        class="img" src="../img/card/${note.style[1]}"
                    >
                </article>
            `
            $('#card-contain').prepend(newNote)
        });
    }
})
