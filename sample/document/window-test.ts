#!/usr/bin/env npx tsx

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


const content = Array.from( { length: 30 } ).map( ( _ , i ) => `${i}th line of content...` ) ;

new termkit.Text( {
	parent: window ,
	content: content,
	attr: { color: 'green' , italic: true }
} ) ;


term.moveTo( 1 , 1 ) ;

term.on( 'key' , ( key:string ) => {
	if ( key === 'CTRL_C' ) {
		term.grabInput( false ) ;
		//term.hideCursor( false ) ;
		term.clear() ;
		process.exit() ;
	}
} ) ;

