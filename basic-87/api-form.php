<?php

//----------------- Connexion à la BDD

try{
$pdo = new PDO('mysql:host=localhost;dbname=mikemonroi','root','',array(PDO::ATTR_ERRMODE => PDO::ERRMODE_WARNING, PDO::MYSQL_ATTR_INIT_COMMAND => 'SET NAMES utf8'));
}catch(PDOException $e){
	echo 'Connexion impossible. Message error';
}

//----------------- Récupération des données du formulaire 

if($_SERVER['REQUEST_METHOD'] == 'POST'){
	var_dump($_POST);
	$stmt = $pdo -> prepare("INSERT INTO voitures (marque, modele, annee, couleur, image) VALUES (:marque, :modele, :annee, :couleur, :image)");

	// remplacement des étiquettes par les variables 

	$stmt -> bindParam(':marque', $_POST['marque']);
	$stmt -> bindParam(':modele', $_POST['modele']);
	$stmt -> bindParam(':annee', $_POST['annee']);
	$stmt -> bindParam(':couleur', $_POST['couleur']);
	$stmt -> bindParam(':image', $_POST['image']);
	$stmt -> execute();
}

