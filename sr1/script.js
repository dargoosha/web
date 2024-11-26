const API_URL = 'https://api.jsonbin.io/v3/b/6744c7b9ad19ca34f8d03429'; 
const API_KEY_MASTER = '$2a$10$FONQ3CRy4LKnYn3eqLJOvOxtDwoStWgJcN0joZJsFwlPS8LW/oLvG';
const API_KEY_ACCESS = '$2a$10$gxeR1soQWEDAoKFu7SHvt.7Yg49whkPy3AXZ8AKzIeDG8bj1e3HvK';

class ProgramGroup {
    constructor(group, program) {
        if (!group || !program) {
            throw new Error("Invalid group data");
        }
        this.group = group;
        this.program = program;
    }

    render() {
        return `
            <div class="group">
                <strong>${this.group}</strong><br>
                <em>${this.program}</em>
            </div>
        `;
    }
}

fetch(API_URL, {
    method: 'GET',
    headers: {
        'X-Master-Key': API_KEY_MASTER,
        'X-Access-Key': API_KEY_ACCESS,
        'Content-Type': 'application/json'
    }
})
    .then(response => response.json())
    .then(data => {
        const groups = data.record;
        const catalogContainer = document.getElementById('catalog-container');
        const columns = {};

        groups.forEach(groupData => {
            try {
                const programGroup = new ProgramGroup(groupData.group, groupData.program);

                if (!columns[programGroup.program]) {
                    columns[programGroup.program] = document.createElement('div');
                    columns[programGroup.program].className = 'column';
                    columns[programGroup.program].innerHTML = `<h2>${programGroup.program}</h2>`;
                    catalogContainer.appendChild(columns[programGroup.program]);
                }

                columns[programGroup.program].innerHTML += programGroup.render();
            } catch (error) {
                console.error(`Error rendering group: ${error.message}`);
            }
        });
    })
    .catch(error => {
        console.error('Error fetching group data:', error);
    });
