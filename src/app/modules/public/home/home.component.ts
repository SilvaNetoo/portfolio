import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  @ViewChild('jobs') jobs: ElementRef;
  @ViewChild('group') group: ElementRef;
  @ViewChild('services') services: ElementRef;
  @ViewChild('about') about: ElementRef;
  @ViewChild('contact') contact: ElementRef;

  constructor() {
    $(window).on("load scroll", function () {
      $(".mostrar").each(function () {
        var el = $(this);
        var eleHeight = el.outerHeight(); // altura da div
        var eleTopo = el.offset().top; // distancia da div ao topo do documento
        var scrlTopo = $(window).scrollTop(); // quanto foi rolada a janela
        var distance = eleTopo - scrlTopo; // distancia da div ao topo da janela
        var altJanela = window.innerHeight; // altura da janela
        if (distance <= altJanela - (eleHeight / 2)) {
          el.animate({ 'opacity': 1 }, 750);
        }
      });
    });
  }

  navigateTo(control: string) {
    if (control) {
      this[control].nativeElement.scrollIntoView({ behavior: 'smooth' });
    }
  }

  ngOnInit(): void {
  }

}
