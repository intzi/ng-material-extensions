import { PropertyOptions } from './property-options';
import { Directive, DoCheck, Input, Host, Self, Optional } from '@angular/core';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { BehaviorSubject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { MatTableFilter } from './mat-table-filter.enum';
import { MatTableFilterService } from './services/mat-table-filter.service';

@Directive({
  selector: '[matTableFilter]',
  exportAs: 'matTableFilter'
})
export class MatTableFilterDirective implements DoCheck {
  private _oldExampleEntity: any;

  @Input() exampleEntity: any;

  /**
   * in millis
   */
  @Input() debounceTime = 400;
  @Input() filterType: MatTableFilter = MatTableFilter.ANYWHERE;
  @Input() caseSensitive = false;
  @Input() customPredicate: (data: any) => boolean;
  @Input() propertyOptions: PropertyOptions;
  private _exampleEntitySubject: BehaviorSubject<void>;


  constructor(
    private _filterService: MatTableFilterService,
    @Host() @Self() @Optional() private _table: MatTable<any>
  ) {
    this.initDebounceSubject();
  }

  ngDoCheck(): void {
    if (this._filterService.isChanged(this._oldExampleEntity, this.exampleEntity)) {
      this._oldExampleEntity = this._filterService.toPlainJson(this.exampleEntity);
      this._exampleEntitySubject.next(undefined);
    }
  }


  private initDebounceSubject() {
    this._exampleEntitySubject = new BehaviorSubject<void>(undefined);
    this._exampleEntitySubject.pipe(
      debounceTime(this.debounceTime))
      .subscribe(_ => {
        this.updateFilterPredicate();
      });
  }

  private updateFilterPredicate() {
    const matDataSource = this.getMatDataSource();
    if (matDataSource) {
      matDataSource.filterPredicate = this.getFilterPredicate();
      matDataSource.filter = this.exampleEntity as any;
    }
  }

  private getFilterPredicate() {
    if (this.customPredicate) {
      return this.customPredicate;
    } else {
      return (item: any): boolean => {
        return this._filterService.filterPredicate({ example: this.exampleEntity, item }, this.propertyOptions,
          { filterType: this.filterType, caseSensitive: this.caseSensitive });
      };
    }
  }

  private getMatDataSource(): MatTableDataSource<any> {
    const matTable = this._table as MatTable<any>;
    return (matTable.dataSource as MatTableDataSource<any>);
  }

}
