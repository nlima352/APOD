$('button').click(function(){


    $.ajax({

        'url': 'https://api.nasa.gov/planetary/apod?api_key=nF2rgXDDPfhLagbcEMemyF0l85DGRrKI7wLrNZNb&date=' + $('#data').val(),
       
        
        'success': function(resultado)
        {   
          console.log(resultado)
       $('#imagem').html(`<img src="${resultado.url}">`)
           
       $('#titulo').html(`<h1>${resultado.title}</h1>`)

       $('#texto').html(`<p>${resultado.explanation}</p>`)
      if(resultado.media_type== "image"){
        $('#imagem').html(`<img src="${resultado.url}">`) 
      }else
      {
        $('#video').html(`<iframe width="500" height="300" src="${resultado.url}"></iframe>`)
      }

        
      }
  })
})








