import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

export interface Member {
  id: number;
  name: string;
  role: string;
  availability: boolean;
  isAvailable?: Date;
}

export interface Project {
  name: string;
  description: string;
  teamMembers: Member[];
}

@Component({
  selector: 'app-project-form',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './project-form.component.html',
  styleUrl: './project-form.component.css',
})
export class ProjectFormComponent {
  project: Project = {
    name: '',
    description: '',
    teamMembers: [],
  };

  roles = ['Developer', 'Designer', 'Tester'];

  projectName = '';
  projectDescription = '';
  newMemberName = '';
  newMemberRole = '';
  // newMemberAvailability = false;

  addProject() {
    if (!this.projectName) {
      alert('Project name is required!');
    }
    this.project.name = this.projectName;
    this.project.description = this.projectDescription;
    this.projectName = '';
    this.projectDescription = '';
  }

  addMember() {
    if (!this.newMemberName || !this.newMemberRole) {
      alert('Name and role are required!');
      return;
    }

    this.project.teamMembers.push({
      id: Math.floor(Math.random() * 1000),
      name: this.newMemberName,
      role: this.newMemberRole,
      availability: false
    });

    this.newMemberName = '';
    this.newMemberRole = '';
    // this.newMemberAvailability = false;
  }

  removeMember(memberId: number) {
    this.project.teamMembers = this.project.teamMembers.filter(
      (member) => member.id !== memberId
    );
  }

  clearMembers() {
    this.project.teamMembers = [];
  }

  toggleAvailability(member: any) {
member.isAvailable = member.availability ? new Date() : undefined
  }
}
