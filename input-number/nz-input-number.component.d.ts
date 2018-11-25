import { AfterViewInit, ElementRef, Renderer2 } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
export declare class NzInputNumberComponent implements ControlValueAccessor, AfterViewInit {
    private elementRef;
    private renderer;
    private isInit;
    private _disabled;
    private _step;
    private autoStepTimer;
    private _autoFocus;
    private _formatter;
    displayValue: string | number;
    actualValue: string | number;
    isFocused: boolean;
    value: string | number;
    el: HTMLElement;
    prefixCls: string;
    disabledUp: boolean;
    disabledDown: boolean;
    onChange: (value: number) => void;
    onTouched: () => void;
    inputElement: ElementRef;
    nzSize: 'small' | 'default' | 'large';
    nzMin: number;
    nzMax: number;
    nzParser: (value: any) => any;
    nzPrecision: number;
    nzPlaceHolder: string;
    readonly isLarge: boolean;
    readonly isSmall: boolean;
    nzAutoFocus: boolean;
    nzDisabled: boolean;
    nzStep: number;
    nzFormatter: (value: number) => string | number;
    updateAutoFocus(): void;
    onModelChange(value: string): void;
    getCurrentValidValue(value: string | number): number;
    isNotCompleteNumber(num: string | number): boolean;
    getValidValue(value: string | number): string | number;
    toNumber(num: string | number): number;
    onBlur(e: FocusEvent): void;
    onFocus(e: FocusEvent): void;
    getRatio(e: KeyboardEvent): number;
    down(e: MouseEvent | KeyboardEvent, ratio?: number): void;
    up(e: MouseEvent | KeyboardEvent, ratio?: number): void;
    getPrecision(value: number): number;
    getMaxPrecision(currentValue: string | number, ratio: number): number;
    getPrecisionFactor(currentValue: string | number, ratio: number): number;
    upStep(val: string | number, rat: number): number;
    downStep(val: string | number, rat: number): number;
    step(type: string, e: MouseEvent | KeyboardEvent, ratio?: number): void;
    stop(): void;
    setValue(value: number, emit: boolean): void;
    onKeyDown(e: KeyboardEvent): void;
    onKeyUp(e: KeyboardEvent): void;
    writeValue(value: number): void;
    registerOnChange(fn: (_: number) => void): void;
    registerOnTouched(fn: () => void): void;
    setDisabledState(isDisabled: boolean): void;
    focus(): void;
    blur(): void;
    constructor(elementRef: ElementRef, renderer: Renderer2);
    ngAfterViewInit(): void;
}