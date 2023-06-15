let sneakerList = 
  [
    {
        id: 1,
        brand: 'Converse',
        title: 'Converse Run Star Motion CX Platform Multicolor Sneakers..',
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
        image: 'https://i.postimg.cc/pX4fPnX1/Converse-CX.png',
        price: 'R2 399,95',
    },
    {
        id: 10,
        brand: 'Converse',
        title: 'Converse Run Star Platform Sneakers.',
        image: 'https://i.postimg.cc/JzXb04s7/52416023-800-800.png',
        price: 'R1 799,95',
    },
    {
        id: 11,
        brand: 'Converse',
        title: 'Converse Run Star Motion CX Platform Sneakers.',
        image: 'https://i.postimg.cc/q7d23VKs/58417832-800-800.png',
        price: 'R2 199,95',
    },
    {
        id: 12,
        brand: 'Converse',
        title: 'Converse CONS AS-1 Sneakers.',
        image: 'https://i.postimg.cc/PqzYb3bB/Converse-AS-1-Pro.png',
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
  localStorage.setItem('sneakers', JSON.stringify(sneakerList));

  document.addEventListener('DOMContentLoaded', function() {
    let buttons = document.getElementsByClassName('sneakerBTN');
    let items = document.getElementsByClassName('sneaker');
  
    for (let i = 0; i < buttons.length; i++) {
      buttons[i].addEventListener('click', handleFilterButtonClick);
    }
  
    for (let i = 0; i < items.length; i++) {
    }
  
    function handleFilterButtonClick(event) {
      let filterName = event.target.getAttribute('data-name');
  
      for (let i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove('active');
      }
      event.target.classList.add('active');
  
      for (let i = 0; i < items.length; i++) {
        let itemName = items[i].classList[1];
        if (filterName === 'all' || itemName === filterName) {
          items[i].style.display = 'block';
        } else {
          items[i].style.display = 'none';
        }
      }
    }
  });
  
  function displayProducts() {
    let sneakers = document.querySelector('section#products .row');
    try {
      sneakerList.forEach((sneaker) => {
        sneakers.innerHTML += `
          <div class="col">
            <div class="card" style="width: 18rem;">
              <img src="${sneaker.image}" class="card-img-top" alt="...">
              <div class="card-body">
                <h5 class="card-title">${sneaker.brand}</h5>
                <p class="card-text">${sneaker.title}</p>
                <p class="card-text">${sneaker.price}</p>
                <a href="#" class="btn btn-outline-warning" onclick="add2Cart()">Add to Cart</a>
              </div>
            </div>
          </div>`;
      });
    } catch (e) {
      location.reload();
    }
  }
  
  let tableBody = document.querySelector('.modal-body table tbody');
  let cartItems = [];
  let totalPrice = 0;
  
  function add2Cart() {
    let selectedSneaker = sneakerList.find((sneaker) => sneaker.title === event.target.parentNode.children[1].textContent);
    if (selectedSneaker) {
      addItemToCart(selectedSneaker);
    }
  }
  
  function addItemToCart(item) {
    cartItems.push(item);
    totalPrice += parseFloat(item.price.slice(1));
  
    let newRow = document.createElement('tr');
    newRow.innerHTML = `
      <td>${cartItems.length}</td>
      <td><img src="${item.image}" alt="${item.brand}" class="cart-item-img"></td>
      <td>${item.title}</td>
      <td>${item.price}</td>`
  };