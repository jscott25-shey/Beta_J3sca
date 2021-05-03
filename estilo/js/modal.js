let cerrar = document.querySelectorAll(".exit_button1")[0];
let abrir = document.querySelectorAll(".cta")[0];
let modal1 = document.querySelectorAll(".modal1")[0];
let modalc = document.querySelectorAll(".modal-container1")[0];

abrir.addEventListener("click", function(e){
	e.preventDefault();
	modalc.style.opacity = "1";
	modalc.style.visibility = "visible";
	modal1.classList.toggle("close-modal1");
});

cerrar.addEventListener("click", function(e){
	e.preventDefault();
	modal1.classList.toggle("close-modal1");

	setTimeout(function(){
	modalc.style.opacity = "0";
	modalc.style.visibility = "hidden";

	},500)
})
window.addEventListener("click", function(e){
	e.preventDefault();
	console.log(e.target)
	if(e.target == modalc){
			modal1.classList.toggle("close-modal1");

	setTimeout(function(){
	modalc.style.opacity = "0";
	modalc.style.visibility = "hidden";

	},120)
	}
})

