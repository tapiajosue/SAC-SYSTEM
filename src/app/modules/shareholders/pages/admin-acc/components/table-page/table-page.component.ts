import { Component } from '@angular/core';

@Component({
  selector: 'app-table-page',
  templateUrl: './table-page.component.html',
  styleUrls: ['./table-page.component.css']
})
export class TablePageComponent {
  // DataShareholders: Accionistas[] = [];
  // private modal: NzModalService = inject (NzModalService)
  // private tipodocService: TypeAccService = inject (TypeAccService)
  // ngOnInit():void {
  //   this.loadTypeAcc();
  // }



  // // ng one distroid
  // // crear una funcion que se aload typedocument

  // loadTypeAcc ():void {
  //   this.tipodocService.typeAcc().subscribe( DataTypeDoc => {
  //     this.DataTypeDoc = DataTypeDoc;
  // })}

  //  showConfirm(): void {
  //    this.modal.confirm({
  //      nzTitle: '<i>Esta seguro de generar nuevo Documento?</i>',
  //      nzContent: '<b>El nuevo documento estara disponible para ser asignado al accionista.</b>',
  //      nzOnOk: () => console.log('OK')
  //    });
  //  }

  //  showDeleteConfirm(): void {
  //   this.modal.confirm({
  //     nzTitle: 'Esta seguro de Eliminar este documento?',
  //     nzContent: '<b style="color: red;">Se eliminara este tipo de de documento</b>',
  //     nzOkText: 'Eliminar',
  //     nzOkType: 'primary',
  //     nzOkDanger: true,
  //     nzOnOk: () => console.log('OK'),
  //     nzCancelText: 'Cancelar',
  //     nzOnCancel: () => console.log('Cancel')
  //   });
  // }

  // warning(): void {
  //   this.modal.warning({
  //     nzTitle: 'This is an warning message',
  //     nzContent: 'some messages...some messages...',


  //   });
  // }
}
