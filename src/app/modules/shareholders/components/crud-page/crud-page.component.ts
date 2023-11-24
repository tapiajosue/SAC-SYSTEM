import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-crud-page',
  templateUrl: './crud-page.component.html',
  styleUrls: ['./crud-page.component.css']
})
export class CrudPageComponent {
public crudForm: FormGroup = this.fb.group({
paternal_surname:['', [Validators.required, Validators.minLength(3) ]],
maternal_surname:['', [ Validators.required, Validators.minLength(3) ]],
name:['', [Validators.required, Validators.minLength(3) ]],

})

constructor(private fb: FormBuilder){}

onSave(): void {
  if (this.crudForm.invalid){return;}
  console.log(this.crudForm.value)
}

}
