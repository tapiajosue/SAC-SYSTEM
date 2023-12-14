import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';

import { NzModalRef } from 'ng-zorro-antd/modal';

@Component({
  selector: 'app-mi-modal',
  templateUrl: './modal.component.html',
})
export class MiModalComponent {
  miFormulario: FormGroup;

  constructor(private modalRef: NzModalRef, private fb: FormBuilder) {
    this.miFormulario = this.fb.group({
      // Define tus campos de formulario aquí
      nombre: ['', Validators.required],
      // Agrega más campos según sea necesario
    });
  }

  cerrarModal(): void {
    this.modalRef.close();
  }

  guardarDatos(): void {
    // Lógica para guardar los datos del formulario
    console.log(this.miFormulario.value);
    // Cierra el modal después de guardar
    this.cerrarModal();
  }
}
