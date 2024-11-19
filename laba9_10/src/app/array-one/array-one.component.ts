import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-array-one',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './array-one.component.html',
  styleUrl: './array-one.component.css'
})
export class ArrayOneComponent {
  array: number[] = []; 
  negativeCount: number = 0;  
  arraySize: number = 8; 

  
  generateArray(): void {
    this.array = [];  
    this.negativeCount = 0;  

    for (let i = 0; i < this.arraySize; i++) {
      const randomValue = this.getRandomNumber(-10, 10);
      this.array.push(randomValue);

      if (randomValue < 0) {
        this.negativeCount++;
      }
    }
  }

  private getRandomNumber(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}
