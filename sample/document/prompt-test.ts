#!/usr/bin/env npx tsx

import termkit, { CoordsOptions, FocusType } from '../..' ;

const term = termkit.terminal ;

function _log( msg:string, y = term.height ) {
	if( y > term.height ) { y = term.height ; }

	term.saveCursor() ;
	term.moveTo.styleReset.eraseLine( 2 , y, msg ) ;
	term.restoreCursor() ;
}

const document = term.createDocument() ;

term.clear() ;
// term.hideCursor() ;

new termkit.Layout( {
	parent: document ,
	boxChars: 'lightRounded',
	layout: {
		id: 'main' ,
		y: 0 ,
		widthPercent: 100 ,
		heightPercent: 100 ,
		rows: [
			{
				id: 'r0' ,
				// heightPercent: 1 ,
				height: 3,
				columns: [
					{ id: 'title' } ,
				]
			},
			{
				id: 'r1' ,
				// heightPercent: 20,
				height: 8,
				columns: [
					{ id: 'prompt' } ,
				]
			},
			{
				id: 'r2' ,
				columns: [
					{ id: 'content' } ,
				]
			}
		]
	}
} ) ;

new termkit.Text( {
	parent: document.elements.title,
	content: "AI Prompt" ,
	attr: {
		color: 'brightMagenta' ,
		bold: true ,
		italic: true
	}
} ) ;

const prompt = new termkit.LabeledInput( {
	parent: document.elements.prompt,
	label: 'prompt: ',
	// x: 5 ,
	// y: 10 ,
	width: document.elements.prompt.outputWidth - 2 ,
	height: 5 ,
	allowNewLine: true,
	scrollable: true,
	vScrollBar: false,
	hScrollBar: false,
	autoWidth: 1,
	
} ) ;

const submit = new termkit.Button( {
	parent: document.elements.prompt ,	
	content: '> SUBMIT' ,
	focusAttr: { bgColor: '@light-gray' } ,
	contentHasMarkup: true ,
	value: 'submitButton' ,
	x: document.elements.prompt.outputWidth - 8 ,
	y: 5 ,
} ) ;

const output = new termkit.TextBox({
	parent: document.elements.content,	
	scrollable: true,
	vScrollBar: true,
	width: document.elements.content.outputWidth,
	height: document.elements.content.outputHeight,
	autoHeight: 1,
	autoWidth: 1
});



term.on( 'key',  (key:string) => {
		
	switch( key )
	{
		case 'CTRL_C' :
			term.grabInput( false ) ;
			term.hideCursor( false ) ;
			term.styleReset() ;
			term.clear() ;
			process.exit() ;
		default: 
			term.saveCursor() ;
			// _log( `key: ${key}`, term.height - 1 ) ;
			term.restoreCursor() ;
	}
}) ; 


createMenu() ;
// log( `term.width: ${term.width}` ) ;
// log( `prompt.input.autoWidth: ${prompt.input.autoWidth}`, term.height - 1 ) ;

// document.focusNext();
document.giveFocusTo( prompt ) ;

submit.on( 'parentResize' , (coords:CoordsOptions) => 
	submit.outputX = coords.width - 8 
);

prompt.on( 'parentResize' , (arg:CoordsOptions) =>  {
	// fix: pass autowidth to input component
	// fix must be applied in "LabeledInput.prototype.initTextInput"
	// prompt.input.autoWidth =  1
	// fix: propagate resize event to input component
	prompt.input.onParentResize()
});

const main = async () => {
	
	function onSubmit( input: string ) {

		spinner( 'running...' , new Promise( (resolve, reject) => {

            setTimeout( () => {
				    output.appendLog( 'executed!' );
					document.giveFocusTo( prompt );
                    resolve()
				}, 200 )

        }));		
	}
	
	submit.on( 'submit' , ( ) => onSubmit( prompt.getValue() ) ) ;
	
	prompt.on( 'submit' , onSubmit ) ;
	
}

main()

function spinner( content: string, task: Promise<void>):void {

	const spinner = new termkit.AnimatedText( {
		parent: document ,
		animation: 'asciiSpinner' ,
		x: 0 ,
		y: term.height - 1,
		attr: { bgColor: "white", color: "black" }
	}) ;
	const text = new termkit.Text( {
		parent: document,
		x: 1,
		y: term.height - 1,
		content: " running ...",
		attr: { bgColor: "white", color: "black" }
	})
	
	term.hideCursor(true);
	task.finally(() => {
		spinner.destroy();
		text.destroy();
		term.hideCursor(false);
	})
}

let commandsWindow:termkit.Window|null = null

function createMenu() {

	const menuWidth = 15

	const rowMenu = new termkit.RowMenu( {
		parent: document ,
		x: document.elements.title.outputWidth - menuWidth  ,
		y: 0,
		separator: '|' ,
		justify: true ,
		width: menuWidth ,
		items: [
			{
				content: ' Commands ' ,
				value: 'file'
			},
			// {
			// 	content: 'Edit' ,
			// 	value: 'edit'
			// } ,
			// {
			// 	content: 'View' ,
			// 	value: 'view'
			// } ,
			// {
			// 	content: '^rHistory' , 
			// 	markup: true ,
			// 	value: 'history'
			// } ,
			// {
			// 	content: 'Bookmarks' ,
			// 	value: 'bookmarks'
			// } ,
			// {
			// 	content: 'Tools' ,
			// 	value: 'tools'
			// } ,
			// {
			// 	content: 'Help' ,
			// 	value: 'help'
			// } ,
		]
	} ) ;
	
	rowMenu.on( 'submit' , () => {
		if( commandsWindow !== null ) {
			commandsWindow.destroy()
			commandsWindow = null
			document.focusNext()
		}
		else {
			commandsWindow = createCommands();
			commandsWindow.on( "focus", ( focus:boolean , type:FocusType ) => {
				_log( `${focus} - ${type}` )
				if( !focus && type === 'select') {
					commandsWindow!.destroy()
					commandsWindow = null
				}
			})	
			document.giveFocusTo( commandsWindow )
		}
	})

	return rowMenu;
}


function createCommands() {

	const content = Array.from( { length: 30 } ).map( ( _ , i ) => `${i}th line of content...` ) ;
	
	const window = new termkit.Window( {	
		parent:  document ,
		frameChars: 'lightRounded' ,
		x: document.elements.prompt.outputWidth - 49,
		y: 1,
		width: 50 ,
		height: term.height - 2 ,
		inputHeight: content.length  ,
		title: "Commands",
		titleHasMarkup: false ,
		movable: false ,
		scrollable: true ,
		vScrollBar: true ,
		hScrollBar: false,
		zIndex: 2,
	} ) ;
	
	const text = new termkit.Text( {
		parent: window ,
		content: content,
		attr: { color: 'green' , italic: true },
	} );


	return window
}
