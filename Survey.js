var urlParams;
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

var arrayFin=[];

$(document).ready(function(){
       
   $.ajax({
      url:   'http://localhost/sifinca/web/app.php/survey/main/sifinca/survey/participant/email/'+urlParams["id"],
      type:  'GET',

      success:  function (response) {

         //$("#modal-header").html(response["name"]);

         var titleFin = "";

         if (response["surveyCampaign"]) {
            titleFin = "Campaña #"+response["surveyCampaign"]["consecutive"]+" "+response["surveyCampaign"]["name"];
            $("#modalTitle").html(titleFin);
         }else{
            titleFin = "Encuesta";
            $("#modalTitle").html(titleFin);
         };
        

         var orderPFin = response["question"].sort(function (a, b) {

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
            if (h.typeQuestion.value == "CSA") {
               var reminderView = {                                    
                  idNPS: h.typeQuestion.value + "_" + i,                                    
                  renderTo: $("#modal-body"),
                  surveyCampaign:response["surveyCampaign"],
                  data: h
               };
               CsatCustomerSatisfaction(reminderView);
               //reply.push(CsatCustomerSatisfaction+i);
            }
            if (h.typeQuestion.value == "NPS") {
               var reminderView = {                                    
                  //modal: windowModalSaveReminder,
                  idNPS: h.typeQuestion.value + "_" + i,                                    
                  renderTo: $("#modal-body"),
                  surveyCampaign:response["surveyCampaign"],
                  data: h
               };
               NetPromoterScore(reminderView);
            }

             if (h.typeQuestion.value == "SHO") {
               var reminderView = {                                    
                  //modal: windowModalSaveReminder,
                  idNPS: h.typeQuestion.value + "_" + i,                                    
                  renderTo: $("#modal-body"),
                  surveyCampaign:response["surveyCampaign"],
                  data: h
               };
               ShortText(reminderView);
            }
            if (h.typeQuestion.value == "LON") {
               var reminderView = {                                    
                  //modal: windowModalSaveReminder,
                  idNPS: h.typeQuestion.value + "_" + i,                                    
                  renderTo: $("#modal-body"),
                  surveyCampaign:response["surveyCampaign"],
                  data: h
               };
               LongText(reminderView);
            }
         });
      }
   });
      

   function NetPromoterScore(reminderView){

     var formCSA = $('<form class="formulario"></form>');
     var divNPS = $('<div class="radio"><div>');

     if (reminderView.data.orderP) {
         var textL = reminderView.data.orderP+'. '+ reminderView.data.question;
     }else{
         var textL = reminderView.data.question;

     }

     var label = $('<label>'+textL+'</label>');


     
     if (reminderView.data.required == true) {
        for (var i = 1; i <= 10; i++) {
            var pNPS = $('<input type="radio" name="CSA" data-id="'+reminderView.data.id+'" id="' + reminderView.idNPS + '_' + i +'" value="'+i+'" required>'+'<label for="' + reminderView.idNPS + '_' + i +
                '"><H4 style="margin-left: 15px;margin-bottom: 5px;color: #333;">'+i+'</H4>'+'</label>');
                divNPS.append(pNPS);

        }
     }else{
      for (var i = 1; i <= 10; i++) {
         var pNPS = $('<input type="radio" name="CSA" data-id="'+reminderView.data.id+'" id="' + reminderView.idNPS + '_' + i +'" value="'+i+'">'+'<label for="' + reminderView.idNPS + '_' + i +
             '"><H4 style="margin-left: 15px;margin-bottom: 5px;color: #333;">'+i+'</H4>'+'</label>');
             divNPS.append(pNPS);

      }
     }

     formCSA.append(divNPS);

     reminderView.renderTo.append(label);
     reminderView.renderTo.append(formCSA);

      arrayFin.push({
         'objeto': divNPS,
         'type': 'radio',
         'participant': urlParams["id"],
         'surveyCampaign':reminderView.surveyCampaign
      });
   };

   function CsatCustomerSatisfaction(reminderView){

        var formCSA = $('<form class="floating-csatcustomersatisfaction"></form>'); 
        var divNPS = $('<div class="radio"><div>');
        
        if (reminderView.data.orderP) {
            var textL = reminderView.data.orderP+'. '+ reminderView.data.question;
        }else{
            var textL = reminderView.data.question;

        }

        var label = $('<label>'+textL+'</label>');


         if (reminderView.data.required == true) {
            var checkBoxMSa = $('<div><input type="radio"  name="CSA" data-id="'+reminderView.data.id+'" value="Muy satisfecho" required><label><H4 style="margin-left: 15px;margin-bottom: 5px;color: #333;">Muy satisfecho</H4></label><br></div>');
            var checkBoxSa = $('<div><input type="radio"  name="CSA" data-id="'+reminderView.data.id+'" value="Satisfecho" required><label><H4 style="margin-left: 15px;margin-bottom: 5px;color: #333;">Satisfecho</H4></label><br></div>');
            var checkBoxNe = $('<div><input type="radio"  name="CSA" data-id="'+reminderView.data.id+'" value="Neutral" required><label><H4 style="margin-left: 15px;margin-bottom: 5px;color: #333;">Neutral</H4></label><br></div>');
            var checkBoxIn = $('<div><input type="radio"  name="CSA" data-id="'+reminderView.data.id+'" value="Insatisfecho" required><label><H4 style="margin-left: 15px;margin-bottom: 5px;color: #333;">Insatisfecho</H4></label><br></div>');
            var checkBoxMIn = $('<div><input type="radio"  name="CSA" data-id="'+reminderView.data.id+'" value="Muy insatisfecho" required><label><H4 style="margin-left: 15px;margin-bottom: 5px;color: #333;">Muy insatisfecho</H4></label><br></div>');
         }else{
            var checkBoxMSa = $('<div><input type="radio" name="CSA" data-id="'+reminderView.data.id+'" value="Muy satisfecho"><label><H4 style="margin-left: 15px;margin-bottom: 5px;color: #333;">Muy satisfecho</H4></label><br></div>');
            var checkBoxSa = $('<div><input type="radio" name="CSA" data-id="'+reminderView.data.id+'" value="Satisfecho"><label><H4 style="margin-left: 15px;margin-bottom: 5px;color: #333;">Satisfecho</H4></label><br></div>');
            var checkBoxNe = $('<div><input type="radio" name="CSA" data-id="'+reminderView.data.id+'" value="Neutral"><label><H4 style="margin-left: 15px;margin-bottom: 5px;color: #333;">Neutral</H4></label><br></div>');
            var checkBoxIn = $('<div><input type="radio" name="CSA" data-id="'+reminderView.data.id+'" value="Insatisfecho"><label><H4 style="margin-left: 15px;margin-bottom: 5px;color: #333;">Insatisfecho</H4></label><br></div>');
            var checkBoxMIn = $('<div><input type="radio" name="CSA" data-id="'+reminderView.data.id+'" value="Muy insatisfecho"><label><H4 style="margin-left: 15px;margin-bottom: 5px;color: #333;">Muy insatisfecho</H4></label><br></div>');
         }
         formCSA.append(checkBoxMSa);
         formCSA.append(checkBoxSa);
         formCSA.append(checkBoxNe);
         formCSA.append(checkBoxIn);
         formCSA.append(checkBoxMIn);

        formCSA.append(divNPS);

        reminderView.renderTo.append(label);
        reminderView.renderTo.append(formCSA);
         
         arrayFin.push({
            'objeto': formCSA,
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
           var pLON = $('<textarea data-id="'+reminderView.data.id+'" id ="long'+reminderView.data.orderP+'" rows="10" cols="70" style="width: 100%; font-size: medium; display: inline-block;" required></textarea>');
           divLON.append(pLON);
        }else{
            var pLON = $('<textarea data-id="'+reminderView.data.id+'" id ="long'+reminderView.data.orderP+'" rows="10" cols="70" style="width: 100%; font-size: medium; display: inline-block;"></textarea>');
            divLON.append(pLON);
        }

        formLON.append(divLON);

        reminderView.renderTo.append(label);
        reminderView.renderTo.append(formLON);

        arrayFin.push({
            'objeto': pLON,
            'type': 'text',
            'participant': urlParams["id"],
            'surveyCampaign':reminderView.surveyCampaign
         });
   };       
});

function getValue() {
   var reply = [];
   for (var i = 0; i < arrayFin.length; i++) {
      if (arrayFin[i]['type'] === "radio") {
         $(arrayFin[i]['objeto']).find('input[type=radio]').each(function(check, indice, array) {          
            if ($(this).prop("checked")) {
               reply.push({ 
                  'question':{
                     "id": $(this).data('id')
                  } ,
                  'surveyCampaign': arrayFin[i]['surveyCampaign'],
                  'participant': arrayFin[i]['participant'],
                  'answerText': $(this).val()
               });         
            }           
         });
      } else if (arrayFin[i]['type'] === "text") {
         reply.push({ 
            'question': {
               "id":$(arrayFin[i]['objeto']).data('id')
            },
            'surveyCampaign': arrayFin[i]['surveyCampaign'],
            'participant': arrayFin[i]['participant'],
            'answerText': $(arrayFin[i]['objeto']).val()
         });
      }
   }
   return reply;
};

$(document).ready(function(){
   $('#Btnsuccess').click(function() {      
      var replaies = getValue();

      console.log(replaies);

      var data = {
         'replay': replaies,
         'participant': {'id': urlParams["id"]}
      };

      


      $.ajax({
         //data:  parametros,
         url:   'http://localhost/sifinca/web/app_dev.php/survey/main/sifinca/survey/participant/email/update/'+urlParams["id"],
         type:  'PUT',
         contentType: 'application/json',
         dataType: "json",
         data: JSON.stringify(data),
         beforeSend: function () {
            //$("#resultado").html("Procesando, espere por favor...");
         },
         success:  function (response) {
            $("#resultado").html(response);
         }
        });
   }); 
});






