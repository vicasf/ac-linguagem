import { Component } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';
import { ISerie } from '../model/ISerie';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor(public router: Router, public alertController: AlertController, public toastController: ToastController) {}

  listaSeries: ISerie[] = [
    {
      nome: 'Stranger Things (2016)',
      lancamento: '15/07/2016',
      temporadas: 4,
      classificacao: 8,
      cartaz: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/49WJfeN0moxb9IPfGn8AIqMGskD.jpg',
      generos: ['Drama','Mistério','Ficção Científica'],
      pagina: '/stranger-things',
      favorito: false
    },
    {
      nome: 'Tal mãe, Tal filha: Gilmore Girls (2000)',
      lancamento: '05/10/2000',
      temporadas: 7,
      classificacao: 7,
      cartaz: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/2PSVoTWWqJpUEkKcYsUwT1Yc0OV.jpg',
      generos: ['Drama','Comédia','Romance'],
      pagina: '/tal mãe-tal-filha-gilmore girls',
      favorito: true
    },
    {
      nome: "American Horror Story (2011)",
      lancamento: '15/07/2011',
      temporadas: 10,
      classificacao: 8,
      cartaz: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/dm6mHcA92QwqcyyzkYjPcySroxw.jpg',
      generos:  ['Mistério', 'Sci-fi & Fantasia'],
      pagina: '/american-horror-story',
      favorito: false
    },
    {
      nome: 'Elite (2018)',
      lancamento: '05/10/2018',
      temporadas: 4,
      classificacao: 8,
      cartaz: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/3NTAbAiao4JLzFQw6YxP1YZppM8.jpg',
      generos: ['Crime', 'Drama','Mistério'],
      pagina: '/elite',
      favorito: true
    },
    {
      nome: 'The Walking Dead (2010)',
      lancamento: '31/10/2010',
      temporadas: 11,
      classificacao: 8,
      cartaz: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/rqeYMLryjcawh2JeRpCVUDXYM5b.jpg',
      generos: ['Ação','Aventura', 'Mistério','Drama'],
      pagina: '/the-walking-dead',
      favorito: true
    }
  ];

  exibirSerie(serie: ISerie){
    const navigationExtras: NavigationExtras = {state:{paramFilme:serie}};
    this.router.navigate(['serie-detalhe'],navigationExtras);
  }
  async exibirAlertaFavorito(serie: ISerie) {
    const alert = await this.alertController.create({
      header: 'Meus Favoritos',
      message: 'Deseja realmente favoritar a serie?',
      buttons: [
        {
          text: 'Não',
          role: 'cancel',
          handler: () => {
            serie.favorito=false;
          }
        }, {
          text: 'Sim, favoritar.',
          handler: () => {
            serie.favorito=true;
            this.apresentarToast();
          }
        }
      ]
    });
    await alert.present();
  }
  async apresentarToast() {
    const toast = await this.toastController.create({
      message: 'Série adicionada aos favoritos!',
      duration: 2000,
      color: 'success',
      position: 'top'
    });
    toast.present();
  }
}
