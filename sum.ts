async function sum(a: number, b: number): Promise<number> {
    if (!isNaN(a) && !isNaN(b)) return a + b
    throw new Error("Invalid arguments")
}

const result = sum(3, 2)
console.log(result)