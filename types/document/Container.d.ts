import { Element, ElementOptions, ScrollableOptions } from './Element'

interface ContainerOptions extends ElementOptions, ScrollableOptions {
    inputX:number ;
    inputY:number ;
	inputWidth:number ;
	inputHeight:number ;

    
	hasVScrollBar: boolean;
	hasHScrollBar: boolean;
	vScrollBarSlider: boolean;
	hScrollBarSlider: boolean;
	scrollX: number;
	scrollY: number;
}

declare class Container extends Element {
    keyBindings: any;
    palette: any;
    scrollable: boolean;
    hasVScrollBar: boolean;
    hasHScrollBar: boolean;
    scrollX: any;
    scrollY: any;
    vScrollBarSlider: any;
    hScrollBarSlider: any;
    movable: boolean;
    viewportX: any;
    viewportY: any;
    viewportWidth: number;
    viewportHeight: number;
    deltaDraw: boolean;
    backgroundAttr: any;
    isContainer: boolean;
    containerBorderSize: number;

    constructor(options: Partial<ContainerOptions>);
    private onClick: any;
    private onDrag: any;
    private onWheel: any;

    object2attr: (object: any) => number;
    initChildren(): void;
    resizeViewport(to: any): void;
    resizeInput(to: any): void;
    resize(to: any): void;
    move(dx: any, dy: any, noDraw?: boolean): void;
    moveTo(x: any, y: any, noDraw?: boolean): void;
    scroll(dx: any, dy: any, dontDraw?: boolean): void;
    scrollToTop(dontDraw?: boolean): void;
    scrollToBottom(dontDraw?: boolean): void;
    scrollTo(x: any, y: any, noDraw?: boolean): void;
}