import { Component, OnInit,inject } from '@angular/core';
import {IonicModule} from "@ionic/angular";
import {FormBuilder, Validators, FormsModule, ReactiveFormsModule, FormGroup, FormControl} from '@angular/forms';
import {Router} from "@angular/router";
import {AuthService} from "../../services/auth.service";
import {CommonModule} from "@angular/common";
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  imports: [
    IonicModule,
    FormsModule,
    CommonModule,
    ReactiveFormsModule
  ]
})
export class RegisterComponent  {
  private Fb = inject(FormBuilder);
  form: FormGroup = this.Fb.group({
    username: ['', [Validators.required, Validators.minLength(4)]],
    password: ['', Validators.required],
    name: ['', [Validators.required, Validators.minLength(4)]],
    email: ['', [Validators.required, Validators.email]],
    phone: ['', Validators.required],
    role: ['user', [Validators.required]]
  });
  successMessage: string | null = null;
  errorMessage: string | null = null;

  constructor(private authService: AuthService, private router: Router) {
  }

  onRegister(event: Event): void {
    event.preventDefault();
    this.authService.register(this.form.value).subscribe({
      next: () => {
        this.successMessage = 'Inscription réussie ! Connectez-vous maintenant.';
        this.errorMessage = null;
        // Redirection vers la page de connexion

        console.log(this.form.value)
        setTimeout(() => this.router.navigateByUrl('/auth').then(r => true));
      },
      error: (err) => {
        this.errorMessage = 'Erreur lors de l’inscription : ' + err.message;
        this.successMessage = null;
      },
    });
    this.form.reset();
  }

  isInvalid(name: string) {
    const  control = this.form.get(name);
    return control?.invalid && (control?.dirty || control?.touched);
  }
}
