const balanceData = [
   
    { day: 15, amount: 207.89 },
    { day: 16, amount: 218.29 },
    { day: 17, amount: 229.20 },
    { day: 18, amount: 240.66 },
    { day: 19, amount: 252.70 },
    { day: 20, amount: 265.33 },
    { day: 21, amount: 278.60 },
    { day: 22, amount: 292.53 },
    { day: 23, amount: 307.15 },
    { day: 24, amount: 322.51 },
    { day: 25, amount: 338.64 },
    { day: 26, amount: 355.57 },
    { day: 27, amount: 373.35 },
    { day: 28, amount: 392.01 },
    { day: 29, amount: 411.61 },
    { day: 30, amount: 432.19 },
    { day: 31, amount: 453.80 },
    { day: 32, amount: 476.49 },
    { day: 33, amount: 500.32 },
    { day: 34, amount: 525.33 },
    { day: 35, amount: 551.60 },
    { day: 36, amount: 579.18 },
    { day: 37, amount: 608.14 },
    { day: 38, amount: 638.55 },
    { day: 39, amount: 670.48 },
    { day: 40, amount: 704.00 },
    { day: 41, amount: 739.20 },
    { day: 42, amount: 776.16 },
    { day: 43, amount: 814.97 },
    { day: 44, amount: 855.72 },
    { day: 45, amount: 898.50 },
    { day: 46, amount: 943.43 },
    { day: 47, amount: 990.60 },
    { day: 48, amount: 1040.13 },
    { day: 49, amount: 1092.13 },
    { day: 50, amount: 1146.74 },
    { day: 51, amount: 1204.08 },
    { day: 52, amount: 1264.28 },
    { day: 53, amount: 1327.49 },
    { day: 54, amount: 1393.87 },
    { day: 55, amount: 1463.56 },
    { day: 56, amount: 1536.74 },
    { day: 57, amount: 1613.58 },
    { day: 58, amount: 1694.26 },
    { day: 59, amount: 1778.97 },
    { day: 60, amount: 1867.92 },
    { day: 61, amount: 1961.31 },
    { day: 62, amount: 2059.38 },
    { day: 63, amount: 2162.35 },
    { day: 64, amount: 2270.47 },
    { day: 65, amount: 2383.99 },
    { day: 66, amount: 2503.19 },
    { day: 67, amount: 2628.35 },
    { day: 68, amount: 2759.77 },
    { day: 69, amount: 2897.75 },
    { day: 70, amount: 3042.64 },
    { day: 71, amount: 3194.77 },
    { day: 72, amount: 3354.51 },
    { day: 73, amount: 3522.24 },
    { day: 74, amount: 3698.35 },
    { day: 75, amount: 3883.27 },
    { day: 76, amount: 4077.43 },
    { day: 77, amount: 4281.30 },
    { day: 78, amount: 4495.37 },
    { day: 79, amount: 4720.14 },
    { day: 80, amount: 4956.14 },
    { day: 81, amount: 5203.95 },
    { day: 82, amount: 5464.15 },
    { day: 83, amount: 5737.36 },
    { day: 84, amount: 6024.22 },
    { day: 85, amount: 6325.44 },
    { day: 86, amount: 6641.71 },
    { day: 87, amount: 6973.79 },
    { day: 88, amount: 7322.48 },
    { day: 89, amount: 7688.61 },
    { day: 90, amount: 8073.04 },
    { day: 91, amount: 8476.69 },
    { day: 92, amount: 8900.52 },
    { day: 93, amount: 9345.55 },
    { day: 94, amount: 9812.83 },
    { day: 95, amount: 10303.47 },
    { day: 96, amount: 10818.64 },
    { day: 97, amount: 11359.57 },
    { day: 98, amount: 11927.55 },
    { day: 99, amount: 12523.93 },
    { day: 100, amount: 13150.13 },
    { day: 101, amount: 13807.63 },
    { day: 102, amount: 14498.01 },
    { day: 103, amount: 15222.91 },
    { day: 104, amount: 15984.06 },
    { day: 105, amount: 16783.26 },
    { day: 106, amount: 17622.43 },
    { day: 107, amount: 18503.55 },
    { day: 108, amount: 19428.72 },
    { day: 109, amount: 20400.16 }
];

let totalBalance = 0; // Initial balance set to 0
const completedDays = [];

function populateTable() {
    const tableBody = document.getElementById('balanceTable');
    balanceData.forEach((entry, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `<td>${entry.day}</td><td>₹${entry.amount.toFixed(2)}</td>`;
        if (completedDays.includes(index)) {
            row.classList.add('success');
        }
        row.addEventListener('click', () => updateBalance(index, row));
        tableBody.appendChild(row);
    });
    document.getElementById('balance').innerText = `Balance: ₹0.00`; // Show balance as 0 initially
}

function updateBalance(index, row) {
    if (!row.classList.contains('success')) {
        const clickedAmount = balanceData[index].amount;
        document.getElementById('balance').innerText = `Balance: ₹${clickedAmount.toFixed(2)}`; // Show only clicked amount
        row.classList.add('success');
    } else {
        document.getElementById('balance').innerText = `Balance: ₹0.00`; // Reset balance to 0 if clicked again
        row.classList.remove('success');
    }
}

document.addEventListener('DOMContentLoaded', populateTable);