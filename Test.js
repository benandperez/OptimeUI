var urlParams;
var arrayFin=[];
var idGlobal = null;
var typeTable = true;
var categoryGlobal = null;
var host = 'http://localhost:8080/OptimeBack/web/app_dev.php/';

$(document).ready(function(){

  var titleFinTitle = "";
  var titleDescription = "";
  var ini = "ini";

  loadTableCategory(ini);
  loadTableProduct(ini);
FromProduct()
FromCategory();

  


  //setTimeout(function(){ FromProduct(); FromCategory(); }, 1000);
  
  

    
  //var BtnViewPhoto = $('<a href="view.php" id ="BtnViewPhoto" class="btn btn-info" style="float: left;display: none">Ver Fotos</a>');
  //$(".modal-footer").append(Btnsuccess);
  //$(".modal-footer").append(BtnTurn);
  //$(".modal-footer").append(BtnViewPhoto);

  function FromProduct(){

      var formSHO = $('<form class="floating-from"></form>');
      var divSHO = $('<div><div>');
      var divAction = $('<div><div>');

      //var Btnsuccess = $('<button class="btn btn-primary" id="Btnsuccess" type="submit" style="display: block; float:  left; margin-right: 10px;margin-top: 10px;">Enviar</button>');
      //var BtnTurn = $('<button class="btn btn-warning" id="BtnTurn" type="button" style="display: block;float:  left; margin-right: 10px;margin-top: 10px;">Atras</button>');
  

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
      


      //divSHO.append(Btnsuccess);
      //divSHO.append(BtnTurn);


      formSHO.append(divSHO);
      formSHO.append(divAction);

      $("#fromProduct").append(formSHO);


      arrayFin.push({
        'cCode': cCode,
        'cName': cName,
        'cDescription': cDescription,
        'pMark': pMark,
        'cCategory': cCategory,
        'cPrice': cPrice,
      });
  };

  function FromCategory(){

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
      //var pActive = $('<input type="checkbox"  checked data-toggle="toggle" data-width="100" data-on="Activo" data-off="Inactivo" data-onstyle="success" data-offstyle="danger" >');
      //var pActive = $('<input type="checkbox" name="aceptar">');
      var pActive = $('<input type="checkbox" checked = "true" data-width="100" data-on="Activo" data-off="Inactivo" checked data-toggle="toggle">');


 
        
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


function getValue(vari) {
  var setDataFrom = {};

  if (vari == "BtnsuccessCategory") {

    if (idGlobal == null) {
      if (arrayFin.length > 0) {

        setDataFrom = { 
           "code":arrayFin[1]['cCode'].val(),
           "name":arrayFin[1]['cName'].val(),
           "description":arrayFin[1]['cDescription'].val(),
           "active":arrayFin[1]['pActive'].prop("checked"),
        };
    }  
    }else{

      if (arrayFin.length > 0) {

          setDataFrom = { 

            "id":idGlobal,
            "code":arrayFin[1]['cCode'].val(),
            "name":arrayFin[1]['cName'].val(),
            "description":arrayFin[1]['cDescription'].val(),
            "active":arrayFin[1]['pActive'].prop("checked"),
          };
      }
    }
  }else{
    if (vari == "BtnsuccessProduct") {

      if (idGlobal == null) {
        if (arrayFin.length > 0) {

          setDataFrom = { 
             "code":arrayFin[0]['cCode'].val(),
             "name":arrayFin[0]['cName'].val(),
             "description":arrayFin[1]['cDescription'].val(),
             "mark":arrayFin[0]['pMark'].val(),
             "category":arrayFin[0]['cCategory'],
             "price":arrayFin[0]['cPrice'].val(),
          };
      }  
      }else{

        if (arrayFin.length > 0) {

            setDataFrom = { 

              "id":idGlobal,
              "code":arrayFin[0]['cCode'].val(),
              "name":arrayFin[0]['cName'].val(),
              "description":arrayFin[1]['cDescription'].val(),
              "mark":arrayFin[0]['pMark'].val(),
              "category":arrayFin[0]['cCategory'],
              "price":arrayFin[0]['cPrice'].val(),
            };
        }
      }
    }

  }



  
   return setDataFrom;
};


$(document).on('click','#BtnsuccessCategory', function() {    

 var vari= "BtnsuccessCategory";
 var replaies = getValue(vari);

 var contRequired = 0;
 var contRequiredEsta = 0;
 var contRequiredNoEsta = 0;


  if (replaies) {
    //$(".loader").fadeIn("slow");

    console.log(replaies);



    $.ajax({
       url:   host+"category/createcategory",
       type:  'POST',
       data:JSON.stringify(replaies),
       success:  function (response) {
          $(".loader").fadeOut("slow");
          idGlobal = null;

          arrayFin[1]['cCode'].val("");
          arrayFin[1]['cName'].val("");
          arrayFin[1]['cDescription'].val("");
          arrayFin[1]['pActive'].val(true);
          
           //$("#modalCategory").remove();
          loadTableCategory(typeTable); 
          
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

$(document).on('click','#BtnsuccessProduct', function() {    

 var vari= "BtnsuccessProduct";
 var replaies = getValue(vari);

 var contRequired = 0;
 var contRequiredEsta = 0;
 var contRequiredNoEsta = 0;


  if (replaies) {
    //$(".loader").fadeIn("slow");

    console.log(replaies);



    $.ajax({
       url:   host+"product/createproduct",
       type:  'POST',
       data:JSON.stringify(replaies),
       success:  function (response) {
          $(".loader").fadeOut("slow");
          idGlobal = null;

          arrayFin[0]['cCode'].val("");
          arrayFin[0]['cName'].val("");
          arrayFin[0]['cDescription'].val("");
          arrayFin[0]['pMark'].val("");
          arrayFin[0]['cCategory'].val("");
          arrayFin[0]['cPrice'].val("");

          
           //$("#modalCategory").remove();
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

$(document).on('click','#BtnTurn', function() {
  myWindow = window.open("TestRun.html","_self", "");
});

$(document).on('click','#BtnCreateCategory', function() {
  arrayFin[1]['cCode'].val("");
  arrayFin[1]['cName'].val("");
  arrayFin[1]['cDescription'].val("");
  arrayFin[1]['pActive'].val(true);
});



function loadTableCategory(typeAction){
  var tableCategory = $("#tableCategory");

    tableCategory.find("tbody").find("tr").remove();
        $.ajax({
         url:   host+"category/listcategory",
         type:  'GET',
         success:  function (response) {
          console.log(response);

          categoryGlobal = response;

          var myJSON = JSON.stringify(categoryGlobal);
            console.log(myJSON);
          response.forEach(function(valor, indice) {
            

              var btnEditCategory = $('<button class="btn btn-info" data-toggle="modal" data-target="#modalCategory" type="button" style="display: block; float: left; margin-right:  2%;">Actualizar</button>');
              var btnDelete = $('<button class="btn btn-danger" type="button" style="display: block;">Eliminar</button>');
              var tr = $("<tr ></tr>");
              var tdId = $("<td></td>").html(valor.id);
              var tdCode = $("<td></td>").html(valor.code);
              var tdName = $("<td></td>").html(valor.name);
              var tdDescription = $("<td></td>").html(valor.description);
              if (valor.active == true) {
                var tdActive = $("<td></td>").html("Si");
              }else{

                var tdActive = $("<td></td>").html("No");
              }
              
              var tdbtnEd = $("<td></td>")
              //var tdbtnDel = $("<td></td>")
              tdbtnEd.append(btnEditCategory);
              tdbtnEd.append(btnDelete);
              tr.append(tdId);
              tr.append(tdCode);
              tr.append(tdName);
              tr.append(tdDescription);
              tr.append(tdActive);

              tr.append(tdbtnEd);
              //tr.append(tdbtnDel);
              tableCategory.append(tr);
              var dataContacto = valor;

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
            tableCategory.DataTable({
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

function loadTableProduct(typeAction){
  var tableProduct = $("#tableProduct");

    tableProduct.find("tbody").find("tr").remove();
        $.ajax({
         url:   host+"product/listproduct",
         type:  'GET',
         success:  function (response) {
          console.log(response);
          response.forEach(function(valor, indice) {

            var btnEditProduct = $('<button class="btn btn-info" data-toggle="modal" data-target="#modalProduct" type="button" style="display: block; float: left; margin-right:  2%;">Actualizar</button>');
            var btnDeleteProduct = $('<button class="btn btn-danger" type="button" style="display: block;">Eliminar</button>');
            var tr = $("<tr ></tr>");
            var tdId = $("<td></td>").html(valor.id);
            var tdCode = $("<td></td>").html(valor.code);
            var tdName = $("<td></td>").html(valor.name);
            var tdDescription = $("<td></td>").html(valor.description);
            var tdMake = $("<td></td>").html(valor.make);
            var tdCategory = $("<td></td>").html(valor.category);
            var tdPrice = $("<td></td>").html(valor.price);

            var tdbtnEd = $("<td></td>")
            //var tdbtnDel = $("<td></td>")
            tdbtnEd.append(btnEditProduct);
            tdbtnEd.append(btnDeleteProduct);
            tr.append(tdId);
            tr.append(tdCode);
            tr.append(tdName);
            tr.append(tdDescription);
            tr.append(tdMake);
            tr.append(tdCategory);
            tr.append(tdPrice);

            tr.append(tdbtnEd);
            //tr.append(tdbtnDel);
            tableProduct.append(tr);
            var dataContacto = valor;

            btnEditCategory.click(function(){
              updateProduct(valor);
            });

             btnDelete.click(function(){
              bootbox.confirm({
                message: "¿Desea Eliminar el Producto "+valor.name+"?",
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
                    deleteProduct(valor);
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

          if (typeAction == "ini") {
            tableProduct.DataTable({
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




function createCategory(){
  var divcreateCategory = $("#divCreateCategory");
  var divTableListProduct = $("#divTableListProduct");

  arrayFin[0]['cCode'].val(""),
  arrayFin[0]['cName'].val(""),
  arrayFin[0]['cDescription'].val(""),
  arrayFin[0]['pActive'].val(""),
  divcreateCategory.show();
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

function updateCategory(dataCategory){
  //var divcreateCategory = $("#modalCategory");
  idGlobal = dataCategory.id;

  arrayFin[1]['cCode'].val(dataCategory.code);
  arrayFin[1]['cName'].val(dataCategory.name);
  arrayFin[1]['cDescription'].val(dataCategory.description);
  arrayFin[1]['pActive'].prop("checked", false);
}

function updateProduct(dataCategory){
  //var divcreateCategory = $("#modalCategory");
  idGlobal = dataCategory.id;
  

  arrayFin[0]['cCode'].val(dataCategory.code);
  arrayFin[0]['cName'].val(dataCategory.name);
  arrayFin[0]['cDescription'].val(dataCategory.description);
  arrayFin[0]['pMark'].val(dataCategory.mark);
  arrayFin[0]['cCategory'].val(dataCategory.category);
  arrayFin[0]['cPrice'].val(dataCategory.price);
}

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
        bootbox.alert("Contacto eliminado", function(){ 
          loadTableCategory(typeTable); 
        });
      }
  });
   
}
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
        bootbox.alert("Contacto eliminado", function(){ 
          loadTableCategory(typeTable); 
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
