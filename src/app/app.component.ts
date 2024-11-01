import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgClass, NgFor } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, NgClass, NgFor],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',

})
export class AppComponent {
  messages = [
    { sender: 'Atendente', text: 'Bom dia, Fernanda!' },
    {
      sender: 'Atendente',
      text: 'Estamos com 60% de desconto no novo pacote de internet. Tem interesse?',
    },
    { sender: 'Você', text: 'Bom dia, moça!' },
    { sender: 'Você', text: 'não tenho, obrigada!' },
    {
      sender: 'Atendente',
      text: 'Certo! Caso mude de ideia, entre em contato comigo!',
    },
  ];

  userMessage: string = '';
  latestMessage: string = '';

  enviarMensagem() {
    if (this.userMessage.trim()) {
      this.messages.push({ sender: 'Você', text: this.userMessage });
      this.latestMessage = this.userMessage;
      this.userMessage = ''; // Limpa o campo de entrada
    }
  }
}
