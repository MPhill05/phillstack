import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent implements OnInit {
  public collapseMenu = true;
    public title:string;
	public subTitle:string;
	public navToggle: boolean = false;
  constructor() { }

  ngOnInit() {
      this.title = 'Angular 2 Full-Screen';
    this.subTitle = 'menu / navigation';
	}
	
	toggleNav(){
		this.navToggle = !this.navToggle;
	}

}

