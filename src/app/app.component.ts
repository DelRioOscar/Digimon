import { Component, OnInit } from '@angular/core';
import { Digimon } from './interface/digimon';
import { DigimonsService } from './services/digimons.service';
import { NgSelectConfig } from '@ng-select/ng-select';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  digimons: Digimon[];
  levels: any[];

  name: string;
  level: string;

  isLoading: boolean = false;
  isError: boolean = false;

  constructor(private digimonsService: DigimonsService, private config: NgSelectConfig) {
    this.config.notFoundText = 'No encontrado';
    this.config.placeholder = 'Seleccione...';
  }

  ngOnInit() {
    this.levels = this.digimonsService.getLevels();
    this.getDigimons();
  }

  getDigimons() {
    this.isLoading = true;
    this.digimonsService.getDigimons().subscribe(r => {
      this.digimons = r;
      this.isLoading = false;
    });
  }

  searchByLevel() {
    this.isLoading = true;
    this.digimonsService.getByLevel(this.level).subscribe(r => {
      this.digimons = r;
      this.isLoading = false;
    });
  }

  searchByName() {
    this.isLoading = true;
    this.digimonsService.getByName(this.name).subscribe(r => {
      this.digimons = r;
      this.isLoading = false;
      this.name = '';
    }, (error: any) => {
      this.isLoading = false;
      this.isError = true;
    });
  }
}
