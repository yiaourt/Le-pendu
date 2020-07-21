$(function(){

	// On créer le focus instantané sur le champ de texte input
	$('#proposition').focus();

	// On récupere le mot secret
	var secret = $('#secret').text();

	// On le coupe
	var splitted_secret = secret.split("");
	// On compte le nombre de caractères
	var length_secret = secret.length;
	// On initialise le score à 0
	sessionStorage.setItem('score', 0)

	// console.log('secret: ', secret);

	// On affiche ensuite le mot cacher dans l'interface de jeux
	// Pour cela on utilise for pour dire que tant que i(0) est plus petit que le nombre de caractère du secret
	// (..) alors on boucle !
	for(i = 0; i < length_secret; i++){
		// console.log('length ---------------------------------->');

		// On vérifie si il y à des tiret du 6 ('-')
		if(splitted_secret[i] == '-'){
			$('#word').append('<span id="'+i+'">- </span>'); // On affiche un tiret
		
		}else{ // Sinon..
			$('#word').append('<span id="'+i+'">_ </span>'); // On affiche un caractère cacher
		}
	}

	// On marque un événement de clique sur les lettres de l'alphabet pour vérifier si la lettre existe.
	$('#A, #B, #C, #D, #E, #F, #G, #H, #I, #J, #K, #L, #M, #N, #O, #P, #Q, #R, #S, #T, #U, #V, #W, #X, #Y, #Z')
	.on('click', function(){

		// On créer le focus instantané sur le champ de texte input
		$('#proposition').focus();
		
		// On récupère la lettre
		var lettre = $(this).text().toLowerCase();

		// On desactive la lettre cliquer
		$(this).replaceWith('<span>'+$(this).attr('id')+' </span>');

		// On initialise find_letter à 'no'
		sessionStorage.setItem('find_letter', 'no');

		// On vérifie si la lettre existe pour chaque lettre du mot.
		$(splitted_secret).each(function(index){
		  	
		  	if(lettre == splitted_secret[index]){
		  		// Donc si la lettre existe on remplace l'index de l'id html de la lettre cacher par une lettre afficher
		  		$('#'+index).text(lettre+' ');

		  		// et on indique dans une variable session que l'utilisateur à trouver une lettre.
		  		sessionStorage.setItem('find_letter', 'yes')
		  	}
		});

		// On récupere la variable session find_letter
		var find_letter = sessionStorage.getItem('find_letter');
		
		
		if(find_letter == 'yes'){ // si l'utilisateur à trouver une lettre.
			
			// On déclare à 'yes' la variable session "all_is_complete" avant la boucle..
			sessionStorage.setItem('all_is_complete', 'yes');

			// On vérifie si toutes les lettres ont était trouver dans une boucle pour chaqu'une des lettres
			$(splitted_secret).each(function(index){
		  		
		  		var lettre = $('#'+index).text();

		  		// si la lettre est égal à la même lettre du mot chercher ou un tiret du 6, 
		  		// c'est qu'elle est juste !
			  	if(lettre == splitted_secret[index]+' ' || lettre == '- '){
			  		// on ne déclare rien
			  	}

			  	// si la lettre est égal à tiret du 8, 
		  		// c'est qu'elle n'est pas juste !
			  	if(lettre == '_ '){
			  		// On déclare all_is_complete à 'no'
			  		sessionStorage.setItem('all_is_complete', 'no');
			  	}

			});

			// console.log('all_is_complete: ', sessionStorage.getItem('all_is_complete'));
			var all_is_complete = sessionStorage.getItem('all_is_complete');
			
			// On vérifie si all_is_complete égal à "yes"
			if(all_is_complete == 'yes'){
				
				// ci dessous, l'utilisateur à trouver le mot, 
				// on ajoute le score avec la fonction addScore(length)
				addScore(length_secret);

				// et on réinitialise le mot + l'alphabet
				$('#game').load('php/alphabet.php');

				// On réinitialise la variable session storage find_letter, all_is_complete et score
				sessionStorage.removeItem('find_letter', 'all_is_complete', 'score');

				// On charge le script qui va avec l'interface de jeux
				setTimeout(() => {
				  	$.getScript('js/game.js');

				  	// On met une image de victoire
					winImg();

				}, 600);

				// On return false
				return false;
			}
		
		}else{ // sinon une lettre n'à pas était trouver.

			notFound(length_secret); // On envoit la fonction notFound()
		}
		
	});
	
	// On fait un évènement d'envois du formulaire de proposition de mot
	$('#form_proposition').submit(function(){

		// on empèche le formulaire de s'envoyer une deuxième fois
		$('button[type=submit], input[type=submit]').prop('disabled', true);

		var proposition = $('#proposition').val();

		if(proposition == secret){ // Si la proposition est égal au secret

			// ci dessous, l'utilisateur à trouver le mot, 
			// on ajoute le score avec la fonction addScore(length)
			addScore(length_secret);

			// et on réinitialise le mot + l'alphabet
			$('#game').load('php/alphabet.php');

			// On réinitialise la variable session storage find_letter, all_is_complete et score
			sessionStorage.removeItem('find_letter', 'all_is_complete', 'score');

			// On charge le script qui va avec l'interface de jeux
			setTimeout(() => {
			  	
			  	$.getScript('js/game.js');

				// On met une image de victoire
				winImg();

			  	// on réactive le bouton du formulaire
				$('button[type=submit], input[type=submit]').prop('disabled', false);
			
			}, 600);

			// On return false
			return false;
		
		}else{ // Sinon le mot n'est pas égal à la proposition

			notFound(length_secret); // On envoit la fonction notFound()

			// on réactive le bouton du formulaire
			$('button[type=submit], input[type=submit]').prop('disabled', false);
		}

	});
	
});