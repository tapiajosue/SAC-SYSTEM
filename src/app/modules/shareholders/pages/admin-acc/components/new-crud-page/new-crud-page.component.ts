import { Component } from '@angular/core';
import {
  AbstractControl,
  AsyncValidatorFn,
  FormControl,
  FormGroup,
  NonNullableFormBuilder,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from '@angular/forms';

import {
  Observable,
  Observer,
} from 'rxjs';

@Component({
  selector: 'app-new-crud-page',
  templateUrl: './new-crud-page.component.html',
  styles: [
    `
      [nz-form] {
        max-width: 100%;
      }
      button {
        margin-left: 8px;
      }
      nz-form-control {
        margin-left: 14px;
      }

    `
  ]
})
export class NewCrudPageComponent {
  validateForm: FormGroup<{
    apPaterno: FormControl<string >;
    apMaterno: FormControl<string>;
    nombres: FormControl<string>;
    nro_documento: FormControl<string>;
    tipo_documento_id: FormControl<string>;
    nit: FormControl<string>;
    pais: FormControl<string>;
    ciudad: FormControl<string>;
    direccion: FormControl<string>;
    nro:FormControl<string>;
    piso:FormControl<string>;
    dpto:FormControl<string>;
    folio:FormControl<string>;
    telefono: FormControl<string>;
    fax: FormControl<string>;
    email: FormControl<string>;
    empresa: FormControl<string>;
    estado: FormControl<string>;
    fecha_creacion: FormControl<string>;
    aud_login: FormControl<string>;
  }>;

  submitForm(): void {
    console.log('submit', this.validateForm.value);
  }

  resetForm(e: MouseEvent): void {
    e.preventDefault();
    this.validateForm.reset();
  }



  userNameAsyncValidator: AsyncValidatorFn = (control: AbstractControl) =>
    new Observable((observer: Observer<ValidationErrors | null>) => {
      setTimeout(() => {
        if (control.value === 'JasonWood') {
          // you have to return `{error: true}` to mark it as an error event
          observer.next({ error: true, duplicated: true });
        } else {
          observer.next(null);
        }
        observer.complete();
      }, 1000);
    });

  confirmValidator: ValidatorFn = (control: AbstractControl) => {
    if (!control.value) {
      return { error: true, required: true };
    }
    return {};
  };

  constructor(private fb: NonNullableFormBuilder) {
    this.validateForm = this.fb.group({
    apPaterno: ['', [Validators.required], [this.userNameAsyncValidator]],
    apMaterno: ['', [Validators.required], [this.userNameAsyncValidator]],
    nombres: ['', [Validators.required], [this.userNameAsyncValidator]],
    nro_documento:['', [Validators.required], [this.userNameAsyncValidator]],
    tipo_documento_id:['', [Validators.required], [this.userNameAsyncValidator]],
    nit:['', [Validators.required], [this.userNameAsyncValidator]],
    pais:['', [Validators.required], [this.userNameAsyncValidator]],
    ciudad:['', [Validators.required], [this.userNameAsyncValidator]],
    direccion:['', [Validators.required], [this.userNameAsyncValidator]],
    nro:['', [Validators.required], [this.userNameAsyncValidator]],
    piso:['', [Validators.required], [this.userNameAsyncValidator]],
    dpto:['', [Validators.required], [this.userNameAsyncValidator]],
    folio:['', [Validators.required], [this.userNameAsyncValidator]],
    telefono:['', [Validators.required], [this.userNameAsyncValidator]],
    fax:['', [Validators.required], [this.userNameAsyncValidator]],
    email: ['', [Validators.email, Validators.required]],
    empresa:['', [Validators.required], [this.userNameAsyncValidator]],
    estado:['', [Validators.required], [this.userNameAsyncValidator]],
    fecha_creacion:['', [Validators.required], [this.userNameAsyncValidator]],
    aud_login:['', [Validators.required], [this.userNameAsyncValidator]],

    });
  }
}
