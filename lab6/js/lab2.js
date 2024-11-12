function createDivList() {
    const divs = document.querySelectorAll('.b-div-zadanie');
    const list = document.getElementById('divContents');
    const contentListDiv = document.getElementById('content-list');

    list.innerHTML = '';

    divs.forEach((div) => {
        const listItem = document.createElement('li');
        listItem.textContent = div.innerText.trim();
        list.appendChild(listItem);
    });
    contentListDiv.style.display = 'block';
}

function highlight() {
    const cells = document.querySelectorAll('#numbers td');
    let maxPositive = null;
    let minNegative = null;

    cells.forEach((cell) => {
        const value = parseInt(cell.textContent);

        if (value > 0) {
            cell.classList.add('positive');
            if (maxPositive === null || value > maxPositive) {
                maxPositive = value;
            }
        } else if (value < 0) {
            cell.classList.add('negative');
            if (minNegative === null || value < minNegative) {
                minNegative = value;
            }
        }
    });

    cells.forEach((cell) => {
        const value = parseInt(cell.textContent);
        if (value === maxPositive) {
            cell.classList.add('max-positive');
        }
        if (value === minNegative) {
            cell.classList.add('min-negative');
        }
    });
}
