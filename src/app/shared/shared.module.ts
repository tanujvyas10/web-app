 /** Angular Imports */
 import { NgModule } from '@angular/core';
 import { CommonModule } from '@angular/common';
 import { ReactiveFormsModule, FormsModule } from '@angular/forms';
  /** Custom Components */
 import { DeleteDialogComponent } from './delete-dialog/delete-dialog.component';
 import { FileUploadComponent } from './file-upload/file-upload.component';
 import { FooterComponent } from './footer/footer.component';
 import { LanguageSelectorComponent } from './language-selector/language-selector.component';
 import { ThemePickerComponent } from './theme-picker/theme-picker.component';
 /** Custom Modules */
 import { IconsModule } from './icons.module';
 import { MaterialModule } from './material.module';
 import { FontPickerComponent } from './font-picker/font-picker.component';
  /**
   * Shared Module
   *
   * Modules and components that are shared throughout the application should be here.
   */
 @NgModule({
   imports: [
     CommonModule,
     IconsModule,
     FormsModule,
     MaterialModule,
     ReactiveFormsModule
   ],
   declarations: [
     DeleteDialogComponent,
     FileUploadComponent,
     FontPickerComponent,
     FooterComponent,
     LanguageSelectorComponent,
     ThemePickerComponent
   ],
   exports: [
     FileUploadComponent,
     FooterComponent,
     FontPickerComponent,
     LanguageSelectorComponent,
     ThemePickerComponent,
     CommonModule,
     IconsModule,
     MaterialModule,
     FormsModule,
     ReactiveFormsModule
   ],
   entryComponents: [
     DeleteDialogComponent
   ]
 })
 export class SharedModule { }

