#!/usr/bin/env node

"use strict" ;

import termkit from  '../..'  ;
const term = termkit.terminal ;

term.clear() ;
//term.hideCursor( true ) ;

const document = term.createDocument() ;

const window = new termkit.Window( {
	parent: document ,
	//frameChars: 'dotted' ,
	x: 10 ,
	y: 10 ,
	width: 50 ,
	height: 10 ,
	inputHeight: 30 ,
	title: "^c^+Cool^:, a ^/window^:!" ,
	titleHasMarkup: true ,
	movable: true ,
	scrollable: true ,
	vScrollBar: true ,
	//hScrollBar: true ,

} ) ;

const content = () => { 
	let result =  [
		'This is the window content...' ,
		'Second line of content...' ,
		'Third line of content...'
	];

	for ( let i = 4 ; i <= 30 ; i ++ ) { 
		result.push( `${i}th line of content...` ) ; 
	}
	return result ;
}

new termkit.Text( {
	parent: window ,
	content: content(),
	attr: { color: 'green' , italic: true }
} ) ;

term.moveTo( 1 , 1 ) ;

term.on( 'key' , function( key ) {
	if ( key === 'CTRL_C' ) {
		term.grabInput( false ) ;
		//term.hideCursor( false ) ;
		term.clear() ;
		process.exit() ;
	}
} ) ;

