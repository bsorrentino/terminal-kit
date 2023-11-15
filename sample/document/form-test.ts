#!/usr/bin/env node
/*
	Terminal Kit

	Copyright (c) 2009 - 2022 Cédric Ronvel

	The MIT License (MIT)

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all
	copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	SOFTWARE.
*/

"use strict" ;

import termkit from '../..' ;

const term = termkit.terminal ;

term.clear() ;

const document = term.createDocument() ;

const form = new termkit.Form( {
	parent: document ,
	x: 10 ,
	y: 3 ,
	width: 40 ,
	inputs: [
		{
			key: 'login' ,
			label: 'Login: ' ,
			content: 'login@bob.net' ,
		} ,
		{
			key: 'password' ,
			label: 'Password: ' ,
			hiddenContent: true ,
		} ,
		{
			key: 'firstName' ,
			label: 'first name: ' ,
		} ,
		{
			key: 'lastName' ,
			label: 'last name: ' ,
		} ,
		{
			key: 'age' ,
			label: 'age: ' ,
		} ,
		{
			key: 'v1' ,
			label: 'v1: ' ,
			type: 'select' ,
			value: 2 ,
			items: [
				{ content: 'one' , value: 1 } ,
				{ content: 'two' , value: 2 } ,
				{ content: 'three' , value: 3 } ,
				{ content: 'four' , value: 4 }
			]
		} ,
		{
			key: 'v2' ,
			label: 'v2: ' ,
			type: 'selectMulti' ,
			//value: 2 ,
			items: [
				{ content: 'un' , key: 'un' } ,
				{ content: 'deux' , key: 'deux' } ,
				{ content: 'trois' , key: 'trois' }
			]
		} ,
		{
			key: 'comment' ,
			label: 'comment: ' ,
			content: 'multi\nline\ncontent' ,
			height: 5 ,
			scrollable: true ,
			vScrollBar: true
		} ,
	] ,
	buttons: [
		{
			content: '<Ok>' ,
			value: 'ok'
		} ,
		{
			content: '<Cancel>' ,
			value: 'cancel'
		}
	]
} ) ;

form.on( 'submit' , ( value ) => 
{
	//console.error( 'Submitted: ' , value ) ;
	term.saveCursor() ;
	term.moveTo.styleReset.eraseLine( 1 , 24 , 'Submitted: %J\n' , value ) ;
	term.restoreCursor() ;
});

document.giveFocusTo( form ) ;

term.on( 'key' , function( key ) {
	switch( key )
	{
		case 'CTRL_C' :
			term.grabInput( false ) ;
			term.hideCursor( false ) ;
			term.styleReset() ;
			term.clear() ;
			process.exit() ;
			break ;
	}
} ) ;



