import { Element, Attr, KeyBindings, ElementOptions } from './Element'
import { Button } from './Button'
import { LabeledInput } from './LabeledInput';

type ItemDefinition = { content: string , value?: number, key?: string }

type InputDefinition = 
    { 
        validator?: unknown; // Validators are not yet implemented
        key: string;
        type?: 'select' | 'select-multi' | 'selectMulti' | 'text';
        label: string ;
        width?: number;
        height?: number; 
        outputWidth?: number;
        labelWidth?: number;
        labelHasMarkup?: boolean;
        content?: string| string[];
        value?: unknown;
        items?: ItemDefinition[];

        labelFocusAttr?: Partial<Attr>;
        labelBlurAttr?: Partial<Attr>;
        buttonBlurAttr?: Partial<Attr>;
        buttonFocusAttr?: Partial<Attr>;
        buttonDisabledAttr?: Partial<Attr>;
        buttonSubmittedAttr?: Partial<Attr>;

        turnedOnBlurAttr?: Partial<Attr>;
        turnedOnFocusAttr?: Partial<Attr>;
        turnedOffBlurAttr?: Partial<Attr>;
        turnedOffFocusAttr?: Partial<Attr>;

        lineWrap?: boolean;
        wordWrap?: boolean;
        scrollable?: boolean;
        vScrollBar?: boolean;
        hScrollBar?: boolean;
        hiddenContent?: boolean;
        
        textAttr?:  Partial<Attr>;
        voidAttr?:  Partial<Attr>;
        emptyAttr?:  Partial<Attr>;
} 

type ButtonDefinition = {
    content: string , value: string
}

interface FormOptions extends ElementOptions {
    turnedOnBlurAttr: Partial<Attr>;
    turnedOffBlurAttr: Partial<Attr>;
    turnedOffFocusAttr: Partial<Attr>;
    emptyAttr: Partial<Attr>;
    textAttr: Partial<Attr>;
    labelBlurAttr:Partial<Attr>;
    labelFocusAttr: Partial<Attr>;
    turnedOnFocusAttr: Partial<Attr>;
    buttonBlurAttr: Partial<Attr>;
    buttonFocusAttr:Partial<Attr>;
    voidAttr: Partial<Attr>;
    outputWidth: number;
    buttons: ButtonDefinition[];
    width: number;
    noDraw: boolean;
    inputs: InputDefinition[];
    keyBindings: KeyBindings;
    textInputKeyBindings: KeyBindings;
}

declare class Form extends Element {
    constructor(options: Partial<FormOptions>);
    submitValue: unknown;
    inputsDef: InputDefinition[];
    labeledInputs: LabeledInput[];
    buttonsDef: ButtonDefinition[];
    buttons: Button[];
    focusChild: any;
    onButtonSubmit: any;
    onFocus: any;
    textAttr: Partial<Attr>;
    voidAttr:Partial<Attr>;
    labelFocusAttr: Partial<Attr>;
    labelBlurAttr: Partial<Attr>;
    buttonFocusAttr: Partial<Attr>;
    buttonBlurAttr: Partial<Attr>;
    turnedOnBlurAttr: Partial<Attr>;
    turnedOnFocusAttr: Partial<Attr>;
    turnedOffBlurAttr: Partial<Attr>;
    turnedOffFocusAttr: Partial<Attr>;
    keyBindings: KeyBindings;
    textInputKeyBindings: KeyBindings;
    needInput: boolean;
    selectInputKeyBindings: KeyBindings;
    selectMultiInputKeyBindings: KeyBindings;
    initChildren(): void;
    getValue(): {
        submit: unknown;
        fields: {};
    };
}
