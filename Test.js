var urlParams;
var arrayFin=[];
var idGlobal = null;
var host = 'http://localhost:8080/pruebaBejamin/web/app_dev.php/';

$(document).ready(function(){

  var titleFinTitle = "";
  var titleDescription = "";

     
      loadTable();
      

        var reminderViewProduct = {                                    
           renderTo: $("#modal-body_product"),
        };
        FromProduct(reminderViewProduct);

        var reminderViewCategory = {                                    
           renderTo: $("#modal-body_category"),
        };
        FromCategory(reminderViewProduct);

    
  //var BtnViewPhoto = $('<a href="view.php" id ="BtnViewPhoto" class="btn btn-info" style="float: left;display: none">Ver Fotos</a>');
  //$(".modal-footer").append(Btnsuccess);
  //$(".modal-footer").append(BtnTurn);
  //$(".modal-footer").append(BtnViewPhoto);

  function FromProduct(reminderViewProduct){

      var formSHO = $('<form class="floating-from"></form>');
      var divSHO = $('<div><div>');
      var divAction = $('<div><div>');

      var Btnsuccess = $('<button class="btn btn-primary" id="Btnsuccess" type="submit" style="display: block; float:  left; margin-right: 10px;margin-top: 10px;">Enviar</button>');
      var BtnTurn = $('<button class="btn btn-warning" id="BtnTurn" type="button" style="display: block;float:  left; margin-right: 10px;margin-top: 10px;">Atras</button>');
  

      var onChangeAr = null;

      var labelCode = $('<label>Codigo: </label>');
      var labelName = $('<label>Nombre: </label>');
      var labelDescription = $('<label>Descripción: </label>');
      var labelMark = $('<label>Marca: </label>');
      var labelCategory = $('<label>Categoria: </label>');
      var labelPrice = $('<label>Precio: </label>');


      var cCode = $('<input type="text" class="form-control" data-id="code" name="code" id ="code" required>');
      var cName = $('<input type="text" class="form-control" data-id="Name" name="name" id ="name" required>');
      var cDescription = $('<input type="text" class="form-control" data-id="LastName" name="lastName" id ="lastname" required>');
      var pMark = $('<input type="text" class="form-control" data-id="mark" name="mark" id ="mark" required>');
      var cCategory = $('<select class="form-control" id="client"> <option>Customer</option><option>Lead</option></select>');
      var cPrice = $('<input type="number" class="form-control" data-id="Phone" name="phone" id ="phone" required>');


 
        
      divSHO.append(labelCode);
      divSHO.append(cCode); 

      divSHO.append(labelName);
      divSHO.append(cName);

      divSHO.append(labelDescription);
      divSHO.append(cDescription);

      divSHO.append(labelMark);
      divSHO.append(pMark);

      divSHO.append(labelCategory);
      divSHO.append(cCategory);

      divSHO.append(labelPrice);
      divSHO.append(cPrice);
      


      divSHO.append(Btnsuccess);
      divSHO.append(BtnTurn);


      formSHO.append(divSHO);
      formSHO.append(divAction);

      $("#fromProduct").append(formSHO);
      newFile = null;


      arrayFin.push({
        'cCode': cCode,
        'cName': cName,
        'cDescription': cDescription,
        'pMark': pMark,
        'cCategory': cCategory,
        'cPrice': cPrice,
      });
  };

  function FromCategory(reminderViewCategory){

      var FromCategoryFlot = $('<form class="floating-from-category"></form>');
      var divSHO = $('<div><div>');
      var divAction = $('<div><div>');

      //var Btnsuccess = $('<button class="btn btn-primary" id="Btnsuccess" type="submit" style="display: block; float:  left; margin-right: 10px;margin-top: 10px;">Enviar</button>');
      //var BtnTurn = $('<button class="btn btn-warning" id="BtnTurn" type="button" style="display: block;float:  left; margin-right: 10px;margin-top: 10px;">Atras</button>');
  
      var onChangeAr = null;

      var labelCodeCate = $('<label>Codigo: </label>');
      var labelNameCate = $('<label>Nombre: </label>');
      var labelDescriptionCategory = $('<label>Descripción: </label>');
      var labelActive = $('<label>Activo: </label>');


      var cCode = $('<input type="text" class="form-control" data-id="code" name="code" id ="code" required>');
      var cName = $('<input type="text" class="form-control" data-id="Name" name="name" id ="name" required>');
      var cDescription = $('<input type="text" class="form-control" data-id="LastName" name="lastName" id ="lastname" required style = "margin-bottom: 10px">');
      var pActive = $('<input type="checkbox" checked data-toggle="toggle" data-width="100" data-on="Activo" data-off="Inactivo" data-onstyle="success" data-offstyle="danger" >');


 
        
      divSHO.append(labelCodeCate);
      divSHO.append(cCode); 

      divSHO.append(labelNameCate);
      divSHO.append(cName);

      divSHO.append(labelDescriptionCategory);
      divSHO.append(cDescription);

      //divSHO.append(labelActive);
      divSHO.append(pActive);

      


      //divSHO.append(Btnsuccess);
      //divSHO.append(BtnTurn);


      FromCategoryFlot.append(divSHO);
      FromCategoryFlot.append(divAction);

      $("#fromCategory").append(FromCategoryFlot);
      newFile = null;


      arrayFin.push({
        'cCode': cCode,
        'cName': cName,
        'cDescription': cDescription,
        'pActive': pActive,
      });
  };


      
});


function getValue() {
  var setDataFrom = {};

  if (idGlobal == null) {
      if (arrayFin.length > 0) {

        setDataFrom = { 
           "code":arrayFin[0]['cCode'].val(),
           "nombre":arrayFin[0]['cName'].val(),
           "description":arrayFin[0]['cDescription'].val(),
           "mark":arrayFin[0]['pMark'].val(),
           "category":arrayFin[0]['cCategory'].val(),
           "price":arrayFin[0]['cPrice'].val(),
        };
    }  
  }else{

    if (arrayFin.length > 0) {

        setDataFrom = { 
           "id":idGlobal,
           "code":arrayFin[0]['cCode'].val(),
           "nombre":arrayFin[0]['cName'].val(),
           "description":arrayFin[0]['cDescription'].val(),
           "mark":arrayFin[0]['pMark'].val(),
           "price":arrayFin[0]['cCategory'].val(),
           "category":arrayFin[0]['cPrice'].val(),
        };
    }
  }
   return setDataFrom;
};


$(document).on('click','#Btnsuccess', function() {      
   var replaies = getValue();

       


   var contRequired = 0;
   var contRequiredEsta = 0;
   var contRequiredNoEsta = 0;


    if (replaies) {
      //$(".loader").fadeIn("slow");



      console.log(replaies);

        



      $.ajax({
         url:   host+"contacto/create",
         type:  'POST',
         data:JSON.stringify(replaies),
         success:  function (response) {
            $(".loader").fadeOut("slow");
            idGlobal = null;
            var idContact = $("#idContact");
            idContact[0].setAttribute('value',response.id);
            if ($("#uploadForm").find('#imagen').val() == "" || $("#uploadForm").find('#imagen').val() == null) {

            }else{
              var fileResult = $("#uploadForm").find('#btnSumi').click();

            }
              loadTable();
            
         },
         error: function () {
            bootbox.alert("Error crear contacto");
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

$(document).on('click','#BtnTurn', function() {
  myWindow = window.open("TestRun.html","_self", "");
});



function loadTable(){
  var tableContactos = $("#bodyCategory");
  var divcreateProduct = $("#divcreateProduct");
  var divTableListProduct = $("#divTableListProduct");

  divcreateProduct.hide();
  divTableListProduct.show();
    tableContactos.find("tbody").find("tr").remove();
        $.ajax({
         url:   host+"contacto/list",
         type:  'GET',
         success:  function (response) {
          console.log(response);
          response.forEach(function(valor, indice) {
            

              var btnEdit = $('<button class="btn btn-info" type="button" style="display: block; float: left">Actualizar</button>');
              var btnDelete = $('<button class="btn btn-danger" type="button" style="display: block; margin-left: 55%">Eliminar</button>');
              var tr = $("<tr ></tr>");
              var tdNombre = $("<td></td>").html(valor.nombre);
              var tdApellido = $("<td></td>").html(valor.apellido);
              var tdCorreo = $("<td></td>").html(valor.correo);
              var tdTelefono = $("<td></td>").html(valor.telefono);
              var tdTipo_de_cliente = $("<td></td>").html(valor.tipo_de_cliente);
              var tdComentarios = $("<td></td>").html(valor.comentarios);
              var tdbtnEd = $("<td></td>")
             // var tdbtnDel = $("<td></td>")
              tdbtnEd.append(btnEdit);
              tdbtnEd.append(btnDelete);
              tr.append(tdNombre);
              tr.append(tdApellido);
              tr.append(tdCorreo);
              tr.append(tdTelefono);
              tr.append(tdTipo_de_cliente);
              tr.append(tdComentarios);
              tr.append(tdbtnEd);
              //tr.append(tdbtnDel);
              tableContactos.append(tr);
              var dataContacto = valor;

              btnEdit.click(function(){
                updateContacto(valor);
              });

               btnDelete.click(function(){
                bootbox.confirm({
                  message: "¿Desea Eliminar el contacto "+valor.nombre+"?",
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
                      deleteContact(valor);
                    }
                  }
                });
              });
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

         //$("#tableProduct").DataTable();

         },
        

         error: function () {
            //bootbox.alert("Participante No existe", function(){ window.location = 'Error.html'; });
         },
      });
         $("#tableProduct").DataTable({
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


function createProduct(){
  var divcreateProduct = $("#divCreateProduct");
  var divTableListProduct = $("#divTableListProduct");

  arrayFin[0]['cName'].val(""),
  arrayFin[0]['cDescription'].val(""),
  arrayFin[0]['pMark'].val(""),
  arrayFin[0]['cPrice'].val(""),
  divcreateProduct.show();
  //divTableListProduct.hide();
}

function createCategory(){
  var divcreateCategory = $("#divcreateCategory");
  var divTableListCategory = $("#divTableListCategory");

  arrayFin[0]['cName'].val(""),
  arrayFin[0]['cDescription'].val(""),
  arrayFin[0]['pMark'].val(""),
  arrayFin[0]['cPrice'].val(""),
  //arrayFin[0]['cCategory'].val(""),
  divcreateCategory.show();
  divTableListCategory.hide();
}

function updateContacto(dataContacto){
  var divcreateProduct = $("#divcreateProduct");
  var divTableListProduct = $("#divTableListProduct");
  var BtnViewPhoto = $("#BtnViewPhoto");
  var idContact = $("#idContact");
  divcreateProduct.show();
  divTableListProduct.hide();
  BtnViewPhoto.css("display","block");
  idContact[0].setAttribute('value',dataContacto.id);

  var hrefNew = "view.php"+"?idContact="+dataContacto.id

  

  BtnViewPhoto[0].setAttribute('href', hrefNew);


  idGlobal = dataContacto.id;

  arrayFin[0]['cName'].val(dataContacto.nombre);
  arrayFin[0]['cDescription'].val(dataContacto.apellido);
  arrayFin[0]['pMark'].val(dataContacto.correo);
  arrayFin[0]['cPrice'].val(dataContacto.telefono);
  arrayFin[0]['cCategory'].val(dataContacto.tipo_de_cliente);

}

function deleteContact(dataContacto) {

  var url = host+"contacto/borrar/"

  var sendData = dataContacto.id;

  $.ajax({
      url: url+dataContacto.id,    //Your api url
      type: 'PUT',   //type is any HTTP method
      data: {
          data: sendData
      },      //Data as js object
      success: function () {
        bootbox.alert("Contacto eliminado", function(){ 
          loadTable(); 
        });
      }
  });
   
}



$(document).ready(function () {
        $('.navbar li').click(function(e) {
            $('.navbar li').removeClass('active');
            var $this = $(this);
            if (!$this.hasClass('active')) {
                $this.addClass('active');
                if ($this.text() == "Catedoria") {
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
