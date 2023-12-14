import {
  Component,
  inject,
} from '@angular/core';

import { NzModalService } from 'ng-zorro-antd/modal';

import { TipoAccionistas } from '../../interfaces/type-acc';
import { TypeAccService } from '../../services/type-acc.service';

@Component({
  selector: 'app-type-acc',
  templateUrl: './type-acc.component.html',
  styleUrls: ['./type-acc.component.css']
})
export class TypeAccComponent {
  DataTypeDoc: TipoAccionistas[] = [];
  private modal: NzModalService = inject (NzModalService)
  private tipoaccService: TypeAccService = inject (TypeAccService)
  ngOnInit():void {
    this.loadTypeAcc();
  }



  // ng one distroid
  // crear una funcion que se aload typedocument

  loadTypeAcc ():void {
    this.tipoaccService.typeAcc().subscribe( DataTypeDoc => {
      this.DataTypeDoc = DataTypeDoc;
  })}

   showConfirm(): void {
     this.modal.confirm({
       nzTitle: '<i>Esta seguro de generar nuevo Documento?</i>',
       nzContent: '<b>El nuevo documento estara disponible para ser asignado al accionista.</b>',
       nzOnOk: () => console.log('OK')
     });
   }

   showDeleteConfirm(): void {
    this.modal.confirm({
      nzTitle: 'Esta seguro de Eliminar este documento?',
      nzContent: '<b style="color: red;">Se eliminara este tipo de de documento</b>',
      nzOkText: 'Eliminar',
      nzOkType: 'primary',
      nzOkDanger: true,
      nzOnOk: () => console.log('OK'),
      nzCancelText: 'Cancelar',
      nzOnCancel: () => console.log('Cancel')
    });
  }

  warning(): void {
    this.modal.warning({
      nzTitle: 'This is an warning message',
      nzContent: 'some messages...some messages...',


    });
  }
}
