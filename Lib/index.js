export const quantidadeDeOlas = 0 
export function dizerOla(nome) {
    this.quantidadeDeOlas++
    console.log(`Ola, ${nome}!`)
}
export function dizerTchau(nome) {
    console.log(`Tchau, ${nome}!`)
}
export function calcularIdade(anoNascimento) {
    return Number(new Date().getFullYear()) -anoNascimento
}