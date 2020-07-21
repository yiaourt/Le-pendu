<?php 

	// On se connecte à la base de données
    $dsn = 'mysql:dbname=pendu;host=localhost';
	$user = 'user';
	$password = 'nemollecommeungrospoisson123';

	try {
	    $dbh = new PDO($dsn, $user, $password);
	} catch (PDOException $e) {
	    echo 'Connexion échouée : ' . $e->getMessage();
	}

	// On injecte l'utilisateur et son score dans la base de données
	$req_classement = $dbh->prepare('INSERT INTO classement(pseudo, score) VALUES(:pseudo, :score)');

	$req_classement->execute(array(
		'pseudo' => $_POST['pseudo'],
		'score' => $_POST['score']
	));

	$req_classement->closeCursor();

	echo '

	<div class="d-flex justify-content-center">
		<div id="box-rules" class="animate__animated animate__jackInTheBox">
			<h1>C\'est terminer '.$_POST['pseudo'].'!</h1>';
			
			echo 'Voici ton score : <b>'.$_POST['score'].'</b> !<br/><br/>';

			if($_POST['score'] < 0){

				echo 'C\'est un peu nul, tu feras mieux la prochaine fois. 😕';
			
			}elseif($_POST['score'] <= 10){

			echo 'Mouais, tu peux mieux faire. 🙄';

			}elseif($_POST['score'] <= 20){

				echo 'Aller, quand même tu peux faire encore un éffort. 😛';
			
			}elseif($_POST['score'] <= 30){

				echo 'ça commence à venir. 😀';
			
			}elseif($_POST['score'] <= 40){

				echo 'cool ! réessaye.. 🙃';
			
			}elseif($_POST['score'] <= 50){

				echo 'Balèze ! 🏋';
			
			}elseif($_POST['score'] <= 60){

				echo 'Impressionnant ! 😱';
			
			}elseif($_POST['score'] <= 70){

				echo 'Tu m\'as subjugué.. ☝';
			
			}elseif($_POST['score'] <= 80){

				echo 'Tu as du talent ! 🏌';
			
			}elseif($_POST['score'] > 80){

				echo 'C\'est toi le boss en fait. 👊';
			
			}


			echo '<br\><br/><br/>
					<a id="end_form" href="http://yiaourt-test.ddns.net/"><button type="submit" class="btn btn-primary">Rejouer !</button></a>';

			echo '<h4><u>Voici le classement :</u></h4>';

			echo '<div class="container">';

			echo '<table class="table table-striped">

					<thead>
					    <tr>
					      <th scope="col-sm-1">#</th>
					      <th scope="col-sm-9" id="center">Nom d\'utilisateur</th>
					      <th scope="col-sm-2">score</th>
					    </tr>
					</thead>

					<tbody>';

			$count = 0;

			// On déclare la requêtes sql
			$req_aff_classement = $dbh->query('SELECT * FROM classement ORDER BY score DESC');

			// On récupere chaque entrer du tableau classement
			while($sql_aff_classement = $req_aff_classement->fetch()){
				
				$count++;

			// Si le pseudo est égal au pseudo de l'utilisateur qui à jouer on l'affiche avec un bg différent
				if($sql_aff_classement['pseudo'] == $_POST['pseudo']// et que le score est égal au même score
					&& $sql_aff_classement['score'] == $_POST['score']){ 
					echo '
						<tr>
					        <td class="col-sm-1 bg-success">'.$count.'</td>
					        <td class="col-sm-9 bg-success" id="center">'.$sql_aff_classement['pseudo'].'</td>
					        <td class="col-sm-2 bg-success">'.$sql_aff_classement['score'].'</td>
					    </tr>';
				    

				}else{
					echo '
						<tr id="classement">
					        <td class="col-sm-1">'.$count.'</td>
					        <td class="col-sm-9" id="center">'.$sql_aff_classement['pseudo'].'</td>
					        <td class="col-sm-2">'.$sql_aff_classement['score'].'</td>
					    </tr>
				    ';
				}
				
			}

			echo '</tbody>
			</table>';

   echo '	</div>
   		</div>
	</div>';

?>