const { getInitials } = require("./test-snack")




// SNACK1
// Creare un test che verifichi la seguente descrizione:
// 👉 "La funzione getInitials restituisce le iniziali di un nome completo."


test('La funzione getInitials restituisce le iniziali di un nome completo', () => {
    expect(getInitials('Ivana Ricci')).toBe('IR')
})