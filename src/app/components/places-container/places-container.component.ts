import { Component } from '@angular/core';
import { Place } from '../../models/place';

@Component({
  selector: 'app-places-container',
  templateUrl: './places-container.component.html',
  styleUrl: './places-container.component.scss'
})
export class PlacesContainerComponent {

  showModal: boolean = false;
  nouvellePlace: { nom: string, image: string } = { nom: '', image: '' };
  images: string[] = ['../../../assets/bathroom.png', '../../../assets/bedroom.png', '../../../assets/dining-room.png'];

  
  placesData: Place[] = [
    {
      name: 'Salle de Bain',
      image: 'bathroom.png',
      description: '',
      created_at: new Date(),
      updated_at: new Date(),
      logs: [
       
      ],
      actions: [
      
      ]
    },
    {
      name: 'Salle à manger',
      image: 'dining-room.png',
      description: '',
      created_at: new Date(),
      updated_at: new Date(),
      logs: [
      
      ],
      actions: [
    
      ]
    }
    ,
    {
      name: 'Garage',
      image: 'garage.png',
      description: '',
      created_at: new Date(),
      updated_at: new Date(),
      logs: [
      
      ],
      actions: [
    
      ]
    }
    ,
    {
      name: 'Buanderie',
      image: 'laundry-room.png',
      description: '',
      created_at: new Date(),
      updated_at: new Date(),
      logs: [
      
      ],
      actions: [
    
      ]
    }
    ,
    {
      name: 'Piscine',
      image: 'pool.png',
      description: '',
      created_at: new Date(),
      updated_at: new Date(),
      logs: [
      
      ],
      actions: [
    
      ]
    },
    {
      name: 'Chambre',
      image: 'bedroom.png',
      description: '',
      created_at: new Date(),
      updated_at: new Date(),
      logs: [
      
      ],
      actions: [
    
      ]
    },
    {
      name: 'Cuisine',
      image: 'kitchen.png',
      description: '',
      created_at: new Date(),
      updated_at: new Date(),
      logs: [
      
      ],
      actions: [
    
      ]
    }
    ,
    {
      name: 'Pompe à chaleur',
      image: 'heat-pump.png',
      description: '',
      created_at: new Date(),
      updated_at: new Date(),
      logs: [
      
      ],
      actions: [
    
      ]
    }
  ];

  supprimerPlace(place: Place): void {
    this.placesData = this.placesData.filter(p => p !== place);
  }
  
  ajouterPlace(): void {
    const nouvellePlace: Place = {
      name: 'Nouvelle Place',
      image: 'default.png',
      description: '',
      created_at: new Date(),
      updated_at: new Date(),
      logs: [],
      actions: []
    };
    this.placesData.push(nouvellePlace);
  }

  ouvrirModal(): void {
    this.showModal = true;
  }
}
