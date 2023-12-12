let nombre="Jorge"
let altura=189

let concatenacion=nombre+" "+altura
let datos=document.getElementById("datos")

datos.innerHTML=`<h2>Caja de datos</h2>
<p>${concatenacion}</p>` 

if (altura >= 190) {
  datos.innerHTML+=`<b>Eres una persona alta</b>`
}else{
  datos.innerHTML+=`<i>NO eres una persona alta</i>`
}

for (let index = 1992; index < 2020; index++) {
  datos.innerHTML+= `<br>Estamos en el año: <i>${index}</i>`
}

function MostrarNombre(id_html,nombre, altura) {
  let datos=document.getElementById(id_html)
  datos.innerHTML=`<h3>Soy una caja de datos</h3>
  <span>Nombre: ${nombre}</span><br>
  <span>Altura: ${altura}</span><br>`
}

MostrarNombre("datos1","Roque",185)

let nombres=["Antonio","Mary","Raquel"]

for (let index = 0; index < nombres.length; index++) {
  let datos=document.getElementById("datos1")
  datos.innerHTML+=nombres[index]
}