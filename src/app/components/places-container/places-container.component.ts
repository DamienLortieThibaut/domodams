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

  constructor() {
    this.placesData.forEach(place => {
      let startDate = new Date();
      let endDate = new Date();
      // add 2 minutes
      startDate.setMinutes(startDate.getMinutes() + 1);
      endDate.setMinutes(endDate.getMinutes() + 1);

      place.actions.push({
        name: 'Allumer',
        description: 'Allumer la lumière',
        startdAt: startDate,
        endAt: endDate,
        isActived: true,
        image: 'light-on.png'
      });

      
    });
  }
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
