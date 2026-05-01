const KEYS = Object.keys(books);

function init() {
    renderBookTemplate();   
}

function renderBookTemplate() {
    for (let i = 0; i < books.length; i++) {
        let contentRef = document.getElementById('content');
        contentRef.innerHTML += renderBook(i);  
        getBookData(i);    
    }
}

function getBookData(index) {
    let title = document.getElementById(`bookTitle${index}`);
    let price = document.getElementById(`priceValue${index}`);
    let likes = document.getElementById(`likesAmount${index}`);

    title.innerText += books[KEYS[index]].name;
    price.textContent += books[KEYS[index]].price;
    likes.textContent += books[KEYS[index]].likes;

    getBookCommentData(index);
}

function getBookCommentData(index) {
    let tableRef = document.getElementById(`commentTable${index}`)
    for (let i = 0; i < books[KEYS[index]].comments.length; i++) {
        let commentName = books[KEYS[index]].comments[i].name;
        let commentText = books[KEYS[index]].comments[i].comment;
        
        tableRef.innerHTML += renterComments(commentName, commentText);    
    }
}

function changeLikeAmount(elementId) {
    let index = elementId.split('likesAmount');    

    if (books[KEYS[index[1]]].liked == false) {
        addLike(index, elementId);
    } else {
        deleteLike(index, elementId);
    }
}

function addLike(i, elementId) {
    let likeAmountRef = document.getElementById(elementId);
    let likes = books[KEYS[i[1]]].likes;
    let newValue = likes + 1;

    likeAmountRef.innerText = "";
    likeAmountRef.innerText = newValue;
    books[KEYS[i[1]]].liked = true;
    books[KEYS[i[1]]].likes = likes + 1;   
}

function deleteLike(i, elementId) {
    let likeAmountRef = document.getElementById(elementId);
    let likes = books[KEYS[i[1]]].likes;
    let newValue = likes - 1;

    likeAmountRef.innerText = "";
    likeAmountRef.innerText = newValue;    
    books[KEYS[i[1]]].liked = false;
    books[KEYS[i[1]]].likes = likes - 1;
}