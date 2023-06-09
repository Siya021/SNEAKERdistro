let featured= document.querySelector('section#featured-post .row')
let featuredPost = [
    {
        id: 1,
        title: 'Taxi owner kills ex lover and kills himself',
        image: 'https://i.postimg.cc/R0JvFccr/images.jpg',
        description: 'Families of taxi boss were left shocked after the sudden passing of Mandla Khumalo the Taxi kingpin',
        content: 'it is what it is',
        date: new Date()
    },
    {
        id: 2,
        title: 'Taxi owner kills ex lover and kills himself',
        image: 'https://i.postimg.cc/R0JvFccr/images.jpg',
        description: 'Families of taxi boss were left shocked after the sudden passing of Mandla Khumalo the Taxi kingpin',
        content: 'it is what it is',
        date: new Date()
    },
    {
        id: 3,
        title: 'Taxi owner kills ex lover and kills himself',
        image: 'https://i.postimg.cc/R0JvFccr/images.jpg',
        author: '',
        description: 'Families of taxi boss were left shocked after the sudden passing of Mandla Khumalo the Taxi kingpin',
        content: 'it is what it is',
        date: new Date()
    },
    {
        id: 3,
        title: '',
        image: 'https://i.postimg.cc/R0JvFccr/images.jpg',
        author: '',
        description: 'Families of taxi boss were left shocked after the sudden passing of Mandla Khumalo the Taxi kingpin',
        content: 'it is what it is',
    }
];

featuredPost.forEach((post )=> {
    featured.innerHTML += `
   <div class="col">
                <div class="card" style="width: 18rem;">
                    <img src="${post.image}" class="card-img-top" alt="...">
                    <div class="card-body">
                      <h5 class="card-title">"${post.title}"</h5>
                      <p class="card-text">"${post.description}"</p>
                      <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                  </div>
                </div>`

})