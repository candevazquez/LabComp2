function mostrarInformesGuardados() {
    var informesArray = JSON.parse(localStorage.getItem('INFORMES')) || [];

    if (informesArray.length === 0) {
        
        mostrarMensajeAmar
mostrarMensajeAmarillo('No hay informes guardados para mostrar');
    } else {
       
        informesArray.
        inform
forEach(function (informe) {
            var datosInforme = informe.split('|');
            
            var añoEleccion = datosInforme[0];
            var tipoRecuento = datosInforme[1];
            var tipoEleccion = datosInforme[2];
            var valorCargo = datosInforme[3];
            var valorDistrito = datosInforme[4];
            var valorSeccion = datosInforme[5];

         
            var url = `https://resultados.mininterior.gob.ar/api/resultados/getResultados?anioEleccion=${añoEleccion}&tipoRecuento=${tipoRecuento}&tipoEleccion=${tipoEleccion}&categoriaId=${valorCargo}&distritoId=${valorDistrito}&seccionProvincialId=${valorSeccion}&seccionId=${valorSeccion}&circuitoId=&mesaId=`;

            
             fetch(url).then(response => response.json())
        .then(data => {
            
            console.log(data);
        })
        .catch(error => {
            console.error('Error en la consulta a la API:', error);
        });

        });
    }
}

function realizarConsultaAPI(url) {
 
   
}


function mostrarMensajeAmarillo(mensaje) {
 
    console.log('Mensaje Amarillo:', mensaje);
}