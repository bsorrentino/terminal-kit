import { TextBox, TextBoxOptions } from "./TextBox";


interface EditableTextBoxOptions extends TextBoxOptions {
}

declare class EditableTextBox extends TextBox {
    constructor(options: Partial<EditableTextBoxOptions>);
}

