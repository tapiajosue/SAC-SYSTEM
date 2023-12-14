import {
  Component,
  inject,
  OnInit,
} from '@angular/core';

import { NzModalService } from 'ng-zorro-antd/modal';

import { TipoDocumento } from '../../interfaces/type-doc';
import { TypeDocService } from '../../services/type-doc.service';
import { MiModalComponent } from './components/modal/modal.component';

@Component({
  selector: 'app-type-doc',
  templateUrl: './type-doc.component.html',
  styleUrls: ['./type-doc.component.css'],
})
export class TypeDocComponent implements OnInit {
  DataTypeDoc: TipoDocumento[] = [];

  private modal: NzModalService = inject(NzModalService);

  private tipodocService: TypeDocService = inject(TypeDocService);
  ngOnInit(): void {
    this.loadTypeDocuments();
  }

  // ng one distroid
  // crear una funcion que se aload typedocument

  loadTypeDocuments(): void {
    this.tipodocService.typeDoc().subscribe((DataTypeDoc) => {
      this.DataTypeDoc = DataTypeDoc;
    });
  }

  showConfirm(): void {
    this.modal.confirm({
      nzTitle: '<i>Esta seguro de generar nuevo Documento?</i>',
      nzContent:
        '<b>El nuevo documento estara disponible para ser asignado al accionista.</b>',
      nzOnOk: () => console.log('OK'),
    });
  }

  showDeleteConfirm(): void {
    this.modal.confirm({
      nzTitle: 'Esta seguro de Eliminar este documento?',
      nzContent:
        '<b style="color: red;">Se eliminara este tipo de de documento</b>',
      nzOkText: 'Eliminar',
      nzOkType: 'primary',
      nzOkDanger: true,
      nzOnOk: () => console.log('OK'),
      nzCancelText: 'Cancelar',
      nzOnCancel: () => console.log('Cancel'),
    });
  }

  warning(): void {
    this.modal.warning({
      nzTitle: 'Esta seguro de modificar este campo?',
      nzContent: MiModalComponent,
      nzMaskClosable: false, // Impide cerrar el modal haciendo clic en el fondo
      nzCancelText: 'Cancelar',
      nzOnCancel: () => console.log('Cancel'),
      nzOkText: 'Guardar',
      nzOkType: 'primary',
      nzOkDanger: true,
      nzOnOk: () => console.log('OK'),
    });
  }
}
