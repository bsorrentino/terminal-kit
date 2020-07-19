/*
	Terminal Kit

	Copyright (c) 2009 - 2020 Cédric Ronvel

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



const Element = require( './Element.js' ) ;
const builtinBarChars = require( '../spChars.js' ).bar ;



function Bar( options ) {
	// Clone options if necessary
	options = ! options ? {} : options.internal ? options : Object.create( options ) ;
	options.internal = true ;

	Element.call( this , options ) ;

	this.minValue = + options.minValue || 0 ;
	this.maxValue = options.maxValue !== undefined ? + options.maxValue || 0 : 1 ;
	this.value = + options.value || 0 ;

	if ( this.value < this.minValue ) { this.value = this.minValue ; }
	else if ( this.value > this.maxValue ) { this.value = this.maxValue ; }

	this.borderAttr = options.borderAttr || {} ;
	this.bodyAttr = options.bodyAttr || {} ;
	this.barChars = builtinBarChars.classic ;
	
	if ( typeof options.barChars === 'object' ) {
        this.barChars = options.barChars ;
    }
    else if ( typeof options.barChars === 'string' && builtinBarChars[ options.barChars ] ) {
        this.barChars = builtinBarChars[ options.barChars ] ;
    }

	// Only draw if we are not a superclass of the object
	if ( this.elementType === 'Bar' && ! options.noDraw ) { this.draw() ; }
}

module.exports = Bar ;

Bar.prototype = Object.create( Element.prototype ) ;
Bar.prototype.constructor = Bar ;
Bar.prototype.elementType = 'Bar' ;



Bar.prototype.destroy = function( isSubDestroy ) {
	Element.prototype.destroy.call( this , isSubDestroy ) ;
} ;



Bar.prototype.preDrawSelf = function() {
	var index , x , fullCells , emptyCells , partialCellRate , partialCell ,
		innerSize = this.outputWidth - 2 ,
		rate = this.value - this.minValue / ( this.maxValue - this.minValue ) ;

	if ( ! rate || rate < 0 ) { rate = 0 ; }
	else if ( rate > 1 ) { rate = 1 ; }

	fullCells = Math.floor( rate * innerSize ) ;
	partialCellRate = ( rate * innerSize - fullCells ) ;

	if ( this.barChars.body.length <= 2 ) {
		// There is no chars for partial cell, so use either full or empty
		partialCell = this.barChars.body[ partialCellRate < 0.5 ? 1 : 0 ] ;
	}
	else {
		index = Math.floor( partialCellRate * ( this.barChars.body.length - 2 ) ) ;
		if ( index >= this.barChars.body.length - 2 ) { partialCell = null ; }
		else { partialCell = this.barChars.body[ index ] ; }
	}

	emptyCells = innerSize - fullCells - ( partialCell ? 1 : 0 ) ;

	x = this.outputX ;
	this.outputDst.put( { x: x ++ , y: this.outputY , attr: this.borderAttr , markup: true } , this.barChars.border[ 0 ] ) ;
	this.outputDst.put( { x: x , y: this.outputY , attr: this.bodyAttr , markup: true } , this.barChars.body[ 0 ].repeat( fullCells ) ) ;
	x += fullCells ;
	this.outputDst.put( { x: x ++ , y: this.outputY , attr: this.bodyAttr , markup: true } , partialCell ) ;
	console.log( "---" , innerSize , fullCells , partialCellRate , index , partialCell , emptyCells ) ;
	this.outputDst.put( { x: x , y: this.outputY , attr: this.bodyAttr , markup: true } , this.barChars.body[ this.barChars.body.length - 1 ].repeat( emptyCells ) ) ;
	x += emptyCells ;
	this.outputDst.put( { x: x , y: this.outputY , attr: this.borderAttr , markup: true } , this.barChars.border[ 1 ] ) ;
} ;



Bar.prototype.getValue = function() { return this.value ; } ;

Bar.prototype.setValue = function( value , internalAndNoDraw ) {
	this.value = + value || 0 ;

	if ( this.value < this.minValue ) { this.value = this.minValue ; }
	else if ( this.value > this.maxValue ) { this.value = this.maxValue ; }
	
	if ( ! internalAndNoDraw ) { this.draw() ; }
} ;
