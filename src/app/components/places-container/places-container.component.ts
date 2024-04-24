import { Component, OnInit } from '@angular/core';
import { Place } from '../../models/place';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-places-container',
  templateUrl: './places-container.component.html',
  styleUrl: './places-container.component.scss'
})
export class PlacesContainerComponent implements OnInit {

  showModal: boolean = false;
  form: FormGroup;
  images: string[] = ['../../../assets/bathroom.png', '../../../assets/bedroom.png', '../../../assets/dining-room.png'];
  actions: string[] = ['Allumer la lumière', 'Allumer la télévision', 'Allumer le chauffage']
  selectedImage: string = '';
  
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

  constructor(private formBuilder: FormBuilder) {
    this.placesData.forEach(place => {
        const numActions = 5;
        const durationMinutes = 2;
        const randomActions = this.generateRandomActions(numActions, durationMinutes);
        
        place.actions.push(...randomActions);
    });
    console.log(this.placesData);
}

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    this.form = this.formBuilder.group({
      namePlace: ['', Validators.required],
      action: ['', Validators.required],
      startAt: ['', Validators.required],
      endAt: ['', Validators.required]
    });
  }

  supprimerPlace(place: Place): void {
    this.placesData = this.placesData.filter(p => p !== place);
  }

  updateValueImage(imageUrl: string): void {
    this.selectedImage = imageUrl;
  }
  
  ajouterPlace(): void {
    if (this.form.valid && this.selectedImage !== '') {
      const formData = this.form.value;
      const nouvellePlace: Place = {
        name: formData.namePlace,
        image: this.selectedImage,
        description: formData.action,
        created_at: formData.startAt,
        updated_at: formData.endAt,
        logs: [],
        actions: [],
      };
      this.placesData.push(nouvellePlace);
      this.form.reset();
      this.selectedImage = '';
      this.showModal = false;
    }
    console.log(this.placesData);
    
  }

  ouvrirModal(): void {   
    this.showModal = true;
  }

  generateRandomActions(numActions: number, durationMinutes: number) {
    const actions = [];
    const usedTimes = new Set<string>();

    for (let i = 0; i < numActions; i++) {
        let randomStart = this.getRandomTime();
        
        // Ajouter au moins 15 minutes à l'heure de début pour garantir un écart minimal de 15 minutes
        let randomEnd = new Date(randomStart.getTime() + (durationMinutes + 15) * 60000);

        while (this.checkTimeOverlap(randomStart, randomEnd, usedTimes)) {
            randomStart = this.getRandomTime();
            randomEnd = new Date(randomStart.getTime() + (durationMinutes + 15) * 60000);
        }

        actions.push({
            name: 'Allumer',
            description: 'Allumer la lumière',
            startdAt: randomStart,
            endAt: randomEnd,
            isActived: true,
            image: 'light-on.png'
        });

        usedTimes.add([randomStart.getTime(), randomEnd.getTime()].join('-'));
    }

    return actions;
}


  getRandomTime() {
    const now = new Date();
    const startOfDay = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    const randomTime = new Date(startOfDay.getTime() + Math.random() * (now.getTime() - startOfDay.getTime()));
    return randomTime;
  }

  checkTimeOverlap(start: Date, end: Date, usedTimes: Set<string>) {
    const interval = [start.getTime(), end.getTime()].join('-');
    return [...usedTimes].some(usedInterval => {
        const [usedStart, usedEnd] = usedInterval.split('-').map(Number);
        return start <= new Date(usedEnd) && end >= new Date(usedStart);
    });
  }
  
  
}
