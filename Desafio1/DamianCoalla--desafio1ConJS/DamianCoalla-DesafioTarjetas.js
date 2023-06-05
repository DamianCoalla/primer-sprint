const input1 = document.querySelector(".input1");
const nombre = document.querySelector(".nombre");

input1.addEventListener("input", ()=>{
    if (input1.value.length === 0 ){
        nombre.innerHTML = "Felicia Leire"
    }
    else   nombre.innerHTML = input1.value;
})

const input2 = document.querySelector(".input2");
const numeros = document.querySelector(".numeros");

input2.addEventListener("input", ()=> {
    if (input2.value.length === 0){
        numeros.innerHTML = "0000 0000 0000 0000" ;
    }
    else numeros.innerHTML = input2.value;
})

const mm = document.querySelector("#mm")
const mes = document.querySelector(".mes")

mm.addEventListener("input", () => {
   if (mm.value.length === 0) {
    mes.innerHTML = "00"
   }
   else  mes.innerHTML = mm.value;
})

const yy = document.querySelector("#yy");
const anio = document.querySelector(".anio");

yy.addEventListener("input", ()=>{
    if (yy.value.length === 0) {
        anio.innerHTML = "00"
    }
    else anio.innerHTML = yy.value;
})

const cvc = document.querySelector("#cvc");
const ceros = document.querySelector(".ceros");

cvc.addEventListener("input", ()=>{
    if (cvc.value.length === 0) {
        ceros.innerHTML = "000"
    }
    else ceros.innerHTML = cvc.value;
})

const button = document.querySelector("#button");
const form = document.querySelector(".form");
const thankYou = document.querySelector(".thankYou");

button.addEventListener("click", ()=> {
    form.style.display = "none"
    thankYou.style.display = "flex"
})

input1.addEventListener("blur", () => {

    if (input1.value.length === 0){
        input1.style.borderColor = 'red'
        mensajeErrorNombre.style.display = 'block'
}else {
    input1.style.borderColor = '#21092f'
    errorName.style.display = 'none'
}
});
input2.addEventListener("blur", () => {

    if (input2.value.length < 16){
        input2.style.borderColor = 'red'
        mensajeErrorNumero.style.display = 'block'
    }else {
        input2.style.borderColor = '#21092f'
    } errorNumero.style.display = 'none'
    });

    mm.addEventListener('blur', () => {
        if (mm.value.length < 2){
           mm.style.borderColor = 'red'
           mensajeErrorMes.style.display = 'block'
       }else {
           mm.style.borderColor = '#21092f'
           errorMonth.style.display = 'none'
       }
       });

       yy.addEventListener('blur', () => {
        if (yy.value.length < 2){
            yy.style.borderColor = 'red'
            mensajeErrorAnio.style.display = 'block'
        
        }else {
            yy.style.borderColor = '#21092f'
            mensajeErrorAnio.style.display = 'none'
        }
        });
        cvc.addEventListener('blur', () => {
            if (cvc.value.length < 3){
                cvc.style.borderColor = 'red'
                mensajeErrorCvc.style.display = 'block'
            }else {
                cvc.style.borderColor = '#21092f'
                errorCvc.style.display = 'none'
            }
            });
            ﻿










