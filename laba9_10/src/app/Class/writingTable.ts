import { Table } from "./table";

export class WritingTable extends Table {
    material: string = '';
  
    override getPrice(): number {
      const basePrice = super.getPrice();
      const processingCost = basePrice * 0.1;
      return basePrice + processingCost;
    }
  }
  