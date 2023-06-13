let productList = document.getElementById('#sneakersList');
let sneakers = [
    {
        id: 1,
        brand:'brand name',
        image:'/images/converse-chuck-taylor-all-star-construct-A05094C.webp',
        price: 'R1 799'
    },
    {
        id: 2,
        brand:'brand name',
        image:'/images/converse-chuck-taylor-all-star-construct-A05094C.webp',
        price: 'R1 799'
    },
    {
        id: 3,
        brand:'brand name',
        image:'/images/converse-chuck-taylor-all-star-construct-A05094C.webp',
        price: 'R1 799'
    },
    {
        id: 4,
        brand:'brand name',
        image:'/images/converse-chuck-taylor-all-star-construct-A05094C.webp',
        price: 'R1 799'
    },
    {
        id: 5,
        brand:'brand name',
        image:'/images/converse-chuck-taylor-all-star-construct-A05094C.webp',
        price: 'R1 799'
    },
    {
        id: 6,
        brand:'brand name',
        image:'/images/converse-chuck-taylor-all-star-construct-A05094C.webp',
        price: 'R1 799'
    },
    
];
let sneakerList = [];
sneakers.forEach((sneaker )=> {
    sneaker.innerHTML += `
   <img src="image/${value.image}"
   <div class="brand">${value.brand}</div>
   <div class="price">${value.price.toLocaleString()}</div>

    ` 
})