
class Table {
    constructor(name, area) {
        this.name = name;
        this.area = area;
        this.k = 500;   
    }

    getPrice() {
        return (this.area ** 2 / 3) + this.k;
    }
}

class WritingTable extends Table {
    constructor(name, area, material) {
        super(name, area);
        this.material = material;
    }
    getPrice() {
        const basePrice = super.getPrice();
        const processingCost = basePrice * 0.1;  
        return basePrice + processingCost;
    }
}
function calculateTablePrice() {
    const name = document.getElementById("tableName").value;
    const area = parseFloat(document.getElementById("area").value);
    const type = document.getElementById("type").value;
    const material = document.getElementById("material").value;
    
    let table;

    if (type === "writing") {
        table = new WritingTable(name, area, material);
    } else {
        table = new Table(name, area);
    }

    const price = table.getPrice().toFixed(2);
    document.getElementById("result").innerHTML = `Вартість столу "${table.name}": ${price} грн`;
}

document.getElementById("type").addEventListener("change", function() {
    const materialInput = document.getElementById("material");
    materialInput.disabled = this.value !== "writing";
});
