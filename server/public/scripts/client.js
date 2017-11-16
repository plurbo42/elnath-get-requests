console.log('client.js has been loaded')

$(document).ready(function () {
    console.log('jquery has been loaded');

    $.ajax({
        method: 'GET',
        url: '/quote/random',
        success: function (response) {
            console.log('random quote response ' + response);
            $('p').text(response.quote);
            // error: function (error) {
            //     console.log('There was an error retrieving a quote from the server')
            // }
        }
    })
    getAllQuotes();
    $('#newQuoteButton').on('click', function () {
        console.log('YOU DID IT YOU PRESSED THE BUTTON')
        $.ajax({
            method: 'POST',
            url: '/quote/new',
            data: { quote_to_add: $('#newQuoteIn').val(), author_to_add: $('#newAuthorIn').val() }, //DATA SHOULD ALWAYS BE AN OBJECT
            success: function (response) {
                console.log('new quote post response: ', response);
                $.ajax({
                    method: 'GET',
                    url: '/quote/all',
                    success: function (response) {
                        //console.log('All the quotes: ', response)
                        getNewQuote();
                    }

                })
            }
        })

    })
    
})

$.ajax({
    method: 'GET',
    url: '/quote/first',
    success: function (response) {
        console.log('first quote response ' + response)
        $('p').text(response.quote);
    }
})

function getAllQuotes() {
    $.ajax({
        method: 'GET',
        url: '/quote/all',
        success: function (response) {
            console.log('All the quotes: ', response)
            for (var i = 0; i < response.length; i++) {
                $('ul').append('<li> "' + response[i].quote + '" -' + response[i].author + '</li>')
            }
            
        }

    })
}

function getNewQuote(){
    $.ajax({
        method: 'GET',
        url: '/quote/all',
        success: function (response){
            $('ul').append('<li> "'+ response[response.length-1].quote + '" -' + response[response.length-1].author + '</li>');
            $('#newQuoteIn').val(''); 
            $('#newAuthorIn').val('');
        }
    })

}
