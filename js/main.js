$(function(){
    //scroll to top button
    var scroll = $('.add-another-btn');
    scroll.click(function(){
        $("html, body").animate({ 
            scrollTop: 0 
        }, "slow");

        //reset button styles
        
        $('.large-size-btn').removeClass("clicked");
        $('.large-size-btn').text("SELECT SIZE");

        $('.medium-size-btn').removeClass("clicked");
        $('.medium-size-btn').text("SELECT SIZE");

        $('.small-size-btn').removeClass("clicked");
        $('.small-size-btn').text("SELECT SIZE");

        $('.americano-style-btn').removeClass("clicked-s");
        $('.americano-style-btn').text("SELECT STYLE");

        $('.latte-style-btn').removeClass("clicked-s");
        $('.latte-style-btn').text("SELECT STYLE");

        $('.cappucino-style-btn').removeClass("clicked-s");
        $('.cappucino-style-btn').text("SELECT STYLE");

        $('.place-order-button').removeClass("clicked-s-s");
        $('.place-order-button').text("PLACE ORDER");

        sizePrice = 0;
        stylePrice = 0;
        gredPriceOne = 0;
        gredPriceTwo = 0;
        totalPrice = 0;

        size = "";
        style = "";
        ingredientOne = "";
        ingredientTwo = "";

        $('input').prop("checked", false);

        priceOutput.text(parseInt(sizePrice) + parseInt(stylePrice) + parseInt(gredPriceOne) + parseInt(gredPriceTwo));
        sizeOutput.text(size);
        styleOutput.text(style);
        ingredientOutputOne.text(ingredientOne);
        ingredientOutputTwo.text(ingredientTwo);

        $('#le-with').hide();
        $('#le-plus').hide();
    });

    size, style, ingredientOne, ingredientTwo, finalPrice
    
    //selection and constructor
    var orderArray = [];
    var totalPrice= 0;

    class CoffeeOrder{
        constructor(coffeeSize, coffeeStyle, firstIngredient, secondIngredient, coffeePrice){
            this.coffeeSize = coffeeSize;
            this.coffeeStyle = coffeeStyle;
            this.firstIngredient = firstIngredient;
            this.secondIngredient = secondIngredient;
            this.coffeePrice = +coffeePrice;
        }
    }


    //size selection
    var sizePrice = 0;
    var priceOutput = $('#price-output-rand');

    var size = "";
    var sizeOutput = $('#size-description');

    $('.large-size-btn').click(function(){
        size = "Large";
        sizeOutput.text(size);

        sizePrice = 12;
        priceOutput.text(sizePrice);

        $('#le-large-coffee').css('display', 'inline');
        $('#le-medium-coffee').css('display', 'none');
        $('#le-small-coffee').css('display', 'none');

        totalPrice = sizePrice;

    });

    $('.medium-size-btn').click(function(){
        size = "Medium";
        sizeOutput.text(size);

        sizePrice = 10;
        priceOutput.text(sizePrice);

        $('#le-large-coffee').css('display', 'none');
        $('#le-medium-coffee').css('display', 'inline');
        $('#le-small-coffee').css('display', 'none');

        totalPrice = sizePrice;

    });

    $('.small-size-btn').click(function(){
        size = "Small";
        sizeOutput.text(size);

        sizePrice = 8;
        priceOutput.text(sizePrice);

        $('#le-large-coffee').css('display', 'none');
        $('#le-medium-coffee').css('display', 'none');
        $('#le-small-coffee').css('display', 'inline');

        totalPrice = sizePrice;

    });

    //style selection
    var style = "";
    var styleOutput = $("#style-description");

    var stylePrice = 0;

    $('.americano-style-btn').click(function(){
        style = "Americano";
        styleOutput.text(style);

        stylePrice = 10;
        priceOutput.text(parseInt(sizePrice) + parseInt(stylePrice));

        totalPrice = sizePrice + stylePrice;
    });

    $('.latte-style-btn').click(function(){
        style = "Latte";
        styleOutput.text(style);

        stylePrice = 13;
        priceOutput.text(parseInt(sizePrice) + parseInt(stylePrice));

        totalPrice = sizePrice + stylePrice;
    });

    $('.cappucino-style-btn').click(function(){
        style = "Cappucino";
        styleOutput.text(style);

        stylePrice = 16;
        priceOutput.text(parseInt(sizePrice) + parseInt(stylePrice));

        totalPrice = sizePrice + stylePrice;
    });

    //ingredient selection
    var ingredientOne = "";
    var ingredientTwo = "";
    var ingredientOutputOne = $('#first-ingredient-output');
    var ingredientOutputTwo = $('#second-ingredient-output');

    var gredPriceOne = 0;
    var gredPriceTwo = 0;

    $('#ice-cream-switch').click(function(){    
        
        if($(this).is(":checked")){


            if(ingredientOne != ""){
                ingredientTwo = "Ice Cream"
                ingredientOutputTwo.text(ingredientTwo);
                $('#le-plus').css('display', 'inline');
    
            }else{
                ingredientOne = "Ice Cream";
                ingredientOutputOne.text(ingredientOne);
                $('#le-with').css('display', 'inline');
            };
            
            if(gredPriceOne != 0){
                gredPriceTwo = 10;
                priceOutput.text(parseInt(sizePrice) + parseInt(stylePrice) + parseInt(gredPriceOne) + parseInt(gredPriceTwo));

                totalPrice = sizePrice + stylePrice + gredPriceOne + gredPriceTwo;
            }else{
                gredPriceOne = 10;
                priceOutput.text(parseInt(sizePrice) + parseInt(stylePrice) + parseInt(gredPriceOne) + parseInt(gredPriceTwo));

                totalPrice = sizePrice + stylePrice + gredPriceOne;
        };
        }else{
            if(gredPriceOne === 10){
                gredPriceOne = 0;
                priceOutput.text(parseInt(sizePrice) + parseInt(stylePrice) + parseInt(gredPriceOne) + parseInt(gredPriceTwo));

                ingredientOne = "";
                ingredientOutputOne.text(ingredientOne);
                $('#le-with').css('display', 'none');

                totalPrice = sizePrice + stylePrice + gredPriceOne;
            }else if(gredPriceTwo === 10){
                gredPriceTwo = 0;
                priceOutput.text(parseInt(sizePrice) + parseInt(stylePrice) + parseInt(gredPriceOne) + parseInt(gredPriceTwo));

                ingredientTwo = "";
                ingredientOutputTwo.text(ingredientTwo);
                $('#le-plus').css('display', 'none');

                totalPrice = sizePrice + stylePrice + gredPriceOne + gredPriceTwo;
            };
        };

    });

    $('#vanilla-switch').click(function(){
        if($(this).is(":checked")){

            if(ingredientOne != ""){
                ingredientTwo = "Vanilla"
                ingredientOutputTwo.text(ingredientTwo);
                $('#le-plus').css('display', 'inline');
    
            }else{
                ingredientOne = "Vanilla";
                ingredientOutputOne.text(ingredientOne);
                $('#le-with').css('display', 'inline');
            };
            
            if(gredPriceOne != 0){
                gredPriceTwo = 5;
                priceOutput.text(parseInt(sizePrice) + parseInt(stylePrice) + parseInt(gredPriceOne) + parseInt(gredPriceTwo));

                totalPrice = sizePrice + stylePrice + gredPriceOne + gredPriceTwo;
            }else{
                gredPriceOne = 5;
                priceOutput.text(parseInt(sizePrice) + parseInt(stylePrice) + parseInt(gredPriceOne) + parseInt(gredPriceTwo));

                totalPrice = sizePrice + stylePrice + gredPriceOne + gredPriceTwo;
        };
        }else{
            if(gredPriceOne === 5){
                gredPriceOne = 0;
                priceOutput.text(parseInt(sizePrice) + parseInt(stylePrice) + parseInt(gredPriceOne) + parseInt(gredPriceTwo));

                ingredientOne = "";
                ingredientOutputOne.text(ingredientOne);
                $('#le-with').css('display', 'none');

                totalPrice = sizePrice + stylePrice + gredPriceOne + gredPriceTwo;
            }else if(gredPriceTwo === 5){
                gredPriceTwo = 0;
                priceOutput.text(parseInt(sizePrice) + parseInt(stylePrice) + parseInt(gredPriceOne) + parseInt(gredPriceTwo));

                ingredientTwo = "";
                ingredientOutputTwo.text(ingredientTwo);
                $('#le-plus').css('display', 'none');

                totalPrice = sizePrice + stylePrice + gredPriceOne + gredPriceTwo;
            };
        };
    });

    $('#sugar-switch').click(function(){
        if($(this).is(":checked")){

            if(ingredientOne != ""){
                ingredientTwo = "Sugar"
                ingredientOutputTwo.text(ingredientTwo);
                $('#le-plus').css('display', 'inline');
    
            }else{
                ingredientOne = "Sugar";
                ingredientOutputOne.text(ingredientOne);
                $('#le-with').css('display', 'inline');
            };
            
            if(gredPriceOne != 0){
                gredPriceTwo = 3;
                priceOutput.text(parseInt(sizePrice) + parseInt(stylePrice) + parseInt(gredPriceOne) + parseInt(gredPriceTwo));

                totalPrice = sizePrice + stylePrice + gredPriceOne + gredPriceTwo;
            }else{
                gredPriceOne = 3;
                priceOutput.text(parseInt(sizePrice) + parseInt(stylePrice) + parseInt(gredPriceOne) + parseInt(gredPriceTwo));

                totalPrice = sizePrice + stylePrice + gredPriceOne + gredPriceTwo;
        };
        }else{
            if(gredPriceOne === 3){
                gredPriceOne = 0;
                priceOutput.text(parseInt(sizePrice) + parseInt(stylePrice) + parseInt(gredPriceOne) + parseInt(gredPriceTwo));

                ingredientOne = "";
                ingredientOutputOne.text(ingredientOne);
                $('#le-with').css('display', 'none');

                totalPrice = sizePrice + stylePrice + gredPriceOne + gredPriceTwo;
            }else if(gredPriceTwo === 3){
                gredPriceTwo = 0;
                priceOutput.text(parseInt(sizePrice) + parseInt(stylePrice) + parseInt(gredPriceOne) + parseInt(gredPriceTwo));

                ingredientTwo = "";
                ingredientOutputTwo.text(ingredientTwo);
                $('#le-plus').css('display', 'none');

                totalPrice = sizePrice + stylePrice + gredPriceOne + gredPriceTwo;
            };
        };
    });

    $('#almond-switch').click(function(){
        if($(this).is(":checked")){

            if(ingredientOne != ""){
                ingredientTwo = "Almond Milk"
                ingredientOutputTwo.text(ingredientTwo);
                $('#le-plus').css('display', 'inline');
    
            }else{
                ingredientOne = "Almond Milk";
                ingredientOutputOne.text(ingredientOne);
                $('#le-with').css('display', 'inline');
            };
            
            if(gredPriceOne != 0){
                gredPriceTwo = 7;
                priceOutput.text(parseInt(sizePrice) + parseInt(stylePrice) + parseInt(gredPriceOne) + parseInt(gredPriceTwo));

                totalPrice = sizePrice + stylePrice + gredPriceOne + gredPriceTwo;
            }else{
                gredPriceOne = 7;
                priceOutput.text(parseInt(sizePrice) + parseInt(stylePrice) + parseInt(gredPriceOne) + parseInt(gredPriceTwo));

                totalPrice = sizePrice + stylePrice + gredPriceOne + gredPriceTwo;
        };
        }else{
            if(gredPriceOne === 7){
                gredPriceOne = 0;
                priceOutput.text(parseInt(sizePrice) + parseInt(stylePrice) + parseInt(gredPriceOne) + parseInt(gredPriceTwo));

                ingredientOne = "";
                ingredientOutputOne.text(ingredientOne);
                $('#le-with').css('display', 'none');

                totalPrice = sizePrice + stylePrice + gredPriceOne + gredPriceTwo;
            }else if(gredPriceTwo === 7){
                gredPriceTwo = 0;
                priceOutput.text(parseInt(sizePrice) + parseInt(stylePrice) + parseInt(gredPriceOne) + parseInt(gredPriceTwo));

                ingredientTwo = "";
                ingredientOutputTwo.text(ingredientTwo);
                $('#le-plus').css('display', 'none');

                totalPrice = sizePrice + stylePrice + gredPriceOne + gredPriceTwo;
            };
        };
    });

    $('#chocolate-switch').click(function(){
        if($(this).is(":checked")){

            if(ingredientOne != ""){
                ingredientTwo = "Chocolate"
                ingredientOutputTwo.text(ingredientTwo);
                $('#le-plus').css('display', 'inline');
    
            }else{
                ingredientOne = "Chocolate";
                ingredientOutputOne.text(ingredientOne);
                $('#le-with').css('display', 'inline');
            };
            
            if(gredPriceOne != 0){
                gredPriceTwo = 9;
                priceOutput.text(parseInt(sizePrice) + parseInt(stylePrice) + parseInt(gredPriceOne) + parseInt(gredPriceTwo));

                totalPrice = sizePrice + stylePrice + gredPriceOne + gredPriceTwo;
            }else{
                gredPriceOne = 9;
                priceOutput.text(parseInt(sizePrice) + parseInt(stylePrice) + parseInt(gredPriceOne) + parseInt(gredPriceTwo));

                totalPrice = sizePrice + stylePrice + gredPriceOne + gredPriceTwo;
        };
        }else{
            if(gredPriceOne === 9){
                gredPriceOne = 0;
                priceOutput.text(parseInt(sizePrice) + parseInt(stylePrice) + parseInt(gredPriceOne) + parseInt(gredPriceTwo));

                ingredientOne = "";
                ingredientOutputOne.text(ingredientOne);
                $('#le-with').css('display', 'none');

                totalPrice = sizePrice + stylePrice + gredPriceOne + gredPriceTwo;
            }else if(gredPriceTwo === 9){
                gredPriceTwo = 0;
                priceOutput.text(parseInt(sizePrice) + parseInt(stylePrice) + parseInt(gredPriceOne) + parseInt(gredPriceTwo));

                ingredientTwo = "";
                ingredientOutputTwo.text(ingredientTwo);
                $('#le-plus').css('display', 'none');

                totalPrice = sizePrice + stylePrice + gredPriceOne + gredPriceTwo;
            };
        };
    });

    $('#egg-switch').click(function(){
        if($(this).is(":checked")){

            if(ingredientOne != ""){
                ingredientTwo = "Egg"
                ingredientOutputTwo.text(ingredientTwo);
                $('#le-plus').css('display', 'inline');
    
            }else{
                ingredientOne = "Egg";
                ingredientOutputOne.text(ingredientOne);
                $('#le-with').css('display', 'inline');
            };
            
            if(gredPriceOne != 0){
                gredPriceTwo = 3;
                priceOutput.text(parseInt(sizePrice) + parseInt(stylePrice) + parseInt(gredPriceOne) + parseInt(gredPriceTwo));

                totalPrice = sizePrice + stylePrice + gredPriceOne + gredPriceTwo;
            }else{
                gredPriceOne = 3;
                priceOutput.text(parseInt(sizePrice) + parseInt(stylePrice) + parseInt(gredPriceOne) + parseInt(gredPriceTwo));

                totalPrice = sizePrice + stylePrice + gredPriceOne + gredPriceTwo;
        };
        }else{
            if(gredPriceOne === 3){
                gredPriceOne = 0;
                priceOutput.text(parseInt(sizePrice) + parseInt(stylePrice) + parseInt(gredPriceOne) + parseInt(gredPriceTwo));

                ingredientOne = "";
                ingredientOutputOne.text(ingredientOne);
                $('#le-with').css('display', 'none');

                totalPrice = sizePrice + stylePrice + gredPriceOne + gredPriceTwo;
            }else if(gredPriceTwo === 3){
                gredPriceTwo = 0;
                priceOutput.text(parseInt(sizePrice) + parseInt(stylePrice) + parseInt(gredPriceOne) + parseInt(gredPriceTwo));

                ingredientTwo = "";
                ingredientOutputTwo.text(ingredientTwo);
                $('#le-plus').css('display', 'none');

                totalPrice = sizePrice + stylePrice + gredPriceOne + gredPriceTwo;
            };
        };
    });

    $('#honey-switch').click(function(){
        if($(this).is(":checked")){

            if(ingredientOne != ""){
                ingredientTwo = "Honey"
                ingredientOutputTwo.text(ingredientTwo);
                $('#le-plus').css('display', 'inline');
    
            }else{
                ingredientOne = "Honey";
                ingredientOutputOne.text(ingredientOne);
                $('#le-with').css('display', 'inline');
            };
            
            if(gredPriceOne != 0){
                gredPriceTwo = 6;
                priceOutput.text(parseInt(sizePrice) + parseInt(stylePrice) + parseInt(gredPriceOne) + parseInt(gredPriceTwo));

                totalPrice = sizePrice + stylePrice + gredPriceOne + gredPriceTwo;
            }else{
                gredPriceOne = 6;
                priceOutput.text(parseInt(sizePrice) + parseInt(stylePrice) + parseInt(gredPriceOne) + parseInt(gredPriceTwo));

                totalPrice = sizePrice + stylePrice + gredPriceOne + gredPriceTwo;
        };
        }else{
            if(gredPriceOne === 6){
                gredPriceOne = 0;
                priceOutput.text(parseInt(sizePrice) + parseInt(stylePrice) + parseInt(gredPriceOne) + parseInt(gredPriceTwo));

                ingredientOne = "";
                ingredientOutputOne.text(ingredientOne);
                $('#le-with').css('display', 'none');

                totalPrice = sizePrice + stylePrice + gredPriceOne + gredPriceTwo;
            }else if(gredPriceTwo === 6){
                gredPriceTwo = 0;
                priceOutput.text(parseInt(sizePrice) + parseInt(stylePrice) + parseInt(gredPriceOne) + parseInt(gredPriceTwo));

                ingredientTwo = "";
                ingredientOutputTwo.text(ingredientTwo);
                $('#le-plus').css('display', 'none');

                totalPrice = sizePrice + stylePrice + gredPriceOne + gredPriceTwo;
            };
        }; 
    });

    $('#cinnamon-switch').click(function(){
        if($(this).is(":checked")){

            if(ingredientOne != ""){
                ingredientTwo = "Cinnamon"
                ingredientOutputTwo.text(ingredientTwo);
                $('#le-plus').css('display', 'inline');
    
            }else{
                ingredientOne = "Cinnamon";
                ingredientOutputOne.text(ingredientOne);
                $('#le-with').css('display', 'inline');
            };
            
            if(gredPriceOne != 0){
                gredPriceTwo = 3;
                priceOutput.text(parseInt(sizePrice) + parseInt(stylePrice) + parseInt(gredPriceOne) + parseInt(gredPriceTwo));

                totalPrice = sizePrice + stylePrice + gredPriceOne + gredPriceTwo;
            }else{
                gredPriceOne = 3;
                priceOutput.text(parseInt(sizePrice) + parseInt(stylePrice) + parseInt(gredPriceOne) + parseInt(gredPriceTwo));

                totalPrice = sizePrice + stylePrice + gredPriceOne + gredPriceTwo;
        };
        }else{
            if(gredPriceOne === 3){
                gredPriceOne = 0;
                priceOutput.text(parseInt(sizePrice) + parseInt(stylePrice) + parseInt(gredPriceOne) + parseInt(gredPriceTwo));

                ingredientOne = "";
                ingredientOutputOne.text(ingredientOne);
                $('#le-with').css('display', 'none');

                totalPrice = sizePrice + stylePrice + gredPriceOne + gredPriceTwo;
            }else if(gredPriceTwo === 3){
                gredPriceTwo = 0;
                priceOutput.text(parseInt(sizePrice) + parseInt(stylePrice) + parseInt(gredPriceOne) + parseInt(gredPriceTwo));

                ingredientTwo = "";
                ingredientOutputTwo.text(ingredientTwo);
                $('#le-plus').css('display', 'none');

                totalPrice = sizePrice + stylePrice + gredPriceOne + gredPriceTwo;
            };
        };
    });

    $('#butter-switch').click(function(){
        if($(this).is(":checked")){

            if(ingredientOne != ""){
                ingredientTwo = "Butter"
                ingredientOutputTwo.text(ingredientTwo);
                $('#le-plus').css('display', 'inline');
    
            }else{
                ingredientOne = "Butter";
                ingredientOutputOne.text(ingredientOne);
                $('#le-with').css('display', 'inline');
            };
            
            if(gredPriceOne != 0){
                gredPriceTwo = 4;
                priceOutput.text(parseInt(sizePrice) + parseInt(stylePrice) + parseInt(gredPriceOne) + parseInt(gredPriceTwo));

                totalPrice = sizePrice + stylePrice + gredPriceOne + gredPriceTwo;
            }else{
                gredPriceOne = 4;
                priceOutput.text(parseInt(sizePrice) + parseInt(stylePrice) + parseInt(gredPriceOne) + parseInt(gredPriceTwo));

                totalPrice = sizePrice + stylePrice + gredPriceOne + gredPriceTwo;
        };
        }else{
            if(gredPriceOne === 4){
                gredPriceOne = 0;
                priceOutput.text(parseInt(sizePrice) + parseInt(stylePrice) + parseInt(gredPriceOne) + parseInt(gredPriceTwo));

                ingredientOne = "";
                ingredientOutputOne.text(ingredientOne);
                $('#le-with').css('display', 'none');

                totalPrice = sizePrice + stylePrice + gredPriceOne + gredPriceTwo;
            }else if(gredPriceTwo === 4){
                gredPriceTwo = 0;
                priceOutput.text(parseInt(sizePrice) + parseInt(stylePrice) + parseInt(gredPriceOne) + parseInt(gredPriceTwo));

                ingredientTwo = "";
                ingredientOutputTwo.text(ingredientTwo);
                $('#le-plus').css('display', 'none');

                totalPrice = sizePrice + stylePrice + gredPriceOne + gredPriceTwo;
            };
        };
    });

    $('#salt-switch').click(function(){
        if($(this).is(":checked")){

            if(ingredientOne != ""){
                ingredientTwo = "Salt"
                ingredientOutputTwo.text(ingredientTwo);
                $('#le-plus').css('display', 'inline');
    
            }else{
                ingredientOne = "Salt";
                ingredientOutputOne.text(ingredientOne);
                $('#le-with').css('display', 'inline');
            };
            
            if(gredPriceOne != 0){
                gredPriceTwo = 2;
                priceOutput.text(parseInt(sizePrice) + parseInt(stylePrice) + parseInt(gredPriceOne) + parseInt(gredPriceTwo));

                totalPrice = sizePrice + stylePrice + gredPriceOne + gredPriceTwo;
            }else{
                gredPriceOne = 2;
                priceOutput.text(parseInt(sizePrice) + parseInt(stylePrice) + parseInt(gredPriceOne) + parseInt(gredPriceTwo));

                totalPrice = sizePrice + stylePrice + gredPriceOne + gredPriceTwo;
        };
        }else{
            if(gredPriceOne === 2){
                gredPriceOne = 0;
                priceOutput.text(parseInt(sizePrice) + parseInt(stylePrice) + parseInt(gredPriceOne) + parseInt(gredPriceTwo));

                ingredientOne = "";
                ingredientOutputOne.text(ingredientOne);
                $('#le-with').css('display', 'none');

                totalPrice = sizePrice + stylePrice + gredPriceOne + gredPriceTwo;
            }else if(gredPriceTwo === 2){
                gredPriceTwo = 0;
                priceOutput.text(parseInt(sizePrice) + parseInt(stylePrice) + parseInt(gredPriceOne) + parseInt(gredPriceTwo));

                ingredientTwo = "";
                ingredientOutputTwo.text(ingredientTwo);
                $('#le-plus').css('display', 'none');

                totalPrice = sizePrice + stylePrice + gredPriceOne + gredPriceTwo;
            };
        };
    });

    $('#cardomom-switch').click(function(){
        if($(this).is(":checked")){

            if(ingredientOne != ""){
                ingredientTwo = "Cardamom"
                ingredientOutputTwo.text(ingredientTwo);
                $('#le-plus').css('display', 'inline');
    
            }else{
                ingredientOne = "Cardamom";
                ingredientOutputOne.text(ingredientOne);
                $('#le-with').css('display', 'inline');
            };
            
            if(gredPriceOne != 0){
                gredPriceTwo = 8;
                priceOutput.text(parseInt(sizePrice) + parseInt(stylePrice) + parseInt(gredPriceOne) + parseInt(gredPriceTwo));

                totalPrice = sizePrice + stylePrice + gredPriceOne + gredPriceTwo;
            }else{
                gredPriceOne = 8;
                priceOutput.text(parseInt(sizePrice) + parseInt(stylePrice) + parseInt(gredPriceOne) + parseInt(gredPriceTwo));

                totalPrice = sizePrice + stylePrice + gredPriceOne + gredPriceTwo;
        };
        }else{
            if(gredPriceOne === 8){
                gredPriceOne = 0;
                priceOutput.text(parseInt(sizePrice) + parseInt(stylePrice) + parseInt(gredPriceOne) + parseInt(gredPriceTwo));

                ingredientOne = "";
                ingredientOutputOne.text(ingredientOne);
                $('#le-with').css('display', 'none');

                totalPrice = sizePrice + stylePrice + gredPriceOne + gredPriceTwo;
            }else if(gredPriceTwo === 8){
                gredPriceTwo = 0;
                priceOutput.text(parseInt(sizePrice) + parseInt(stylePrice) + parseInt(gredPriceOne) + parseInt(gredPriceTwo));

                ingredientTwo = "";
                ingredientOutputTwo.text(ingredientTwo);
                $('#le-plus').css('display', 'none');

                totalPrice = sizePrice + stylePrice + gredPriceOne + gredPriceTwo;
            };
        }; 
    });

    $('#soy-switch').click(function(){
        if($(this).is(":checked")){

            if(ingredientOne != ""){
                ingredientTwo = "Soy milk"
                ingredientOutputTwo.text(ingredientTwo);
                $('#le-plus').css('display', 'inline');
    
            }else{
                ingredientOne = "Soy milk";
                ingredientOutputOne.text(ingredientOne);
                $('#le-with').css('display', 'inline');
            };
            
            if(gredPriceOne != 0){
                gredPriceTwo = 10;
                priceOutput.text(parseInt(sizePrice) + parseInt(stylePrice) + parseInt(gredPriceOne) + parseInt(gredPriceTwo));

                totalPrice = sizePrice + stylePrice + gredPriceOne + gredPriceTwo;
            }else{
                gredPriceOne = 10;
                priceOutput.text(parseInt(sizePrice) + parseInt(stylePrice) + parseInt(gredPriceOne) + parseInt(gredPriceTwo));

                totalPrice = sizePrice + stylePrice + gredPriceOne + gredPriceTwo;
        };
        }else{
            if(gredPriceOne === 10){
                gredPriceOne = 0;
                priceOutput.text(parseInt(sizePrice) + parseInt(stylePrice) + parseInt(gredPriceOne) + parseInt(gredPriceTwo));

                ingredientOne = "";
                ingredientOutputOne.text(ingredientOne);
                $('#le-with').css('display', 'none');

                totalPrice = sizePrice + stylePrice + gredPriceOne + gredPriceTwo;
            }else if(gredPriceTwo === 10){
                gredPriceTwo = 0;
                priceOutput.text(parseInt(sizePrice) + parseInt(stylePrice) + parseInt(gredPriceOne) + parseInt(gredPriceTwo));

                ingredientTwo = "";
                ingredientOutputTwo.text(ingredientTwo);
                $('#le-plus').css('display', 'none');

                totalPrice = sizePrice + stylePrice + gredPriceOne + gredPriceTwo;
            };
        };   
    });


    //promo code section
    var codeButton = $('#submit-button');
    var mesgPopup = $('#try-again-msg');
    var discount = 0;
    var priceWithDiscount = 0;
    var finalPrice = 0;
    var promoUsed = 0;

    codeButton.click(function(){
        discount = totalPrice * 0.10;
        
        var codeInput = $('#promo-code-input').val();
        if (codeInput === "ZXT420"){
            if(promoUsed === 0){
                priceOutput.text(parseInt(sizePrice) + parseInt(stylePrice) + parseInt(gredPriceOne) + parseInt(gredPriceTwo) - parseInt(discount));
                mesgPopup.css('display', 'inline');
                mesgPopup.text("Code successful. Enjoy 10% off");
                priceWithDiscount = totalPrice - discount;
                finalPrice = Math.ceil(priceWithDiscount).toFixed(2);
                promoUsed++;
            }else{
                mesgPopup.text("Sorry! Only 1 promo code can be used per order!");
            };
            

        }else{
            mesgPopup.css('display', 'inline');
            mesgPopup.text("Error. Invalid promo code");
            finalPrice = totalPrice.toFixed(2);
        }
    });


    //button onclick/offclick functionality
    //sizes
    $('.large-size-btn').click(function(){
        if($(this).hasClass('clicked')){
            $(this).text('SELECT SIZE');
            $(this).removeClass('clicked');
            $(this).addClass('unclicked');
        }else{
            $(this).text('SELECTED');
            $(this).addClass('clicked');
        };    

        if($('.medium-size-btn').hasClass('clicked')){
            $('.medium-size-btn').text('SELECT SIZE');
            $('.medium-size-btn').removeClass('clicked');
            $('.medium-size-btn').addClass('unclicked');
        };

        if($('.small-size-btn').hasClass('clicked')){
            $('.small-size-btn').text('SELECT SIZE');
            $('.small-size-btn').removeClass('clicked');
            $('.small-size-btn').addClass('unclicked');
        };
    });

    $('.medium-size-btn').click(function(){
        if($(this).hasClass('clicked')){
            $(this).text('SELECT SIZE');
            $(this).removeClass('clicked');
            $(this).addClass('unclicked');
        }else{
            $(this).text('SELECTED');
            $(this).addClass('clicked');
        };    

        if($('.large-size-btn').hasClass('clicked')){
            $('.large-size-btn').text('SELECT SIZE');
            $('.large-size-btn').removeClass('clicked');
            $('.large-size-btn').addClass('unclicked');
        };

        if($('.small-size-btn').hasClass('clicked')){
            $('.small-size-btn').text('SELECT SIZE');
            $('.small-size-btn').removeClass('clicked');
            $('.small-size-btn').addClass('unclicked');
        };
    });

    $('.small-size-btn').click(function(){
        if($(this).hasClass('clicked')){
            $(this).text('SELECT SIZE');
            $(this).removeClass('clicked');
            $(this).addClass('unclicked');
        }else{
            $(this).text('SELECTED');
            $(this).addClass('clicked');
        };    

        if($('.large-size-btn').hasClass('clicked')){
            $('.large-size-btn').text('SELECT SIZE');
            $('.large-size-btn').removeClass('clicked');
            $('.large-size-btn').addClass('unclicked');
        };

        if($('.medium-size-btn').hasClass('clicked')){
            $('.medium-size-btn').text('SELECT SIZE');
            $('.medium-size-btn').removeClass('clicked');
            $('.medium-size-btn').addClass('unclicked');
        };
    });

    //styles
    
    $('.americano-style-btn').click(function(){
        if($(this).hasClass('clicked-s')){
            $(this).text('SELECT STYLE');
            $(this).removeClass('clicked-s');
            $(this).addClass('unclicked-s');
        }else{
            $(this).text('SELECTED');
            $(this).addClass('clicked-s');
        };    

        if($('.latte-style-btn').hasClass('clicked-s')){
            $('.latte-style-btn').text('SELECT STYLE');
            $('.latte-style-btn').removeClass('clicked-s');
            $('.latte-style-btn').addClass('unclicked-s');
        };

        if($('.cappucino-style-btn').hasClass('clicked-s')){
            $('.cappucino-style-btn').text('SELECT STYLE');
            $('.cappucino-style-btn').removeClass('clicked-s');
            $('.cappucino-style-btn').addClass('unclicked-s');
        };
    });

    $('.latte-style-btn').click(function(){
        if($(this).hasClass('clicked-s')){
            $(this).text('SELECT STYLE');
            $(this).removeClass('clicked-s');
            $(this).addClass('unclicked-s');
        }else{
            $(this).text('SELECTED');
            $(this).addClass('clicked-s');
        };    

        if($('.americano-style-btn').hasClass('clicked-s')){
            $('.americano-style-btn').text('SELECT STYLE');
            $('.americano-style-btn').removeClass('clicked-s');
            $('.americano-style-btn').addClass('unclicked-s');
        };

        if($('.cappucino-style-btn').hasClass('clicked-s')){
            $('.cappucino-style-btn').text('SELECT STYLE');
            $('.cappucino-style-btn').removeClass('clicked-s');
            $('.cappucino-style-btn').addClass('unclicked-s');
        };
    });

    $('.cappucino-style-btn').click(function(){
        if($(this).hasClass('clicked-s')){
            $(this).text('SELECT STYLE');
            $(this).removeClass('clicked-s');
            $(this).addClass('unclicked-s');
        }else{
            $(this).text('SELECTED');
            $(this).addClass('clicked-s');
        };    

        if($('.americano-style-btn').hasClass('clicked-s')){
            $('.americano-style-btn').text('SELECT STYLE');
            $('.americano-style-btn').removeClass('clicked-s');
            $('.americano-style-btn').addClass('unclicked-s');
        };

        if($('.latte-style-btn').hasClass('clicked-s')){
            $('.latte-style-btn').text('SELECT STYLE');
            $('.latte-style-btn').removeClass('clicked-s');
            $('.latte-style-btn').addClass('unclicked-s');
        };
    });

    //PLACE ORDER FUNCTIONALITY

    var orderNumber = 0;

    $('.place-order-button').click(function(){
        //button change
        if($(this).hasClass('clicked-s-s')){
            $(this).text('PLACE ORDER');
            $(this).removeClass('clicked-s-s');
            $(this).addClass('unclicked-s-s');
        }else{
            $(this).text('ORDER PLACED');
            $(this).addClass('clicked-s-s');
        };

        orderNumber++

        //add order to the array

        if(promoUsed === 0){
            finalPrice = totalPrice.toFixed(2);
        };

        orderArray.push(new CoffeeOrder(size, style, ingredientOne, ingredientTwo, finalPrice));
        console.log(orderArray);

        if(ingredientOne === ""){
            $('.checkout-items-con').append("<div class='checkout-item yes'><div class='product-code-output'>"+orderNumber+"</div><div class='item-name-output'><p class='size-checkout-output'>"+size+"</p><p>_</p><p class='style-checkout-output'>"+style+"</p></div><div class='price-checkout-output'>R<p style='display: inline-block;'>"+finalPrice+"</p></div><div class='remove-single'></div></div>");
        };


        if(ingredientTwo != ""){
            $('.checkout-items-con').append("<div class='checkout-item yes'><div class='product-code-output'>"+orderNumber+"</div><div class='item-name-output'><p class='size-checkout-output'>"+size+"</p><p>_</p><p class='style-checkout-output'>"+style+"</p><p> (</p><p>"+ingredientOne+"</p><p></p><p>+ "+ingredientTwo+"</p><p>)</p></div><div class='price-checkout-output'>R<p style='display: inline-block;'>"+finalPrice+"</p></div><div class='remove-single'></div></div>");
        }else{
            $('.checkout-items-con').append("<div class='checkout-item yes'><div class='product-code-output'>"+orderNumber+"</div><div class='item-name-output'><p class='size-checkout-output'>"+size+"</p><p>_</p><p class='style-checkout-output'>"+style+"</p><p> (</p><p>"+ingredientOne+"</p><p></p><p></p><p>)</p></div><div class='price-checkout-output'>R<p style='display: inline-block;'>"+finalPrice+"</p></div><div class='remove-single'></div></div>");
        }
                
    });

    //purchase functionality

    var totalOrdered = 0;

    $('.purchase-button').click(function(){
        //button change
        if($(this).hasClass('clicked-s-s-s')){
            $(this).text('PURCHASE');
            $(this).removeClass('clicked-s-s-s');
            $(this).addClass('unclicked-s-s-s');
        }else{
            $(this).text('PURCHASED!');
            $(this).addClass('clicked-s-s-s');
        };

        for(i = 0; i < orderArray.length; i++){
            totalOrdered += orderArray[i].coffeePrice;
        };

        alert("PURCHASE CONFIRMED! TOTAL PRICE : R" + totalOrdered.toFixed(2));
    });

    //checkout remove-from-cart functionality 

    //hover effect
    $('.remove-btn-larger').on("mouseenter", function(){
        $(this).find("img").attr("src", "../assets/remove-hover-01.svg");
    });

    $('.remove-btn-larger').on("mouseleave", function(){
        $(this).find("img").attr("src", "../assets/white-cross.png");
    });

    $('.remove-single').on("mouseenter", function(){
        $(this).find("img").attr("src", "../assets/remove-hover-01.svg");
    });

    $('.remove-single').on("mouseleave", function(){
        $(this).find("img").attr("src", "../assets/white-cross.png");
    });

    //removal from cart
    $("#remove-all").click(function(){
        $('.checkout-item').fadeOut(500);
    });

    $("#remove-single-ay").click(function(){
        $(this).closest('.checkout-item').fadeOut(500);
    });
});