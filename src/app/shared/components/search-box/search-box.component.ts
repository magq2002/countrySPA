import { Component, EventEmitter, Input, OnDestroy, OnInit, Output, ViewChildren } from '@angular/core';
import { Subject, debounceTime } from 'rxjs';

@Component({
  selector: 'shared-search-box',
  templateUrl: './search-box.component.html',
  styles: ``
})
export class SearchBoxComponent implements OnInit, OnDestroy{

  private debouncer: Subject<string> = new Subject<string>();

  @Input()
  public placeholder: string = '';

  @Input()
  public initialValue: string = '';

  // @Output()
  // public onValue = new EventEmitter<string>();

  @Output()
  public onDebounce = new EventEmitter<string>();

  ngOnInit(): void {
    this.debouncer.pipe( debounceTime(300)).subscribe( value => {
      this.onDebounce.emit( value );
    })
  }

  ngOnDestroy(): void {
    this.debouncer.unsubscribe();
  }

  // emitValue( value: string):void{
  //   this.onValue.emit( value );
  // }

  onKeyPress( searchTerm: string ){
    this.debouncer.next( searchTerm );
  }

}
