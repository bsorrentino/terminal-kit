import { Attr } from './Element'
import { BaseMenu, BaseMenuOptions } from "./BaseMenu";
import { Button } from "./Button";

interface RowMenuOptions extends BaseMenuOptions {
	justify: boolean;
	leftMargin: number;	// useful for InlineMenu: it's the place where the prompt is put

    separatorHasMarkup: boolean;
	separatorAttr: Partial<Attr>;
	separatorWidth:number ;	// Computed later

    buttonSeparatorHasMarkup: boolean;
    buttonSeparatorAttr: Partial<Attr>;

}

declare class RowMenu extends BaseMenu {
    buttonPaddingWidth: number;
    buttonSymbolWidth: number;
    pageItemsDef: any[];
    justify: boolean;
    leftMargin: number;
    separator: any;
    separatorHasMarkup: boolean;
    separatorAttr: any;
    separatorWidth: number;
    inlineNewLine: boolean;
    ButtonClass: typeof Button;
    previousPageDef: any;
    nextPageDef: any;
    maxPage: number;

    defaultOptions: {
        buttonBlurAttr: {
            bgColor: string;
            color: string;
        };
        buttonFocusAttr: {
            bgColor: string;
            color: string;
            dim: boolean;
        };
        buttonDisabledAttr: {
            bgColor: string;
            color: string;
        };
        buttonSubmittedAttr: {
            bgColor: string;
            color: string;
        };
    };
    keyBindings: {
        LEFT: string;
        RIGHT: string;
        PAGE_UP: string;
        PAGE_DOWN: string;
        HOME: string;
        END: string;
        ALT_ENTER: string;
    };
    buttonKeyBindings: {
        ENTER: string;
        KP_ENTER: string;
    };
    toggleButtonKeyBindings: {
        ENTER: string;
        KP_ENTER: string;
    };

    constructor(options: Partial<RowMenuOptions>);
    
    initChildren(noInitPage?: boolean): void;
    initPage(page?: any): void;
}