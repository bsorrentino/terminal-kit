import Terminal from "../Terminal";
import { TextOptions } from "./Text";

interface AnimatedTextOptions extends TextOptions  {
    animation: Terminal.AnimationOption;
    frameDuration: number;
    animationSpeed: number;
    frame: number;
}

declare class AnimatedText extends Text {
    animation: string|string[];;
    isAnimated: boolean;
    frameDuration: number;
    animationSpeed: number;
    frame: number;
    autoUpdateTimer: number | null;
    inlineCursorRestoreAfterDraw: boolean;
    content: any;

    constructor(options: Partial<AnimatedTextOptions>);

    animate(animationSpeed?: number): void;
    private autoUpdate();
}

