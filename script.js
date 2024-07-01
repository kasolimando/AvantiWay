
$(document).ready(function() {
    $('#formularioCompra').submit(function(e) {
        e.preventDefault();

        var data = validateData($('#nombre').val(), $('#apellido').val(),$('#articulos').val())


        if (data != null) {

            $.ajax({
                type: "POST",
                url: "http://localhost/AvantiWay/compra.php",
                data: data,
                success: function(response) {
                    alert(mapMessage(response));
                },
                fail: function() {
                    alert("Ha ocurrido un error, por favor intente más tarde");
                }
            });

        }
    });
});




function isEmptyString(str, name) {

    if (str.trim().length === 0){
        alert("Disculpe debe llenar " + name)
    }
  }

function validateData(nombre, apellido, articulos){

    isEmptyString(nombre,"nombre");
    isEmptyString(apellido,"apellido");

    return {
                nombre: nombre,
                apellido: apellido,
                articulos: articulos
            }
}

function mapMessage(response){
    var data = JSON.parse(response);

    return data.message + '\n' + data.nombre + ' ' +  data.apellido 
            + '\n' + 'Ha comprado exitosamente la cantidad de ' + data.cant_prod + ' producto(s)';

}


