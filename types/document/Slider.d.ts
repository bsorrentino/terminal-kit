import { Button } from "./Button";
import { ElementOptions, Attr } from "./Element";

interface SliderOptions extends ElementOptions {
}

declare class Slider extends Element {

    isVertical: boolean;
    slideRate: number;
    handleOffset: number;
    rateToValue: any;
    valueToRate: any;

    buttonBlurAttr: Attr;
    buttonFocusAttr: Attr;
    buttonSubmittedAttr: Attr;
    handleAttr: Attr;
    barAttr: Attr;

    backwardSymbol: any;
    forwardSymbol: any;
    handleSymbol: any;
    barSymbol: any;
    backwardButton: Button | null;
    forwardButton: Button | null;
    needInput: boolean;
    outerDrag: boolean;
    keyBindings: {
        UP: string;
        DOWN: string;
        LEFT: string;
        RIGHT: string;
        PAGE_UP: string;
        PAGE_DOWN: string;
        ' ': string;
        HOME: string;
        END: string;
    };
    buttonKeyBindings: {
        ENTER: string;
        KP_ENTER: string;
    };

    constructor(options: Partial<SliderOptions>);

    private initChildren(): void;
    private preDrawSelfVertical(): void;
    private preDrawSelfHorizontal(): void;
    private onClick(): void;
    private onDrag(): void;
    private onWheel(): void;
    private onButtonSubmit(): void;

    setSizeAndPosition(options: any): void;
    computeHandleOffset(): void;
    setHandleOffset(offset: any, internalAndNoDraw?: boolean): void;
    setSlideRate(rate: any, internalAndNoDraw?: boolean): void;
    getValue(): unknown;
    setValue(value: unknown, internalAndNoDraw: any): void;
    getHandleOffset(): number;
    getSlideRate(): number;

}

