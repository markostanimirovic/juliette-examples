import { Musician } from '../models/musician';
import { Weapon } from '../models/weapon';

export const musiciansMock: Musician[] = [
  { name: 'Charlie Watts', weapon: Weapon.DRUMS },
  { name: 'Eric Clapton', weapon: Weapon.GUITAR },
  { name: 'Jimi Hendrix', weapon: Weapon.GUITAR },
  { name: 'Keith Richards', weapon: Weapon.GUITAR },
  { name: 'Paul McCartney', weapon: Weapon.BASS },
  { name: 'Steve Gadd', weapon: Weapon.DRUMS },
  { name: 'Stevie Ray Vaughan', weapon: Weapon.GUITAR },
];
