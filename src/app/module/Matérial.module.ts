import { FormGroup, FormsModule } from '@angular/forms'
import { NgModule } from "@angular/core";
import {MatCardModule} from '@angular/material/card';
import {MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import {MatMenuModule} from '@angular/material/menu';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { CommonModule } from '@angular/common';
import {MatChipsModule} from '@angular/material/chips';
import { MatListModule } from '@angular/material/list';
import { MatBadgeModule } from '@angular/material/badge';
import { MatSidenavModule } from '@angular/material/sidenav';
@NgModule({
    exports:[
        MatCardModule,
        MatTableModule,
        MatButtonModule,
        MatFormFieldModule,
        MatInputModule,
        MatPaginatorModule,
        MatSortModule,
        MatMenuModule,
        MatToolbarModule,
        MatIconModule,  
        MatSnackBarModule,
        MatFormFieldModule, 
        FormsModule,
        CommonModule,
        MatChipsModule,
        MatListModule,
        MatSidenavModule,
        MatBadgeModule
    


    ]
})
export class MaterialModule{}