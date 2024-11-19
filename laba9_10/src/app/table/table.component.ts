import { Component } from '@angular/core';
import { Table } from '../Class/table';
import { WritingTable } from '../Class/writingTable';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [
    FormsModule, 
    CommonModule 
  ],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css'
})
export class TableComponent {
  table: Table = new Table();
  writingTable: WritingTable = new WritingTable();
  tableType: string = 'regular'; // За замовчуванням тип столу — звичайний
  price: number | null = null;

  // Оновлення логіки в залежності від вибору типу столу
  onTableTypeChange(event: Event): void {
    const selectedType = (event.target as HTMLSelectElement).value;
    this.tableType = selectedType;
  }

  // Обчислення вартості
  calculatePrice(): void {
    if (this.tableType === 'writing') {
      this.price = this.writingTable.getPrice();
    } else {
      this.price = this.table.getPrice();
    }
  }
}
