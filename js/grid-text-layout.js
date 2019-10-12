/**
 * File home-grid-layout.js
 * Layouting the grid items in the front page
 * 
 * VARIABLES 
 * TILE LAYOUT DISTRIBUTION (across the DOM Tree)
 * TEXT ITEM INIT (adapting to the grid)
 * ENTRY MEDIA INIT: distributes different sizes and placing options via css class
 * RIGHT HAND POSITION IN GRID
 * GRID ALIGNER FUNCTION (TEXT)
 * MEDIA ITEM PLACING FUNCTION 
 * MEDIA QUERIES
 */

//jQuery( document ).ready( function( $ ) {
jQuery( document ).ready( function( $ ) {
	
	'use strict';
	
	
	// TEXT ITEM AUTO HEIGHT (adapting to the grid)
	function txt_elements_init(){
		
		var html_styles = window.getComputedStyle( document.querySelector( 'html' ) );
		var grid_col_width = parseInt( html_styles.getPropertyValue( '--grid-column' ) );
		var grid_row_height = parseInt( html_styles.getPropertyValue( '--grid-row' ) );
		var grid_gap = parseInt( html_styles.getPropertyValue( '--grid-gap' ) );		
		var itm_dimensions;
		var x_off = 0;
		var y_off = 0;
		
		// Breakpoint Check
//		if( $( window ).width() < 506 ) {
			
//		grid_col_width = 15.5;
			
			// convert vw/vh units into px
			grid_col_width = ( $( window ).width() * grid_col_width ) / 100;
			grid_row_height = grid_col_width;
			grid_gap = ( $( window ).width() * grid_gap ) / 100;
			x_off = y_off = 0;
//		}		
		
		$( '.txt' ).each( function() {
				
			itm_dimensions = grid_aligner( $( this ), grid_col_width, grid_row_height, grid_gap, x_off, y_off );

			//container height in px
//			$(this).height( (itm_dimensions[1] * (grid_row_height + grid_gap) - grid_gap) );

			//container height in unit (depending on content)
			$(this).css('grid-row-end', 'span ' + itm_dimensions[3] );
		});		
		
	}
	
	
	// GRID ALIGNER FUNCTION (TEXT)
	
	function grid_aligner( itm, grid_col_width, grid_row_height, grid_gap, x_off = '0', y_off = '0' ){

		var itm_w = 0;
		var itm_h = 0;		
		
		//get dimensions of all children and summarize

		itm.children().each( function() {
			itm_w += $( this ).outerWidth( true );
			itm_h += $( this ).outerHeight( true );
		});
		
		//aligne dimension to grid by rounding up
		var aligned_w = Math.ceil( itm_w / (grid_col_width) );
		var aligned_h = Math.ceil( itm_h / (grid_row_height) );

		//add offset
		var item_w_new = aligned_w + x_off;
		var item_h_new = aligned_h + y_off;

		//prepare array for output
		var itm_dimension = [aligned_w, aligned_h, item_w_new, item_h_new];

		return itm_dimension;
	}

	// MEDIA QUERIES
	$( window ).on( 'resize', function(){
		
		   txt_elements_init();
		
	});
	
	$( window ).on( 'load', function(){
		txt_elements_init();
	});
	 
});