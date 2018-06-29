var arrayFin=[];
var idGlobal = null;
var typeTable = true;
//var dataTemporal = [{"id":1,"code":"jjffff","name":"hi","description":"hola","active":false},{"id":9,"code":"jj","name":"jj","description":"jj","active":true},{"id":10,"code":"ff","name":"fffffff","description":"fff","active":true},{"id":11,"code":"ee","name":"ee","description":"ee","active":true},{"id":12,"code":"ccc","name":"cccc","description":"cccc","active":true},{"id":13,"code":"nnn","name":"nnn","description":"nnn","active":true},{"id":14,"code":"kkk","name":"kkk","description":"kkk","active":true},{"id":17,"code":"ttt","name":"ttt","description":"ttt","active":false},{"id":18,"code":"zzz","name":"zzz","description":"zzz","active":true},{"id":19,"code":"aaa","name":"aaaa","description":"aaaa","active":false},{"id":20,"code":"qwqw","name":"qwqw","description":"qwqw","active":false}];
var host = 'http://localhost:8080/OptimeBackW/web/app_dev.php/';

$(document).ready(function(){

  var ini = "ini";

  //var restoredSession = JSON.parse(titleFinTitle);

  
  FromEmpleador()
  FromEmpleado();

  loadTableTipoContrato(ini);
  loadTableProduct(ini);


  //setTimeout(function(){ FromProduct(); FromCategory(); }, 1000);


  // Crear modal producto
  function FromEmpleador(){

      var formSHO = $('<form class="floating-from"></form>');
      var divSHO = $('<div><div>');
      var divAction = $('<div><div>');

      //var Btnsuccess = $('<button class="btn btn-primary" id="Btnsuccess" type="submit" style="display: block; float:  left; margin-right: 10px;margin-top: 10px;">Enviar</button>');
      //var BtnTurn = $('<button class="btn btn-warning" id="BtnTurn" type="button" style="display: block;float:  left; margin-right: 10px;margin-top: 10px;">Atras</button>');
  

      var onChangeAr = null;

      var labelCode = $('<label>Cedula:<span style="color: #ff0000;"> *</span> </label>');
      var labelName = $('<label>Nombre Completo:<span style="color: #ff0000;"> *</span> </label>');
      var labelDireccion = $('<label>Direccion:<span style="color: #ff0000;"> *</span> </label>');
      var labelTelefono = $('<label>Telefono:<span style="color: #ff0000;"> *</span> </label>');
      var labelSexo = $('<label>Sexo:<span style="color: #ff0000;"> *</span> </label>');
      var labelFecha = $('<label>Fecha:<span style="color: #ff0000;"> *</span> </label>');


      var cCode = $('<input type="text" class="form-control" data-id="code" name="code" id ="code" required>');
      var cName = $('<input type="text" class="form-control" data-id="Name" name="name" id ="name" required>');
      var cDireccion = $('<input type="text" class="form-control" data-id="direccion" name="direccion" id ="direccion" required>');
      var pTelefono = $('<input type="text" class="form-control" data-id="telefono" name="make" id ="telefono" required>');
      var cSexo = $('<input type="text" class="form-control" data-id="sexo" name="sexo" id ="sexo" required>');
      var cFecha = $('<input type="text" class="form-control" data-id="fecha" name="fecha" id ="fecha" required>');

      
      divSHO.append(labelCode);
      divSHO.append(cCode); 

      divSHO.append(labelName);
      divSHO.append(cName);

      divSHO.append(labelDireccion);
      divSHO.append(cDireccion);

      divSHO.append(labelTelefono);
      divSHO.append(pTelefono);

      divSHO.append(labelSexo);
      divSHO.append(cSexo);

      divSHO.append(labelFecha);
      divSHO.append(cFecha);
      


      //divSHO.append(Btnsuccess);
      //divSHO.append(BtnTurn);


      formSHO.append(divSHO);
      formSHO.append(divAction);

      $("#fromProduct").append(formSHO);

      



      arrayFin.push({
        'cCode': cCode,
        'cName': cName,
        'cDireccion': cDireccion,
        'pTelefono': pTelefono,
        'cSexo': cSexo,
        'cFecha': cFecha,
      });
  };

  // crear modal categoria
  function FromEmpleado(){

      var formSHO = $('<form class="floating-from"></form>');
      var divSHO = $('<div><div>');
      var divAction = $('<div><div>');

      //var Btnsuccess = $('<button class="btn btn-primary" id="Btnsuccess" type="submit" style="display: block; float:  left; margin-right: 10px;margin-top: 10px;">Enviar</button>');
      //var BtnTurn = $('<button class="btn btn-warning" id="BtnTurn" type="button" style="display: block;float:  left; margin-right: 10px;margin-top: 10px;">Atras</button>');
  

      var onChangeAr = null;

      var labelCode = $('<label>Cedula:<span style="color: #ff0000;"> *</span> </label>');
      var labelName = $('<label>Nombre Completo:<span style="color: #ff0000;"> *</span> </label>');
      var labelDireccion = $('<label>Direccion:<span style="color: #ff0000;"> *</span> </label>');
      var labelTelefono = $('<label>Telefono:<span style="color: #ff0000;"> *</span> </label>');
      var labelSexo = $('<label>Sexo:<span style="color: #ff0000;"> *</span> </label>');
      var labelFecha = $('<label>Fecha:<span style="color: #ff0000;"> *</span> </label>');
      var labelTipoDeContrato = $('<label>Tipo de contrato: </label>');
      var labelEmpleador = $('<label>Empleador:<span style="color: #ff0000;"> *</span> </label>');



      var cCode = $('<input type="text" class="form-control" data-id="code" name="code" id ="code" required>');
      var cName = $('<input type="text" class="form-control" data-id="Name" name="name" id ="name" required>');
      var cDireccion = $('<input type="text" class="form-control" data-id="direccion" name="direccion" id ="direccion" required>');
      var pTelefono = $('<input type="text" class="form-control" data-id="telefono" name="make" id ="telefono" required>');
      var cSexo = $('<input type="text" class="form-control" data-id="sexo" name="sexo" id ="sexo" required>');
      var cFecha = $('<input type="text" class="form-control" data-id="fecha" name="fecha" id ="fecha" required>');
      var cTipoContrato = $('<select class="form-control" id="client"> <option>Término indefinido</option><option>Termino definido</option><option>Tiempo parcia</option></select>');
      var cEmpleador = $('<select class="form-control" id="opCategory" name"opCategory"></select>');

      
      divSHO.append(labelCode);
      divSHO.append(cCode); 

      divSHO.append(labelName);
      divSHO.append(cName);

      divSHO.append(labelDireccion);
      divSHO.append(cDireccion);

      divSHO.append(labelTelefono);
      divSHO.append(pTelefono);

      divSHO.append(labelSexo);
      divSHO.append(cSexo);

      divSHO.append(labelFecha);
      divSHO.append(cFecha);

      divSHO.append(labelTipoDeContrato);
      divSHO.append(cTipoContrato);

      divSHO.append(labelEmpleador);
      divSHO.append(cEmpleador);
      


      //divSHO.append(Btnsuccess);
      //divSHO.append(BtnTurn);


      formSHO.append(divSHO);
      formSHO.append(divAction);

      $("#fromCategory").append(formSHO);

      



      arrayFin.push({
        'cCode': cCode,
        'cName': cName,
        'cDireccion': cDireccion,
        'pTelefono': pTelefono,
        'cSexo': cSexo,
        'cFecha': cFecha,
        'cTipoContrato': cTipoContrato,
        'cEmpleador': cEmpleador,
      });
  };


      
});

// obtener el valor de los campos 
function getValue(vari) {
  var setDataFrom = {};

  if (vari == "BtnsuccessCategory") {

    if (idGlobal == null) {
      if (arrayFin.length > 0) {

        var cedulaEmpleado = arrayFin[1]['cCode'].val();
        var nameEmpleado = arrayFin[1]['cName'].val();
        var direccionEmpleado = arrayFin[1]['cDireccion'].val();
        var telefonoEmpleado = arrayFin[1]['pTelefono'].val();
        var sexoEmpleado = arrayFin[1]['cSexo'].val();
        var fechaEmpleado = arrayFin[1]['cFecha'].val(); 
        var tipoEmpleado = arrayFin[1]['cTipoContrato'].val();
        var empleadorEmpleado = arrayFin[1]['cEmpleador'].val();

          
          

        setDataFrom = { 
           "cedula":arrayFin[1]['cCode'].val(),
           "name":arrayFin[1]['cName'].val(),
           "dir":arrayFin[1]['cDireccion'].val(),
           "telefono":arrayFin[1]['pTelefono'].val(),
           "sexo":arrayFin[1]['cSexo'].val(),
           "fecha":arrayFin[1]['cFecha'].val(),
           "tipocontrato":arrayFin[1]['cTipoContrato'].val(),
           "empleador":arrayFin[1]['cEmpleador'].val()

        };
    }  
    }else{

      if (arrayFin.length > 0) {

          setDataFrom = { 

           "cedula":arrayFin[1]['cCode'].val(),
           "name":arrayFin[1]['cName'].val(),
           "dir":arrayFin[1]['cDireccion'].val(),
           "telefono":arrayFin[1]['pTelefono'].val(),
           "sexo":arrayFin[1]['cSexo'].val(),
           "fecha":arrayFin[1]['cFecha'].val(),
           "tipocontrato":arrayFin[1]['cTipoContrato'].val(),
           "empleador":arrayFin[1]['cEmpleador'].val()
          };
      }
    }
  }else{
    if (vari == "BtnsuccessProduct") {

      if (idGlobal == null) {
        if (arrayFin.length > 0) {

        var cedulaEmpleado = arrayFin[0]['cCode'].val();
        var nameEmpleado = arrayFin[0]['cName'].val();
        var direccionEmpleado = arrayFin[0]['cDireccion'].val();
        var telefonoEmpleado = arrayFin[0]['pTelefono'].val();
        var sexoEmpleado = arrayFin[0]['cSexo'].val();
        var fechaEmpleado = arrayFin[0]['cFecha'].val(); 

          setDataFrom = { 
             "cedula":arrayFin[0]['cCode'].val(),
           "name":arrayFin[0]['cName'].val(),
           "dir":arrayFin[0]['cDireccion'].val(),
           "telefono":arrayFin[0]['pTelefono'].val(),
           "sexo":arrayFin[0]['cSexo'].val(),
           "fecha":arrayFin[0]['cFecha'].val()
          };
      }
      }else{

        if (arrayFin.length > 0) {

        var cedulaEmpleado = arrayFin[0]['cCode'].val();
        var nameEmpleado = arrayFin[0]['cName'].val();
        var direccionEmpleado = arrayFin[0]['cDireccion'].val();
        var telefonoEmpleado = arrayFin[0]['pTelefono'].val();
        var sexoEmpleado = arrayFin[0]['cSexo'].val();
        var fechaEmpleado = arrayFin[0]['cFecha'].val(); 

         

          setDataFrom = { 

           "id":idGlobal,
           "cedula":arrayFin[1]['cCode'].val(),
           "name":arrayFin[1]['cName'].val(),
           "dir":arrayFin[1]['cDireccion'].val(),
           "telefono":arrayFin[1]['pTelefono'].val(),
           "sexo":arrayFin[1]['cSexo'].val(),
           "fecha":arrayFin[1]['cFecha'].val(),
           "tipocontrato":arrayFin[1]['cTipoContrato'].val(),
           "empleador":arrayFin[1]['cEmpleador'].val()
          };
        }
      }
    }

  }

   return setDataFrom;
};


//  Vaciar Modal Categoria
$(document).on('click','#BtnsuccessCategory', function() {    

 var vari= "BtnsuccessCategory";
 var replaies = getValue(vari);



  if (replaies) {
    //$(".loader").fadeIn("slow");

    console.log(replaies);



    $.ajax({
       url:   host+"empleado/createempleado",
       type:  'POST',
       data:JSON.stringify(replaies),
       success:  function (response) {
          $(".loader").fadeOut("slow");
          idGlobal = null;

          arrayFin[1]['cCode'].val("");
          arrayFin[1]['cDescription'].val("");
          
           $('#modalCategory').modal('hide');


          loadTableTipoContrato(typeTable); 
          
       },
       error: function (e) {
          bootbox.alert("Error crear Categoria");
          //bootbox.alert("Participante No existe", function(){ window.location = 'Error.html'; });
          $(".loader").fadeOut("slow");
       },
    });
 }

 function openWin() {
  //myWindow = window.open("SurveyFin.html", "width=500, height=500");
  myWindow = window.open("SurveyFin.html","_self", "");
 }

 function closeWin() {
     myWindow.close();
 }
 function surveyEncuestado() {
  //myWindow = window.open("SurveyFin.html", "width=500, height=500");
  myWindow = window.open("SurveyEncuestado.html","_self", "");
 };

});

//  Vaciar Modal Producto
$(document).on('click','#BtnsuccessProduct', function() {    

 var vari= "BtnsuccessProduct";
 var replaies = getValue(vari);



  if (replaies) {
    //$(".loader").fadeIn("slow");

    console.log(replaies);



    $.ajax({
       url:   host+"empleador/createempleador",
       type:  'POST',
       data:JSON.stringify(replaies),
       success:  function (response) {
          $(".loader").fadeOut("slow");
          idGlobal = null;

          arrayFin[0]['cCode'].val("");
          arrayFin[0]['cName'].val("");
          arrayFin[0]['cDescription'].val("");
          arrayFin[0]['pMake'].val("");
          //arrayFin[0]['cEmpleador'].val("");
          arrayFin[0]['cPrice'].val("");
          $('#modalProduct').modal('hide');
          
          loadTableProduct(typeTable); 
          
       },
       error: function (e) {
          bootbox.alert("Error crear Producto");
          //bootbox.alert("Participante No existe", function(){ window.location = 'Error.html'; });
          $(".loader").fadeOut("slow");
       },
    });
 }

 function openWin() {
  //myWindow = window.open("SurveyFin.html", "width=500, height=500");
  myWindow = window.open("SurveyFin.html","_self", "");
 }

 function closeWin() {
     myWindow.close();
 }
 function surveyEncuestado() {
  //myWindow = window.open("SurveyFin.html", "width=500, height=500");
  myWindow = window.open("SurveyEncuestado.html","_self", "");
 };

}); 

// Crear Categoria
$(document).on('click','#BtnCreateCategory', function() {
  arrayFin[0]['cCode'].val("");
  arrayFin[0]['cName'].val("");
  arrayFin[0]['cDireccion'].val("");
  arrayFin[0]['pTelefono'].val("");
  arrayFin[0]['cSexo'].val("");
  arrayFin[0]['cFecha'].val("");
});

// Crear Empleador
$(document).on('click','#BtnCreateProduct', function() {
  arrayFin[0]['cCode'].val("");
  arrayFin[0]['cName'].val("");
  arrayFin[0]['cDireccion'].val("");
  arrayFin[0]['pTelefono'].val("");
  arrayFin[0]['cSexo'].val("");
  arrayFin[0]['cFecha'].val("");

});

// Buscar producto
$(document).on('click','#BtnSearchProduct', function() {
  var searchProduct = $("#searchProduct").val();
  var tableProduct = $("#tableProduct");
  if (searchProduct != "") {

    searchProductData = { 
     "code":searchProduct
    };

    console.log(searchProductData);



    $.ajax({
      url:   host+"product/searchproduct",
      type:  'POST',
      data:JSON.stringify(searchProductData),
      success:  function (response) {
        $(".loader").fadeOut("slow");

        

        tableProduct.find("tbody").empty();

        var btnEditProduct = $('<button class="btn btn-info" data-toggle="modal" data-target="#modalProduct" type="button" style="display: block; float: left; margin-right:  2%;">Actualizar</button>');
        var btnDeleteProduct = $('<button class="btn btn-danger" type="button" style="display: block;">Eliminar</button>');
        var tr = $("<tr ></tr>");
        //var tdId = $("<td></td>").html(valor.id);
        var tdCode = $("<td></td>").html(response.code);
        var tdName = $("<td></td>").html(response.name);
        var tdDescription = $("<td></td>").html(response.description);
        var tdMake = $("<td></td>").html(response.make);
        var tdCategory = $("<td></td>").html(response.category.name);
        var tdPrice = $("<td></td>").html(response.price);

        var tdbtnEd = $("<td></td>")
        //var tdbtnDel = $("<td></td>")
        tdbtnEd.append(btnEditProduct);
        tdbtnEd.append(btnDeleteProduct);
        //tr.append(tdId);
        tr.append(tdCode);
        tr.append(tdName);
        tr.append(tdDescription);
        tr.append(tdMake);
        tr.append(tdCategory);
        tr.append(tdPrice);

        tr.append(tdbtnEd);
        //tr.append(tdbtnDel);
        tableProduct.append(tr);

        btnEditProduct.click(function(){
          updateProduct(response);
        });

        btnDeleteProduct.click(function(){
          bootbox.confirm({
            message: "¿Desea Eliminar el Producto "+response.name+"?",
            buttons: {
                confirm: {
                    label: 'Si',
                    className: 'btn-success'
                },
                cancel: {
                    label: 'No',
                    className: 'btn-danger'
                }
            },
            callback: function (result) {
              if (result) {
                deleteProduct(response);
              }
            }
          });
        }); 
      },
      error: function (e) {
        bootbox.alert("Error filtrar por codigo del producto");
        $(".loader").fadeOut("slow");
      },
    });
  }else{
    loadTableProduct(typeTable);
  }
});

// Buscar producto
$(document).on('click','#BtnSearchCategory', function() {
  var searchCategory = $("#searchCategory").val();
  var tableCategory = $("#tableCategory");
  if (searchCategory != "") {

    searchCategoryData = { 
     "code":searchCategory
    };

    console.log(searchCategoryData);



    $.ajax({
      url:   host+"category/searchcategory",
      type:  'POST',
      data:JSON.stringify(searchCategoryData),
      success:  function (response) {
        $(".loader").fadeOut("slow");

        tableCategory.find("tbody").empty();

        var btnEditCategory = $('<button class="btn btn-info" data-toggle="modal" data-target="#modalCategory" type="button" style="display: block; float: left; margin-right:  2%;">Actualizar</button>');
        var btnDelete = $('<button class="btn btn-danger" type="button" style="display: block;">Eliminar</button>');
        var tr = $("<tr ></tr>");
        //var tdId = $("<td></td>").html(valor.id);
        var tdCode = $("<td></td>").html(response.code);
        var tdName = $("<td></td>").html(response.name);
        var tdDescription = $("<td></td>").html(response.description);
        if (response.active == true) {
          var tdActive = $("<td></td>").html("Si");
        }else{

          var tdActive = $("<td></td>").html("No");
        }
        
        var tdbtnEd = $("<td></td>")
        //var tdbtnDel = $("<td></td>")
        tdbtnEd.append(btnEditCategory);
        tdbtnEd.append(btnDelete);
        //tr.append(tdId);
        tr.append(tdCode);
        tr.append(tdName);
        tr.append(tdDescription);
        tr.append(tdActive);

        tr.append(tdbtnEd);
        //tr.append(tdbtnDel);
        tableCategory.append(tr);

        btnEditCategory.click(function(){
          updateCategory(response);
        });

         btnDelete.click(function(){
          bootbox.confirm({
            message: "¿Desea Eliminar la Categoria "+response.name+"?",
            buttons: {
                confirm: {
                    label: 'Si',
                    className: 'btn-success'
                },
                cancel: {
                    label: 'No',
                    className: 'btn-danger'
                }
            },
            callback: function (result) {
              if (result) {
                deleteCategory(response);
              }
            }
          });
        }); 
      },
      error: function (e) {
        bootbox.alert("Error filtrar por codigo del producto");
        $(".loader").fadeOut("slow");
      },
    });
  }else{
    loadTableCategory(typeTable);
  }
});


// Cargar tabla Categoria
function loadTableTipoContrato(typeAction){
  var tableCategory = $("#tableCategory");

  //tableCategory.find("tbody").find("tr").remove();

  $.ajax({
    url:   host+"empleado/listempleado",
    type:  'GET',
    success:  function (response) {
      console.log(response);

      _.each(response, function (valorTittle, indiceTittle) {
          $('#opCategory').append(
              $('<option></option>').val(valorTittle.id).html(valorTittle.name)
          );
      });

      tableCategory.find("tbody").empty();
      response.forEach(function(valor, indice) {
        var btnEditCategory = $('<button class="btn btn-info" data-toggle="modal" data-target="#modalCategory" type="button" style="display: block; float: left; margin-right:  2%;">Actualizar</button>');
        var btnDelete = $('<button class="btn btn-danger" type="button" style="display: block;">Eliminar</button>');
        var tr = $("<tr ></tr>");
        //var tdId = $("<td></td>").html(valor.id);
        var tdCode = $("<td></td>").html(valor.cedula);
        var tdname = $("<td></td>").html(valor.name);
        var tddireccion = $("<td></td>").html(valor.direccion);
        var tdsexo = $("<td></td>").html(valor.sexo);
        var tdtelefono = $("<td></td>").html(valor.telefono);
        var tdfecha = $("<td></td>").html(valor.fecha);
        
        
        var tdbtnEd = $("<td></td>")
        //var tdbtnDel = $("<td></td>")
        //tr.append(tdId);
        tr.append(tdCode);
        tr.append(tdname);
        tr.append(tddireccion);
        tr.append(tdsexo);
        tr.append(tdtelefono);
        tr.append(tdfecha);

        tr.append(tdbtnEd);
        //tr.append(tdbtnDel);
        tableCategory.append(tr);

        btnEditCategory.click(function(){
          updateCategory(valor);
        });

         btnDelete.click(function(){
          bootbox.confirm({
            message: "¿Desea Eliminar la Categoria "+valor.name+"?",
            buttons: {
                confirm: {
                    label: 'Si',
                    className: 'btn-success'
                },
                cancel: {
                    label: 'No',
                    className: 'btn-danger'
                }
            },
            callback: function (result) {
              if (result) {
                deleteCategory(valor);
              }
            }
          });
        });
      });
     /* $("#tableCategory").kendoGrid({
        
        allowCopy: true,
        filterable: true,
        filterable: {
        messages: {
        filter: "Agregar",
        info: "Filtrar por: "
        },
          //mode: "row",
          extra: false,
          //width:"90%",
          operators: {
              string: {
                  startswith: "Contiene",
                  eq: "Igual a"
              }
          }
        },
        //dataBound: onDataBound,
        pageable: {
          messages: {
            display: "{0}-{1} de {2}",
            empty: "0 registros",
            first: "Primera página",
            previous: "Anterior",
            next: "Siguiente",
            last: "Última página",
            refresh: "Actualizar",
            itemsPerPage: ""
          },
          input: false,
          refresh: true,
          pageSize: 10,
          pageSizes: [10, 20, 30, 50]
        },
        sortable: true
      });*/

      if (typeAction == "ini") {
        tableCategory.DataTable({
          "dom": '<"top"i>rt<"bottom"lp><"clear">',
          "language": {
            "lengthMenu": "Ver _MENU_ numero de paginas",
            "zeroRecords": "No hay datos",
            "info": "Pagina _PAGE_ de _PAGES_",
            "infoEmpty": "No hay datos",
            "infoFiltered": "(filtered from _MAX_ total records)",
            "search":         "Buscar:",
            "paginate": {
                "first":      "Primero",
                "last":       "Ultimo",
                "next":       "Siguiente",
                "previous":   "Anterior"
            },
          }
        });
      } 
    },


   error: function () {
    bootbox.alert("Error cargar tabla Categoria");
      //bootbox.alert("Participante No existe", function(){ window.location = 'Error.html'; });
   },
  });
}

// Cargar tabla Producto
function loadTableProduct(typeAction){
  var tableProduct = $("#tableProduct");

  tableProduct.find("tbody").empty();
    $.ajax({
      url:   host+"empleador/listempleador",
      type:  'GET',
      success:  function (response) {
        console.log(response);
        _.each(response, function (valorTittle, indiceTittle) {
              $('#opCategory').append(
                  $('<option></option>').val(valorTittle.id).html(valorTittle.name)
              );
          });
        response.forEach(function(valor, indice) {



          

            
            
            var tr = $("<tr ></tr>");
            //var tdId = $("<td></td>").html(valor.id);
            var tdCode = $("<td></td>").html(valor.name);
            var tdName = $("<td></td>").html(valor.code);
            var tdDescription = $("<td></td>").html(valor.direccion);
            var tdMake = $("<td></td>").html(valor.sexo);
            var tdCategory = $("<td></td>").html(valor.telefono);
            var tdPrice = $("<td></td>").html(valor.fecha);

            var tdbtnEd = $("<td></td>")
            //var tdbtnDel = $("<td></td>")
            
            //tr.append(tdId);
            tr.append(tdCode);
            tr.append(tdName);
            tr.append(tdDescription);
            tr.append(tdMake);
            tr.append(tdCategory);
            tr.append(tdPrice);

            tr.append(tdbtnEd);
            //tr.append(tdbtnDel);
            tableProduct.append(tr);

           

            
          
        });
       /* $("#tableProduct").kendoGrid({
          
          allowCopy: true,
          filterable: true,
          filterable: {
          messages: {
          filter: "Agregar",
          info: "Filtrar por: "
          },
            //mode: "row",
            extra: false,
            //width:"90%",
            operators: {
                string: {
                    startswith: "Contiene",
                    eq: "Igual a"
                }
            }
          },
          //dataBound: onDataBound,
          pageable: {
            messages: {
              display: "{0}-{1} de {2}",
              empty: "0 registros",
              first: "Primera página",
              previous: "Anterior",
              next: "Siguiente",
              last: "Última página",
              refresh: "Actualizar",
              itemsPerPage: ""
            },
            input: false,
            refresh: true,
            pageSize: 10,
            pageSizes: [10, 20, 30, 50]
          },
          sortable: true
        });*/

        if (typeAction == "ini") {
          tableProduct.DataTable({
            "dom": '<"top"i>rt<"bottom"lp><"clear">',
            "language": {
              "lengthMenu": "Ver _MENU_ numero de paginas",
              "zeroRecords": "No hay datos",
              "info": "Pagina _PAGE_ de _PAGES_",
              "infoEmpty": "No hay datos",
              "infoFiltered": "(filtered from _MAX_ total records)",
              "search":         "Buscar:",
              "paginate": {
                  "first":      "Primero",
                  "last":       "Ultimo",
                  "next":       "Siguiente",
                  "previous":   "Anterior"
              },
            }
          });
        } 
      },
    

     error: function () {
      bootbox.alert("Error cargar tabla Producto");
        //bootbox.alert("Participante No existe", function(){ window.location = 'Error.html'; });
     },
  });
}


// Actualizar tabla Categoria
function updateCategory(dataCategory){
  idGlobal = dataCategory.id;

  arrayFin[1]['cCode'].val(dataCategory.code);
  arrayFin[1]['cName'].val(dataCategory.name);
  arrayFin[1]['cDescription'].val(dataCategory.description);
  if (dataCategory.active == true) {
   $("#activeCheck").bootstrapToggle("on");
  }else{
   $("#activeCheck").bootstrapToggle("off");
  }
  //$("#activeCheck").val(dataCategory.active);
  //arrayFin[1]['pActive'].prop("checked", false);
}

// Actualizar tabla Producto
function updateProduct(dataCategory){
  idGlobal = dataCategory.id;
  

  arrayFin[0]['cCode'].val(dataCategory.code);
  arrayFin[0]['cName'].val(dataCategory.name);
  arrayFin[0]['cDescription'].val(dataCategory.description);
  arrayFin[0]['pMake'].val(dataCategory.make);
  arrayFin[0]['cPrice'].val(dataCategory.price);

   $('select#opCategory option').each(function () {
    if ($(this).text().toLowerCase() == dataCategory.category.name) {
        $(this).prop('selected','selected');
        return;
    }
  });
}

// Eliminar tabla Categoria
function deleteCategory(dataCategory) {

  var url = host+"category/deletecategory/"

  var sendData = dataCategory.id;

  $.ajax({
      url: url+dataCategory.id,    
      type: 'PUT',   
      data: {
          data: sendData
      },      //Data as js object
      success: function () {
        bootbox.alert("Categoria eliminado", function(){
          
          loadTableCategory(typeTable); 
        });
      }
  });
   
}

// Eliminar tabla Producto
function deleteProduct(dataProduct) {

  var url = host+"product/deleteproduct/"

  var sendData = dataProduct.id;

  $.ajax({
      url: url+dataProduct.id,    
      type: 'PUT',   
      data: {
          data: sendData
      },      //Data as js object
      success: function () {
        bootbox.alert("Producto eliminado", function(){ 
          loadTableProduct(typeTable); 
        });
      }
  });
   
}


// Cambiar las pestañas
$(document).ready(function () {
  $('.navbar li').click(function(e) {
      $('.navbar li').removeClass('active');
      var $this = $(this);
      if (!$this.hasClass('active')) {
          $this.addClass('active');
          if ($this.text() == "Crear Empleado") {
            $("#div_product").hide();
            $("#div_category").show();
          }else{
            $("#div_product").show();
            $("#div_category").hide();
          }

      }
  e.preventDefault();
  });         
});
//tableContactos
