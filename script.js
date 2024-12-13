// Función que añade una nueva nota
function addNote() {
    const noteInput = document.getElementById("note-input"); // Selecciona el área de texto
    const notesContainer = document.getElementById("notes-container"); // Contenedor de nota
     // Añade la nota al contenedor
     notesContainer.appendChild(note);
}

function getRandomBotMessage () {
    const messages = [
        "Creo que no.",
        "¡Totalmente!",
        "Eso suena interesante.",
        "No estoy seguro de entender, ¿puedes explicar más?",
        "¡Qué genial!",
        "Hmm, déjame pensar...",
        "¡Por supuesto!",
        "No sé, pero suena divertido.",
        "¿Puedes decirme más?",
        "Eso es un misterio para mí.",
        "¡Me encanta hablar contigo!"]

    return messages[Math.floor(Math.random() * messages.length)];
}