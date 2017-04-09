import {
    Component, OnChanges, Input,
    Output, EventEmitter
} from '@angular/core';

@Component({
    selector: 'ai-star',
    templateUrl: './Scripts/App/shared/star.component.html',
    styleUrls: ['./Scripts/App/shared/star.component.css']
})
export class StarComponent implements OnChanges {
    @Input() rating: number;
    starWidth: number;
    @Output() ratingClicked: EventEmitter<string> =
    new EventEmitter<string>();

    ngOnChanges(): void {
        this.starWidth = this.rating * 86 / 5;
    }

    onClick(): void {
        this.ratingClicked.emit(`The rating ${this.rating} was clicked!`);
    }
}
