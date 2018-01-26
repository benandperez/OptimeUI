K.define("Search",{
	extend: "Input",
	bubbleEvents: ["enterKey"],
	placeholder: "¿Necesita realizar una búsqueda?",
	init: function(){
		var me = this;
		me.callParent(arguments);
		me.setAttr("type", "search");	

		var isMobile = K.currentApplication().isMobile();
		if(isMobile){
			me.placeholder = "Buscar...";
		}

		me.setAttr('placeholder', me.placeholder);	
		$(me.getJObject()).keyup(function(e){
            if(e.keyCode == 13)
            {            	
              $(this).trigger("enterKey");
            }
        })
	}
})