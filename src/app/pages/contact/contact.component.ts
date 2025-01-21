import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-contact',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  contactForm : FormGroup;

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name : ['', [Validators.required, Validators.minLength(1)]],
      lastname : ['', [Validators.required, Validators.minLength(1)]],
      subject : ['', [Validators.required, Validators.minLength(2)]],
      message : ['', [Validators.required, Validators.minLength(10)]]
    })
  }

  onSubmit() : void {
    if(this.contactForm.valid){
      alert('Message envoyé');
      this.contactForm.reset();
    }else{
      alert('Veuillez remplir tous les champs')
    }
  }
}
