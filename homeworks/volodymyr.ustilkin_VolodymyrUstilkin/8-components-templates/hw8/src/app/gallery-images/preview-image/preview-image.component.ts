import {Component, Input, OnInit} from '@angular/core';

@Component({
    selector: 'app-preview-image',
    templateUrl: './preview-image.component.html',
    styleUrls: ['./preview-image.component.css']
})
export class PreviewImageComponent implements OnInit {
    @Input() id: number;
    @Input() smallUrl: string;
    @Input() fullUrl: string;
    @Input() isSelected: boolean;
    @Input() showFullImage = false;

    previewLoaded = false;
    fullLoaded = false;

    constructor() {
    }

    ngOnInit(): void {
    }

    completePreviewImageLoad(): void {
        this.previewLoaded = true;
    }

    completeFullImageLoad(): void {
        this.fullLoaded = true;
    }
}
