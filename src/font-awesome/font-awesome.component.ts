import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'fa',
  template: `
    <i class="fa fa-{{name}}" [ngClass]="options" aria-hidden="true"></i>
  `
})

export class FontAwesomeComponent implements OnInit {
  @Input() name: string;
  @Input() size?: string;
  @Input() fixed?: boolean;
  @Input() animation?: string;
  @Input() rotate?: string | number;
  @Input() spin?: boolean;
  @Input() inverse?: boolean;
  @Input() quote?: string;
  @Input() border?: boolean;
  @Input() pull?: string;
  private _options: Array<string> = [];
  constructor() { }

  ngOnInit() {
    if (!this.name) throw new Error("Missing name for Font Awesome Component");

    if (this.border) this.addOption(`fa-border`);

    if (this.size) this.addOption(`fa-${this.size}`);

    if (this.fixed) this.addOption(`fa-fw`);

    if (this.animation) this.addOption(`fa-${this.animation}`);

    if (this.rotate) {
      let rotate = (typeof this.rotate === 'number') ? `fa-rotate-${this.rotate}` : `fa-flip-${this.rotate}`;
      this.addOption(rotate);
    }

    if (this.inverse) this.addOption(`fa-inverse`);

    if (this.quote === 'left' || this.quote === 'right') {
        this.addOption(`fa-quote-${this.quote}`);
    }
    
    if (this.pull === 'left' || this.pull === 'right') {
        this.addOption(`fa-pull-${this.pull}`);
    }

  }

  get options() {
    return this._options;
  }

  private addOption(addClass: string): void {
    this._options.push(addClass);
  }
}