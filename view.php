
<!DOCTYPE html>

<html lang="en">
	<header>
			
		<meta charset="utf-8">
		<meta http-equiv="X-UA-Compatible" content="IE=edge">
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<title>PHP Upload File With Progressbar</title>
		
		<!-- Bootstrap -->
		<link href="bootstrap.min.css" rel="stylesheet">
		<style>
			.images{
				width:150px;
				height:150px;
				cursor:pointer;
				margin:10px;
			}
			.images:hover{
				-webkit-transform: scale(1.2);
				-moz-transform: scale(1.2);
				-o-transform: scale(1.2);
				transform: scale(1.2);
				transition: all 0.3s;
				-webkit-transition: all 0.3s;
			}
		</style>
	</header>
	<body>
		<div class="container">			
			<div class="page-header">
				<h1>Multiples Fotos <small>Vista de todas las fotos</small> </h1>
			</div>
			<div class="panel panel-default">
				<div class="panel-body">
					<a href="TestRun.html" class="btn btn-info">Atras</a>
					<h3>Photos subidas(Clic para ver grande) :</h3>
					<br/>

					<?php 
					$idContact = $_GET["idContact"];
						$conn = mysqli_connect("localhost","root","password","contactos");
						
						$query = "SELECT * FROM UserFiles WHERE idContact = '".$idContact."'";
						
						$result = mysqli_query($conn, $query);
						
						if(mysqli_num_rows($result) > 0)
						{
							while($row = mysqli_fetch_assoc($result))
							{
								$url = $row["FilePath"]."/".$row["FileName"];
					?>
								<a href="<?php echo $url; ?>"><image src="<?php echo $url; ?>" class="images" /></a>
					<?php
							}
						}
						else
						{
					?>
						<p>Este contacto no tiene imagenes para mostrar.</p>
					<?php
						}
					?>					
				</div>
			</div>
		</div>
		
		<!-- jQuery (necessary for Bootstrap's JavaScript plugins) -->
		<script src="jQuery.js"></script>
		<!-- Include all compiled plugins (below), or include individual files as needed -->
		<script src="bootstrap.min.js"></script>		
	</body>
</html>