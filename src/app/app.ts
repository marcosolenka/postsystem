import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ChangeRegister } from './change-register/change-register';
import { Header } from './header/header';
import { Login } from './login/login';
import { MainHeader } from './main-header/main-header';
import { Postit } from './postit/postit';
import { Register } from './register/register';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ChangeRegister, Header, Login, MainHeader, Postit, Register],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('postsystem');
}
