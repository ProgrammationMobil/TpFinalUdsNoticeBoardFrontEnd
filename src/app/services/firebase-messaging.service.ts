import { Injectable } from '@angular/core';
import { getMessaging, getToken } from 'firebase/messaging';
import { initializeApp, getApps } from 'firebase/app';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class FirebaseMessagingService {
  constructor(private http: HttpClient) {}
  requestPermissionAndGetToken() {
    Notification.requestPermission().then((permission) => {
      if (permission === 'granted') {
        if (!getApps().length) {
          initializeApp(environment.firebase);
        }

        const messaging = getMessaging();
        getToken(messaging, {
          vapidKey: 'BBTWnSOYn_yQUA-67oFXGWGet8yTdNSjteTcsEKYl19mUVLbRkTfyUGbI7zzbp1UltHu7R2_yIHHpA0UDMljYS4',
        })
          .then((currentToken) => {
            if (currentToken) {
              console.log('Token FCM récupéré :', currentToken);

              // Envoi au backend
              this.sendTokenToBackend(currentToken);
            } else {
              console.warn('Aucun token FCM disponible.');
            }
          })
          .catch((err) => {
            console.error('Erreur lors de la récupération du token FCM :', err);
          });
      } else {
        console.warn('Permission de notification refusée.');
      }
    });
  }

   private sendTokenToBackend(token: string) {
        const url = 'http://localhost:8080/api/notifications/token'; // a adapter en fonction du point d'entrer du controller
        this.http.post(url, { token }).subscribe({
           next: () => console.log('Token envoyé au backend.'),
           error: (err) => console.error('Erreur lors de l’envoi au backend :', err),
        });
    }
}
