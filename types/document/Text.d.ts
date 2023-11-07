import { ElementOptions, Attr } from "./Element";

interface TextOptions extends ElementOptions {
    attr: Partial<Attr>;
    leftPadding: string;
    rightPadding: string;
}

declare class Text extends Element {

    constructor(options: Partial<TextOptions>);
    
    computeRequiredWidth(): unknown;
    computeRequiredHeight(): unknown;
}