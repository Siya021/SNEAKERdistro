let sneakers = document.querySelector('section#products .row')
let sneakerList = [
    {
        id: 1,
        title: 'Converse Platform',
        image: 'https://i.postimg.cc/wMWtRjw3/Untitled-1080-1080-px-1.webp',
        price: 'R2000'
    },
    {
        id: 2,
        title: 'New Balance 9060 Blue Haze',
        image: 'https://i.postimg.cc/cJwGvkFn/image.webp',
        price: 'R2000'
    },
    {
        id: 3,
        title: 'Chuck Taylor All Star Connstruct',
        image: 'https://i.postimg.cc/KYWDRLGk/download-6.jpg',
        price: 'R2000'
    },
    {
        id: 4,
        title: 'NIKE AIR MAX FURYOSA',
        image: 'https://i.postimg.cc/1XKQmyGt/download-7.jpg',
        price: 'R2000'
    },
    {
        id: 5,
        title: 'NIKE AIR MAX FURYOSA',
        image: 'https://i.postimg.cc/1XKQmyGt/download-7.jpg',
        price: 'R2000'
    },
    {
        id: 6,
        title: 'NIKE AIR MAX FURYOSA',
        image: 'https://i.postimg.cc/1XKQmyGt/download-7.jpg',
        price: 'R2000'
    },
    {
        id: 7,
        title: 'NIKE AIR MAX FURYOSA',
        image: 'https://i.postimg.cc/1XKQmyGt/download-7.jpg',
        price: 'R2000'
    }
    {
        id: 8,
        title: 'NIKE AIR MAX FURYOSA',
        image: 'https://i.postimg.cc/1XKQmyGt/download-7.jpg',
        price: 'R2000'
    },
    {
        id: 9,
        title: 'NIKE AIR MAX FURYOSA',
        image: 'https://i.postimg.cc/1XKQmyGt/download-7.jpg',
        price: 'R2000'
    }

];
sneakerList.forEach((sneaker) => {
    sneakers.innerHTML += `
   <div class="col">
                <div class="card" style="width: 18rem;">
                    <img src="${sneaker.image}" class="card-img-top" alt="...">
                    <div class="card-body">
                      <h5 class="card-title">${sneaker.title}</h5>
                      <p class="card-text">${sneaker.price}</p>
                      <a href="#" class="btn">Go somewhere</a>
                    </div>
                  </div>
                </div>`
})