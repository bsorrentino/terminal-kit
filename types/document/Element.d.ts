import EventEmitter from 'nextgen-events'
import ScreenBuffer from '../ScreenBuffer'

type Bindings = Record<string, string>;

interface Attr {
    bgColor: string,
    color: string,
    bold: boolean,
    italic: boolean,
    dim: boolean
}

interface ScrollableOptions {
    scrollable: boolean,
    vScrollBar: boolean,
    hScrollBar: boolean,
}

interface CoordsOptions {
    y: number;
    x: number;
    height: number;
    width: number;
}

interface ElementOptions extends CoordsOptions {
    internal: boolean;
    parent: unknown;
    id: string;
    meta: any;

    content: string|string[];
    contentHasMarkup: boolean;

    outputDst: ScreenBuffer;
    childId: any;
    autoWidth: number;
    strictInline: any;
    outputY: number;
    disabled: any;
    interceptTempZIndex: any;
    outputX: number;
    label: string;
    autoHeight: number;
    value: any;
    hidden: boolean;
    shortcuts?: any[];
    inlineTerm: any | null;
    outputHeight: any;
    def: any | null;
    key: any | null;
    outputWidth: any;

    // z-index
    z: number;
    zIndex: number;
}

declare class Element extends EventEmitter {
    autoHeight: number;
    autoWidth: number;

    outputDst: ScreenBuffer;
    outputX: number;
    outputY: number;
    outputWidth: number;
    outputHeight: number;

    inputDst: ScreenBuffer;
    inputX: number;
    inputY: number;
    inputWidth: number;
    inputHeight: number;

    uid: number;
    parent: any;
    document: any;
    destroyed: boolean;
    inlineTerm: any;
    strictInline: boolean;
    restoreCursorAfterDraw: boolean;
    label: any;
    key: any;
    value: any;
    childId: any;
    def: any;
    hidden: boolean;
    disabled: boolean;
    content: string;
    contentHasMarkup: boolean;
    contentWidth: number;
    meta: any;
    savedZIndex: any;
    zIndex: any;
    interceptTempZIndex: boolean;
    needOuterDraw: boolean;
    savedCursorX: number;
    savedCursorY: number;
    hasFocus: boolean;
    children: any[];
    zChildren: any[];
    elementType: string;
    id: any;
    isContainer: boolean;
    forceContentArray: boolean;
    noChildFocus: boolean;
    drawSelfCursor: any;
    strictInlineSupport: boolean;
    staticInline: boolean;
    inlineCursorRestoreAfterDraw: boolean;
    needInput: boolean;
    outerDrag: boolean;
    keyBindings: {};
    userActions: {};

    constructor(options?: Partial<ElementOptions>);

    private onKey(key: any, altKeys: any, data: any): any;
    computeBoundingBoxes(): void;
    resizeOnContent(): void;
    preDrawSelf(): this;
    postDrawSelf(): this;
    destroy(isSubDestroy?: boolean, noDraw?: boolean): void;
    debugId(): string;
    show(noDraw?: boolean): this;
    hide(noDraw?: boolean): this;
    clear(): void;
    attach(child: any, id: any): this;
    attachTo(parent: any, id: any): this;
    recursiveFixAttachment(document: any, id?: any): void;
    detach(noDraw?: boolean): this | undefined;
    resizeToContent(): void;
    zSort(): void;
    zInsert(child: any): void;
    updateZ: (z: any) => void;
    updateZIndex(z: any): void;
    topZ(): any;
    bottomZ(): any;
    restoreZ(): any;
    setContent(content: any, hasMarkup: any, dontDraw?: boolean, dontResize?: boolean): void;
    isAncestorOf(element: any): boolean;
    getParentContainer(): any;
    getFocusBranchIndex(): any;
    focusNextChild(loop?: boolean, type?: string): any;
    focusPreviousChild(loop?: boolean): any;
    childrenAt(x: any, y: any, filter?: null, matches?: any[]): any[];
    saveCursor(): this;
    restoreCursor(): this;
    draw(isInitialInlineDraw?: boolean): this;
    redraw: (force?: boolean) => this;
    outerDraw(force?: boolean): this;
    updateDraw(): void;
    descendantDraw(isSubcall: any): this;
    ascendantDraw(): this;
    drawCursor(): this;
    bindKey(key: any, action: any): void;
    getKeyBinding(key: any): string;
    getKeyBindings(key: any): Record<string,string>;
    getActionBinding(action: any, ui?: boolean): any[];
    getValue(): unknown;
    // setValue(): undefined;
    on(eventName: "parentResize",
        fn?: (coords: CoordsOptions) => void,
        options?: EventEmitter.AddListenerOptions): this;
    on(eventName: "submit",
        fn?: (value: string) => void,
        options?: EventEmitter.AddListenerOptions): this;

}
