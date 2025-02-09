exports.storeQuery = {
    index:`SELECT * FROM public.store ORDER BY id DESC`,
    store : `INSERT INTO public.store(name, code, address)VALUES ($1,$2,$3)`,
    find : `SELECT * FROM public.store WHERE id=$1`,
    findByNameExcludingId: `SELECT * FROM public.store WHERE name = $1 AND id != $2`,
    update : 'UPDATE public.store SET name = $1, address = $2 WHERE id = $3',
    delete : 'DELETE FROM public.store WHERE id=$1',
}

exports.bookQuery = {
    index: '',
    store: `INSERT INTO public.book(title ,description ,isbn ,author, publisher, pages, store_id) VALUES ($1,$2,$3,$4,$5,$6,$7)`,
    checkISBN : `SELECT * FROM public.book WHERE  isbn = $1 `,
}