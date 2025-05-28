import {Component, inject, OnInit} from '@angular/core';
import {IonicModule} from "@ionic/angular";
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {CommonModule} from "@angular/common";
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  imports: [
    IonicModule,
    FormsModule,
    CommonModule,
    ReactiveFormsModule
  ]
})
export class LoginComponent  {

  private Fb = inject(FormBuilder);
  form: FormGroup = this.Fb.group({
    username: ['', [Validators.required, Validators.minLength(4)]],
    password: ['', Validators.required],
  });

  successMessage: string | null = null;
  errorMessage: string | null = null;

  constructor(private authService: AuthService, private router: Router) {}

  onLogin(e:Event): void {
    e.preventDefault();
    this.authService.login(this.form.value).subscribe({
      next: () => {
        this.successMessage = 'Connexion réussie !';
        this.errorMessage = null;
        // Redirection vers une page protégée (ex. tableau de bord)
        setTimeout(() => this.router.navigateByUrl('/home').then(r => true),1000);

      },
      error: (err) => {
        this.errorMessage = 'Erreur lors de la connexion : ' + err.message;
        this.successMessage = null;
      },
    });
    this.form.reset();
  }

  isInvalid(name: string) {
    const control = this.form.get(name);
    return control?.invalid && (control?.dirty || control?.touched);
  }

}
