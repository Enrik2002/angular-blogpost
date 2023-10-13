import {
  AfterViewChecked,
  AfterViewInit, ChangeDetectorRef,
  Component, DoCheck,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output
} from '@angular/core';

// @ts-ignore
@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements DoCheck {
  @Input() amount;
  @Input() currentPage;
  @Input() maxItems;
  amountOfPages = 0;

  @Output() onNewPage = new EventEmitter<number>();

  ngDoCheck() {
    this.amountOfPages = Math.ceil(this.amount / this.maxItems);
  }

  changePage(pageNumber : number) {
    console.log('emit ' + pageNumber)
    this.onNewPage.emit(pageNumber);
  }


}
