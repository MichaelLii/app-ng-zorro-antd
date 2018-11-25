import { HttpClient } from '@angular/common/http';
import { ChangeDetectorRef, ElementRef, OnChanges, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { NzUpdateHostClassService } from '../core/services/update-host-class.service';
import { UploadFile, ZipButtonOptions } from './interface';
export declare class NzUploadBtnComponent implements OnInit, OnChanges, OnDestroy {
    private http;
    private el;
    private updateHostClassService;
    private cd;
    reqs: {
        [key: string]: Subscription;
    };
    private inited;
    private destroy;
    file: ElementRef;
    classes: {};
    options: ZipButtonOptions;
    onClick(): void;
    onKeyDown(e: KeyboardEvent): void;
    onFileDrop(e: DragEvent): void;
    onChange(e: Event): void;
    private traverseFileTree;
    private attrAccept;
    private attachUid;
    uploadFiles(fileList: FileList | File[]): void;
    private upload;
    private post;
    private xhr;
    private clean;
    abort(file?: UploadFile): void;
    private prefixCls;
    setClassMap(): void;
    constructor(http: HttpClient, el: ElementRef, updateHostClassService: NzUpdateHostClassService, cd: ChangeDetectorRef);
    ngOnInit(): void;
    ngOnChanges(): void;
    ngOnDestroy(): void;
}
