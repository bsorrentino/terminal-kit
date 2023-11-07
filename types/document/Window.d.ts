import { BuiltinBorder, CustomBorderObject } from '../Terminal';
import { Container, ContainerOptions } from './Container'

interface WindowOptions extends ContainerOptions {

    movable: boolean;
    title: string;
    titleHasMarkup: boolean;
	frameChars: CustomBorderObject | BuiltinBorder;
    boxChars: CustomBorderObject | BuiltinBorder;
}

declare class Window extends Container {
    frameChars: BuiltinBorder | Object;;
    containerBorderSize: number;
    outerDrag: boolean;

    constructor( options: Partial<WindowOptions>) 
}