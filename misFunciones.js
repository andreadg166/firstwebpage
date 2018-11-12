function mayorEdad(){
	var FN=document.getElementById("fechNac").value;
	var ANIOS,aaFN, mmFN,ddFN,resta;
	var FECHAHOY=new Date();
	var aaHoy=FECHAHOY.getFullYear();
	var mmHoy=FECHAHOY.getMonth()+1;
	var ddHoy=FECHAHOY.getDate();
	var A=FN.split("-");
	aaFN=A[0]; mmFN=A[1]; ddFN=A[2];
	ANIOS=aaHoy-aaFN;
	if (ANIOS>18) {
		alert ("Envío EXITOSO, cumples con los requisitos.");
	}else {
		if (ANIOS==18){
			if (mmHoy>mmFN){
				alert ("Envío EXITOSO, cumples con los requisitos.");
			}else {
				if (mmHoy==mmFN) {
					if (ddHoy>ddFN){
						alert ("Envío EXITOSO, cumples con los requisitos.");
					}else {
						alert ("No se puede realizar el envío, debes tener mas de 18 años.");
					}
				}
			}		
		}else {
			alert ("No se puede realizar el envío, debes tener 18 años o más.");}
	}
}

function cantidadCaracter(){
	var cadena=document.getElementById("carta").value;
	
	if (cadena.lenght==500){
		alert ("Largo de cadena correcto");
	else if (cadena<500){
		alert ("Largo de cadena correcto");
	else {
		alert("Se excedio de caracteres");
	     }	

	}
    }
}	
	
	