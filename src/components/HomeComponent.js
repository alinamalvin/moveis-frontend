import React from 'react'

export const HomeComponent = () => {
    const quoteArray = [
    "...Bond. James Bond", 
    "Of all the gin joints in all the towns in all the world, she walks into mine.", 
    "Well, it's not the men in your life that counts, it's the life in your men.", "I'll be back", 
    "Would you be shocked if I put on something more comfortable?", 
    "Won't you excuse me for a moment while I ... slip into something a little bit more ... comfortable?", 
    "My Mama always said, 'Life was like a box of chocolates; you never know what you're gonna get.", 
    "I could dance with you till the cows come home...On second thought, I'd rather dance with the cows when you came home", 
    "Frankly, my dear, I don't give a damn!", 
    "You talkin' to me? You talkin' to me? You talkin' to me? Well, who the hell else are you talkin' to? You talkin' to me? Well, I'm the only one here. Who the f--k do you think you're talkin' to?"];

    const quoteAuthor = ["- Dr. No (1962)", "-Casablanca (1942)", "- I'm No Angel (1933)", "- The Terminator (1984)", "- Hell's Angels (1930)", "- Blazing Saddles (1974)", "- Forrest Gump (1994)", "- Duck Soup (1933)", "-Gone With the Wind (1939)", "-Taxi Driver (1976)"];
    const movieImage = [
      {image: 'https://resizing.flixster.com/Uo4yzwu_WgVx4uwCT_qIktuy73o=/206x305/v1.bTsxMTIwNDMwMDtqOzE4NTc5OzEyMDA7MTIwMDsxNjAw'},
      {image: 'https://upload.wikimedia.org/wikipedia/commons/b/b3/CasablancaPoster-Gold.jpg'},
      {image: 'https://i.pinimg.com/originals/cd/8f/f1/cd8ff13bcbd1d267c43c5adf979f7e28.jpg'},
      {image: 'https://resizing.flixster.com/d_gyfnquS9adSCeD9EBnFBBPkmk=/206x305/v1.bTsxMTI5MjI1MjtqOzE4NTgwOzEyMDA7MTUzNjsyMDQ4'},
      {image: 'https://m.media-amazon.com/images/M/MV5BMzMwODM4MzE2MF5BMl5BanBnXkFtZTgwNTc0NTgyMjE@._V1_.jpg'},
      {image: 'https://cdn.shopify.com/s/files/1/0057/3728/3618/products/7f8d82d233c43818351d9ef078a74667_1f01c94b-db08-4309-b15f-82370c271380_240x360_crop_center.progressive.jpg?v=1573590182'},
      {image: 'https://movieposters2.com/images/642409-b.jpg'},
      {image: 'https://images-na.ssl-images-amazon.com/images/I/51AGN6HMVXL._SY445_.jpg'},
      {image: 'https://www.waer.org/sites/waer/files/styles/medium/public/202006/gone_with_the_wind_poster.jpg'},
      {image: 'https://upload.wikimedia.org/wikipedia/en/thumb/3/33/Taxi_Driver_%281976_film_poster%29.jpg/220px-Taxi_Driver_%281976_film_poster%29.jpg'}
    ]

    const randomMaker = Math.floor(Math.random()* 10);
    const randomQuote = quoteArray[randomMaker];
    const randomAuthor = quoteAuthor[randomMaker];
    const randomImage = movieImage[randomMaker];

    const colors = ['#16a085', '#27ae60', '#2c3e50', '#f39c12', '#e74c3c', '#9b59b6', '#FB6964', '#342224', "#472E32", "#472E32", "#16a085", "#73A857"];

    return (
      <div>
    <div style={{backgroundColor: colors[randomMaker]}}>
      <h1>"{randomQuote}" {randomAuthor}</h1>
    </div>
       <img src={randomImage.image}></img>
       </div>
    )
}


