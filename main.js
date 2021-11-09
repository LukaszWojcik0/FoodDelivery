//// przypisanie nagłówków do zmiennych

let menu0 = document.querySelector("#menu0");
let menu1 = document.querySelector("#menu1");
let menu2 = document.querySelector("#menu2");
let menu3 = document.querySelector("#menu3");
let menu4 = document.querySelector("#menu4");

//// przypisanie list do zmiennych
let burgery = document.querySelector("#burgery");
let kebaby = document.querySelector("#kebaby");
let wloskie = document.querySelector("#wloskie");
let azjatyckie = document.querySelector("#azjatyckie");

//// zmiana koloru po najechaniu na inną zakładkę
//menu0

function menu0Mysznad() {
  document.querySelector("#menu0").style.backgroundColor = "#f2e205";
}

function menu0Myszpod() {
  document.querySelector("#menu0").style.backgroundColor = "#f2e852";
}

menu0.addEventListener("mouseover", menu0Mysznad, false);
menu0.addEventListener("mouseout", menu0Myszpod, false);
//menu1
function menu1Mysznad() {
  document.querySelector("#menu1").style.backgroundColor = "#f2e205";
}

function menu1Myszpod() {
  document.querySelector("#menu1").style.backgroundColor = "#f2e852";
}

menu1.addEventListener("mouseover", menu1Mysznad, false);
menu1.addEventListener("mouseout", menu1Myszpod, false);

//menu2
function menu2Mysznad() {
  document.querySelector("#menu2").style.backgroundColor = "#f2e205";
}

function menu2Myszpod() {
  document.querySelector("#menu2").style.backgroundColor = "#f2e852";
}

menu2.addEventListener("mouseover", menu2Mysznad, false);
menu2.addEventListener("mouseout", menu2Myszpod, false);

//menu3
function menu3Mysznad() {
  document.querySelector("#menu3").style.backgroundColor = "#f2e205";
}

function menu3Myszpod() {
  document.querySelector("#menu3").style.backgroundColor = "#f2e852";
}

menu3.addEventListener("mouseover", menu3Mysznad, false);
menu3.addEventListener("mouseout", menu3Myszpod, false);
//menu4
function menu4Mysznad() {
  document.querySelector("#menu4").style.backgroundColor = "#f2e205";
}

function menu4Myszpod() {
  document.querySelector("#menu4").style.backgroundColor = "#f2e852";
}

menu4.addEventListener("mouseover", menu4Mysznad, false);
menu4.addEventListener("mouseout", menu4Myszpod, false);

// menu click

function menuClick(a) {
  if (a == menu0) {
    document.querySelector("#burgery").style.display = "flex";
    document.querySelector("#kebaby").style.display = "flex";
    document.querySelector("#wloskie").style.display = "flex";
    document.querySelector("#azjatyckie").style.display = "flex";
  } else if (a == menu1) {
    document.querySelector("#burgery").style.display = "flex";
    document.querySelector("#kebaby").style.display = "none";
    document.querySelector("#wloskie").style.display = "none";
    document.querySelector("#azjatyckie").style.display = "none";
  } else if (a == menu2) {
    document.querySelector("#burgery").style.display = "none";
    document.querySelector("#kebaby").style.display = "flex";
    document.querySelector("#wloskie").style.display = "none";
    document.querySelector("#azjatyckie").style.display = "none";
  } else if (a == menu3) {
    document.querySelector("#burgery").style.display = "none";
    document.querySelector("#kebaby").style.display = "none";
    document.querySelector("#wloskie").style.display = "flex";
    document.querySelector("#azjatyckie").style.display = "none";
  } else if (a == menu4) {
    document.querySelector("#burgery").style.display = "none";
    document.querySelector("#kebaby").style.display = "none";
    document.querySelector("#wloskie").style.display = "none";
    document.querySelector("#azjatyckie").style.display = "flex";
  }
}

menu0.addEventListener("click", menuClick0, false);

function menuClick0() {
  menuClick(menu0);
}

menu1.addEventListener("click", menuClick1, false);

function menuClick1() {
  menuClick(menu1);
}

menu2.addEventListener("click", menuClick2, false);

function menuClick2() {
  menuClick(menu2);
}

menu3.addEventListener("click", menuClick3, false);

function menuClick3() {
  menuClick(menu3);
}

menu4.addEventListener("click", menuClick4, false);

function menuClick4() {
  menuClick(menu4);
}

// Dodanie  produktu do wyboru dodatkow

function dodajProdukt(a, b, c, d) {
  dodajElement();
  dodajZdjecie(a);
  dodajNazwe(b);
  dodajCene(c);
  dodajOpis(d);
}

function dodajElement() {
  const element = document.createElement("div");
  element.classList.add("dodatki_box-produkty-element");

  const div = document.querySelector(".dodatki_box-produkty");
  div.appendChild(element);
}

////////// dodawanie rzeczy do elementu

//funkcie dodające zdjecie, nazwe i opis
function dodajZdjecie(a) {
  const zdjecie = document.createElement("img");
  zdjecie.classList.add("dodatki_box-produkty-element-zdjecie");

  zdjecie.src = a;
  const div = document.querySelector(".dodatki_box-produkty-element");
  div.appendChild(zdjecie);
}

function dodajNazwe(a) {
  const nazwa = document.createElement("p");
  nazwa.classList.add("dodatki_box-produkty-element-nazwa");

  nazwa.innerText = a;
  const div = document.querySelector(".dodatki_box-produkty-element");
  div.appendChild(nazwa);
}

function dodajOpis(a) {
  const opis = document.createElement("p");
  opis.classList.add("dodatki_box-produkty-element-opis");

  opis.innerText = a;
  const div = document.querySelector(".dodatki_box-produkty-element-nazwa");
  div.appendChild(opis);
}

function dodajCene(a) {
  const box = document.createElement("div");
  const cena = document.createElement("p");
  box.classList.add("produkty-cenaBox");
  cena.classList.add("produkty-cenaContent");

  cena.innerText = a;
  const div = document.querySelector(".dodatki_box-produkty");
  div.appendChild(box);
  box.appendChild(cena);
}

// funkcja wyswietlanie okna

function wyswietl(a, b, c, d) {
  document.querySelector("#dodatki").style.display = "flex";
  dodajProdukt(a, b, c, d);
}

// pobieranie elementow i wyśeitlanie okna
let elementZdj = document.querySelectorAll(".liWybor");
let zdjecia = document.querySelectorAll(".element-zdj");
let tekst = document.querySelectorAll(".produkt-nazwa");
let opis = document.querySelectorAll(".produkt-opis");
let cena = document.querySelectorAll(".produkt-cena");
let cenaValue = document.querySelectorAll(".produkt-cena");

for (let i = 0; i < elementZdj.length; i++) {
  elementZdj[i].addEventListener(
    "click",
    function () {
      let zdj = zdjecia[i].getAttribute("src");
      let tek = tekst[i].innerHTML;
      let cenTxt = cena[i].innerHTML;
      let ops = opis[i].innerHTML;
      let cenValue = cenaValue[i].getAttribute("value");
      // let cenaV = cena[i].getAttribute("value");
      wyswietl(zdj, tek, cenTxt, ops);
      oblicz(cenValue);
    },
    false
  );
}

function oblicz(a) {
  let suma = parseInt(a);

  let o1 = 0;
  let opcja1 = document.querySelector("#dodatki_miesoBUR-input");

  document.querySelector(".dodatki-box-podsumowanie-cena").innerHTML =
    "Suma: " + suma + " zł";

  console.log(suma + " na początku");
  opcja1.addEventListener("change", function () {
    if (this.checked) {
      o1 = opcja1.getAttribute("value");
      // console.log(o1);
      suma = suma + parseInt(o1);
      console.log(suma + "po o1");
      document.querySelector(".dodatki_cena-o1").innerHTML = o1 + " zł";
      document.querySelector(".dodatki-box-podsumowanie-cena").innerHTML =
        "Suma: " + suma + " zł";
    } else {
      suma = suma - parseInt(o1);
      document.querySelector(".dodatki_cena-o1").innerHTML = "-";
      document.querySelector(".dodatki-box-podsumowanie-cena").innerHTML =
        "Suma: " + suma + " zł";
      // suma = suma + parseInt(o2);
      // console.log(o1 + " o1");
    }
  });

  let o2 = 0;
  let opcja2 = document.querySelector("#dodatki_serBUR-input");

  opcja2.addEventListener("change", function () {
    if (this.checked) {
      o2 = opcja2.getAttribute("value");
      // console.log(o2);
      suma = suma + parseInt(o2);
      console.log(suma + "po o2");
      document.querySelector(".dodatki_cena-o2").innerHTML = o2 + " zł";
      document.querySelector(".dodatki-box-podsumowanie-cena").innerHTML =
        "Suma: " + suma + " zł";
    } else {
      suma = suma - parseInt(o2);
      document.querySelector(".dodatki_cena-o2").innerHTML = "-";
      document.querySelector(".dodatki-box-podsumowanie-cena").innerHTML =
        "Suma: " + suma + " zł";

      // console.log(o2);
    }
  });
  document.querySelector(".dodatki-box-podsumowanie-cena").innerHTML =
    "Suma: " + suma + " zł";

  // console.log(suma + "na koncu");
  opcja1.addEventListener("change", function () {
    console.log(suma + "na koncu");
  });
  opcja2.addEventListener("change", function () {
    console.log(suma + "na koncu");
  });
}

// znikanie okna po kliknięciu na przycisk

const szareTło = document.querySelector("#przyciski-wyjdz");

function znikanie() {
  document.querySelector("#dodatki").style.display = "none";
}

szareTło.addEventListener("click", function () {
  znikanie();
  let usunElement = document.querySelector(".dodatki_box-produkty-element");
  let usunElement2 = document.querySelector(".produkty-cenaBox");
  usunElement.remove();
  usunElement2.remove();

  // kox usuwanie zaznaczonych rzeczy
  let checkList = document.getElementsByTagName("input");
  let addCena = document.querySelectorAll(".dodatki_cena-p");
  for (let i = 0; i < checkList.length; i++) {
    checkList[i].checked = false;
    addCena[i].innerHTML = "-";
  }
});

function sortujCena(a) {
  let wartosc = document.querySelectorAll(".liWybor");
  for (let i = 0; i < wartosc.length; i++) {
    console.log(wartosc[i].value);
    if (wartosc[i].value <= a) {
      document.querySelectorAll(".liWybor")[i].style.display = "flex";
    } else {
      document.querySelectorAll(".liWybor")[i].style.display = "none";
    }
  }
}

function sortujReset() {
  let wartosc = document.querySelectorAll(".liWybor");
  for (let i = 0; i < wartosc.length; i++) {
    document.querySelectorAll(".liWybor")[i].style.display = "flex";
  }
}

document.querySelector("#cena0").addEventListener("click", function () {
  sortujReset();
});

document.querySelector("#cena1").addEventListener("click", function () {
  sortujReset();
  sortujCena(15.0);
});

document.querySelector("#cena2").addEventListener("click", function () {
  sortujReset();
  sortujCena(25.0);
});

document.querySelector("#cena3").addEventListener("click", function () {
  sortujReset();
  sortujCena(35.0);
});

document.querySelector("#cena4").addEventListener("click", function () {
  sortujReset();
  sortujCena(45.0);
});
