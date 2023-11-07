import { BuiltinBorder, CustomBorderObject } from "../Terminal";
import { Element, ElementOptions } from "./Element";

interface LayoutOptions extends ElementOptions {
    boxChars: CustomBorderObject | BuiltinBorder;
    layout: LayoutElement;
}

interface LayoutElement {
    id: string,
    x?: number,
    y?: number,
    width?: number,
    height?: number,
    widthPercent?: number,
    heightPercent?: number,
    columns?: Array<LayoutElement>
    rows?: Array<LayoutElement>
}

declare class Layout extends Element {
    constructor(options?: Partial<LayoutOptions>);
    
    private computeBoundingBoxes_(layoutDef: any, computed: any, parent: any, inProgress: any): void;
    computeDxDy(layoutDef: any, computed: any, parent: any, inProgress: any, firstPass: any): void;
    round(computed: any): void;
    drawRecursive(computed: any, tees: any): void;
    drawColumn(computed: any, tees: any, last: any): void;
    drawTee(x: any, y: any, type: any, tees: any): void;
    drawRow(computed: any, tees: any, last: any): void;
}