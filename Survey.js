var urlParams;
$(document).ready(function(){
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
});

var arrayFin=[];
//var host = 'http://localhost/sifinca/web/app_dev.php/';
var host = 'https://www.sifinca.net/sifinca/web/app.php/';

$(document).ready(function(){

   $.ajax({
      url:   host+'survey/main/sifinca/survey/participant/email/'+urlParams["id"],
      type:  'GET',
      /*headers: {
              'Content-Type' : 'application/json',
              'x-sifinca': 'SessionToken SessionID="5a15dd35b90800eb3f8b4573", Username="bperez@araujoysegovia.net"'
       },*/


      success:  function (response) {
         //$("#modal-header").html(response["name"]);
         if (response["participantStatus"]["value"] ==   "ENC" || response["participantStatus"]["value"] ==   "VEN" || response["participantStatus"]["value"] ==   "CAN") {
            surveyEncuestado();
            
         }else{
            var titleFinTitle = "";
            var titleDescription = "";

            /*if (response["surveyCampaign"]) {
               titleFin = "Campaña #"+response["surveyCampaign"]["consecutive"]+" "+response["surveyCampaign"]["name"];
               $("#modalTitle").html(titleFin);
            }else{
               titleFin = "Encuesta";
               $("#modalTitle").html(titleFin);
            };*/
            if (response["surveyCampaign"]) {
               titleFinTitle = response["surveyCampaign"]["survey"]["name"];
               titleDescription = response["surveyCampaign"]["description"];
               $("#modalTitle").html(titleFinTitle);
               $("#modalTitleDescription").html(titleDescription);
            }else{
               titleFinTitle = "Encuesta";
               $("#modalTitle").html(titleFinTitle);
            };

            var orderPFin = response["questionsText"].sort(function (a, b) {

               if (a.orderP > b.orderP) {
                  return 1;
               }
               if (a.orderP < b.orderP) {
                  return -1;
               }
               // a must be equal to b
               return 0;
            });
            orderPFin.forEach(function(valor, i, array) {
               var h = valor;
               if (h.questionType.value == "CSA") {
                  var reminderView = {
                     idNPS: h.questionType.value + "_" + i,                                    
                     renderTo: $("#modal-body"),
                     surveyCampaign:response["surveyCampaign"],
                     data: h
                  };
                  CsatCustomerSatisfaction(reminderView);
                  //reply.push(CsatCustomerSatisfaction+i);
               }
               if (h.questionType.value == "NPS") {
                  var reminderView = {                                    
                     //modal: windowModalSaveReminder,
                     idNPS: h.questionType.value + "_" + i,                                    
                     renderTo: $("#modal-body"),
                     surveyCampaign:response["surveyCampaign"],
                     data: h
                  };
                  NetPromoterScore(reminderView);
               }

                if (h.questionType.value == "SHO") {
                  var reminderView = {                                    
                     //modal: windowModalSaveReminder,
                     idNPS: h.questionType.value + "_" + i,                                    
                     renderTo: $("#modal-body"),
                     surveyCampaign:response["surveyCampaign"],
                     data: h
                  };
                  ShortText(reminderView);
               }
               if (h.questionType.value == "LON") {
                  var reminderView = {                                    
                     //modal: windowModalSaveReminder,
                     idNPS: h.questionType.value + "_" + i,                                    
                     renderTo: $("#modal-body"),
                     surveyCampaign:response["surveyCampaign"],
                     data: h
                  };
                  LongText(reminderView);
               }
               if (h.questionType.value == "CES") {
                  var reminderView = {                         
                    //modal: me.windowModalSaveReminder,
                     idNPS: h.questionType.value + "_" + i,                          
                     renderTo: $("#modal-body"),
                     surveyCampaign:response["surveyCampaign"],
                     data: h
                  };
                  CustomerEffortScore(reminderView);
               }
            });
            var Btnsuccess = $('<button class="btn btn-success" id="Btnsuccess" type="button" style="display: block;">Enviar Encuesta</button>');
            $(".modal-footer").html(Btnsuccess);
         }
      },
      error: function () {
         bootbox.alert("Participante No existe", function(){ window.location = 'Error.html'; });
         $(window).load(function() {
                      $(".loader").fadeOut("slow");
                  });

      },
   });
      

   function NetPromoterScore(reminderView){
      var formNPS = $('<form class="formulario"></form>');
      var divNPS = $('<div class="radio"><div>');

      if (reminderView.data.orderP) {
         var textL = reminderView.data.orderP+'. '+ reminderView.data.question;
      }else{
         var textL = reminderView.data.question;
      }

      var label = $('<FONT FACE="arial"><label>'+textL+'</label></FONT>');


     
     
         for (var i = 1; i <= 10; i++) {
            var pNPS = $('<input type="radio" name="NPS" data-id="'+reminderView.data.id+'" id="' + reminderView.idNPS + 
               '_' + i +'" value="'+i+'">'+'<label for="' + reminderView.idNPS + '_' + i +'"><H4 style="margin-left: 15px;margin-bottom: 5px;color: #333;">'+
               i+'</H4>'+'</label>');
            divNPS.append(pNPS);
         }

      formNPS.append(divNPS);

      reminderView.renderTo.append(label);
      reminderView.renderTo.append(formNPS);

      arrayFin.push({
         'objeto': divNPS,
         'data':reminderView.data,
         'type': 'radio',
         'participant': urlParams["id"],
         'surveyCampaign':reminderView.surveyCampaign
      });
   };

   function CsatCustomerSatisfaction(reminderView){

        var formCSA = $('<form class="floating-csatcustomersatisfaction"></form>'); 
        //var divNPS = $('<div class="radio"><div>');
        
        if (reminderView.data.orderP) {
            var textL = reminderView.data.orderP+'. '+ reminderView.data.question;
        }else{
            var textL = reminderView.data.question;

        }

        var label = $('<label>'+textL+'</label>');


         if (reminderView.data.required == true) {
            var checkBoxMSa = $('<div><input type="radio"  name="CSA" data-id="'+reminderView.data.id+'" value="Muy satisfecho" required><label><FONT FACE="arial"><h5 style=" margin-left: 15px;margin-bottom: 5px;color: #333;">Muy satisfecho</h5></FONT></label><br></div>');
            var checkBoxSa = $('<div><input type="radio"  name="CSA" data-id="'+reminderView.data.id+'" value="Satisfecho" required><label><FONT FACE="arial"><h5 style=" margin-left: 15px;margin-bottom: 5px;color: #333;">Satisfecho</h5></FONT></label><br></div>');
            var checkBoxNe = $('<div><input type="radio"  name="CSA" data-id="'+reminderView.data.id+'" value="Neutral" required><label><FONT FACE="arial"><h5 style=" margin-left: 15px;margin-bottom: 5px;color: #333;">Neutral</h5></FONT></label><br></div>');
            var checkBoxIn = $('<div><input type="radio"  name="CSA" data-id="'+reminderView.data.id+'" value="Insatisfecho" required><label><FONT FACE="arial"><h5 style=" margin-left: 15px;margin-bottom: 5px;color: #333;">Insatisfecho</h5></FONT></label><br></div>');
            var checkBoxMIn = $('<div><input type="radio"  name="CSA" data-id="'+reminderView.data.id+'" value="Muy insatisfecho" required><label><FONT FACE="arial"><h5 style=" margin-left: 15px;margin-bottom: 5px;color: #333;">Muy insatisfecho</h5></FONT></label><br></div>');
         }else{
            var checkBoxMSa = $('<div><input type="radio" name="CSA" data-id="'+reminderView.data.id+'" value="Muy satisfecho"><label><FONT FACE="arial"><h5 style=" margin-left: 15px;margin-bottom: 5px;color: #333;">Muy satisfecho</h5></FONT></label><br></div>');
            var checkBoxSa = $('<div><input type="radio" name="CSA" data-id="'+reminderView.data.id+'" value="Satisfecho"><label><FONT FACE="arial"><h5 style=" margin-left: 15px;margin-bottom: 5px;color: #333;">Satisfecho</h5></FONT></label><br></div>');
            var checkBoxNe = $('<div><input type="radio" name="CSA" data-id="'+reminderView.data.id+'" value="Neutral"><label><FONT FACE="arial"><h5 style=" margin-left: 15px;margin-bottom: 5px;color: #333;">Neutral</h5></FONT></label><br></div>');
            var checkBoxIn = $('<div><input type="radio" name="CSA" data-id="'+reminderView.data.id+'" value="Insatisfecho"><label><FONT FACE="arial"><h5 style=" margin-left: 15px;margin-bottom: 5px;color: #333;">Insatisfecho</h5></FONT></label><br></div>');
            var checkBoxMIn = $('<div><input type="radio" name="CSA" data-id="'+reminderView.data.id+'" value="Muy insatisfecho"><label><FONT FACE="arial"><h5 style=" margin-left: 15px;margin-bottom: 5px;color: #333;">Muy insatisfecho</h5></FONT></label><br></div>');
         }
         formCSA.append(checkBoxMSa);
         formCSA.append(checkBoxSa);
         formCSA.append(checkBoxNe);
         formCSA.append(checkBoxIn);
         formCSA.append(checkBoxMIn);

       // formCSA.append(divNPS);

        reminderView.renderTo.append(label);
        reminderView.renderTo.append(formCSA);
         
         arrayFin.push({
            'objeto': formCSA,
            'data':reminderView.data,
            'type': 'radio',
            'participant': urlParams["id"],
            'surveyCampaign':reminderView.surveyCampaign
         });

   };
   function CustomerEffortScore(reminderView){

      var formCES = $('<form class="floating-buttons-CES"></form>'); 
      var divCES = $('<div class="radio"><div>');

      if (reminderView.data.orderP) {
         var textL = reminderView.data.orderP+'. '+ reminderView.data.question;
      }else{
         var textL = reminderView.data.question;

      }

      var label = $('<label>'+textL+'</label>');

      var checkBoxMDA = $('<div><input type="radio" name="CES" value="Muy de acuerdo"><label><H4 style="margin-left: 15px;margin-bottom: 5px;color: #333;">Muy de acuerdo</H4></label><br></div>');
      var checkBoxDA = $('<div><input type="radio" name="CES" value="De acuerdo"><label><H4 style="margin-left: 15px;margin-bottom: 5px;color: #333;">De acuerdo</H4></label><br></div>');
      var checkBoxUPDA = $('<div><input type="radio" name="CES" value="Un poco de acuerdo"><label><H4 style="margin-left: 15px;margin-bottom: 5px;color: #333;">Un poco de acuerdo</H4></label><br></div>');
      var checkBoxNEU = $('<div><input type="radio" name="CES" value="Neutral"><label><H4 style="margin-left: 15px;margin-bottom: 5px;color: #333;">Neutral</H4></label><br></div>');
      var checkBoxUPED = $('<div><input type="radio" name="CES" value="Un poco en desacuerdo"><label><H4 style="margin-left: 15px;margin-bottom: 5px;color: #333;">Un poco en desacuerdo</H4></label><br></div>');
      var checkBoxED = $('<div><input type="radio" name="CES" value="En desacuerdo"><label><H4 style="margin-left: 15px;margin-bottom: 5px;color: #333;">En desacuerdo</H4></label><br></div>');
      var checkBoxTED = $('<div><input type="radio" name="CES" value="Totalmente en desacuerdo"><label><H4 style="margin-left: 15px;margin-bottom: 5px;color: #333;">Totalmente en desacuerdo</H4></label><br></div>');

      formCES.append(checkBoxMDA);
      formCES.append(checkBoxDA);
      formCES.append(checkBoxUPDA);
      formCES.append(checkBoxNEU);
      formCES.append(checkBoxUPED);
      formCES.append(checkBoxED);
      formCES.append(checkBoxTED);


      formCES.append(divCES);

      reminderView.renderTo.append(label);
      reminderView.renderTo.append(formCES);

      arrayFin.push({
         'objeto': formCES,
         'data':reminderView.data,
         'type': 'radio',
         'participant': urlParams["id"],
         'surveyCampaign':reminderView.surveyCampaign
      });

   };

   function ShortText(reminderView){

        var formSHO = $('<form class="floating-shor-text"></form>');
        var divSHO = $('<div class="radio"><div>');

        if (reminderView.data.orderP) {
            var textL = reminderView.data.orderP+'. '+ reminderView.data.question;
        }else{
            var textL = reminderView.data.question;

        }

        var label = $('<label>'+textL+'</label>');


         if (reminderView.data.required == true) {
            var pSHOR = $('<input type="text" data-id="'+reminderView.data.id+'" name="shortText" id ="shor'+reminderView.data.orderP+'" required>');
            divSHO.append(pSHOR);
         }else{
            var pSHOR = $('<input type="text" data-id="'+reminderView.data.id+'" name="shortText" id ="shor'+reminderView.data.orderP+'" >');
            divSHO.append(pSHOR);
         }

        formSHO.append(divSHO);

        reminderView.renderTo.append(label);
        reminderView.renderTo.append(formSHO);

         arrayFin.push({
            'objeto': pSHOR,
            'data':reminderView.data,
            'type': 'text',
            'participant': urlParams["id"],
            'surveyCampaign':reminderView.surveyCampaign
         });
   };

   function LongText(reminderView){

        var formLON = $('<form class="formulario"></form>');
        var divLON = $('<div class="radio"><div>');

        if (reminderView.data.orderP) {
            var textL = reminderView.data.orderP+'. '+ reminderView.data.question;
        }else{
            var textL = reminderView.data.question;
        }

        var label = $('<label>'+textL+'</label>');

        if (reminderView.data.required == true) {
           var pLON = $('<textarea data-id="'+reminderView.data.id+'" id ="long'+reminderView.data.orderP+'" rows="10" cols="35" style="width: 100%; height:  20%; font-size: medium; display: inline-block;" required></textarea>');
           divLON.append(pLON);
        }else{
            var pLON = $('<textarea data-id="'+reminderView.data.id+'" id ="long'+reminderView.data.orderP+'" rows="10" cols="35" style="width: 100%; height:  20%; font-size: medium; display: inline-block;"></textarea>');
            divLON.append(pLON);
        }

        formLON.append(divLON);

        reminderView.renderTo.append(label);
        reminderView.renderTo.append(formLON);

        arrayFin.push({
            'objeto': pLON,
            'data':reminderView.data,
            'type': 'text',
            'participant': urlParams["id"],
            'surveyCampaign':reminderView.surveyCampaign
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
   var reply = [];
   for (var i = 0; i < arrayFin.length; i++) {
      if (arrayFin[i]['type'] === "radio") {
         $(arrayFin[i]['objeto']).find('input[type=radio]').each(function(check, indice, array) {          
            if ($(this).prop("checked")) {
               reply.push({ 
                  "consecutiveQuestionsSurvey":arrayFin[i]['data']["consecutive"],
                  "textQuestionsSurvey":arrayFin[i]['data']["question"],
                  "idQuestionsSurvey":arrayFin[i]['data']["id"],
                  "contentQuestionType":arrayFin[i]['data']["questionType"]["content"],
                  "valueQuestionType":arrayFin[i]['data']["questionType"]["value"],
                  "idQuestionType":arrayFin[i]['data']["questionType"]["id"],
                  'surveyCampaign': arrayFin[i]['surveyCampaign'],
                  'participant': arrayFin[i]['participant'],
                  'answerText': $(this).val()
               });         
            }           
         });
      } else if (arrayFin[i]['type'] === "text") {
         reply.push({ 
            "consecutiveQuestionsSurvey":arrayFin[i]['data']["consecutive"],
            "textQuestionsSurvey":arrayFin[i]['data']["question"],
            "idQuestionsSurvey":arrayFin[i]['data']["id"],
            "contentQuestionType":arrayFin[i]['data']["questionType"]["content"],
            "valueQuestionType":arrayFin[i]['data']["questionType"]["value"],
            "idQuestionType":arrayFin[i]['data']["questionType"]["id"],
            'surveyCampaign': arrayFin[i]['surveyCampaign'],
            'participant': arrayFin[i]['participant'],
            'answerText': $(arrayFin[i]['objeto']).val()
         });
      }
   }
   return reply;
};


$(document).on('click','#Btnsuccess', function() {      
   var replaies = getValue();
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











