
let fontSize = 18;

function changeFontSize(change) {
    const reader = document.getElementById("reader");

    if (!reader) return;

    fontSize += change;

    if (fontSize > 32) fontSize = 32;
    if (fontSize < 12) fontSize = 12;

    reader.style.fontSize = fontSize + "px";
}

function toggleDark() {
    document.body.classList.toggle("dark-mode");
}

function toggleCatalog() {
    const bookList = document.getElementById("book-list");

    if (!bookList) return;

    bookList.classList.toggle("catalog-show");
}

function searchBooks() {
    const input = document.getElementById("book-search");
    const message = document.getElementById("search-message");
    const cards = document.querySelectorAll(".book-card");

    const query = input.value.trim().toLowerCase();
    let found = 0;

    if (query === "") {
        message.textContent = "Введите название книги или жанр.";
        cards.forEach(card => card.style.display = "");
        return;
    }

    cards.forEach(card => {
        const text = card.textContent.toLowerCase();

        if (text.includes(query)) {
            card.style.display = "";
            found++;
        } else {
            card.style.display = "none";
        }
    });

    message.textContent = found > 0
        ? "Найдено книг: " + found
        : "Книги не найдены. Попробуйте другой запрос.";

    document.getElementById("popular-books").scrollIntoView({
        behavior: "smooth"
    });
}

