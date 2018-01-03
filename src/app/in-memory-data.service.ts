import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 11, name: 'Yousuf Zaman' },
      { id: 12, name: 'Haris-uz Zaman Saad' },
      { id: 13, name: 'Shifat Rahaman' },
      { id: 14, name: 'Shamiya' },
      { id: 15, name: 'Jahidul Islam' },
      { id: 16, name: 'Shahriar Hossain' },
      { id: 17, name: 'Khalid Bin Habib' },
      { id: 18, name: 'Techno Surf' },
      { id: 19, name: 'Booking Spider' },
      { id: 20, name: 'Cloud Nest' }
    ];
    return {heroes};
  }
}