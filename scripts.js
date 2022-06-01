$('#form_product').hide();

function new_product(){
	$('#products').hide();
	$('#form_product').show();
	// alert('Continuar a agregar un nuevo dispositivo?');
}

function cancel_new_product(){

	$('#products').show();
	$('#form_product').hide();

}

function show_password(ele){
	

	if($(ele).is(":checked")){

		$('#password').attr('type','text');

    }else{

      	$('#password').attr('type','password');

    }
}

function item_menu(ele){
	$('[data-widget="treeview"] .nav-item .active').removeClass('active');
	$('#menu_'+ele).addClass('active');
}

// document.getElementsByClassName("btn-purchase").onclick = function() {addCar()};

function addCar(ele) {
    
    $('#car_products a:first').clone().appendTo('#car_products');
    name = $(ele).parents('.white:first').find('.name').text();
    description = $(ele).parents('.white:first').find('.description').text();
    price = $(ele).parents('.white:first').find('.price').text();
    img = $(ele).parents('.white:first').find('img').attr("src");
    // console.log(name);
    $('#car_products a:last').find('.name').text(name);
    $('#car_products a:last').find('.description').text(description);
    $('#car_products a:last').find('.price').text(price);
    $('#car_products a:last').find('.img').attr('src',img);

    count = $('#car_products a').length;

    $('.count-car').text(count)
}

$("#form_login").submit(function(e) {
    e.preventDefault();

    user = $('[name="user"]').val();
	pass = $('[name="password"]').val();

	result=0;

	if (user=='admin') {
		$('.text-user').text("");
		result=1;
		if (pass==1234) {
			$('.text-contrasena').text("");
			result=1;
		}else{
			$('.text-contrasena').text('La contraseña es incorrecta')
			result=0;
		}
	}else{
		$('.text-user').text('El nombre de usuario es incorrecto')
		result=0;
	}

	console.log(result);

	if (result == 1) {
		location.assign("products.html");
	}
});

function change_view(ele){

	$('.content-wrapper').hide();
	$('#'+ele).show();

}

$("#form_new_product").submit(function(e) {

    e.preventDefault();

    name = $('[name="name"]').val();
	description = $('[name="description"]').val();
	price = $('[name="price"]').val();
	percentaje = $('[name="percentaje"]').val();

	$('#template_new_product .white:last').clone().appendTo('#row_products');

	$('#row_products .white:last').find('.name').text(name);
	$('#row_products .white:last').find('.description').text(description);
	$('#row_products .white:last').find('.price').text("$ "+price);

	if (percentaje>0) {
		calcule_price=((price*percentaje)/100);
		new_price=price-calcule_price;
		$('#row_products .white:last').find('.price').text("$ "+new_price);
		$('#row_products .white:last').find('.descuento').text(percentaje+" % DE DESCUENTO");
	}else{
		$('#row_products .white:last').find('.price-after').hide();
		$('#row_products .white:last').find('.descuento').hide();
		$('#row_products .white:last').find('.new-price').text("$ "+price);
	}

	$('#template_new_product .white:last').find('img').attr('src', 'img/image_def.png');

	cancel_new_product();
});