document.querySelector(`.calcular`).addEventListener(`click`,calcularImc)


let divInfoImc = document.querySelector(`.divInfoImc`);


let divInfo = document.createElement(`DIV`)
divInfo.classList.add(`divInfo`)

divInfoImc.appendChild(divInfo)



let p = document.createElement(`P`)

function calcularImc() {
    
    let estatura = document.querySelector(`.input-estatura`).value
    let peso = document.querySelector(`.input-peso`).value

    if (estatura && peso) {
         estatura = parseFloat(estatura)
         peso = parseFloat(peso)

        if (!isNaN(estatura) && !isNaN(peso)) {
            let  imc = Math.round(peso/(estatura*estatura))
            

            if (imc < 18.5) {
                mensaje = `Tu IMC de ${imc} indica bajo peso. Es posible que necesites aumentar tu peso y consultar a un profesional de la salud para obtener orientación.`;
              } else if (imc < 25) {
                mensaje = `Tu IMC de ${imc} está dentro del rango saludable. ¡Felicidades! Sigue manteniendo hábitos saludables para mantener tu bienestar.`;
              } else if (imc < 30) {
                mensaje = `Tu IMC de ${imc} indica sobrepeso. Considera realizar cambios en tu dieta y estilo de vida para alcanzar un peso saludable.`;
              } else if (imc < 35) {
                mensaje = `Tu IMC de ${imc} indica obesidad de clase I. Es importante tomar medidas para mejorar tu salud, como modificar tu dieta y aumentar la actividad física.`;
              } else if (imc < 40) {
                mensaje = `Tu IMC de ${imc} indica obesidad de clase II. Es esencial buscar el apoyo de profesionales de la salud para abordar tu situación y mejorar tu bienestar.`;
              } else {
                mensaje = `Tu IMC de ${imc} indica obesidad mórbida (clase III). Te recomendamos que busques ayuda médica urgente para evaluar y abordar tu situación.`;
              }
            
              
              
              p.innerHTML = mensaje;
              divInfo.appendChild(p);

            

        }


        else {

            p.innerHTML = `<b>*Estatura y peso tienen que ser numeros *</b>`
            divInfo.appendChild(p)
            
        }
    }

    else {
        p.innerHTML = `<b>*Para calcular el IMC es necesario que escribas las 2 campos requeridos*</b>`;
        divInfo.appendChild(p);

    }
}


