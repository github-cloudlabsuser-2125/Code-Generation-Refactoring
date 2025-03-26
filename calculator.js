function add(x, y) {
    return x + y;
}

function subtract(x, y) {
    return x - y;
}

function multiply(x, y) {
    return x * y;
}

function divide(x, y) {
    if (y === 0) {
        return "Error: Division by zero";
    }
    return x / y;
}

function main() {
    console.log("Calculadora Básica");
    console.log("Seleccione operación:");
    console.log("1. Sumar");
    console.log("2. Restar");
    console.log("3. Multiplicar");
    console.log("4. Dividir");

    const choice = prompt("Ingrese elección (1/2/3/4): ");

    const num1 = parseFloat(prompt("Ingrese el primer número: "));
    const num2 = parseFloat(prompt("Ingrese el segundo número: "));

    let result;
    switch (choice) {
        case '1':
            result = add(num1, num2);
            console.log(`Resultado: ${num1} + ${num2} = ${result}`);
            break;
        case '2':
            result = subtract(num1, num2);
            console.log(`Resultado: ${num1} - ${num2} = ${result}`);
            break;
        case '3':
            result = multiply(num1, num2);
            console.log(`Resultado: ${num1} * ${num2} = ${result}`);
            break;
        case '4':
            result = divide(num1, num2);
            console.log(`Resultado: ${num1} / ${num2} = ${result}`);
            break;
        default:
            console.log("Entrada no válida");
    }
}

main();