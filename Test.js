var urlParams;
/*$(document).ready(function(){
   //$('#btnCALCULAR').click(function() { 
   (window.onpopstate = function () {
       var match,
           pl     = /\+/g,  // Regex for replacing addition symbol with a space
           search = /([^&=]+)=?([^&]*)/g,
           decode = function (s) { return decodeURIComponent(s.replace(pl, " ")); },
           query  = window.location.search.substring(1);

       urlParams = {};
       while (match = search.exec(query))
          urlParams[decode(match[1])] = decode(match[2]);
   })();

  // });
});*/

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

    
  var Btnsuccess = $('<button class="btn btn-primary" id="Btnsuccess" type="button" style="display: block; float:  left; margin-right: 10px;">Enviar</button>');
  var BtnTurn = $('<button class="btn btn-warning" id="BtnTurn" type="button" style="display: block;float:  left; margin-right: 10px;">Atras</button>');
  var BtnViewPhoto = $('<a href="view.php" id ="BtnViewPhoto" class="btn btn-info" style="float: left;display: none">Ver Fotos</a>');
  $(".modal-footer").append(Btnsuccess);
  $(".modal-footer").append(BtnTurn);
  $(".modal-footer").append(BtnViewPhoto);

  function FromContact(reminderView){

      var formSHO = $('<form class="floating-from"></form>');
      var divSHO = $('<div><div>');
      var divAjuntar = $('<div id ="adjuntar" style="margin-top: 2%;"><div>');

      var onChangeAr = null;

      var labelName = $('<label>Nombres: </label>');
      var labelLastName = $('<label>Apellidos: </label>');
      var labelEmail = $('<label>Email: </label>');
      var labelPhone = $('<label>Teléfono: </label>');
      var labelClientType = $('<label>Tipo de Cliente: </label>');
      var labelComment = $('<label>Comentarios: </label>');
      var labelAdjuntar = $('<label>Adjuntar: </label> <br>');


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


      formSHO.append(divSHO);
      formSHO.append(divAjuntar);

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
           'adjuntar': arrayFin[0]['cAdjuntar'],
           'file': arrayFin[0]['file'],
           //'adjuntar': null,
           //'adjuntarBase64': getBase64(arrayFin[0]['file']),
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
           'adjuntar': arrayFin[0]['cAdjuntar'],
           'file': arrayFin[0]['file'],
           //'adjuntar': null,
           //'adjuntarBase64': getBase64(arrayFin[0]['file']),
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
              var fileResult = $("#uploadForm").find('#btnSumi').click();
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
            

            //for (var i = 0; i < response.length; i++) {
              var btnEdit = $('<button class="btn btn-info" type="button" style="display: block;">Actualizar</button>');
              var tr = $("<tr></tr>");
              var tdNombre = $("<td></td>").html(valor.nombre);
              var tdApellido = $("<td></td>").html(valor.apellido);
              var tdCorreo = $("<td></td>").html(valor.correo);
              var tdTelefono = $("<td></td>").html(valor.telefono);
              var tdTipo_de_cliente = $("<td></td>").html(valor.tipo_de_cliente);
              var tdComentarios = $("<td></td>").html(valor.comentarios);
              var tdbtn = $("<td></td>")
              tdbtn.append(btnEdit);
              tr.append(tdNombre);
              tr.append(tdApellido);
              tr.append(tdCorreo);
              tr.append(tdTelefono);
              tr.append(tdTipo_de_cliente);
              tr.append(tdComentarios);
              tr.append(tdbtn);
              tableContactos.append(tr);
              var dataContacto = valor;

              btnEdit.click(function(){
                updateContacto(valor);
              });
            });
            //};

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

  idGlobal = dataContacto.id;

  arrayFin[0]['cName'].val(dataContacto.nombre);
  arrayFin[0]['cLastName'].val(dataContacto.apellido);
  arrayFin[0]['pEmail'].val(dataContacto.correo);
  arrayFin[0]['cPhone'].val(dataContacto.telefono);
  arrayFin[0]['cClientType'].val(dataContacto.tipo_de_cliente);
  arrayFin[0]['CComment'].val(dataContacto.comentarios);
  //arrayFin[0]['cAdjuntar'].val(dataContacto.adjuntar);

}

/*function getBase64(file) {
   var reader = new FileReader();
   reader.readAsDataURL(file);
   reader.onload = function () {
     console.log(reader.result);
   };
   reader.onerror = function (error) {
     console.log('Error: ', error);
   };
}*/

//tableContactos
