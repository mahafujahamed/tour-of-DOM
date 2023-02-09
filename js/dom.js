console.log('mahafuj ahamed, you got harder')

const liCollection = document.getElementsByTagName('li')

for (const li of liCollection){
    console.log(li.innerText);
}

const allElement = document.getElementsByTagName('h1');

for (const h1 of allElement){
    console.log(h1.innerHTML);
}

document.getElementById('Name-title').innerText = 'Bangladesh University Name'

const someLi = document.querySelectorAll('#Name-title');
console.log(someLi);
for (const li of someLi){
    console.log(li.innerText);
}
