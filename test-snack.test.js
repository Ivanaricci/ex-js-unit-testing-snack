const { getInitials, createSlug, average } = require("./test-snack")




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


// SNACK5



