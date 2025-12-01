import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ChangeRegister } from './components/change-register/change-register';
import { Header } from './components/header/header';
import { Login } from './components/login/login';
import { MainHeader } from './components/main-header/main-header';
import { Postit } from './components/postit/postit';
import { Register } from './components/register/register';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ChangeRegister, Header, Login, MainHeader, Postit, Register],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('postsystem');
}
