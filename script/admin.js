let sneakersList = document.getElementById('adminpage');
let addSneaker = document.getElementById('');
let remoseSNKER = document.getElementById('');
let editSNKER = document.getElementById('');
let sneakerNum = 1;
let snkrImage = document.getElementById('');
let brand = document.getElementById('');
let prices = document.getElementById('');

let sneakers = [
    {
        id: 1,
        image: '',
        Name: 'brand name',
        price: 'R3 000'
    },
    {
        id: 1,
        image: '',
        Name: 'brand name',
        price: 'R3 000'
    },
    {
        id: 1,
        image: '',
        Name: 'brand name',
        price: 'R3 000'
    },
    {
        id: 1,
        image: '/images/converse-chuck-taylor-all-star-construct-A05094C.webp',
        Name: 'brand name',
        price: 'R3 000'
    }
];

sneakers.forEach(sneaker => {
    sneakersList.innerHTML += `
    <tr>
    <th>${sneaker.image}"alt="${sneaker.id}"</th>
    <th>${sneaker.Name}</th>
    <th>${sneaker.price}</th>
    </tr>`
})