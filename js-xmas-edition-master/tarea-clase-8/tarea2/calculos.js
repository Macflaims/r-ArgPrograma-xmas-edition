function obtenerMayor(numeros){
    let mayorNumero = numeros[0];
    for (let i=0;i<numeros.length;i++){
        if (numeros[i]>mayorNumero){
            mayorNumero=numeros[i];
        }}
    return mayorNumero;
}

function obtenerMenor(numeros){
    let menorNumero = numeros[0];
    for (let i=0;i<numeros.length;i++){
        if(numeros[i]<menorNumero){ 
            menorNumero=numeros[i];
        }}
    return menorNumero;
}
function obtenerPromedio(numeros){
    let acumulador=0;
    for (let i=0;i<numeros.length;i++){
        acumulador += numeros[i];}
    const promedio = acumulador/numeros.length;
    return promedio;
}
function obtenerPromedioMensual(numeros){
    let acumulador=0;
    for (let i=0;i<numeros.length;i++){
        acumulador += numeros[i];}
    const promedio = acumulador/numeros.length/12;
    return promedio;
}