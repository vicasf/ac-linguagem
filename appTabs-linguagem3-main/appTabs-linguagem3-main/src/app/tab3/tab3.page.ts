import { Component } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';
import { IAtor } from '../model/IAtor';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  constructor(public router: Router, public alertController: AlertController, public toastController: ToastController) {}

  listaAtores: IAtor[] = [
    {
      nome: 'Thimotheé Chalamet',
      local: 'Manhattan, Nova Iorque, Nova York, EUA',
      idade: 26,
      cartaz: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/7ejM0s3hMZSnfibIX7OWXeQmRo.jpg',
      trabalhos: ['Me Chame pelo Seu Nome/Call Me by Your Name','Duna: Parte 1', 'Lady Bird: É Hora de Voar/Lady Bird'],
      pagina: '/thimothee-chalamet',
      favorito: true
    },
    {
      nome: 'Dacre Montgomery',
      local: 'Perth, Western Australia',
      idade: 27,
      cartaz: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/7ghdRaVPoBmsDiBL4ZFhTFIJpkN.jpg',
      trabalhos: ['Power Rangers', 'Stranger Things',],
      pagina: '/dacre-montegomery',
      favorito: true
    },
    {
      nome: 'Manu Ríos',
      local: 'Calzada de Calatrava, Espanha',
      idade: 23,
      cartaz: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/aXEgSlA9Lre0ouwk2mLY3hshVQA.jpg',
      trabalhos: ['Elite'],
      pagina: '/manu-rios',
      favorito: false
    },
    {
      nome: 'Ezra Miller',
      local: 'Wyckoff, New Jersey',
      idade: 29,
      cartaz: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/6wmTpbYpmhthaxzM5ss3377F9IV.jpg',
      trabalhos: ['The Perks of Being a Wallflower', 'The flash'],
      pagina: '/ezra-miller',
      favorito: false
    },
    {
      nome: 'Andrew Garfield',
      local: 'Los Angeles, California, EUA',
      idade: 33,
      cartaz: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/beO5YvbTjrr5yy8hW26KVDMSr35.jpg',
      trabalhos: ['O Espetacular Homem-Aranha','Homem-Aranha: Sem Volta para Casa','A Rede Social'],
      pagina: '/andrew-garfield',
      favorito: false
    }
  ];

  exibirAtor(ator: IAtor){
    const navigationExtras: NavigationExtras = {state:{paramFilme:ator}};
    this.router.navigate(['ator-detalhe'],navigationExtras);
  }
  async exibirAlertaFavorito(ator: IAtor) {
    const alert = await this.alertController.create({
      header: 'Meus Favoritos',
      message: 'Deseja realmente favoritar o ator?',
      buttons: [
        {
          text: 'Não',
          role: 'cancel',
          handler: () => {
            ator.favorito=false;
          }
        }, {
          text: 'Sim, favoritar.',
          handler: () => {
            ator.favorito=true;
            this.apresentarToast();
          }
        }
      ]
    });
    await alert.present();
  }
  async apresentarToast() {
    const toast = await this.toastController.create({
      message: 'Ator adicionado aos favoritos!',
      duration: 2000,
      color: 'success',
      position: 'top'
    });
    toast.present();
  }
}
