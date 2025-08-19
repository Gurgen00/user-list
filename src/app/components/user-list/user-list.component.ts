import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListboxModule } from 'primeng/listbox';
import { User } from '../../services/user.model';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [CommonModule, ListboxModule],
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent {
  @Input() users: User[] = [];
  @Output() userSelect = new EventEmitter<User>();

  onSelect(user: User) {
    this.userSelect.emit(user);
  }
}
