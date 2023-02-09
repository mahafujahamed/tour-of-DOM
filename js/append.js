

// added a new section

const main = document.getElementById('main-container');
const section = document.createElement('section');
section.innerHTML = `
    <h1>New Section</h1>
    <p>Practise text: to added a list items</p>
    <ul>
        <li>item-1</li>
        <li>item-2</li>
        <li>item-3</li>
        <li>item-4</li>
    </ul>

`
main.appendChild(section);