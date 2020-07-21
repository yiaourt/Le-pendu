$(function(){ // On initialise la variable local final_score.
	localStorage.setItem('final_score', 0);
});

function timeIsUp(){ // fonction qui marque la fin du chronomètre.
	
	// On récupère le score final
	var final_score = localStorage.getItem('final_score');
	// On récupère le pseudo
	var pseudo = localStorage.getItem('pseudo');

	// On cache le chronomètre
	$("#countdowntimer").addClass('animate__animated animate__bounceOutUp');

	// On charge la page end.php avec une variable post
	$.post("php/end.php", {score: final_score, pseudo: pseudo}, function(data) {
		$("#game").html(data);
	});
}

function addScore(length){ // fonction qui ajoute le score du mot trouver au score final.

	var final_score = localStorage.getItem('final_score'); // On récupère le score final

	// Si le score final n'existe pas
	if(!final_score){

		// On écrit la longueur du mot trouver au score final.
		localStorage.setItem('final_score', length);
	
	}else{// Sinon on calcul le nouveau score final avec le score du mot trouver

		var new_final_score = parseInt(final_score) + parseInt(length);

		localStorage.setItem('final_score', new_final_score);
	}
	// console.log(localStorage.getItem('final_score'));

}

function removeScore(length){ // fonction qui ajoute le score du mot trouver au score final.

	var final_score = localStorage.getItem('final_score'); // On récupère le score final

	if(!final_score){ // Si le score final n'existe pas

		localStorage.setItem('final_score', 0 - length);
	
	}else{ // Sinon on calcul le nouveau score final avec le score du mot trouver

		var new_final_score = parseInt(final_score) - parseInt(length);

		localStorage.setItem('final_score', new_final_score);
	}
	// console.log(localStorage.getItem('final_score'));
}

function notFound(length_secret){

	// Ici on créer la fonction qui définis qu'un mot n'à pas était trouver
	// On récupère le score
	var score = sessionStorage.getItem('score');
	
	if(score == 0){

		// On ajoute l'image n°1 du pendu.
		$('#pendu').attr('src', '/img/fail_1.png');

		// On initialize le score si il n'existe pas
		sessionStorage.setItem('score', 1);
	}

	if(score == 1){
		
		// On ajoute l'image n°2 du pendu.
		$('#pendu').attr('src', '/img/fail_2.png');

		// On initialize le score à 2
		sessionStorage.setItem('score', 2);
	}

	if(score == 2){
		
		// On ajoute l'image n°3 du pendu.
		$('#pendu').attr('src', '/img/fail_3.png');

		// On initialize le score à 3
		sessionStorage.setItem('score', 3);
	}

	if(score == 3){
		
		// On ajoute l'image n°4 du pendu.
		$('#pendu').attr('src', '/img/fail_4.png');

		// On initialize le score à 4
		sessionStorage.setItem('score', 4);
	}

	if(score == 4){
		
		// On ajoute l'image n°5 du pendu.
		$('#pendu').attr('src', '/img/fail_5.png');

		// On initialize le score à 5
		sessionStorage.setItem('score', 5);
	}

	if(score == 5){
		
		// On ajoute l'image n°6 du pendu.
		$('#pendu').attr('src', '/img/fail_6.png');

		// On initialize le score à 6
		sessionStorage.setItem('score', 6);
	}
	
	if(score == 6){
		
		// On ajoute l'image n°7 du pendu.
		$('#pendu').attr('src', '/img/fail_7.png');

		// On initialize le score à 7
		sessionStorage.setItem('score', 7);
	}
	
	if(score == 7){

		// On ajoute l'image n°8 du pendu.
		$('#pendu').attr('src', '/img/fail_8.png');

		// On initialize le score à 8
		sessionStorage.setItem('score', 8);
	}

	if(score == 8){
		
		// On ajoute l'image n°9 du pendu.
		$('#pendu').attr('src', '/img/fail_9.png');

		// On initialize le score à 9
		sessionStorage.setItem('score', 9);
	}

	if(score == 9){
		
		// On ajoute l'image n°10 du pendu.
		$('#pendu').attr('src', '/img/fail_10.png');

		// On initialize le score à 10
		sessionStorage.setItem('score', 10);

		// On remove le score avec removeScore(length);
		removeScore(length_secret);

		setTimeout(() => {
			// et on réinitialise le mot + l'alphabet
			$('#game').load('php/alphabet.php');
			
			// On réinitialise la variable session storage find_letter, all_is_complete et score
			sessionStorage.removeItem('find_letter', 'all_is_complete', 'score');

			// On charge le script qui va avec l'interface de jeux
			setTimeout(() => {
			  $.getScript('js/game.js');
			}, 600);

			// On return false
			return false;
		}, 2000);

	}

}

function winImg(){
	// Ci dessous, je créer une fonction qui renvois une image aléatoire du dossier img/gif

	// On récupere un nombre aléatoire entre 1 et 14
	var x = Math.floor((Math.random() * 14) + 1);

	if(x == 1){

		// On met une image de victoire
		$('#pendu').attr('src', '/img/gif/bob.gif');
	}
	if(x == 2){

		// On met une image de victoire
		$('#pendu').attr('src', '/img/gif/bob2.gif');
	}
	if(x == 3){

		// On met une image de victoire
		$('#pendu').attr('src', '/img/gif/bob3.gif');
	}
	if(x == 4){

		// On met une image de victoire
		$('#pendu').attr('src', '/img/gif/bébé.gif');
	}
	if(x == 5){

		// On met une image de victoire
		$('#pendu').attr('src', '/img/gif/chinois.gif');
	}
	if(x == 6){

		// On met une image de victoire
		$('#pendu').attr('src', '/img/gif/chuck.gif');
	}
	if(x == 7){

		// On met une image de victoire
		$('#pendu').attr('src', '/img/gif/draw.gif');
	}
	if(x == 8){

		// On met une image de victoire
		$('#pendu').attr('src', '/img/gif/footballeur.gif');
	}
	if(x == 9){

		// On met une image de victoire
		$('#pendu').attr('src', '/img/gif/jackie.gif');
	}
	if(x == 10){

		// On met une image de victoire
		$('#pendu').attr('src', '/img/gif/jim.gif');
	}
	if(x == 11){

		// On met une image de victoire
		$('#pendu').attr('src', '/img/gif/magic.gif');
	}
	if(x == 12){

		// On met une image de victoire
		$('#pendu').attr('src', '/img/gif/mouton.gif');
	}
	if(x == 13){

		// On met une image de victoire
		$('#pendu').attr('src', '/img/gif/peroquet.gif');
	}
	if(x == 14){

		// On met une image de victoire
		$('#pendu').attr('src', '/img/gif/thumb.gif');
	}
}