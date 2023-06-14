document.addEventListener('DOMContentLoaded', function() {
    let buttons = document.getElementsByClassName('sneakerBTN');
    let shoes = document.getElementsByClassName('sneaker');

    for (let s = 0; s < buttons.length; s++) {
      buttons[s].addEventListener('click', handleFilterButtonClick);
    }

    // Filter the shoes when button clicked
    function handleFilterButtonClick(event) {
       let filterName = event.target.getAttribute('data-name');

    
      for ( let s = 0; s < buttons.length; s++) {
        buttons[s].classList.remove('active');
      }
      event.target.classList.add('active');

      for (let s = 0; s < items.length; s++) {
        let itemName = items[i].classList[1];
        if (filterName === 'all' || itemName === filterName) {
          items[s].style.display = 'block';
        } else {
          shoes[s].style.display = 'none';
        }
      }
    }
  });

let sneakers = document.querySelector('section#products .row')
let sneakerList = [
    {
        id: 1,
        brand: 'Converse',
        title: 'Converse Run Star Motion CX Platform Multicolor Sneakers..',
        image: 'https://i.postimg.cc/2Sm3D7mJ/54385042-800-800.png',
        price: 'R2000'
    },
    {
        id: 2,
        brand: 'New Balance',
        title: 'New Balance Men\'s 580 Grey Sneaker.',
        image: 'https://i.postimg.cc/dVKwCsxT/New-Balance-Men-s-580-Grey-Sneaker.png',
        price: 'R2000'
    },
    {
        id: 3,
        brand: 'Converse',
        title: 'Converse Chuck 70 Constructor Sneaker.',
        image: 'https://i.postimg.cc/v8kQQL7h/Converse-Chuck-70-Constructor-Sneaker.png',
        price: 'R2000'
    },
    {
        id: 4,
        brand: 'Adidas',
        title: 'Adidas ADI2000 Sneakers.',
        image: 'https://i.postimg.cc/ZRqTqwD7/57937641-800-800.png',
        price: 'R2000'
    },
    {
        id: 5,
        brand: 'Nike',
        title: 'Nike Men\'s Air Max 90 Black-Brown Sneaker.',
        image: 'https://i.postimg.cc/tg4T1RsN/Nike-Men-s-Air-Max-90-Black-Brown-Sneaker.png',
        price: 'R2000'
    },
    {
        id: 6,
        brand: 'Adidas',
        title: 'Adidas Ozelia Knit Sneakers.',
        image: 'https://i.postimg.cc/HL6gFQsQ/57663336-800-800.png',
        price: 'R2000',
    },
    {
        id: 7,
        brand: 'New Balance',
        title: 'New Balance Men\'s 2002 Baige Sneakers.',
        image: 'https://i.postimg.cc/SRMbX3Lr/New-Balance-Men-s-2002-Baige-Sneaker.png',
        price: 'R2000',
    },
    {
        id: 8,
        brand: 'New Balaance',
        title: 'New Balance Men\'s 550 white-orange Sneakers.',
        image: 'https://i.postimg.cc/qRYdv4Kq/New-Balance-Men-s-550-White-Orange-Sneaker.png',
        price: 'R2000',
    },
    {
        id: 9,
        brand: 'Converse',
        title: 'Converse Run Star Legacy CX Platform Sneakers.',
        image: 'https://i.postimg.cc/NjpGwhd9/a00869c-a-08x1-3-1.webp',
        price: 'R2000',
    },
    {
        id: 10,
        brand: 'Converse',
        title: 'Converse Run Star Low Sneakers.',
        image: 'https://i.postimg.cc/BbTsYR8v/168816c-a-08x1-1.webp',
        price: 'R2000',
    },
    {
        id: 11,
        brand: 'Converse',
        title: 'Converse Run Star Motion CX Platform Sneakers.',
        image: 'https://i.postimg.cc/kgnMZMvP/171545c-a-08x1-1.webp',
        price: 'R2000',
    },
    {
        id: 12,
        brand: 'Converse',
        title: 'Converse CONS AS-1 Sneakers.',
        image: 'https://i.postimg.cc/5tXJdXHT/Converse-CONS-AS-1-Pro-Sneaker.webp',
        price: 'R2000',
    },
    {
        id: 13,
        brand: 'Nike',
        title: 'Nike Air Max 95 Recraft Dark Grey Sneakers.',
        image: 'https://i.postimg.cc/gJBGL3CY/Nike-Air-Max-95-Recraft-Dark-Grey-Sneaker.png',
        price: 'R2000',
    },
    {
        id: 14,
        brand: 'Nike',
        title: 'Nike Uptempo Black/Blue Sneakers.',
        image: 'https://i.postimg.cc/WbZstFXv/Nike-Uptempo-Black-Blue-Sneaker.png',
        price: 'R2000',
    },
    {
        id: 15,
        brand: 'New Balance',
        title: 'New Balnce 650R White/Grey Sneakers.',
        image: 'https://i.postimg.cc/nzMJxCCN/New-Balance-Men-s-650-R-White-Grey-Sneaker.png',
        price: 'R2000',
    },
    {
        id: 16,
        brand: 'New Balance',
        title: 'New Balance UXC72 Beige Sneakers.',
        image: 'https://i.postimg.cc/ht94Zzdr/New-Balance-Men-s-UXC72-Beige.png',
        price: 'R2000',
    },
];
sneakerList.forEach((sneaker) => {
    sneakers.innerHTML += `
   <div class="col">
                <div class="card" style="width: 18rem;">
                    <img src="${sneaker.image}" class="card-img-top" alt="...">
                    <div class="card-body">
                      <h5 class="card-title">${sneaker.brand}</h5>
                      <p class="card-text">${sneaker.title}</p>
                      <p class="card-text">${sneaker.price}</p>
                      <a href="#" class="btn">Add to Cart</a>
                    </div>
                  </div>
                </div>`
})
let cartItems = [];
let totalPrice = 0;

// Function to add an item to the cart
function addItemToCart(item) {
  cartItems.push(item);
  totalPrice += parseFloat(item.price.slice(1));

  // Create a new table row for the item
  const newRow = document.createElement('tr');
  newRow.innerHTML = `
    <td>${cartItems.length}</td>
    <td><img src="${item.image}" alt="${item.brand}"></td>
    <td>${item.title}</td>
    <td>${item.price}</td>
  `;
  tableBody.appendChild(newRow);
}

function updateCart() {
    tableBody.innerHTML = '';


cartItems.forEach((item, index) => {
    const newRow = document.createElement('tr');
    newRow.innerHTML = `
      <td>${index + 1}</td>
      <td><img src="${item.image}" alt="${item.brand}"></td>
      <td>${item.title}</td>
      <td>${item.price}</td>
    `;
    tableBody.appendChild(newRow);
  });

  // Update the total price
  const totalPriceElement = document.querySelector('.modal-footer .total-price');}