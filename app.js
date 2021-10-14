$("#submit-button").on("click", function (event) {
    $("#card-container").empty()
    event.preventDefault()
    let pokemon = $("#search-box")
    .val()
    .trim()
    console.log(pokemon)

    $.ajax({
        method:"GET",
        url: "https://api.pokemontcg.io/v1/cards?name=" + pokemon
    }).then(function(response){
        for (let i = 0; i < response.cards.length; i++) {
            let pokemonCardImage = $("<img class='pokemonCard'>");
          
            pokemonCardImage.attr("src", response.cards[i].imageUrlHiRes);
        
            $("#card-container").append(pokemonCardImage);

            console.log(response.cards)
            
        }
    })
});