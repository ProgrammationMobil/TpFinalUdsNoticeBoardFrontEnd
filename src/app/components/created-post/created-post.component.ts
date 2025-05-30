import {Component, inject} from '@angular/core';
import {IonicModule} from "@ionic/angular";
import {FormsModule,FormGroup, ReactiveFormsModule, FormBuilder} from "@angular/forms";
import {Camera, CameraResultType, CameraSource} from "@capacitor/camera";
import {CommonModule} from "@angular/common";
import {Router} from "@angular/router";
import {PostModel} from "../../models/post.model";
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
  private route = inject(Router)
  constructor() {
    // @ts-ignore
  }

  // Méthode pour sélectionner une image
  selectedImage: any;
  imageSelect: any;
  textArea: any;
  async selectImage() {
    try {
      const image = await Camera.getPhoto({
        quality: 90,              // Qualité de l'image (0-100)
        allowEditing: false,      // Désactive l'édition après sélection
        resultType: CameraResultType.Uri, // Retourne un URI de l'image
        source: CameraSource.Photos         // Ouvre la galerie de photos
      });
      console.log('Image sélectionnée:', image.webPath);
      // Vous pouvez utiliser image.webPath pour afficher ou traiter l'image
      // Exemple : this.selectedImage = image.webPath;
      this.selectedImage = image.webPath;
    } catch (error) {
      console.error('Erreur lors de la sélection de l\'image', error);
    }

  }


  post(e:Event) {
    e.preventDefault();
    console.log(this.selectedImage  );
    console.log(this.textArea);

  }

  openFileSelector(fileInput: HTMLInputElement) {
    fileInput.click();
  }

  onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      const file = input.files[0];
      console.log('Fichier sélectionné :', file.name);
      // Tu peux maintenant l'envoyer au backend ou le prévisualiser
    }
  }

  closs() {
    this.route.navigateByUrl('/').then(r => true)
  }

}
