import { BuiltinBorder, CustomBorderObject } from '../Terminal';
import { Element, Attr, ElementOptions } from './Element'

interface BorderOptions extends ElementOptions {
    attr: Partial<Attr>;
    shadow: boolean;
    shadowChar: string;
    shadowAttr: Partial<Attr>;
    frameChars: CustomBorderObject | BuiltinBorder;
}

declare class Border extends Element {
    attr: Partial<Attr>;
    shadowAttr: Partial<Attr>;
    shadow: boolean;
    shadowChar: any;
    frameChars: any;
    outputX: number;
    outputY: number;
    outputWidth: any;
    outputHeight: any;
    onParentResize: any;

    constructor(options: Partial<BorderOptions>);

}
