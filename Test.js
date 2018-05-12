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
var checkedYes = 0;
var checkedNo = 0;
var textYes = 0;
var textNo = 0;
//var host = 'http://localhost/sifinca/web/app_dev.php/';
var host = 'https://www.sifinca.net/sifinca/web/app.php/';

$(document).ready(function(){

  var titleFinTitle = "";
  var titleDescription = "";

     

        var reminderView = {                                    
           renderTo: $("#modal-body"),
        };
        FromContact(reminderView);
    /* if (h.questionType.value == "LON") {
        var reminderView = {                                    
           //modal: windowModalSaveReminder,
           idNPS: h.questionType.value + "_" + i,                                    
           renderTo: $("#modal-body"),
           surveyCampaign:response["surveyCampaign"],
           data: h
        };
        LongText(reminderView);
     }*/
    
  var Btnsuccess = $('<button class="btn btn-success" id="Btnsuccess" type="button" style="display: block;">Crear</button>');
  $(".modal-footer").html(Btnsuccess);

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
      //var cAdjuntar = $('<button id="Save" type="button" data-toggle="tooltip" data-placement="top" title="Adjuntar">'+ '<span class="glyphicon glyphicon-paperclip" aria-hidden="true"></span>'+
       // '</button>');

       //var inputFile2 = $('<input class="file" type="file" style="display: none;"/>');
       var inputFile2 = $('<input class="form-control-file" type="file" style="display: none;"/>');
        var labelNomArchi = $('<span style="margin-left: 10px;"></span>');            
        var imgAdj = $('<button style="margin-right: 15px;" id="Save" type="button" data-toggle="tooltip" data-placement="top" title="Adjuntar">'+
                            '<span class="glyphicon glyphicon-paperclip" aria-hidden="true"></span>'+
                       '</button>');
        imgAdj.click(function(){
            inputFile2.click();
        });
        

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

      //divAjuntar.append(labelAdjuntar);
      //divAjuntar.append(cAdjuntar);

      divAjuntar.append(labelAdjuntar);
      divAjuntar.append(imgAdj);
      divAjuntar.append(labelNomArchi);
      divAjuntar.append(inputFile2);

      formSHO.append(divSHO);
      formSHO.append(divAjuntar);

      //reminderView.renderTo.append(labelName);
      reminderView.renderTo.append(formSHO);

      inputFile2.change(function(event){
            event.preventDefault();
            labelNomArchi.empty();
            labelNomArchi.html((this).files[0].name);
            newFile = (this).files;
            //onChangeAr((this).files,fieldTextName.getJObject(),labelNomArchi);
        });

      arrayFin.push({
        'cName': cName,
        'cLastName': cLastName,
        'pEmail': pEmail,
        'cPhone': cPhone,
        'cClientType': cClientType,
        'CComment': CComment,
        'cAdjuntar': inputFile2,
      });
  };


   function surveyFin() {
       //myWindow = window.open("SurveyFin.html", "width=500, height=500");
       myWindow = window.open("SurveyFin.html","_self", "");
   };
   function surveyEncuestado() {
       //myWindow = window.open("SurveyFin.html", "width=500, height=500");
       myWindow = window.open("SurveyEncuestado.html","_self", "");
   };

   function error(e) {
       //myWindow = window.open("SurveyFin.html", "width=500, height=500");
        myWindow =window.open("Error.html","_self", "");
       //alert("hola");

       //window.close();
      
   };       
});

function getValue() {
   var setDataFrom = [];

  for (var i = 0; i < arrayFin.length; i++) {

      setDataFrom.push({ 
         "Nombres":arrayFin[i]['cName'].val(),
         "Apellidos":arrayFin[i]['cLastName'].val(),
         "Email":arrayFin[i]['pEmail'].val(),
         "Teléfono":arrayFin[i]['cPhone'].val(),
         "Tipo de Cliente":arrayFin[i]['cClientType'].val(),
         "Comentarios":arrayFin[i]['CComment'].val(),
         'Adjuntar': arrayFin[i]['cAdjuntar'].val(),
      });
  }
   return setDataFrom;
};


$(document).on('click','#Btnsuccess', function() {      
   var replaies = getValue();

   var contRequired = 0;
   var contRequiredEsta = 0;
   var contRequiredNoEsta = 0;


    if (replaies) {
      $(".loader").fadeIn("slow");



      console.log(replaies);



      var data = {
         'replay': replaies,
         'participant': {'id': urlParams["id"]}
      };

      $.ajax({
         url:   host+'survey/main/sifinca/survey/participant/email/'+urlParams["id"],
         type:  'GET',
         success:  function (response) {
            //$("#modal-header").html(response["name"]);
            if (response["participantStatus"]["value"] ==   "ENC" || response["participantStatus"]["value"] ==   "VEN" || response["participantStatus"]["value"] ==   "CAN") {
               surveyEncuestado();
               
            }else{
               $.ajax({
                  //data:  parametros,
                  url:   host+'survey/main/sifinca/survey/participant/email/update/'+urlParams["id"],
                  type:  'PUT',
                  contentType: 'application/json',
                  dataType: "json",
                  data: JSON.stringify(data),
                  beforeSend: function () {
                     //$("#resultado").html("Procesando, espere por favor...");
                     $(window).load(function() {
                         $(".loader").fadeOut("slow");
                     });
                     openWin();
                  },
                  success:  function (response) {
                     $("#resultado").html(response);
                  }
               });

            }
         },
         error: function () {
            bootbox.alert("Participante No existe", function(){ window.location = 'Error.html'; });

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











