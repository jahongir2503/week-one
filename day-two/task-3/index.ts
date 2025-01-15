interface Book {
    title: string;
    year: number;
    author: string;
}

interface TargetData extends Book {
    preview: string;
    url: string;
}

function createBook(title: string, year: number, author: string): TargetData {

    const preview = `Название: ${title}, Автор: ${author}, Год: ${year}г.`;

    const url = `www.someurl.com/preview?title=${title}&year=${year}&author=${author}`;

    return {
        title,
        year,
        author,
        preview,
        url,
    };
}

let addBook = createBook("Come as u", 1992, "Robert D. jr.");


console.log(addBook);
