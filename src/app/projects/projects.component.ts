import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [ CommonModule ],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  projects = [
    { name: 'E-commerce Platform', description: 'A full-stack e-commerce solution built with MEAN stack.', link: 'https://github.com/yourusername/ecommerce-platform' },
    { name: 'Task Management App', description: 'A React and Node.js based task management application with real-time updates.', link: 'https://github.com/yourusername/task-management-app' },
    { name: 'Social Media Dashboard', description: 'An Angular dashboard for managing multiple social media accounts.', link: 'https://github.com/yourusername/social-media-dashboard' }
  ];
}
