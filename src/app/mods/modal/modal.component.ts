import { Component, OnInit, ElementRef, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  @Output() close = new EventEmitter();

  constructor(private el:ElementRef) { }

  ngOnInit(): void {
    document.body.appendChild(this.el.nativeElement);
    //We are now displaying our model as a part of the body element or as a direct child of the body elements.
  }

  ngOnDestroy() {
    this.el.nativeElement.remove();
    //We need to make sure that when we navigate away from this component, we delete or remove this element
  }

    onCloseClick(){
      // agregar Output, EventEmitter
      this.close.emit();
    }
}
