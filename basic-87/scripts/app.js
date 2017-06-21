$(function(){

//---------------------------------------------------------------------
// --------------- récupération data form et affichage success ou error
//--------------------------------------------------------------------
$("form").submit(function(e){
		e.preventDefault();
		 $.ajax({
		  url: "http://localhost/tp-ajax/api-form.php",
		  method: "POST", // récupération en POST (formulaire)
		  data: $("form").serialize() // permet de récupérer toutes les valeurs des inputs(meme submit) automatiquement
		  		
		})
		 .done(function(dataPosts){ 
		 		
		 		$("#message_ajax").html("<div class='alert alert-success'><strong>Success</strong>User register</div>");
		 		console.log("User register");
		 })
		 .fail(function(jqXHR, textStatus){
		 	$("#message_ajax").html("<div class='alert alert-danger'><strong>Error</strong>User not register</div>");
		 	console.log("User not register");
		 });
	});
//---------------------------------------------------------------------------------------------------------------


//-----------------------------------------------------------------
//---------------- affichage BDD dans la section "Catégorie"
//----------------------------------------------------------------

	var request = $.ajax({
	  /*url: "http://localhost/tp-ajax/api-form.php",*/
	  url: "http://localhost/tp-ajax/api-form.php",
	  method: "GET", // automatiquement GET si la method n'est pas renseignée. mais par convention on l'a renseigne
	 dataType: "json" // optionel*/
	});
	
	// si la requete s'execute bien -> 
	request.done(function( data ) { // data = reponse du serveur. 
		var content = "";
		
		// foreach ne fonctionne qu'avec des array
		data.forEach(function(element){
			content += '<a href="#">'+element.marque+' '+element.modele+'</a>';
		});

		$("#right_column ul").html(content);

	});


	request.fail(function( jqXHR, textStatus ) {
	  alert( "Request failed: " + textStatus );
	});

//------------------------------------------------------------------------------------



});