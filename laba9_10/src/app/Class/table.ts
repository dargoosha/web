export class Table {
    name: string = '';
    area: number = 0;
    protected k: number = 500;
  
    getPrice(): number {
      return (this.area ** 2 / 3) + this.k;
    }
  }