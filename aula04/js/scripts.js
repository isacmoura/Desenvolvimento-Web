var mudou = false;
var mudouCor = false;

function mudaTitulo() {
	var titulo = document.querySelector("#titulo");
	if(!mudou){
		titulo.textContent = "O título mudou!";
	}else{
		titulo.textContent = "Título original mudou!"
	}
	mudou = !mudou
}

function mudaCorNovidades() {
	var painelNovidades = document.querySelector("section#main .painel#novidades");
	
	if (!mudouCor) {
		painelNovidades.style.color = "red";
	}else{
		painelNovidades.style.color = "black";
	}

	mudouCor = !mudouCor;
}

function mudaParagrafos(){
	var paragrafos = document.querySelectorAll("div#paragrafos p");
	for (var i = 0; i < paragrafos.length; i++) {
		paragrafos[i].textContent += " - MUDOU!";
	}
}

function mostraAlerta() {
	alert('Deu certo!');
}

var titulo = document.querySelector("#titulo");
titulo.onclick = mostraAlerta;

function calculaTotal() {
	var quantidade = document.querySelector("#quantidade").value;
	var preco = document.querySelector("#preco").value;
	var total = parseInt(quantidade) * parseFloat(preco);
	document.querySelector("#total").value = total;
}