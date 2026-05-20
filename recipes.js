document.addEventListener("DOMContentLoaded", function() {
    if (window.location.hash == "#hrec1") {
        document.getElementById("hrec2").style.display = "none";
        document.getElementById("hrec3").style.display = "none";
        document.getElementById("hrec4").style.display = "none";
    }
	if (window.location.hash == "#hrec2") {
        document.getElementById("hrec1").style.display = "none";
        document.getElementById("hrec3").style.display = "none";
        document.getElementById("hrec4").style.display = "none";
    }
	if (window.location.hash == "#hrec3") {
        document.getElementById("hrec1").style.display = "none";
        document.getElementById("hrec2").style.display = "none";
        document.getElementById("hrec4").style.display = "none";
    }
	if (window.location.hash == "#hrec4") {
        document.getElementById("hrec1").style.display = "none";
        document.getElementById("hrec3").style.display = "none";
        document.getElementById("hrec2").style.display = "none";
    }
});

function KolTir() {
	var k = koltir.value;
	if (k>0) {
		document.getElementById("kt").innerHTML = "Печенье Савоярди -" + 33*k + "г, <br> Маскарпоне -" + 42*k + "г , <br> Сливки жирные - " + 33*k + "мл, <br> Сахарная пудра - " + 17*k + "г, <br> Кофе - " + 100*k + "мл, <br> Коньяк - 0,5ст.л., <br> Какао - " + 1*k + "ст.л.";
	} else {
		document.getElementById("kt").innerHTML = "Невозможно расчитать порции.";
	}
}

function KolKar() {
	var k = kolkar.value;
	if (k>0) {
		document.getElementById("kk").innerHTML = "Спагетти - " + 75*k + "г, <br>Бекон - " + 50*k + "г, <br>Твердый сыр - " + 50*k + "г, <br>Яйца - " + 1*k + "шт., <br>Жирные сливки - " + 20*k + "мл., <br>Зубчик чеснока, <br>Специи по вкусу.";
	} else {
		document.getElementById("kk").innerHTML = "Невозможно расчитать порции.";
	}
}

function KolLaz() {
	var k = kollaz.value;
	if (k>0) {
	document.getElementById("kl").innerHTML = "Листы для лазаньи - " + 50*k + "г, <br>Фарш мясной - " + 130*k + "г, <br>Лук репчатый - " + 50*k + "г, <br>Томатный соус - " + 37*k + "г, <br>Томатная паста - " + 37*k + "г, <br>Масло сливочное - " + 10*k + "г, <br>Мука - " + 9*k + "г, <br>Молоко - " + 190*k + "мл, <br>Сыр пармезан - " + 125*k + "г, <br>Мускатный орех - " + 1*k + "ч.л., <br>Специи по вкусу.";
	} else {
		document.getElementById("kl").innerHTML = "Невозможно расчитать порции.";
	}
}

function KolVen() {
	var k = kolven.value;
	if (k>0) {
	document.getElementById("kv").innerHTML = "Слоеное тест - " + 130*k + "г, <br>Молоко - " + 50*k + "г, <br>Ванилин - " + (0.8*k).toFixed(2) + "г, <br>Яйцо - " + 1*k + "шт. <br>Сахар - " + 13*k + "г, <br>Крахмал - " + (3.33*k).toFixed(2) + "г, <br>Клубника для украшения.";
	} else {
		document.getElementById("kv").innerHTML = "Невозможно расчитать порции.";
	}
}

dropdown.addEventListener("click", function () {
	if (dropdowncontent.style.display == "none") {
		dropdowncontent.style.display = "block";
	} else {
		dropdowncontent.style.display = "none";
	}
});