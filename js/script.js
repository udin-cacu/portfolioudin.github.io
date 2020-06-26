// event pada saat link di klik
$('.page-scroll').on('click', function(e){

	// ambil isi href
	var tujuan = $(this).attr('href');
	//tangakap elemen ybs
	var elemenTujuan = $(tujuan);

	$('html,body').animate({
		scrollTop: elemenTujuan.offset().top - 50
	}, 1250, 'easeInOutBounce');	

	e.preventDefault();
});


//parallax

//About

$(window).on('load', function(){
	$('.pKiri').addClass('pMuncul');
	$('.pKanan').addClass('pMuncul');
})

$(window).scroll(function(){

	var wScroll = $(this).scrollTop();

	//jumbotron

	$('.jumbotron img').css({
		'transform' : 'translate(0px, '+ wScroll/4 +'%)'
	});

	$('.jumbotron h1').css({
		'transform' : 'translate(0px, '+ wScroll/2 +'%)'
	});

	$('.jumbotron p').css({
		'transform' : 'translate(0px, '+ wScroll/1.2 +'%)'
	});

	//portfolio

	if( wScroll > $('.portfolio').offset().top - 250 ) {
		//console.log('ok');
		$('.portfolio .thumbnail').each(function(i){
			setTimeout(function(){

		$('.portfolio .thumbnail').eq(i).addClass('muncul');
			}, 500 * (i+1));

	// Img Perbesar
				$(document).ready(function(){
		        $(".perbesar").fancybox();
		      });

		});
	}


	//skill

	if( wScroll > $('.skill').offset().top - 250 ) {
		//console.log('ok');
		$('.skill .progress').each(function(i){
			setTimeout(function(){
				$('.skill .progress').eq(i).addClass('tampil');
			}, 500 * (i+1));
		});
	}

});


	
