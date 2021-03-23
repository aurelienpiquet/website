function copyToClipboard(element) {
  var $temp = $("<input>");
  $("body").append($temp);
  $temp.val($(element).text()).select();
  document.execCommand("copy");  
  $temp.remove();
}

function copy_tel(element)
{
  document.getElementById(element).innerHTML = 'Numéro Copié';
}

function copy_adresse(element)
{
  document.getElementById(element).innerHTML = 'Adresse Copiée';  
}


$('.nav-link').on('click', function() {
	$('.active-link').removeClass('active-link');
	$(this).addClass('active-link');
});