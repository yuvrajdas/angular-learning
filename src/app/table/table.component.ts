import { Component, OnInit } from '@angular/core';
const ELEMENT_DATA = [
  {tags:'All Tags', volume:'120', visibility:45},
  {tags:'AI Grouped Tags', volume:'120', visibility:45},
  {tags:'Common Words Tags', volume:'120', visibility:45},
  {tags:'Common Words Tags', volume:'120', visibility:45},
  {tags:'Common Words Tags', volume:'120', visibility:45},
  {tags:'Common Words Tags', volume:'120', visibility:45},
  
]
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  dataSource= ELEMENT_DATA;
  displayedColumns: string[] = ['tags', 'volume', 'visibility'];
  constructor() { }

  ngOnInit(): void {
  }

}
