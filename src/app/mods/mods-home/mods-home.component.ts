import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mods-home',
  templateUrl: './mods-home.component.html',
  styleUrls: ['./mods-home.component.css']
})
export class ModsHomeComponent implements OnInit {

  modalOpen = false;
  items = [
    {title: 'Why is the sky blue?', content: 'Because the air'},
    {title: 'What does an orange taste like?', content: 'An orange taste like an orange'},
    {title: 'What color is that cat?', content: 'That cat is an orange color'}
  ];

  constructor() {}

  ngOnInit(): void {}

  onClick() {
    this.modalOpen = !this.modalOpen;
  }

}
