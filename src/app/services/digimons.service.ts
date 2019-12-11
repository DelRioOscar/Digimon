import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Digimon } from '../interface/digimon';

@Injectable({
  providedIn: 'root'
})
export class DigimonsService {

  private levels: any[] = [
    { name: 'In Training' },
    { name: 'Rookie' },
    { name: 'Champion' },
    { name: 'Ultimate' },
    { name: 'Fresh' },
    { name: 'Mega' }
  ];

  constructor(private http: HttpClient) { }

  getDigimons() {
    return this.http.get<Digimon[]>(environment.api + 'digimon');
  }

  getByLevel(level: string) {
    return this.http.get<Digimon[]>(environment.api + `digimon/level/${level}`);
  }

  getByName(name: string) {
    return this.http.get<Digimon[]>(environment.api + `digimon/name/${name}`);
  }

  getLevels() {
    return this.levels;
  }
}
