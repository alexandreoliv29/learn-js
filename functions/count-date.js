let date = new Date();

const today = date.getDate();
const currentYear = date.getFullYear()


let todayFormatado = date.toLocaleDateString('pt-BR', { month: '2-digit', day: '2-digit', year: 'numeric' })
console.log("today: ", todayFormatado)
console.log("currentYear: ", currentYear)


