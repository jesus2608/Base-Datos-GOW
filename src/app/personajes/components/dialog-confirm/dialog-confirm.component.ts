import { Component, inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Datum } from '../../interfaces/personaje.interface';

@Component({
  selector: 'app-dialog-confirm',
  templateUrl: './dialog-confirm.component.html',
  styleUrl: './dialog-confirm.component.css'
})
export class DialogConfirmComponent {
  readonly dialog = inject(MatDialogRef<DialogConfirmComponent>)
  readonly data = inject<Datum>(MAT_DIALOG_DATA);

  onNoClick():void{
  this.dialog.close(false);
  }
  onConfirm():void{
    this.dialog.close(true);
  }
}
