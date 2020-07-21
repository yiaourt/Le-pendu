$(function(){

	// On créer le jeux aprés les règles lu.
	$('#rules_form').submit(function(){

		// on empèche le formulaire de s'envoyer une deuxième fois
		$('button[type=submit], input[type=submit]').prop('disabled',true);

		// on cache les règles
		$('#box-rules').removeClass('animate__jackInTheBox').hide('1000', 'swing');

		// une seconde aprés on créer le jeux
		var uneseconde = 1000;

		setTimeout(function() {

			$("#future_date").countdowntimer({ // on déclare le chronomètre avec countdowntimer
				minutes 				 : 5, // on lance pour 5 minutes
				size 					 : "xl", // on met le chrono en xl
				borderColor              : "white", // les bordures blanches
				fontColor                : "black", // la police en noir
				backgroundColor          : "white", // l'arrière plan en blanc
				timeUp 					 : timeIsUp, // La fonction qui marque la fin du chrono.
        	});

			// On créer ensuite l'interface du jeux
			$('#game').load('php/alphabet.php');
			
			// On charge le script qui va avec l'interface de jeux
			setTimeout(() => {
			  $.getScript('js/game.js');
			}, 1000)

		}, uneseconde);


	});

});

