import { Attr, Element, ElementOptions } from "./Element";

interface BarOptions extends ElementOptions {
    barChars: string;
}

declare class Bar extends Element {
    minValue: number;
    maxValue: number;
    private borderAttr: Partial<Attr>;
    private bodyAttr: Partial<Attr>;
    private barChars: Partial<Attr>;
    private overTextFullAttr: Partial<Attr>;
    private overTextEmptyAttr: Partial<Attr>;

    constructor(options: Partial<BarOptions> );
    getValue(): number;
    setValue(value: number, internalAndNoDraw?: boolean): void;
}
