import { Bindings, ElementOptions } from "./Element";

interface ButtonOptions extends ElementOptions {
    leftPadding: string;
    rightPadding: string;

    blurLeftPadding: string;
    blurRightPadding: string;

    focusLeftPadding: string;
    focusRightPadding: string;

    disabledLeftPadding: string;
    disabledRightPadding: string;

    submittedLeftPadding: string;
    submittedRightPadding: string;

    turnedOnBlurLeftPadding: string;
    turnedOnLeftPadding: string;
    turnedOnBlurRightPadding: string;
    turnedOnRightPadding: string;
    turnedOnFocusLeftPadding: string;
    turnedOnFocusRightPadding: string;

    turnedOffBlurLeftPadding: string;
    turnedOffLeftPadding: string;
    turnedOffBlurRightPadding: string;
    turnedOffRightPadding: string;
    turnedOffFocusLeftPadding: string;
    turnedOffFocusRightPadding: string;

    blurAttr: Partial<Attr>;
    focusAttr: Partial<Attr>;
    disabledAttr: Partial<Attr>;
    submittedAttr: Partial<Attr>;
    turnedOnBlurAttr: Partial<Attr>;
    turnedOnFocusAttr: Partial<Attr>;
    turnedOffBlurAttr: Partial<Attr>;
    turnedOffFocusAttr: Partial<Attr>;

    contentHasMarkup: boolean;
    paddingHasMarkup: boolean;

    // internalRole: any;
    disabled: boolean;
    submitted: any;
    submitOnce: boolean;
    keyBindings: Bindings;
    actionKeyBindings: Bindings;
    noDraw: boolean;
}

declare class Button extends Text {
    constructor(options: Partial<ButtonOptions>);

    setContent(content: any, hasMarkup: boolean, dontDraw?: boolean, dontResize?: boolean): void;
    computeContentWidth(): number;
    computeRequiredWidth(): number;
    blink(special?: null, animationCountdown?: number): void;
    updateStatus(): void;
    submit(special: any): void;
    unsubmit(): void;

}

