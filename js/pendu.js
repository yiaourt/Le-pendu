$(function(){

	// On réinitialise toutes les variables local.
	localStorage.clear();

	// On commence par écouter le formulaire du pendu
	$('#connexion').submit(function(){

		// on empèche le formulaire de s'envoyer une deuxième fois
		$('button[type=submit], input[type=submit]').prop('disabled',true);

		var pseudo = $('#pseudo').val();

		if(!pseudo){ // Si le pseudo n'est pas rentrer
			
			$('#alertjs').html('<div class="alert alert-danger" role="alert">Erreur : Vous devez remplir le nom d\'utilisateur</div>');
			
			// on réactive le formulaire d'envoi
			$('button[type=submit], input[type=submit]').prop('disabled',false);
		
		}else{ // Si le pseudo est correctement rentrer on l'enregistre et on lance le jeu ...

			localStorage.setItem('pseudo', pseudo);

			// On cache le formulaire et le titre avec une animation de animate.css
			$('#titre_connexion').addClass('animate__bounceOutUp');

			// On attend 1,5 sec
			var unvirgulecinq = 1500;
			
			setTimeout(function() {

				// On charge la page des règles php
				$('#game').load('php/rules.php');
				// et le script qui va démarrer le jeux aprés les règles.
				setTimeout(() => {
				  	$.getScript('js/start.js');
				}, 1000)

			}, unvirgulecinq);//setTimeout

		}
	});

});