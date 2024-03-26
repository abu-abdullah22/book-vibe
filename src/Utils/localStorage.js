const getStored = () => {
    const storedRead = localStorage.getItem('book-read') ;
    if(storedRead){
        return JSON.parse(storedRead) ;
    }
    return [] ;
}
const saveRead = bookId => {
    const storedReadBook = getStored() ;
    const exists = storedReadBook.find(bookid => bookid === bookId ) ;
    if(!exists) {
        storedReadBook.push(bookId) ;
        localStorage.setItem('book-read', JSON.stringify(storedReadBook))
    }
}

export {saveRead, getStored}