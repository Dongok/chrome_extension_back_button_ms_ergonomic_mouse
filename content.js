document.addEventListener("mousedown",function(event){
 if(event){
	
	 if(event.button == 1 && event.buttons == 0){
		 history.back(-1);
	 }else if(event.button == 1 && event.buttons == 4){
		history.forward(1);
	 }
 }
},true);
