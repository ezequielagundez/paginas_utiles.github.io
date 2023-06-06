function mostrarHoraActual() {
    var fecha = new Date();
    var hora = fecha.getHours();
    var minutos = fecha.getMinutes();
    var segundos = fecha.getSeconds();
  
    // Formatea los valores para que siempre tengan dos dígitos
    hora = hora < 10 ? "0" + hora : hora;
    minutos = minutos < 10 ? "0" + minutos : minutos;
    segundos = segundos < 10 ? "0" + segundos : segundos;
  
    var horaActual = hora + ":" + minutos + ":" + segundos;
  
    // Actualiza el contenido del elemento HTML con la hora actual
    document.getElementById("hora-actual").textContent = horaActual;
  
    // Actualiza la hora cada segundo
    setTimeout(mostrarHoraActual, 1000);
    console.log(horaActual);
  }
  
  mostrarHoraActual();

  function mostrarFechaActual() {
    var fecha = new Date();
    var dia = fecha.getDate();
    var mes = fecha.getMonth() + 1;
    var anio = fecha.getFullYear();
  
    // Formatea los valores para que siempre tengan dos dígitos
    dia = dia < 10 ? "0" + dia : dia;
    mes = mes < 10 ? "0" + mes : mes;
  
    var fechaActual = dia + "/" + mes + "/" + anio;
  
    // Actualiza el contenido del elemento HTML con la fecha actual
    document.getElementById("fecha-actual").textContent = fechaActual;
  }
  
  mostrarFechaActual();
  