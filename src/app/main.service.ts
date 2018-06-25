import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class MainService {
  constructor(public router: Router) {
    this.router.events.subscribe((nav:any) => {
      if (nav.url != undefined) {
        console.log(nav.url);
        this.currentSlide = nav.url;
        this.updateSlide();
      }
    });
  }

  public currentTitle = 'Intro';
  public currentSlide = '/';

  public nextSlide() {
    if (this.currentSlide == '/') {
      this.router.navigateByUrl('/games');
    } else if (this.currentSlide == '/games') {
      this.router.navigateByUrl('/jslibs');
    } else if (this.currentSlide == '/jslibs') {
      this.router.navigateByUrl('/robotics');
    } else if (this.currentSlide == '/robotics') {
      this.router.navigateByUrl('/printing');
    } else if (this.currentSlide == '/printing') {
      this.router.navigateByUrl('/end');
    }
    
    this.updateSlide();
  }

  public prevSlide() {
    if (this.currentSlide == '/games') {
      this.router.navigateByUrl('/');
    } else if (this.currentSlide == '/jslibs') {
      this.router.navigateByUrl('/games');
    } else if (this.currentSlide == '/robotics') {
      this.router.navigateByUrl('/jslibs');
    } else if (this.currentSlide == '/printing') {
      this.router.navigateByUrl('/robotics');
    } else if (this.currentSlide == '/end') {
      this.router.navigateByUrl('/printing');
    }

    this.updateSlide();
  }

  public updateSlide() {
    if (this.currentSlide == '/') {
      this.currentTitle = 'Intro';
    } else if (this.currentSlide == '/games') {
      this.currentTitle = 'Programming Games';
    } else if (this.currentSlide == '/jslibs') {
      this.currentTitle = 'Javascript Libraries';
    } else if (this.currentSlide == '/robotics') {
      this.currentTitle = 'Robotics Tools';
    } else if (this.currentSlide == '/printing') {
      this.currentTitle = '3D Printing';
    } else if (this.currentSlide == '/end') {
      this.currentTitle = 'Conclusion';
    }
  }
}
