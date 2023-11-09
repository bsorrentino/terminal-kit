import { Element, Attr, ElementOptions, KeyBindings } from './Element'

type MenuItem = {
    content: string;
    value: string;
    type?: string;
    key?: string;
    markup?: boolean;
    disabled?: boolean;
    blurContent?: string;
    focusContent?: string;
    items?: MenuItem[];
    
}

interface BaseMenuOptions extends ElementOptions {
    contentEllipsis: string;
    previousPageContent: string;
    previousPageContentHasMarkup: boolean;
    nextPageContent: string;
    nextPageContentHasMarkup: boolean;
    items: MenuItem[];
    previousPage: any;
    nextPage: any;
    master: any;
    separator: any;
    submenu: boolean;
    isSubmenu: boolean;

    backgroundAttr: Partial<Attr>;

    buttonBlurAttr: Partial<Attr>;
    buttonEvenBlurAttr: Partial<Attr>;
    buttonFocusAttr: Partial<Attr>;
    buttonDisabledAttr: Partial<Attr>;
    buttonSubmittedAttr: Partial<Attr>;
    buttonTurnedOnBlurAttr: Partial<Attr>;
    buttonTurnedOnFocusAttr: Partial<Attr>;
    buttonTurnedOffBlurAttr: Partial<Attr>;
    buttonTurnedOffFocusAttr: Partial<Attr>;

    paddingHasMarkup: boolean;

    blurLeftPadding: string;
    blurRightPadding: string;
    focusLeftPadding: string;
    focusRightPadding: string;

    disabledLeftPadding: string;
    disabledRightPadding: string;

    submittedLeftPadding: string;
    submittedRightPadding: string;

    turnedOnBlurLeftPadding: string;
    turnedOnBlurRightPadding: string;
    turnedOffBlurLeftPadding: string;
    turnedOffBlurRightPadding: string;

    turnedOnFocusLeftPadding: string;
    turnedOnFocusRightPadding: string;
    turnedOffFocusLeftPadding: string;
    turnedOffFocusRightPadding: string;

    keyBindings: KeyBindings;
    buttonKeyBindings: KeyBindings;
    buttonActionKeyBindings: KeyBindings;
    toggleButtonKeyBindings: KeyBindings;
    toggleButtonActionKeyBindings: KeyBindings;
}

declare class BaseMenu extends Element {
    backgroundAttr: any;
    contentEllipsis: any;
    previousPageContent: any;
    previousPageContentHasMarkup: boolean;
    nextPageContent: any;
    nextPageContentHasMarkup: boolean;
    itemsDef: any;
    previousPageDef: any;
    nextPageDef: any;
    masterDef: any;
    separatorDef: any;
    buttons: any[];
    hotkeyToButtonIndex: Map<any, any>;
    focusChild: any;
    page: number;
    maxPage: number;
    hasSubmenu: boolean;
    isSubmenu: boolean;
    submenu: any;
    submenuParentButton: any;
    submenuOptions: any;
    onButtonSubmit: any;
    onButtonToggle: any;
    onButtonFocus: any;
    onButtonBlinked: any;
    onSubmenuSubmit: any;
    onWheel: any;
    onFocus: any;
    buttonBlurAttr: any;
    buttonEvenBlurAttr: any;
    buttonFocusAttr: any;
    buttonDisabledAttr: any;
    buttonSubmittedAttr: any;
    buttonTurnedOnBlurAttr: any;
    buttonTurnedOnFocusAttr: any;
    buttonTurnedOffBlurAttr: any;
    buttonTurnedOffFocusAttr: any;
    blurLeftPadding: any;
    blurRightPadding: any;
    focusLeftPadding: any;
    focusRightPadding: any;
    disabledLeftPadding: any;
    disabledRightPadding: any;
    submittedLeftPadding: any;
    submittedRightPadding: any;
    turnedOnBlurLeftPadding: any;
    turnedOnBlurRightPadding: any;
    turnedOffBlurLeftPadding: any;
    turnedOffBlurRightPadding: any;
    turnedOnFocusLeftPadding: any;
    turnedOnFocusRightPadding: any;
    turnedOffFocusLeftPadding: any;
    turnedOffFocusRightPadding: any;
    paddingHasMarkup: boolean;
    keyBindings: any;
    buttonKeyBindings: any;
    buttonActionKeyBindings: any;
    toggleButtonKeyBindings: any;
    toggleButtonActionKeyBindings: any;
    needInput: boolean;
    defaultOptions: {};
    childUseParentKeyValue: boolean;

    constructor(options: Partial<BaseMenuOptions>);

    destroy(isSubDestroy: any, noDraw?: boolean): void;
    previousPage(focusType: any): void;
    nextPage(focusType: any): void;
    toPage(page: any, focusType: any): void;
    focusValue(itemValue: string, focusType?: string, forceInitPage?: boolean): void;
    setItem(itemValue: any, itemOptions: any): boolean;
    openSubmenu(itemValue: any, button?: null): void;
    closeSubmenu(): boolean;
    initPage(): void;
}
