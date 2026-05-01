function renderBook(index) {
    return `<article class="book">
            <header>
                <h2 id="bookTitle${index}"></h2>
                <hr>
                <img class="bookImage" src="../assets/img/book.svg" alt="">
                <hr>
            </header>
            <section>
                <div class="priceAndLikes">
                    <span class="price" id="priceValue${index}"></span>
                    <div>
                        <span id="likesAmount${index}"></span>
                        <button onclick="changeLikeAmount(this.previousElementSibling.id)">
                            <img class="likeImage" src="../assets/icons/heart.svg" alt="">
                        </button>
                    </div>
                </div>
            </section>
            <section>
                <h3>Kommentare:</h3>
                    <table id="commentTable${index}">
                        <tr>
                            <td class="name" id="commentName${index}"></td>
                            <td id="commentText${index}"></td>
                        </tr>
                    </table>
            </section>
            <textarea id="commentInput${index}" rows="1" cols="30">Schreibe deinen Kommentar</textarea>
        </article>
    `
}

function renterComments(name, comment) {
    return `<tr class="commentEntry">
                <td class="name">${name}</td>
                <td >${comment}</td>
            </tr>
    `
}