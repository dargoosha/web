import { Routes } from '@angular/router';
import { ArrayOneComponent } from './array-one/array-one.component';
import { ArrayTwoComponent } from './array-two/array-two.component';
import { TableComponent } from './table/table.component';
export const routes: Routes = [
    {path: 'classes', component: TableComponent},
    {path: 'array-one', component: ArrayOneComponent},
    {path: 'array-two', component: ArrayTwoComponent}
];
