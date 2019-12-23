import {Component, OnInit, ViewChild, AfterViewInit, OnDestroy} from '@angular/core';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';

import { ApiService } from '../services/api.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-characters-list',
  templateUrl: './characters-list.component.html',
  styleUrls: ['./characters-list.component.scss']
})
export class CharactersListComponent implements OnInit, AfterViewInit, OnDestroy {
  public characters = [];

  displayedColumns: string[] = ['id', 'avatar', 'name', 'species'];
  dataSource: MatTableDataSource<unknown> = new MatTableDataSource();
  private charactersSubscription: Subscription;

  @ViewChild(MatSort, {static: false}) sort: MatSort;
  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.charactersSubscription = this.apiService.loadCharacter()
      .subscribe(data => {
        this.characters = data.results;
        console.log(this.characters);
        this.dataSource.data = this.characters;
      });
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  ngOnDestroy() {
    this.charactersSubscription.unsubscribe();
  }

}
