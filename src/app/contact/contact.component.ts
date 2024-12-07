import { Component } from '@angular/core';
import { FormsModule } from "@angular/forms"

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ FormsModule ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  name: string = '';
  email: string = '';
  message: string = '';

  onSubmit() {
    console.log('Form submitted', { name: this.name, email: this.email, message: this.message });
    // Here you would typically send this data to a backend service
    this.name = '';
    this.email = '';
    this.message = '';
    alert('Thank you for your message! I will get back to you soon.');
  }
}
