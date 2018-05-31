var arrayFin=[];
var idGlobal = null;
var typeTable = true;
//var dataTemporal = [{"id":1,"code":"jjffff","name":"hi","description":"hola","active":false},{"id":9,"code":"jj","name":"jj","description":"jj","active":true},{"id":10,"code":"ff","name":"fffffff","description":"fff","active":true},{"id":11,"code":"ee","name":"ee","description":"ee","active":true},{"id":12,"code":"ccc","name":"cccc","description":"cccc","active":true},{"id":13,"code":"nnn","name":"nnn","description":"nnn","active":true},{"id":14,"code":"kkk","name":"kkk","description":"kkk","active":true},{"id":17,"code":"ttt","name":"ttt","description":"ttt","active":false},{"id":18,"code":"zzz","name":"zzz","description":"zzz","active":true},{"id":19,"code":"aaa","name":"aaaa","description":"aaaa","active":false},{"id":20,"code":"qwqw","name":"qwqw","description":"qwqw","active":false}];
var host = 'http://localhost:8080/OptimeBack/web/app_dev.php/';

$(document).ready(function(){

  var ini = "ini";

  //var restoredSession = JSON.parse(titleFinTitle);

  
  FromProduct()
  FromCategory();

  loadTableCategory(ini);
  loadTableProduct(ini);


  //setTimeout(function(){ FromProduct(); FromCategory(); }, 1000);


  // Crear modal producto
  function FromProduct(){

      var formSHO = $('<form class="floating-from"></form>');
      var divSHO = $('<div><div>');
      var divAction = $('<div><div>');

      //var Btnsuccess = $('<button class="btn btn-primary" id="Btnsuccess" type="submit" style="display: block; float:  left; margin-right: 10px;margin-top: 10px;">Enviar</button>');
      //var BtnTurn = $('<button class="btn btn-warning" id="BtnTurn" type="button" style="display: block;float:  left; margin-right: 10px;margin-top: 10px;">Atras</button>');
  

      var onChangeAr = null;

      var labelCode = $('<label>Codigo:<span style="color: #ff0000;"> *</span> </label>');
      var labelName = $('<label>Nombre:<span style="color: #ff0000;"> *</span> </label>');
      var labelDescription = $('<label>Descripción:<span style="color: #ff0000;"> *</span> </label>');
      var labelMark = $('<label>Marca:<span style="color: #ff0000;"> *</span> </label>');
      var labelCategory = $('<label>Categoria:<span style="color: #ff0000;"> *</span> </label>');
      var labelPrice = $('<label>Precio:<span style="color: #ff0000;"> *</span> </label>');


      var cCode = $('<input type="text" class="form-control" data-id="code" name="code" id ="code" required>');
      var cName = $('<input type="text" class="form-control" data-id="Name" name="name" id ="name" required>');
      var cDescription = $('<input type="text" class="form-control" data-id="description" name="description" id ="lastname" required>');
      var pMake = $('<input type="text" class="form-control" data-id="make" name="make" id ="make" required>');
      var cCategory = $('<select class="form-control" id="opCategory" name"opCategory"></select>');
      var cPrice = $('<input type="number" min="0" class="form-control" data-id="price" name="price" id ="price" required>');

      cCode.keypress(function(tecla) {
        if((tecla.charCode < 97 || tecla.charCode > 122) && (tecla.charCode < 65 || tecla.charCode > 90) && (tecla.charCode < 48 || tecla.charCode > 57) )
          //alert('Solo letras por favor');
          return false;
      });
      cPrice.keypress(function(tecla) {
        if((tecla.charCode < 48 || tecla.charCode > 57) )
          //alert('Solo letras por favor');
          return false;
      });




 
        
      divSHO.append(labelCode);
      divSHO.append(cCode); 

      divSHO.append(labelName);
      divSHO.append(cName);

      divSHO.append(labelDescription);
      divSHO.append(cDescription);

      divSHO.append(labelMark);
      divSHO.append(pMake);

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
        'pMake': pMake,
        'cCategory': cCategory,
        'cPrice': cPrice,
      });
  };

  // crear modal categoria
  function FromCategory(){

      var FromCategoryFlot = $('<form class="floating-from-category"></form>');
      var divSHO = $('<div><div>');
      var divAction = $('<div><div>');

      //var Btnsuccess = $('<button class="btn btn-primary" id="Btnsuccess" type="submit" style="display: block; float:  left; margin-right: 10px;margin-top: 10px;">Enviar</button>');
      //var BtnTurn = $('<button class="btn btn-warning" id="BtnTurn" type="button" style="display: block;float:  left; margin-right: 10px;margin-top: 10px;">Atras</button>');
  
      var onChangeAr = null;

      var labelCodeCate = $('<label>Codigo:<span style="color: #ff0000;"> *</span> </label>');
      var labelNameCate = $('<label>Nombre:<span style="color: #ff0000;"> *</span> </label>');
      var labelDescriptionCategory = $('<label>Descripción:<span style="color: #ff0000;"> *</span> </label>');
      var labelActive = $('<label>Activo:<span style="color: #ff0000;"> *</span> </label>');


      var cCode = $('<input type="text" class="form-control" data-id="code" name="code" id ="code" required>');
      var cName = $('<input type="text" class="form-control" data-id="Name" name="name" id ="name" required>');
      var cDescription = $('<input type="text" class="form-control" data-id="LastName" name="lastName" id ="lastname" required style = "margin-bottom: 10px">');
      //var pActive = $('<input type="checkbox"  checked data-toggle="toggle" data-width="100" data-on="Activo" data-off="Inactivo" data-onstyle="success" data-offstyle="danger" >');
      //var pActive = $('<input type="checkbox" name="aceptar">');
      var pActive = $('<input type="checkbox"  id = "activeCheck"checked = "true" data-width="100" data-on="Activo" data-off="Inactivo" checked data-toggle="toggle">');

      cCode.keypress(function(tecla) {
        if((tecla.charCode < 97 || tecla.charCode > 122) && (tecla.charCode < 65 || tecla.charCode > 90) && (tecla.charCode < 48 || tecla.charCode > 57) )
          //alert('Solo letras por favor');
          return false;
      });


 
        
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

// obtener el valor de los campos 
function getValue(vari) {
  var setDataFrom = {};

  if (vari == "BtnsuccessCategory") {

    if (idGlobal == null) {
      if (arrayFin.length > 0) {

        var codeCategory = arrayFin[1]['cCode'].val();
          var nameCategory = arrayFin[1]['cName'].val();
          var descriptionCategory = arrayFin[1]['cDescription'].val();

          if (codeCategory.length == 0){
            bootbox.alert("Codigo no puede estar vacio");
            return 0;
          }

          if(nameCategory.length <= 1 ){
            bootbox.alert('Nombre tiene que tener mas de 2 caracteres');
            return false;
            
          }

          if (descriptionCategory.length == 0){
            bootbox.alert("Descripción no puede estar vacio");
            return 0;
          }
          

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

          var code = arrayFin[0]['cCode'].val();
          var name = arrayFin[0]['cName'].val();
          var description = arrayFin[0]['cDescription'].val();
          var make = arrayFin[0]['pMake'].val();
          var price = arrayFin[0]['cPrice'].val();

          if(code.length >= 4 && code.length <= 10 ){
            
          }else{
            bootbox.alert('Codigo debe tener de 4 a 10 caracteres');
            return false;
          }

          if(name.length <= 3 ){
            bootbox.alert('Nombre tiene que tener mas de 4 caracteres');
            return false;
            
          }

          if (description.length == 0){
            bootbox.alert("Descripción no puede estar vacio");
            return 0;
          }
          if (make.length == 0){
            bootbox.alert("Marca no puede estar vacio");
            return 0;
          }
          if (price.length == 0){
            bootbox.alert("Precio no puede estar vacio");
            return 0;
          }

          setDataFrom = { 
             "code":arrayFin[0]['cCode'].val(),
             "name":arrayFin[0]['cName'].val(),
             "description":arrayFin[0]['cDescription'].val(),
             "make":arrayFin[0]['pMake'].val(),
             "category":arrayFin[0]['cCategory'].val(),
             "price":arrayFin[0]['cPrice'].val(),
          };
      }  
      }else{

        if (arrayFin.length > 0) {

          var code = arrayFin[0]['cCode'].val();
          var name = arrayFin[0]['cName'].val();
          var description = arrayFin[0]['cDescription'].val();
          var make = arrayFin[0]['pMake'].val();
          var price = arrayFin[0]['cPrice'].val();

          if(code.length >= 4 && code.length <= 10 ){
            
          }else{
            bootbox.alert('Codigo debe tener de 4 a 10 caracteres');
            return false;
          }

          if(name.length <= 3 ){
            bootbox.alert('Nombre tiene que tener mas de 4 caracteres');
            return false;
            
          }

          if (description.length == 0){
            bootbox.alert("Descripción no puede estar vacio");
            return 0;
          }
          if (make.length == 0){
            bootbox.alert("Marca no puede estar vacio");
            return 0;
          }
          if (price.length == 0){
            bootbox.alert("Precio no puede estar vacio");
            return 0;
          }

          setDataFrom = { 

            "id":idGlobal,
            "code":arrayFin[0]['cCode'].val(),
            "name":arrayFin[0]['cName'].val(),
            "description":arrayFin[0]['cDescription'].val(),
            "make":arrayFin[0]['pMake'].val(),
            "category":arrayFin[0]['cCategory'].val(),
            "price":arrayFin[0]['cPrice'].val(),
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
          
           $('#modalCategory').modal('hide');


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

//  Vaciar Modal Producto
$(document).on('click','#BtnsuccessProduct', function() {    

 var vari= "BtnsuccessProduct";
 var replaies = getValue(vari);



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
          arrayFin[0]['pMake'].val("");
          //arrayFin[0]['cCategory'].val("");
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
  arrayFin[1]['cCode'].val("");
  arrayFin[1]['cName'].val("");
  arrayFin[1]['cDescription'].val("");
  arrayFin[1]['pActive'].val(true);
});

// Crear Producto
$(document).on('click','#BtnCreateProduct', function() {
  arrayFin[0]['cCode'].val("");
  arrayFin[0]['cName'].val("");
  arrayFin[0]['cDescription'].val("");
  arrayFin[0]['pMake'].val("");
  arrayFin[0]['cPrice'].val("");
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
        var tdCode = $("<td></td>").html(valor.code);
        var tdName = $("<td></td>").html(valor.name);
        var tdDescription = $("<td></td>").html(valor.description);
        var tdMake = $("<td></td>").html(valor.make);
        var tdCategory = $("<td></td>").html(valor.category.name);
        var tdPrice = $("<td></td>").html(valor.price);

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
          updateProduct(valor);
        });

        btnDeleteProduct.click(function(){
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


// Cargar tabla Categoria
function loadTableCategory(typeAction){
  var tableCategory = $("#tableCategory");

  //tableCategory.find("tbody").find("tr").remove();

  $.ajax({
    url:   host+"category/listcategory",
    type:  'GET',
    success:  function (response) {
      console.log(response);

      _.each(response, function (valorTittle, indiceTittle) {
        if (valorTittle.active == true) {
          $('#opCategory').append(
              $('<option></option>').val(valorTittle.id).html(valorTittle.name)
          );
        }
      });

      $("#tableCategory tbody").empty();
      response.forEach(function(valor, indice) {
        var btnEditCategory = $('<button class="btn btn-info" data-toggle="modal" data-target="#modalCategory" type="button" style="display: block; float: left; margin-right:  2%;">Actualizar</button>');
        var btnDelete = $('<button class="btn btn-danger" type="button" style="display: block;">Eliminar</button>');
        var tr = $("<tr ></tr>");
        //var tdId = $("<td></td>").html(valor.id);
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
        //tr.append(tdId);
        tr.append(tdCode);
        tr.append(tdName);
        tr.append(tdDescription);
        tr.append(tdActive);

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
      url:   host+"product/listproduct",
      type:  'GET',
      success:  function (response) {
        console.log(response);
        response.forEach(function(valor, indice) {

          if (valor.category.active == true) {

            var btnEditProduct = $('<button class="btn btn-info" data-toggle="modal" data-target="#modalProduct" type="button" style="display: block; float: left; margin-right:  2%;">Actualizar</button>');
            var btnDeleteProduct = $('<button class="btn btn-danger" type="button" style="display: block;">Eliminar</button>');
            var tr = $("<tr ></tr>");
            //var tdId = $("<td></td>").html(valor.id);
            var tdCode = $("<td></td>").html(valor.code);
            var tdName = $("<td></td>").html(valor.name);
            var tdDescription = $("<td></td>").html(valor.description);
            var tdMake = $("<td></td>").html(valor.make);
            var tdCategory = $("<td></td>").html(valor.category.name);
            var tdPrice = $("<td></td>").html(valor.price);

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
              updateProduct(valor);
            });

            btnDeleteProduct.click(function(){
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
          }
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
          if ($this.text() == "Categoria") {
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
