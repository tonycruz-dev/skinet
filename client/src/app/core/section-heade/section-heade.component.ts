import { Component, OnInit } from '@angular/core';
import { BreadcrumbService } from 'xng-breadcrumb';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-section-heade',
  templateUrl: './section-heade.component.html',
  styleUrls: ['./section-heade.component.scss']
})
export class SectionHeadeComponent implements OnInit {

  breadcrumb$: Observable<any[]>;
  constructor(private bcService: BreadcrumbService) { }

  ngOnInit() {
    this.breadcrumb$ = this.bcService.breadcrumbs$;
  }

}
