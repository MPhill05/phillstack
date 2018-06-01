import { Component, OnInit, HostListener, ElementRef } from '@angular/core';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { EmailService } from '../services/email/email.service';
import { NG_VALIDATORS } from '@angular/forms';
import { animate, query, stagger, style, transition, trigger, state } from '@angular/animations';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss'],
  animations: [
    trigger('parentAnimation', [
      state('show', style({
        // opacity: 1,
        // transform: "translateX(0)"
      })),
      state('hide', style({
        // opacity: 0,
        // transform: "translateX(-100%)"
      })),
        transition('hide => show', [
            query('.child', style({opacity: 0})),
            query('.child', stagger('500ms', [
                animate('1000ms .1s ease-out', style({opacity: 1}))
            ]))
        ]),
        transition('show => hide', [
            query('.child', style({opacity: 1})),
            query('.child', stagger('-500ms', [
                animate('100ms .1s ease-out', style({opacity: 0.2}))
            ]))
        ])
    ])
  ]
})
export class IndexComponent implements OnInit {
  public name;
  public email;
  public subject;
  public message;
  public subscribe;
  public isSubscribed;

  state = 'hide'

  constructor(private emailService: EmailService, public el: ElementRef) {
    this.isSubscribed = false;
   }

  @HostListener('window:scroll', ['$event'])
    checkScroll() {
      const componentPosition = this.el.nativeElement.offsetTop
      const scrollPosition = window.pageYOffset

      if (scrollPosition >= componentPosition) {
        this.state = 'show'
      } else {
        this.state = 'hide'
      }

    }

  ngOnInit() {
  }

  public sendEmail() {
    this.emailService.sendEmail(this.name, this.email, this.subject, this.message, this.subscribe).then((data) => {
      this.isSubscribed = true;
    }).catch((error) => {
      this.isSubscribed = null;
    });
  }

}
