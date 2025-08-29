import { Injectable, signal } from '@angular/core';
import { User } from './user.model';

@Injectable({ providedIn: 'root' })
export class UserService {
  private _users = signal<User[]>([
    {
      id: 1,
      name: 'Алексей Иванов',
      email: 'alexey@example.com',
      active: true,
    },
    {
      id: 2,
      name: 'Мария Смирнова',
      email: 'maria@example.com',
      active: false,
    },
    { id: 3, name: 'Иван Петров', email: 'ivan@example.com', active: true },
    {
      id: 4,
      name: 'Ольга Кузнецова',
      email: 'olga@example.com',
      active: false,
    },
    {
      id: 5,
      name: 'Iren Arturovna',
      email: 'gurgenmovses@gmail.com',
      active: true,
    },
  ]);

  get users() {
    return this._users;
  }
}
