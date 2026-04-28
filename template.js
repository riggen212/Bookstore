function renderBook() {
    return `<article id"content" class="book">
            <header>
                <h2 id="bookTitle"></h2>
                <hr>
                <img class="bookImage" src="../assets/img/book.svg" alt="">
                <hr>
            </header>
            <section>
                <div class="priceAndLikes">
                    <span id="price"></span>
                    <div>
                        <span id="likesAmount"></span>
                        <button>
                            <img src="../assets/icons/heart.svg" alt="">
                        </button>
                    </div>
                </div>
            </section>
            <section>
                <h3>Kommentare:</h3>
                <div>
                    <table>
                        <tr>
                            <td id="commentName"></td>
                            <td id="commentText"></td>
                        </tr>
                    </table>
                </div>
            </section>
            <textarea id="commentInput" rows="1" cols="30">Schreibe deinen Kommentar</textarea>
        </article>
    `
};