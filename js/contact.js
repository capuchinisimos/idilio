$(document).ready(function(){

	$("input#envoyer").click(function(e) {
		e.preventDefault();
		erreur=0;
		$("#nom").removeClass("erreurInfos");
		$("#email").removeClass("erreurInfos");
		$("#objet").removeClass("erreurInfos");
		$("#comments").removeClass("erreurInfos");
		
		if ($("#comments").val() == ""){ 
			erreur++; 
			$("#comments").addClass("erreurInfos");
			$("#comments").focus();
			$("#comments").attr("placeHolder", "Merci d'entrer votre message."); 
		}
		if ($("#objet").val() == ""){ 
			erreur++; 
			$("#objet").addClass("erreurInfos");
			$("#objet").focus();
			$("#objet").attr("placeHolder", "Merci d'entrer l'objet de votre message."); 
		}
		if ($("#email").val() == ""){ 
			erreur++; 
			$("#email").addClass("erreurInfos");
			$("#email").focus();
			$("#email").attr("placeHolder", "Merci d'entrer votre adresse mail."); 
		}
		if ($("#nom").val() == ""){ 
			erreur++; 
			$("#nom").addClass("erreurInfos"); 
			$("#nom").focus();
			$("#nom").attr("placeHolder", "Merci d'entrer votre nom."); 
		}

		if (erreur == 0){
			$.ajax({
				type: 'POST',
				url: '../contact.php',
				data: 'nom='+$("#nom").val()+'&mail='+$("#email").val()+'&objet='+$("#objet").val()+'&message='+$("#comments").val(),
				success:function(data){
					$('#returnAjax').html(data);
				}
			});
		}
	});

	$("input#reset").click(function(e) {
		e.preventDefault();
		$("#nom").val("");
		$("#email").val("");
		$("#objet").val("");
		$("#comments").val("");
		$("#nom").removeClass("erreurInfos");
		$("#email").removeClass("erreurInfos");
		$("#objet").removeClass("erreurInfos");
		$("#comments").removeClass("erreurInfos");
		$("#OKNom").html("");
		$("#OKMail").html("");
		$("#OKObjet").html("");
		$("#nom").removeClass("valideInfos");
		$("#email").removeClass("valideInfos");
		$("#objet").removeClass("valideInfos");
		$("#comments").removeClass("valideInfos");
	});
});

function verifNom(valeur)
{
   if(valeur.length>3){
   		$("#OKNom").html("OK");
   		$("#nom").removeClass("erreurInfos");
   		$("#nom").addClass("valideInfos");
   } else {
   		$("#OKNom").html("");
   		$("#nom").addClass("erreurInfos");
   		$("#nom").removeClass("valideInfos");
   }
}

function verifEmail(valeur)
{
   var reg = new RegExp('^[a-z0-9]+([_|\.|-]{1}[a-z0-9]+)*@[a-z0-9]+([_|\.|-]{1}[a-z0-9]+)*[\.]{1}[a-z]{2,6}$', 'i');
    if(reg.test(valeur))
      {
		$("#OKMail").html("OK");
   		$("#email").removeClass("erreurInfos");
   		$("#email").addClass("valideInfos");
      }
    else
      {
		$("#OKMail").html("");
   		$("#email").addClass("erreurInfos");
   		$("#email").removeClass("valideInfos");
      }
}

function verifObjet(valeur)
{
   if(valeur.length>5){
   		$("#OKObjet").html("OK");
   		$("#objet").removeClass("erreurInfos");
   		$("#objet").addClass("valideInfos");
   } else {
   		$("#OKObjet").html("");
   		$("#objet").addClass("erreurInfos");
   		$("#objet").removeClass("valideInfos");
   }
}

function verifMessage(valeur)
{
   if(valeur.length>15){
   		$("#comments").removeClass("erreurInfos");
   		$("#comments").addClass("valideInfos");
   } else {
   		$("#comments").addClass("erreurInfos");
   		$("#comments").removeClass("valideInfos");
   }
}