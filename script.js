const myLibrary=[];


function Book(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}
function addBookToLibrary(){
    let title = document.getElementById("title").value;
    if(title === ""){
        let Ainvalid = document.querySelector(".Vtitle");
        Ainvalid.style.color = 'red';
    }
    else{
        let Ainvalid = document.querySelector(".Vtitle");
        Ainvalid.style.color = 'transparent';
    }
    
    let author = document.getElementById("author").value;
    if(author === ""){
        let Ainvalid = document.querySelector(".name");
        Ainvalid.style.color = 'red';
    }
    else{
        let Ainvalid = document.querySelector(".name");
        Ainvalid.style.color = 'transparent';
    }
    
    let pages = document.getElementById("pages").value;
    if(pages < 0 || pages === ""){
        let Ninvalid = document.querySelector(".number");
        Ninvalid.style.color = 'red';
    }
    else{
        let Ninvalid = document.querySelector(".number");
        Ninvalid.style.color = 'transparent';
    }
    
    let read = document.getElementById("read").checked;
    if(pages < 0 || pages =="" || author === "" || title === ""){
        return;
    }

    let newBook = new Book(title, author, pages, read);
    console.log(newBook);
    myLibrary.push(newBook);
    render();
}


function render(){
    let main = document.querySelector("#book-card");
    main.innerHTML = "";
    for (let i = myLibrary.length - 1; i >= 0; i--){
    let book = myLibrary[i];
    let bookdiv = document.createElement("div");
    bookdiv.classList.add("main-card")
    bookdiv.innerHTML =
    `   <div class="card-title">
                    ${book.title}
                </div>
                <div class="card-author">
                    by: ${book.author}
                </div>
                <div class="card-pages">
                    Pages Read: ${book.pages}
                </div>
                <div class="card-read">
                    ${book.read ? `<button type="button" class="read-btn">Read</button>`  : `<button type="button" class="red-readbtn">Not Read</button>`}
                </div>
                <div class="card-remove">
                    <button type="button" class="card-removeBTN">Remove</button>
                </div>`;
                main.appendChild(bookdiv);

        let removeButton = bookdiv.querySelector(".card-removeBTN");
        removeButton.addEventListener("click", function () {
            let indexToRemove = parseInt(this.closest(".main-card").getAttribute("data-index"));
            removeBook(indexToRemove);
        });    
    }
}

function removeBook(indexToRemove) {
    myLibrary.splice(indexToRemove, 1); // Remove the book from the array.
    render();
}

let addBookbtn = document.querySelector("#add-book");
addBookbtn.addEventListener("click", function(){
    addBookToLibrary();
})



    