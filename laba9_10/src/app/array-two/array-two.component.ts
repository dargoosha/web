import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-array-two',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './array-two.component.html',
  styleUrl: './array-two.component.css'
})
export class ArrayTwoComponent {
  matrix: number[][] = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0]
  ];
  columnSums: number[] = [];

  calculateColumnSums(): void {
    this.columnSums = [0, 0, 0];

 
    for (let col = 0; col < 3; col++) {
      for (let row = 0; row < 3; row++) {
        this.columnSums[col] += this.matrix[row][col]; 
      }
    }
  }
}
