import { Component, computed, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserService } from './services/user.service';
import { User } from './services/user.model';
import { CommonModule } from '@angular/common';
import { UserFiltersComponent } from './components/user-filters/user-filters.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { UserDetailComponent } from './components/user-detail/user-detail.component';

@Component({
  selector: 'app-root',
  imports: [
    CommonModule,
    UserFiltersComponent,
    UserListComponent,
    UserDetailComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  private searchTerm = signal('');
  private filterType = signal<'all' | 'active' | 'inactive'>('all');
  private selectedEmail = signal<string | null>(null);

  constructor(private userService: UserService) {}

  filteredUsers = computed(() => {
    return this.userService
      .users()
      .filter((u) =>
        u.name.toLowerCase().includes(this.searchTerm().toLowerCase())
      )
      .filter((u) => {
        if (this.filterType() === 'active') return u.active;
        if (this.filterType() === 'inactive') return !u.active;
        return true;
      });
  });

  selectedUserEmail = computed(() => this.selectedEmail());

  onSearchChange(value: string) {
    this.searchTerm.set(value);
  }

  onFilterChange(value: string) {
    this.filterType.set(value as 'all' | 'active' | 'inactive');
  }

  onUserSelect(user: User) {
    this.selectedEmail.set(user.email);
  }
}
