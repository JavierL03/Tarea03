import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonItem,
  IonLabel,
  IonInput,
  IonButton,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-home',
  standalone: true,   // 👈 IMPORTANTE: standalone
  imports: [
    CommonModule,
    FormsModule,
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    IonItem,
    IonLabel,
    IonInput,
    IonButton,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardContent,
  ],
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage {
  quetzales: number | null = null;
  dolares: number | null = null;
  readonly TASA_CAMBIO = 8;

  convertir() {
    if (this.quetzales !== null && !isNaN(Number(this.quetzales))) {
      this.dolares = Number(this.quetzales) / this.TASA_CAMBIO;
    } else {
      this.dolares = null;
    }
  }
}
