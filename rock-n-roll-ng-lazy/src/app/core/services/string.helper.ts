import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StringHelper {
  containsIgnoreCase = (s1: string, s2: string): boolean =>
    s1.toLowerCase().includes(s2.toLowerCase());
}
