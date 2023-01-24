const formatMoney = (value) => {
    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
    });
    return formatter.format(value);
}

const calculateTotal = (amount, term) => {
    let total, percentage;

    if (amount < 5000) {
        percentage = 1.5;
    } else if (amount >= 5000 && amount < 1000) {
        percentage = 1.4;
    } else if (amount >= 10000 && amount < 15000) {
        percentage = 1.3;
    } else {
        percentage = 1.2;
    }
    total = amount * percentage;
    total += (term === 6) ? 1.1 : (term === 12 ? 1.2 : 1.3);

    return total;
}

export {
    formatMoney,
    calculateTotal
}