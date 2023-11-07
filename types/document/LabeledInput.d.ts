import { EditableTextBox } from "./EditableTextBox";
import { Bindings, ElementOptions, ScrollableOptions, Attr } from "./Element";

interface LabeledInputOptions extends ElementOptions, ScrollableOptions {
    hiddenContent: boolean;
    labelFocusAttr: Partial<Attr>;
    labelBlurAttr: Partial<Attr>;
    buttonBlurAttr: Partial<Attr>;
    buttonFocusAttr: Partial<Attr>;
    buttonDisabledAttr: Partial<Attr>;
    buttonSubmittedAttr: Partial<Attr>;
    turnedOnBlurAttr: Partial<Attr>;
    turnedOnFocusAttr: Partial<Attr>;
    turnedOffBlurAttr: Partial<Attr>;
    turnedOffFocusAttr: Partial<Attr>;
    textAttr: Partial<Attr>;
    voidAttr: Partial<Attr>;
    emptyAttr: Partial<Attr>;
    keyBindings: Bindings;
    type: string;
    noDraw: boolean;
    allowNewLine: boolean;
    lineWrap: boolean;
    wordWrap: boolean;

}


declare class LabeledInput extends Element {

    input: EditableTextBox;

    constructor(options: Partial<LabeledInputOptions>);

    private initInput(options: any): void;
    private initTextInput(options: any): void;
    private initSelectInput(options: any): void;
    private initSelectMultiInput(options: any): void;
    private onChildFocus(focus: any, type: any): void;

    updateStatus(): void;
    getValue(): string;
    setValue(value: string, dontDraw?: boolean): string;
    getContent(): string;
    setContent(content: string, hasMarkup?: boolean, dontDraw?: boolean): any;
}
