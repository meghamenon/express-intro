console.log("Sanity Check: JS is working!");

$(document).ready(function(){

  $.ajax({
   method: 'GET',
   url: 'http://localhost:3000/api/albums',
   error: handleError,
   success: handleSuccess

});

$.ajax({
   method: 'GET',
   url: 'http://localhost:3000/api/taquerias',
   error: handleError,
   success: handSuccess

});

  function handleSuccess(json) {

   	json.forEach(function(album){
     	$('.container').append(`<p>${album.title} - ${album.artist}</p>`);
  	
  	});
  }

function handSuccess(json){
    json.forEach(function(taq){

      $('.container').append(`<p>${taq.name}</p>`);

    })
  }

 function handleError(xhr, status, errorThrown) {
   console.log('uh oh');
}

});
