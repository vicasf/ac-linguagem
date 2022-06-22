import { Component } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';
import { IFilme } from '../model/IFilme';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(public router: Router, public alertController: AlertController, public toastController: ToastController) {}

  listaFilmes: IFilme[] = [
    {
      nome: '10 Coisas que eu Odeio em Você (1999)',
      lancamento: '06/08/1999',
      duracao: '1h37min',
      classificacao: 6,
      cartaz: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/6WImK7UIRY7fZ0l9UwnxbP74w1p.jpg',
      generos: ['Comédia','Romance','Drama'],
      pagina: '/10 Coisas Que Eu Odeio em Você',
      favorito: false
    },
    {
      nome: 'Diário de uma Paixão (2004)',
      lancamento: '13/08/2004',
      duracao: '2h 3m',
      classificacao: 9,
      cartaz: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/r1ttV3XhgryvmJMlBfpbzUfm6bG.jpg',
      generos: ['Romance', 'Drama'],
      pagina: '/diário de uma paixão',
      favorito: false
    },
    {
      nome: 'Meninas Malvadas (2004)',
      lancamento: '09/07/2004',
      duracao: '1h 36m',
      classificacao: 7,
      cartaz: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/crXx4pzKET0ZyhSJDYMR3lS0Xnk.jpg',
      generos:  ['Comédia'],
      pagina: '/meninas malvadas',
      favorito: false
    },
    {
      nome: 'As Patricinhas de Beverly Hills (1995)',
      lancamento: '19/07/1995',
      duracao: '1h 37m',
      classificacao: 7,
      cartaz: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/r1xfxpMHZpp1P2KIwou15bjB5V7.jpg',
      generos: ['Comédia','Romance'],
      pagina: '/as patricinhas de beverly hills',
      favorito: true
    },
    {
      nome: 'De Repente 30 (2004)',
      lancamento: '20/08/2004',
      duracao: '1h 38m',
      classificacao: 6,
      cartaz: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/3ZewXNdHKpRE0LrJhj07bWkwQm4.jpg',
      generos: ['Romance','Comédia','Drama'],
      pagina: '/top-gun-maverick',
      favorito: true
    }
  ];

exibirFilme(filme: IFilme){
  const navigationExtras: NavigationExtras = {state:{paramFilme:filme}};
  this.router.navigate(['filme-detalhe'],navigationExtras);
}
async exibirAlertaFavorito(filme: IFilme) {
  const alert = await this.alertController.create({
    header: 'Meus Favoritos',
    message: 'Deseja realmente favoritar o filme?',
    buttons: [
      {
        text: 'Não',
        role: 'cancel',
        handler: () => {
          filme.favorito=false;
        }
      }, {
        text: 'Sim, favoritar.',
        handler: () => {
          filme.favorito=true;
          this.apresentarToast();
        }
      }
    ]
  });
  await alert.present();
}
async apresentarToast() {
  const toast = await this.toastController.create({
    message: 'Filme adicionado aos favoritos!',
    duration: 2000,
    color: 'success',
    position: 'top'
  });
  toast.present();
}
}
