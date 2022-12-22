
 
function getusers(done){

    const results = fetch("https://randomuser.me/api/?results=10");
    results.then(response=> response.json())
    .then(data =>{
        done(data)
    });

}


getusers(data => { 
    data.results.forEach(user => { 

        const article = document.createRange().createContextualFragment(
            /*comienzo a colocar código html desde javascript para mostrar los datos de los usuarios
            */ `
        <article>
        <div class="image-container">
        <img src="${user.picture.large}" alt="user">
        </div>
        <span>${user.id.name} </span>
        <span> </br> </span>
        <span>${user.name.first} </span>
        <span>${user.name.last} </span>
        <span> </br> </span>
        <span>${user.email} </span>
        <span> </br> </span>
        <span>${user.phone} </span>
        <span> </br> </span>
        <span>${user.picture.large} </span>
        
   
        </article>
        `);

   
       
        const main= document.querySelector("main");
        main.append(article);
 
        });

});