import { Element } from './Element'

export declare class Document {
    elements: Record<string, Element>
    
    constructor(options?: any);

    destroy(isSubDestroy: any, noDraw?: boolean): void;
    assignId(element: any, id: any): void;
    unassignId(element: any, id: any): void;
    giveFocusTo(element: any, type?: string): any;
    // giveFocusTo_(element: any, type: any): any;
    focusNext(): void;
    focusPrevious(): void;
    bubblingEvent(element: any, key: any, altKeys: any, data: any): void;
    defaultKeyHandling(key: any, altKeys: any, data: any): void;
    setMetaKeyPrefix(prefix: any, remove: any): void;
    getDocumentClipboard(key?: string): any;
    setDocumentClipboard(value: any, key?: string): void;
    clearDocumentClipboard(value: any, key?: string): void;
    createShortcuts(element: any, ...keys: any[]): void;
    removeElementShortcuts(element: any): void;

    mouseClick(data: any, clickType?: string): void;
    mouseMotion(data: any, exclude?: null): void;
    mouseMotionStart(data: any): void;
    mouseMotionEnd(): void;
    mouseDrag(data: any): void;
    mouseDragStart(data: any): void;
    mouseDragEnd(data: any): void;
    mouseWheel(data: any): void;
}