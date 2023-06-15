let addButton = document.querySelector('#adminModal');
// let tableBody = document.querySelector('.table tbody');


let products = JSON.parse(localStorage.getItem('sneakers')) ?
JSON.parse(localStorage.getItem('sneakers')) : 

  [
    {
        id: 1,
        brand: 'Converse',
        title: 'Converse Run Star Motion CX Platform Multicolor Sneakers.',
        image: 'https://i.postimg.cc/2Sm3D7mJ/54385042-800-800.png',
        price: 'R2 299,95'
    },
    {
        id: 2,
        brand: 'New Balance',
        title: 'New Balance Men\'s 580 Grey Sneaker.',
        image: 'https://i.postimg.cc/dVKwCsxT/New-Balance-Men-s-580-Grey-Sneaker.png',
        price: 'R2 699,95'
    },
    {
        id: 3,
        brand: 'Converse',
        title: 'Converse Chuck 70 Constructor Sneaker.',
        image: 'https://i.postimg.cc/v8kQQL7h/Converse-Chuck-70-Constructor-Sneaker.png',
        price: 'R1 799.99'
    },
    {
        id: 4,
        brand: 'Adidas',
        title: 'Adidas ADI2000 Sneakers.',
        image: 'https://i.postimg.cc/ZRqTqwD7/57937641-800-800.png',
        price: 'R2 199,95'
    },
    {
        id: 5,
        brand: 'Nike',
        title: 'Nike Men\'s Air Max 90 Black-Brown Sneaker.',
        image: 'https://i.postimg.cc/tg4T1RsN/Nike-Men-s-Air-Max-90-Black-Brown-Sneaker.png',
        price: 'R2 799,95'
    },
    {
        id: 6,
        brand: 'Adidas',
        title: 'Adidas Ozelia Knit Sneakers.',
        image: 'https://i.postimg.cc/HL6gFQsQ/57663336-800-800.png',
        price: 'R1 699,95',
    },
    {
        id: 7,
        brand: 'New Balance',
        title: 'New Balance Men\'s 2002RD Baige Sneakers.',
        image: 'https://i.postimg.cc/SRMbX3Lr/New-Balance-Men-s-2002-Baige-Sneaker.png',
        price: 'R2 999,00',
    },
    {
        id: 8,
        brand: 'New Balaance',
        title: 'New Balance Men\'s 550 white-orange Sneakers.',
        image: 'https://i.postimg.cc/qRYdv4Kq/New-Balance-Men-s-550-White-Orange-Sneaker.png',
        price: 'R2 399,95',
    },
    {
        id: 9,
        brand: 'Converse',
        title: 'Converse Run Star Legacy CX Platform Sneakers.',
        image: 'https://i.postimg.cc/NjpGwhd9/a00869c-a-08x1-3-1.webp',
        price: 'R2 399,95',
    },
    {
        id: 10,
        brand: 'Converse',
        title: 'Converse Run Star Platform Sneakers.',
        image: 'https://i.postimg.cc/BbTsYR8v/168816c-a-08x1-1.webp',
        price: 'R1 799,95',
    },
    {
        id: 11,
        brand: 'Converse',
        title: 'Converse Run Star Motion CX Platform Sneakers.',
        image: 'https://i.postimg.cc/kgnMZMvP/171545c-a-08x1-1.webp',
        price: 'R2 199,95',
    },
    {
        id: 12,
        brand: 'Converse',
        title: 'Converse CONS AS-1 Sneakers.',
        image: 'https://i.postimg.cc/5tXJdXHT/Converse-CONS-AS-1-Pro-Sneaker.webp',
        price: 'R2 199,95',
    },
    {
        id: 13,
        brand: 'Nike',
        title: 'Nike Air Max 95 Recraft Dark Grey Sneakers.',
        image: 'https://i.postimg.cc/gJBGL3CY/Nike-Air-Max-95-Recraft-Dark-Grey-Sneaker.png',
        price: 'R2 599,95',
    },
    {
        id: 14,
        brand: 'Nike',
        title: 'Nike Uptempo Black/Blue Sneakers.',
        image: 'https://i.postimg.cc/WbZstFXv/Nike-Uptempo-Black-Blue-Sneaker.png',
        price: 'R2 399,95',
    },
    {
        id: 15,
        brand: 'New Balance',
        title: 'New Balnce 650R White/Grey Sneakers.',
        image: 'https://i.postimg.cc/nzMJxCCN/New-Balance-Men-s-650-R-White-Grey-Sneaker.png',
        price: 'R2 799,95',
    },
    {
        id: 16,
        brand: 'New Balance',
        title: 'New Balance UXC72 Beige Sneakers.',
        image: 'https://i.postimg.cc/ht94Zzdr/New-Balance-Men-s-UXC72-Beige.png',
        price: 'R2099,00',
    },
  ]


const newRow = document.querySelector('#trow');


addToTable()

// function saveToLocalStorage() {
//   localStorage.setItem('products', JSON.stringify(products));
// }

function addToTable(){
  products.forEach((data,i)=>{

  })
}


function addToTable() {
  newRow.innerHTML = '';
  products.forEach((data,i)=>{
   
    console.log(newRow)
    newRow.innerHTML += `
      
      <tr>
      <td>${i + 1}</td>
      <td><img src="${data.image}" alt="Product Image" class="productIMG"></td>
      <td>${data.brand}</td>
      <td>${data.title}</td>
      <td>${data.price}</td>
      <td><button class="editButton btn-outline-warning" onclick=editNew()>Edit</button></td>
      <td><button class="deleteButton btn-warning">Delete</button></td>
      </tr>
    `;
    let editButton = newRow.querySelector('.editButton');
    let deleteButton = newRow.querySelector('.deleteButton');
    editButton.addEventListener('click', handleEdit);
    deleteButton.addEventListener('click', handleDelete);
  
  })
}
    
// }
addButton.addEventListener('click', function() {
  let imageURL = document.getElementById('imageURL').value;
  let sneakerName = document.getElementById('SneakerName').value;
  let sneakerBrand = document.getElementById('sneakerBrand').value;
  let sneakerPrice = document.getElementById('sneakerPrice').value;

  let newSneaker = {
    imageURL: imageURL,
    sneakerName: sneakerName,
    sneakerPrice: sneakerBrand,
    sneakerPrice: sneakerPrice
  };

  
  products.push(newSneaker);

  
  saveToLocalStorage();

  
  let newRow = document.createElement('tr');
  newRow.innerHTML = `
    <th scope="row">${tableBody.children.length + 1}</th>
    <td><img src="${imageURL}" alt="Product Image" class="productIMG"></td>
    <td>${sneakerName}</td>
    <td>${sneakerBrand}</td>
    <td>${sneakerPrice}</td>
    <td><button class="editButton">Edit</button></td>
    <td><button class="deleteButton">Delete</button></td>
  `;


  tableBody.appendChild(newRow);


  document.getElementById('imageURL').value = '';
  document.getElementById('SneakerName').value = '';
  document.getElementById('sneakerBrand').value = '';
  document.getElementById('sneakerPrice').value = '';


  let editButton = newRow.querySelector('.editButton');
  let deleteButton = newRow.querySelector('.deleteButton');
  editButton.addEventListener('click', handleEdit);
  deleteButton.addEventListener('click', handleDelete);
});

function handleEdit(event) {
  const row = event.target.closest('tr');

  console.log('Edit button clicked for row:', row);
}
