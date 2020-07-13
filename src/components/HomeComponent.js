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

    const randomMaker = Math.floor(Math.random()* 10);
    const randomQuote = quoteArray[randomMaker];
    const randomAuthor = quoteAuthor[randomMaker];

    const colors = ['#16a085', '#27ae60', '#2c3e50', '#f39c12', '#e74c3c', '#9b59b6', '#FB6964', '#342224', "#472E32", "#472E32", "#16a085", "#73A857"];

    return (
    <div style={{backgroundColor: colors[randomMaker]}}>
      "{randomQuote}" {randomAuthor}
    </div>
    )
}


