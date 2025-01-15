interface Book {
    title: string;
    author: string;
    year: number;
}

interface TargetData {
    book: Book;
    preview: string;
    url: string;
}


function createBook(book: Book): TargetData {
    const preview = `Название: ${book.title}, Автор: ${book.author}, Год: ${book.year}г.`;
    const url = `www.someurl.com/preview?title=${book.title}&year=${book.year}&author=${book.author}`;

    return {
        book,
        preview,
        url
    };
    //исправил
}

let addBook: TargetData = createBook({
    title: "Come as u",
    author: "Robert D. jr.",
    year: 1998
});

console.log(addBook);

