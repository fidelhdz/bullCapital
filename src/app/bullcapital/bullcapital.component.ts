import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bullcapital',
  templateUrl: './bullcapital.component.html',
  styleUrls: ['./bullcapital.component.scss']
})
export class BullcapitalComponent implements OnInit {
  title: string = 'Bull Capital :: Saltillo Coahuila MX';

  constructor() { }

  ngOnInit(): void {
  }

}
