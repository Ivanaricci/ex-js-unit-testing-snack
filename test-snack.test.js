const { getInitials, createSlug, average, isPalindrome } = require("./test-snack")




// SNACK1
// Creare un test che verifichi la seguente descrizione:
// 👉 "La funzione getInitials restituisce le iniziali di un nome completo."

test('La funzione getInitials restituisce le iniziali di un nome completo', () => {
    expect(getInitials('Ivana Ricci')).toBe('IR')
})




// SNACK2
// Creare un test che verifichi la seguente descrizione:
// 👉 "La funzione createSlug restituisce una stringa in lowercase."


test('La funzione createSlug restituisce una stringa in lowercase', () => {
    expect(createSlug('IVANA')).toBe('ivana')
})



// SNACK3
// Creare un test che verifichi la seguente descrizione:
// 👉 "La funzione average calcola la media aritmetica di un array di numeri."


test('La funzione average calcola la media aritmetica di un array di numeri', () => {
    const numeri = [1, 2, 3]
    expect(average(numeri)).toBe(2)
})

// SNACK4
// Creare un test che verifichi la seguente descrizione:
// 👉 "La funzione createSlug sostituisce gli spazi con -."

// 📌 Esempi:
// createSlug("Questo è un test") → "questo-e-un-test"

test('La funzione createSlug sostituisce gli spazi con -', () => {
    expect(createSlug('Prova Prova')).toBe('prova-prova')
})


// SNACK5
// Creare un test che verifichi la seguente descrizione:
// 👉 "La funzione isPalindrome verifica se una stringa è un palindromo."

// 📌 Nota: una stringa palindroma è una sequenza di caratteri che si legge uguale sia da sinistra a destra che da destra a sinistra.



test('La funzione isPalindrome verifica se una stringa è un palindromo', () => {
    expect(isPalindrome('ivana')).toBeFalsy()
    expect(isPalindrome('lol')).toBeTruthy()
})


// SNACK6
// Creare un test che verifichi la seguente descrizione:
// 👉 "La funzione createSlug lancia un errore se il titolo è vuoto o non valido."


test('La funzione createSlug lancia un errore se il titolo è vuoto o non valido', () => {
    expect(() => createSlug('')).toThrow('Titolo non valido');
    expect(() => createSlug(null)).toThrow('Titolo non valido');
    expect(() => createSlug(undefined)).toThrow('Titolo non valido');
    // non deve lanciare errore👇🏽
    expect(() => createSlug('Ciao Mondo')).not.toThrow('');
})