import { BaseMenu, BaseMenuOptions } from "./BaseMenu";
import { Button } from "./Button";

interface ColumnMenuOptions extends BaseMenuOptions {
    pageMaxHeight: number;
    multiLineItems: boolean;
}

declare class ColumnMenu extends BaseMenu {
    constructor(options: Partial<ColumnMenuOptions>);
    onParentResize: any;
    buttonsMaxWidth: number;
    buttonPaddingWidth: number;
    buttonSymbolWidth: number;
    pageHeight: number;
    pageItemsDef: any[] | null;
    maxHeight: any;
    multiLineItems: boolean;
    inlineNewLine: boolean;
    ButtonClass: typeof Button;
    defaultOptions: {
        buttonBlurAttr: {
            bgColor: string;
            color: string;
            bold: boolean;
        };
        buttonEvenBlurAttr: null;
        buttonFocusAttr: {
            bgColor: string;
            color: string;
            bold: boolean;
        };
        buttonDisabledAttr: {
            bgColor: string;
            color: string;
            bold: boolean;
        };
        buttonSubmittedAttr: {
            bgColor: string;
            color: string;
            bold: boolean;
        };
        buttonTurnedOnBlurAttr: {
            bgColor: string;
        };
        buttonTurnedOnFocusAttr: {
            bgColor: string;
            color: string;
            bold: boolean;
        };
        buttonTurnedOffBlurAttr: {
            bgColor: string;
            dim: boolean;
        };
        buttonTurnedOffFocusAttr: {
            bgColor: string;
            color: string;
            bold: boolean;
        };
    };
    keyBindings: {
        UP: string;
        DOWN: string;
        PAGE_UP: string;
        PAGE_DOWN: string;
        HOME: string;
        END: string;
        ALT_ENTER: string;
        ESCAPE: string;
        LEFT: string;
        RIGHT: string;
    };
    buttonKeyBindings: {
        ENTER: string;
        KP_ENTER: string;
    };
    toggleButtonKeyBindings: {
        ENTER: string;
        KP_ENTER: string;
    };
    initChildren(noInitPage?: boolean): void;
    previousPageDef: any;
    nextPageDef: any;
    masterDef: any;
    maxPage: number;
    separatorDef: any;
    outputWidth: number;
    initPage(page?: any): void;
    needOuterDraw: boolean;
    outputHeight: number;
    page: number;
}