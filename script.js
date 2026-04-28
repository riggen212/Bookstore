const KEYS = Object.keys(books);
let bookList = [];

function init() {
    renderBookTemplate();
    getBookList();
}

function renderBookTemplate() {
    for (let i = 0; i < books.length; i++) {
        let contentRef = document.getElementById('content');
        contentRef.innerHTML += renderBook();
        getArrayContent(i);  
    }
}

function getBookList() {
    bookList = document.querySelectorAll('.book');
    console.log(bookList);      
}

function getArrayContent(index) {
    let title = document.getElementById('bookTitle');
    let price = document.getElementById('price');
    let likes = document.getElementById('likesAmount');
    let commentFrom = document.getElementById('commentName');
    let commentText = document.getElementById('commentText');

    title.innerText += books[KEYS[index]].name;
    price.textContent += books[KEYS[index]].price;
    likes.textContent += books[KEYS[index]].likes;
    if (books[KEYS[index]].comments[index] == null) {
       return; 
    }
    else {
        commentFrom.textContent += books[KEYS[index]].comments[index].name;
        commentText.textContent += books[KEYS[index]].comments[index].comment;
    }
}

