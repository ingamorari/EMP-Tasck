import { Component, OnDestroy, OnInit } from '@angular/core';
import { AppService } from './app.service';
import { ITableData, TableData } from './constants';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'angular-project';
  data: ITableData[] = TableData;
  currentSort;
  searchValue: string;
  constructor(private readonly appService: AppService) {}

  public ngOnInit(): void {}

  public ngOnDestroy(): void {
    console.log('destroy');
  }
  public sortData(field: string, desc: boolean = false): void {
    if (this.currentSort?.field === field) {
      desc = !this.currentSort.desc;
    }
    this.currentSort = { field, desc };
    this.data.sort((a, b) => {
      if (this.deepFind(a, field) > this.deepFind(b, field)) {
        return desc ? 1 : -1;
      }
      if (this.deepFind(a, field) < this.deepFind(b, field)) {
        return desc ? -1 : 1;
      }
      return 0;
    });
  }

  public onSearch(): void {
    if (this.searchValue && this.searchValue !== '') {
      this.data = this.data.filter((element) => element.name.includes(this.searchValue));
    } else {
      this.data = TableData;
    }
  }

  protected deepFind(obj, path): any {
    let paths = path.split('.'),
      current = obj,
      i;

    for (i = 0; i < paths.length; ++i) {
      if (current[paths[i]] == undefined) {
        return undefined;
      } else {
        current = current[paths[i]];
      }
    }
    return current;
  }
}
