import {Component, OnDestroy, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { ApiService } from '../services/api.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-character-details',
  templateUrl: './character-details.component.html',
  styleUrls: ['./character-details.component.scss']
})
export class CharacterDetailsComponent implements OnInit, OnDestroy {
  id: number;
  character: any;
  characterSub$: Subscription;

  constructor(private route: ActivatedRoute,
              private apiService: ApiService,
              private location: Location) { }

  ngOnInit() {
    this.id = +this.route.snapshot.paramMap.get('id');
    this.characterSub$ = this.apiService.getCharacterDyId(this.id)
      .subscribe(data => {
        this.character = data;
        console.log(this.character);
      });
  }

  goBack(): void {
    this.location.back();
  }

  ngOnDestroy(): void {
    this.characterSub$.unsubscribe();
  }

}
