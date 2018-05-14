<?php
//print_r("hola");
//print_r($_FILES);
//print_r($_POST);
$last_inserted = null;
$varIdContact = $_POST['var'];
	if(isset($_POST["subir"])){		
		$errors = array();
		
		$extension = array("jpeg","jpg","png","gif");
		
		$bytes = 1024;
		$allowedKB = 2000;
		$totalBytes = $allowedKB * $bytes;
		
		if(isset($_FILES["imagen"])==false)
		{
			echo "<b>Por favor, seleccione el archivo a subir!!!</b>";
			return;
		}
		
		$conn = mysqli_connect("localhost","root","password","contactos");	
		
		
			$uploadThisFile = true;
			
			$file_name=$_FILES["imagen"]["name"];
			$file_tmp=$_FILES["imagen"]["tmp_name"];
			
			$ext=pathinfo($file_name,PATHINFO_EXTENSION);

			if(!in_array(strtolower($ext),$extension))
			{
				array_push($errors, "Archivo invalido. Nombre:- ".$file_name);
				$uploadThisFile = false;
			}				
			
			if($_FILES["imagen"]["size"] > $totalBytes){
				array_push($errors, "File size must be less than 100KB. Name:- ".$file_name);
				$uploadThisFile = false;
			}
			
			if(file_exists("Upload/".$_FILES["imagen"]["name"]))
			{
				array_push($errors, "File is already exist. Name:- ". $file_name);
				$uploadThisFile = false;
			}
			
			if($uploadThisFile){
				$filename=basename($file_name,$ext);
				$newFileName=$filename.$ext;				
				move_uploaded_file($_FILES["imagen"]["tmp_name"],"Upload/".$newFileName);
				
				$query = "INSERT INTO UserFiles(FilePath, FileName,idContact) VALUES('Upload','".$newFileName."','".$varIdContact."')";
				
				mysqli_query($conn, $query);

				$last_inserted = mysqli_insert_id($conn);;			
			}
		
		mysqli_close($conn);
		
		$count = count($errors);
		
		if($count != 0){
			foreach($errors as $error){
				echo $error."<br/>";
			}
		}
		echo "Imagen Creada.....".$last_inserted;
		echo "\n";
		echo "Atras para retornar al formulario...";
		return $last_inserted;
	}
?>