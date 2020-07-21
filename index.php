<?php session_start(); ?>
<!DOCTYPE html>
<html lang="fr">
	<head>
		<meta charset="UTF-8">
		<title>Pendu</title>

		<link rel="stylesheet" href="style.css">

		<!-- ----------------------------- -->
		
		<!-- Jquery -->
		<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
		
		<!-- Bootstrap + Popper -->
		<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous">
		<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js" integrity="sha384-OgVRvuATP1z7JjHLkuOU7Xw704+h835Lr+6QL9UvYjZE3Ipu6Tp75j7Bh/kR0JKI" crossorigin="anonymous"></script>
		<script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>

		<!-- animate.css -->
		<link rel="stylesheet" href="node_modules/animate.css/animate.min.css">
		
		<!-- countdowntimer js & css -->
		<script type="text/javascript" src="node_modules/countdowntimer/dist/js/jQuery.countdownTimer.min.js"></script>
		<link rel="stylesheet" type="text/css" href="node_modules/countdowntimer/dist/css/jQuery.countdownTimer.css" />


		<!-- ----------------------------- -->

	</head>
	<body>

		<!-- chronomètre -->
		<div id="countdowntimer"><span id="future_date"></span></div>
		<!-- ------------ -->

		<!-- le jeux ! -->
		<div id="game">
			<div id="titre_connexion" class="animate__animated">
				<div id="center">
					<img class="animate__animated animate__zoomIn" id="titre" src="img/pendu_titre.gif" alt="pendu">
				</div>
			
				<div class="d-flex justify-content-center">
					<div id="box-pseudo" class="animate__animated animate__jackInTheBox">
						<form id="connexion" action="javascript:void(0)">
							<div id="alertjs"></div>
							<hr>
							<input id="pseudo" type="text" name="pseudo" maxlength="25" placeholder="Nom d'utilisateur"></input><br/><br/>
							<button type="submit" class="btn btn-primary">Jouer !</button>
							<hr>
						</form>
					</div>
				</div>
			</div>
		</div>
		<!-- ------------ -->

		<!-- Fonctions du pendu -->
		<script src="js/pendu.js"></script>
		<script src="js/func_pendu.js"></script>
		<!-- ------------ -->
		
		<footer>
			Créer par Loïc aka Yiaourt. ©
		</footer>
	</body>
</html>