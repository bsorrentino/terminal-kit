import { ElementOptions, ScrollableOptions } from "./Element";
import { Slider } from "./Slider";

interface TextBoxOptions extends ElementOptions, ScrollableOptions {

    keyBindings?: any;
    textAttr: Partial<Attr>;
    altTextAttr: Partial<Attr>;
    voidAttr: Partial<Attr>;

    extraScrolling: boolean;
    autoScrollContextLines: number;
    autoScrollContextColumns: number;
	scrollX: number;
	scrollY: number;

    firstLineRightShift: number;
    tabWidth: number;
    wordWrap: boolean;
    lineWrap: boolean;
    hiddenContent: boolean;
    // stateMachine: any; // https://github.com/cronvel/text-machine/
    noDraw: boolean;
}

declare class TextBox extends Element {
    keyBindings: Record<string, string>;

    textAttr: Attr;
    altTextAttr: Attr;
    voidAttr: Attr;

    scrollable: boolean;
    hasVScrollBar: boolean;
    hasHScrollBar: boolean;
    scrollX: number;
    scrollY: number;
    vScrollBarSlider: Slider | null;
    hScrollBarSlider: Slider | null;

    extraScrolling: boolean;
    autoScrollContextLines: any;
    autoScrollContextColumns: any;
    firstLineRightShift: any;

    tabWidth: number;
    wordWrap: boolean;
    lineWrap: boolean;
    hiddenContent: boolean;
    stateMachine: any;

    textAreaWidth: number;
    textAreaHeight: number;
    textBuffer: TextBuffer | null;
    altTextBuffer: TextBuffer | null;
    strictInlineSupport: boolean;

    constructor(options: Partial<TextBoxOptions>);

    private initChildren(): void;
    private onClick(): void;
    private onDrag(): void;
    private onWheel(): void;

    onParentResize(): void;
    setSizeAndPosition(options: any): void;
    scrollToTop(dontDraw?: boolean): void;
    scrollToBottom(dontDraw?: boolean): void;
    autoScrollAndDraw(onlyDrawCursorExceptIfScrolled?: boolean, noDraw?: boolean): void;
    autoScrollAndSmartDraw(): void;
    setAttr(textAttr?: any, voidAttr?: any, dontDraw?: boolean, dontSetContent?: boolean): void;
    setAltAttr(altTextAttr?: any): void;
    getContentSize(): {
        width: number;
        height: number;
    };
    getContent(): string;
    setContent(content: string, hasMarkup?: boolean, dontDraw?: boolean): void;
    getAltContent(): string | null;
    setAltContent(content: string, hasMarkup?: boolean, dontDraw?: boolean): void;
    prependContent(content: string, dontDraw?: boolean): void;
    appendContent(content: string, dontDraw?: boolean): void;
    appendLog(content: string, dontDraw?: boolean): void;
    private addContent(content: string, mode: string, dontDraw?: boolean): void;
    setTabWidth(tabWidth: number, internal?: boolean): void;

    setStateMachine(stateMachine: any, internal?: boolean): void;

}
