const getStoredWish = () => {
    const storedRead = localStorage.getItem('book-wish') ;
    if(storedRead){
        return JSON.parse(storedRead) ;
    }
    return [] ;
}
const saveReadWish = bookId => {
    const storedReadBook = getStoredWish() ;
    const exists = storedReadBook.find(bookid => bookid === bookId ) ;
    if(!exists) {
        storedReadBook.push(bookId) ;
        localStorage.setItem('book-wish', JSON.stringify(storedReadBook))
    }
}

export {saveReadWish, getStoredWish}