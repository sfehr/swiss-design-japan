/**
 * File ssf-display-data.js
 *
 * Helps with accessibility for keyboard only users.
 *
 *
 * SCROLL TO ANCHOR FUNCTION	
 * TOP SCROLL STATE 
 * NAV ACTIVE STATE
 *  
*/

jQuery( document ).ready( function( $ ) {

	
	// TOGGLE MENU
	$( 'button.menu-toggle, .anchor-link' ).click( function( e ) { 
		
		$( 'button.menu-toggle' ).toggleClass( 'expanded' );
		
	});	
	
	
	// SCROLL TO ANCHOR FUNCTION	
	$( 'a[href^=\\#]' ).click( function( e ) { 
		
		e.preventDefault(); 
		var dest = $( this ).attr( 'href' ); 
		
		$( 'html, body' ).animate({ 
			scrollTop: $( dest ).offset().top + 2 }, 'smooth' ); 
		
	});
	
	
	// TOP SCROLL STATE
	$( window ).on( 'scroll', function(){
		
		var ypos = ( ( $( '.circle' ).height() - $( window ).height() ) / 2 );
		
//		if( $( window ).scrollTop() > ( $( '.circle' ).offset().top + ( $( '.circle' ).height() ) / 4 ) ){
		if( $( window ).scrollTop() > ( $( '.circle' ).offset().top ) + ypos ){

			$( 'body' ).addClass( 'detached' );
		}
		else{
			$( 'body' ).removeClass( 'detached' );
		}
		
	});
	
/*	
	// BOTTOM SCROLL STATE
    window.onscroll = function() {
        var pageHeight=document.documentElement.offsetHeight,
        windowHeight=window.innerHeight,
        scrollPosition=window.scrollY || window.pageYOffset || document.body.scrollTop + (document.documentElement && document.documentElement.scrollTop || 0);

        document.getElementsByClassName( '.wrapper' ).innerHTML=pageHeight+','+windowHeight+','+scrollPosition;


		if( pageHeight <= windowHeight + scrollPosition ) {
            alert('At the bottom');
        }
	};
*/

	
	// NAV ACTIVE STATE
	let mainNavLinks = document.querySelectorAll( '.anchor-link' );
	let mainSections = document.querySelectorAll( '.txt' );

	let cur = [];

	window.addEventListener( 'scroll', event => {
		let fromTop = window.scrollY;

		mainNavLinks.forEach(link => {
			let section = document.querySelector( link.hash );

			if( section.offsetTop <= fromTop && section.offsetTop + section.offsetHeight > fromTop ) {
				link.classList.add( 'current' );
			} 
			else {
			link.classList.remove( 'current' );
		}
	  });
	});	
	
});