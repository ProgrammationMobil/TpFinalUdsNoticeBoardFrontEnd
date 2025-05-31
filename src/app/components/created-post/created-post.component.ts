import {Component, inject} from '@angular/core';
import {IonicModule} from "@ionic/angular";
import {FormsModule,FormGroup, ReactiveFormsModule, FormBuilder} from "@angular/forms";
import {Camera, CameraResultType, CameraSource} from "@capacitor/camera";
import {CommonModule} from "@angular/common";
import {Router} from "@angular/router";
import {PostModel} from "../../models/post.model";
import {PostService} from "../../services/post.service";
@Component({
  selector: 'app-created-post',
  templateUrl: './created-post.component.html',
  styleUrls: ['./created-post.component.scss'],
  imports: [
    IonicModule,
    FormsModule,CommonModule
  ]
})
export class CreatedPostComponent {
  selectedImage: string | ArrayBuffer | undefined = undefined;
  imageSelect: String | undefined = undefined;
  textArea!:String;
  file: File | undefined = undefined;
  currentIndex = 1;
  private route = inject(Router)
  private postService = inject(PostService);
  constructor() {

  }

  // Méthode pour sélectionner une image
  async selectImage() {
    try {
      const image = await Camera.getPhoto({
        quality: 90,              // Qualité de l'image (0-100)
        allowEditing: false,      // Désactive l'édition après sélection
        resultType: CameraResultType.Uri,
        source: CameraSource.Photos
      });
      console.log('Image sélectionnée:', image.webPath);
      this.imageSelect = image.webPath;
    } catch (error) {
      console.error('Erreur lors de la sélection de l\'image', error);
    }

  }

  // Méthode pour Poster
  post(e:Event) {
    e.preventDefault();

    const user = JSON.parse(localStorage.getItem('user')!);
    const newPost: PostModel = {
      id: this.currentIndex ++, // sera ignoré côté backend
      title: this.textArea.slice(0, 30), // exemple de titre automatique
      content: this.textArea,
      author: user?.username || 'inconnu',
      image: this.imageSelect,
      document: this.file ? this.file.name : undefined, // si un fichier est sélectionné
      like: 0,
      createdAt: new Date()
    };

    this.postService.createPost(newPost).subscribe({
      next: res => {
        console.log('Publication créée', res);
        // reset du formulaire si besoin
        this.textArea = '';
        this.imageSelect = undefined;
        this.file = undefined;
        // redirection vers la page d'accueil ou une autre page
        this.route.navigateByUrl('/').then(r => true);
      },
      error: err => console.error('Erreur création post:', err)
    });

  }

  openFileSelector(fileInput: HTMLInputElement) {
    fileInput.click();
  }

  onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.file = input.files[0];
      console.log('Fichier sélectionné:', this.file.name);
      // Tu peux maintenant l'envoyer au backend ou le prévisualiser
    }
  }

  closs() {
    this.route.navigateByUrl('/').then(r => true)
  }

}
