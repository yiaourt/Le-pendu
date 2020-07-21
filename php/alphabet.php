<?php 

	// On créer l'alphabet, ci dessous ainsi que le mot cacher.
	// /////////////////////////////////////////////////////////
	
	echo '<div class="d-flex justify-content-center">';

		// On ouvre le fichier mots.txt
		$filename = "../mots.txt";
		$handle = fopen($filename, "r");
		
		// On lit le fichier mots.txt
		$contents = fread($handle, filesize($filename));

		// On ferme le fichier
		fclose($handle);

		// On sélectionne chaques mots avec une expression régulière
		$regexp = '/\S+/u';

		// Que l'on place dans un tableau
		preg_match_all($regexp, $contents, $mots_tableau);

		// On compte le nombre de mots
		$count = count($mots_tableau[0]);

		// On créer un chiffre random au nombre de mots
		$id = rand(0, $count-1);

		// On cherche et on remplace les accents
		$search  = array('À', 'Á', 'Â', 'Ã', 'Ä', 'Å', 'Ç', 'È', 'É', 'Ê', 'Ë', 'Ì', 'Í', 'Î', 'Ï', 'Ò', 'Ó', 'Ô', 'Õ', 'Ö', 'Ù', 'Ú', 'Û', 'Ü', 'Ý', 'à', 'á', 'â', 'ã', 'ä', 'å', 'ç', 'è', 'é', 'ê', 'ë', 'ì', 'í', 'î', 'ï', 'ð', 'ò', 'ó', 'ô', 'õ', 'ö', 'ù', 'ú', 'û', 'ü', 'ý', 'ÿ');
		
		$replace = array('A', 'A', 'A', 'A', 'A', 'A', 'C', 'E', 'E', 'E', 'E', 'I', 'I', 'I', 'I', 'O', 'O', 'O', 'O', 'O', 'U', 'U', 'U', 'U', 'Y', 'a', 'a', 'a', 'a', 'a', 'a', 'c', 'e', 'e', 'e', 'e', 'i', 'i', 'i', 'i', 'o', 'o', 'o', 'o', 'o', 'o', 'u', 'u', 'u', 'u', 'y', 'y');
		
		$mots_tableau[0][$id] = str_replace($search, $replace, $mots_tableau[0][$id]);

		// On place le mot secret dans un bloc cacher
		echo '<div id="secret">'.$mots_tableau[0][$id].'</div>';

		// On créer les blocs qui serviront en javascript
		echo '<img id="pendu" src="/img/fail_0.png" alt="fail">';

		echo '<div id="word"></div>';

		echo '<div id="box-alphabet">';

			echo '<a class="lettre" id="A" href="javascript:void(0)">A</a>';
			echo '<a class="lettre" id="B" href="javascript:void(0)">B</a>';
			echo '<a class="lettre" id="C" href="javascript:void(0)">C</a>';
			echo '<a class="lettre" id="D" href="javascript:void(0)">D</a>';
			echo '<a class="lettre" id="E" href="javascript:void(0)">E</a>';
			echo '<a class="lettre" id="F" href="javascript:void(0)">F</a>';
			echo '<a class="lettre" id="G" href="javascript:void(0)">G</a>';
			echo '<a class="lettre" id="H" href="javascript:void(0)">H</a>';
			echo '<a class="lettre" id="I" href="javascript:void(0)">I</a>';
			echo '<a class="lettre" id="J" href="javascript:void(0)">J</a>';
			echo '<a class="lettre" id="K" href="javascript:void(0)">K</a>';
			echo '<a class="lettre" id="L" href="javascript:void(0)">L</a>';
			echo '<a class="lettre" id="M" href="javascript:void(0)">M</a>';
			echo '<a class="lettre" id="N" href="javascript:void(0)">N</a>';
			echo '<a class="lettre" id="O" href="javascript:void(0)">O</a>';
			echo '<a class="lettre" id="P" href="javascript:void(0)">P</a>';
			echo '<a class="lettre" id="Q" href="javascript:void(0)">Q</a>';
			echo '<a class="lettre" id="R" href="javascript:void(0)">R</a>';
			echo '<a class="lettre" id="S" href="javascript:void(0)">S</a>';
			echo '<a class="lettre" id="T" href="javascript:void(0)">T</a>';
			echo '<a class="lettre" id="U" href="javascript:void(0)">U</a>';
			echo '<a class="lettre" id="V" href="javascript:void(0)">V</a>';
			echo '<a class="lettre" id="W" href="javascript:void(0)">W</a>';
			echo '<a class="lettre" id="X" href="javascript:void(0)">X</a>';
			echo '<a class="lettre" id="Y" href="javascript:void(0)">Y</a>';
			echo '<a class="lettre" id="Z" href="javascript:void(0)">Z</a>';

			echo '<p>
			
				<form id="form_proposition" action="javascript:void(0)">
					<hr>
					<input id="proposition" type="text" name="proposition" placeholder="Proposition" autofocus><br/>
					<button type="submit" class="btn btn-primary">Proposer !</button>
				</form>

			</p>';

		echo '</div>';
	echo '</div>';
?>