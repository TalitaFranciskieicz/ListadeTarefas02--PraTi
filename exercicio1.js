function ehDataValida(dia, mes, ano) {
 
    if (!Number.isInteger(dia) || !Number.isInteger(mes) || !Number.isInteger(ano)) {
        return false;
    }

    
    if (ano < 1 || mes < 1 || mes > 12 || dia < 1) {
        return false;
    }

    
    let diasPorMes = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    if ((ano % 4 === 0 && ano % 100 !== 0) || (ano % 400 === 0)) {
        diasPorMes[1] = 29;
    }


    if (dia > diasPorMes[mes - 1]) {
        return false;
    }

    return true;
}

// Exemplos de teste:
console.log(ehDataValida(29, 2, 2024)); // true 
console.log(ehDataValida(29, 2, 2023)); // false 
console.log(ehDataValida(31, 4, 2025)); // false 
console.log(ehDataValida(15, 6, 2025)); // true
console.log(ehDataValida(0, 12, 2025)); // false 
console.log(ehDataValida(31, 12, 2025)); // true
