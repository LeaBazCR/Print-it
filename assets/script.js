
document.addEventListener("DOMContentLoaded", (event) => {
	const slides = [
		{
			"image":"slide1.jpg",
			"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
		},
		{
			"image":"slide2.jpg",
			"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
		},
		{
			"image":"slide3.jpg",
			"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
		},
		{
			"image":"slide4.png",
			"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
		}
	 	
	]

	//Déclarer la base URL
	const baseUrl = "./assets/images/slideshow/"

	let i=0 

	//Création des flèches 
	let arrowLeft = document.querySelector(".arrow_left");
	let arrowRight = document.querySelector(".arrow_right");
	arrowLeft.addEventListener("click", (event) => {
	console.log(event)
	if (i > 0){
		i-- //Décrémenter de 1 
	} else {
		i= slides.length-1
	}
	
	setSlide(i)
	})
	arrowRight.addEventListener("click", (event) => {
	console.log(event)
	if (i < slides.length-1){ //Création de la condition 
		i++ //Incrémenter de 1 
	} else {
		i=0
	}
	
	
	setSlide(i)
	})
	
	//Création des bullet points 
	function createDots(){
		let dots = document.querySelector(".dots")
		for(let i = 0; i < slides.length; i++){ //Création boucle 
			let dotElm= document.createElement("div") //Création div 
			dotElm.classList.add("dot") // Création d'une classe 
			dots.appendChild(dotElm)	
		}
	}
	function selectedDots(){
		let dots = document.getElementsByClassName("dot")
		let dotSelected = document.querySelector(".dot_selected")
		if(dotSelected != null){
		dotSelected.classList.remove("dot_selected")
		}
		
		dots[i].classList.add("dot_selected")
	}
	

	createDots() //Appel de la fonction createDots


	//Diapositive 
	function initializeSlider(){
		setSlide(0)
	}

	initializeSlider() //Appel de la fonction 

	function setSlide(index){ //Fonction qui prend en argument l'index
		let img= document.querySelector(".banner-img") // Récupérer la balise img qui a la classe banner-img
		img.src= baseUrl+slides[index].image 
		console.log(img)
		let p= document.querySelector("#banner p")
		p.innerHTML= slides[index].tagLine

		selectedDots()
	}

  });
