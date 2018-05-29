var urlParams;
var arrayFin=[];
var idGlobal = null;
var host = 'http://localhost:8080/pruebaBejamin/web/app_dev.php/';

$(document).ready(function(){

  var titleFinTitle = "";
  var titleDescription = "";

     
      loadTable();
      

        var reminderView = {                                    
           renderTo: $("#modal-body"),
        };
        FromContact(reminderView);

    
  //var BtnViewPhoto = $('<a href="view.php" id ="BtnViewPhoto" class="btn btn-info" style="float: left;display: none">Ver Fotos</a>');
  //$(".modal-footer").append(Btnsuccess);
  //$(".modal-footer").append(BtnTurn);
  //$(".modal-footer").append(BtnViewPhoto);

  function FromContact(reminderView){

      var formSHO = $('<form class="floating-from"></form>');
      var divSHO = $('<div><div>');
      var divAction = $('<div><div>');

      var Btnsuccess = $('<button class="btn btn-primary" id="Btnsuccess" type="submit" style="display: block; float:  left; margin-right: 10px;">Enviar</button>');
      var BtnTurn = $('<button class="btn btn-warning" id="BtnTurn" type="button" style="display: block;float:  left; margin-right: 10px;">Atras</button>');
  

      var onChangeAr = null;

      var labelName = $('<label>Nombres: </label>');
      var labelLastName = $('<label>Apellidos: </label>');
      var labelEmail = $('<label>Email: </label>');
      var labelPhone = $('<label>Teléfono: </label>');
      var labelClientType = $('<label>Tipo de Cliente: </label>');
      var labelComment = $('<label>Comentarios: </label>');


      var cName = $('<input type="text" class="form-control" data-id="Name" name="name" id ="name" required>');
      var cLastName = $('<input type="text" class="form-control" data-id="LastName" name="lastName" id ="lastname" required>');
      var pEmail = $('<input type="email" class="form-control" data-id="Email" name="email" id ="email" required>');
      var cPhone = $('<input type="number" class="form-control" data-id="Phone" name="phone" id ="phone" required>');
      var cClientType = $('<select class="form-control" id="client"> <option>Customer</option><option>Lead</option></select>');


      var CComment = $('<textarea data-id="Comment" id ="comment" rows="10" cols="35" style="width: 100%; height:  20%; font-size: medium; display: inline-block;" required></textarea>');
 
        

      divSHO.append(labelName);
      divSHO.append(cName);

      divSHO.append(labelLastName);
      divSHO.append(cLastName);

      divSHO.append(labelEmail);
      divSHO.append(pEmail);

      divSHO.append(labelPhone);
      divSHO.append(cPhone);

      divSHO.append(labelClientType);
      divSHO.append(cClientType);

      divSHO.append(labelComment);
      divSHO.append(CComment);

      divSHO.append(Btnsuccess);
      divSHO.append(BtnTurn);


      formSHO.append(divSHO);
      formSHO.append(divAction);

      reminderView.renderTo.append(formSHO);
      newFile = null;


      arrayFin.push({
        'cName': cName,
        'cLastName': cLastName,
        'pEmail': pEmail,
        'cPhone': cPhone,
        'cClientType': cClientType,
        'CComment': CComment,
      });
  };
      
});


function getValue() {
  var setDataFrom = {};

  if (idGlobal == null) {
      if (arrayFin.length > 0) {

        setDataFrom = { 
           "nombres":arrayFin[0]['cName'].val(),
           "apellidos":arrayFin[0]['cLastName'].val(),
           "correo":arrayFin[0]['pEmail'].val(),
           "telefono":arrayFin[0]['cPhone'].val(),
           "tipo_de_cliente":arrayFin[0]['cClientType'].val(),
           "comentarios":arrayFin[0]['CComment'].val(),
           'file': arrayFin[0]['file'],
        };
    }  
  }else{

    if (arrayFin.length > 0) {

        setDataFrom = { 
           "id":idGlobal,
           "nombres":arrayFin[0]['cName'].val(),
           "apellidos":arrayFin[0]['cLastName'].val(),
           "correo":arrayFin[0]['pEmail'].val(),
           "telefono":arrayFin[0]['cPhone'].val(),
           "tipo_de_cliente":arrayFin[0]['cClientType'].val(),
           "comentarios":arrayFin[0]['CComment'].val(),
           'file': arrayFin[0]['file'],
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
  var tableContactos = $("#tableContactos");
  var divcrearcontacto = $("#divcrearcontacto");
  var divTableListaContacto = $("#divTableListaContacto");

  divcrearcontacto.hide();
  divTableListaContacto.show();
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
          $("#tableContactos").kendoGrid({
            /*toolbar: ["excel"],
            excel: {
              fileName: "Respuestas.xlsx",
              filterable: true,
              allPages: true

            },*/
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
          });

         },
        

         error: function () {
            //bootbox.alert("Participante No existe", function(){ window.location = 'Error.html'; });
         },
      });

    

}


function crearContacto(){
  var divcrearcontacto = $("#divcrearcontacto");
  var divTableListaContacto = $("#divTableListaContacto");

  arrayFin[0]['cName'].val(""),
  arrayFin[0]['cLastName'].val(""),
  arrayFin[0]['pEmail'].val(""),
  arrayFin[0]['cPhone'].val(""),
  //arrayFin[0]['cClientType'].val(""),
  arrayFin[0]['CComment'].val(""),
  divcrearcontacto.show();
  divTableListaContacto.hide();
}

function updateContacto(dataContacto){
  var divcrearcontacto = $("#divcrearcontacto");
  var divTableListaContacto = $("#divTableListaContacto");
  var BtnViewPhoto = $("#BtnViewPhoto");
  var idContact = $("#idContact");
  divcrearcontacto.show();
  divTableListaContacto.hide();
  BtnViewPhoto.css("display","block");
  idContact[0].setAttribute('value',dataContacto.id);

  var hrefNew = "view.php"+"?idContact="+dataContacto.id

  

  BtnViewPhoto[0].setAttribute('href', hrefNew);


  idGlobal = dataContacto.id;

  arrayFin[0]['cName'].val(dataContacto.nombre);
  arrayFin[0]['cLastName'].val(dataContacto.apellido);
  arrayFin[0]['pEmail'].val(dataContacto.correo);
  arrayFin[0]['cPhone'].val(dataContacto.telefono);
  arrayFin[0]['cClientType'].val(dataContacto.tipo_de_cliente);
  arrayFin[0]['CComment'].val(dataContacto.comentarios);

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

//tableContactos
