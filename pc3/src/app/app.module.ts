import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './component/app.component';
import { SearchComponent } from './search/search.component';

import { Search_oldComponent } from './search_old/search_old.component';

/*Angular material*/

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './components/users/users.component';
import { NavbarComponent } from './navbar/navbar.component';

import { LoginComponent } from './login/login.component';
import { EstructuraComponent } from './estructura/estructura.component';
import { ArticleComponent } from './article/article.component';
import { FormularioComponent } from './formulario/formulario.component';
import { FilterPipe } from './pipes/filter.pipe';
import { UsuarioComponent } from './usuario/usuario.component';
import { AuthHeaderInterceptor } from './shared/auth-header.interceptor';
import { SignupComponent } from './signup/signup.component';
import { BoardUserComponent } from './board-user/board-user.component';



const appRoutes: Routes = [
  { path: 'app-search', component:SearchComponent},
  { path: 'app-search_old', component:Search_oldComponent},
  //{ path: 'app-estructura/:municipio', component:EstructuraComponent},
  //{ path: 'app-estructura/:ubicacion', component:EstructuraComponent},
  { path: 'app-article/:id', component:ArticleComponent},
  { path: 'app-navbar', component:NavbarComponent},
  { path: 'app-formulario', component:FormularioComponent},
  { path: 'app-login', component:LoginComponent},
  { path: 'app-estructura', component:EstructuraComponent},
  { path: 'app-article', component:ArticleComponent},
  { path: 'app-signup', component:SignupComponent},
  { path: 'app-usuario', component:UsuarioComponent},
  { path: 'app-board-user', component:BoardUserComponent},
  { path: '', redirectTo : '/app-search', pathMatch: 'full'},
  { path: '', redirectTo : '/app-users', pathMatch: 'full'},
  { path: '', redirectTo : '/app-login', pathMatch: 'full'},
  { path: '', redirectTo : '/app-estructura', pathMatch: 'full'},
  { path: '', redirectTo : '/app-article', pathMatch: 'full'},
  { path: '', redirectTo : '/app-formulario', pathMatch: 'full'},
  { path: '', redirectTo : '/app-board-user', pathMatch: 'full'},
  { path: '', redirectTo : '/app-signup', pathMatch: 'full'}
];
@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    Search_oldComponent,
    UsersComponent,
    NavbarComponent,
    LoginComponent,
    FormularioComponent,
    EstructuraComponent,
    ArticleComponent,
    FilterPipe,
    UsuarioComponent,
    SignupComponent,
    BoardUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [{
      provide: HTTP_INTERCEPTORS,
      useClass: AuthHeaderInterceptor,
      multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule {
}
