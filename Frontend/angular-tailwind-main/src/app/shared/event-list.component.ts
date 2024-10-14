import { Component, OnInit } from '@angular/core';
import { EventService } from '../services/event.service';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent implements OnInit {
  events: any[] = [];

  constructor(private eventService: EventService) {}

  ngOnInit(): void {
    this.eventService.getEvents().subscribe(data => {
      this.events = data;
    });
  }

  register(eventId: string): void {
    this.eventService.registerToEvent(eventId).subscribe(() => {
      console.log('Inscription réussie');
    });
  }
}
