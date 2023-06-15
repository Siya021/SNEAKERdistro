let featured= document.querySelector('section#newCollection .row')
let featuredPost = [
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
    }
];

featuredPost.forEach((post )=> {
    featured.innerHTML += `
   <div class="col">
                <div class="card" style="width: 18rem;">
                    <img src="${post.image}" class="card-img-top" alt="...">
                    <div class="card-body">
                      <h5 class="card-title">${post.title}</h5>
                      <p class="card-text">${post.price}</p>
                      <a href="/html/products.html" class="btn btn-outline-warning">Go to shop</a>
                    </div>
                  </div>
                </div>`

})
 