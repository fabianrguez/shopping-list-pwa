import { Component, OnInit, Input, ViewChild, ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-collapse-item',
  templateUrl: './collapse-item.component.html',
  styleUrls: ['./collapse-item.component.css']
})
export class CollapseItemComponent implements OnInit {

  @Input() title: string;
  @Input() items: [] = [];

  @ViewChild('toggleElement') toggleElement: ElementRef;

  isDisabled: boolean;
  itemsChecked: any[] = [];
  buttonDisabled: boolean = true;

  constructor(private renderer: Renderer2) { }

  ngOnInit(): void {
    this.isDisabled = true;
  }

  toggle(){
    const {nativeElement: element} = this.toggleElement;
    const {nextElementSibling: content} = element; 
    const action = this.isDisabled ? 'addClass' : 'removeClass';

    if (this.items.length > 0) {
      this.renderer[action](element, 'active');
      if (content.style.maxHeight) {
        content.style.maxHeight = null;
      } else {
        content.style.maxHeight = content.scrollHeight + "px";
      }
      this.isDisabled = !this.isDisabled;
    }
  }

  checkItem(e: any) {
    const { target: checkbox} = e;
    const itemFound = this.items.find((item: any) => item.id === +checkbox.value);
    if (checkbox.checked) {
      this.itemsChecked.push(itemFound);
    } else {
      const index = this.itemsChecked.indexOf(itemFound);
      this.itemsChecked.splice(index, 1);
    }
    this.itemsChecked.length > 0 ? this.buttonDisabled = false : this.buttonDisabled = true;
  }

  addItems() {
    console.log(this.itemsChecked);
  }
}
