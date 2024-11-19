import { Component } from '@angular/core';
import { ProjectFormComponent } from './project-form/project-form.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ProjectFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
}
