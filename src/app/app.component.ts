
import { animate, state, style, transition, trigger } from '@angular/animations';

import { Component } from '@angular/core';

 

export const heightGrow = trigger('heightGrow', [

    state(
        'closed',
        style({
          opacity: 0,
          height: 0,
          display: 'none'
        })

    ),
    state(
      'open',
        style({
          opacity: 1,
          height: '*',
          display: 'block'
        })
        ),
    transition('* => *', animate(300))
]);





@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [heightGrow]
})

export class AppComponent {

  title = 'my-expand-collapse-app';
  rowData = new Array();
  expandCollapse: string[] = [];


  ngOnInit() {


    this.rowData = [{
      title: 'Section 1',
      sectionRows: [
      {
        col1: 'Row 1 Column 1',
        col2: 'Row 1 Column 2',
        col3: 'Row 1 Column 3',
        col4: 'Row 1 Column 4'
      },
      {
        col1: 'Row 2 Column 1',
        col2: 'Row 2 Column 2',
        col3: 'Row 2 Column 3',
        col4: 'Row 2 Column 4'
      }
      ]
    },
    {
      title: 'Section 2',
      sectionRows: [
      {
        col1: 'Row 3 Column 1',
        col2: 'Row 3 Column 2',
        col3: 'Row 3 Column 3',
        col4: 'Row 3 Column 4'
      },
      {
        col1: 'Row 4 Column 1',
        col2: 'Row 4 Column 2',
        col3: 'Row 4 Column 3',
        col4: 'Row 4 Column 4'
      }
      ]
    },
    {
      title: 'Section 3',
      sectionRows: [
      {
        col1: 'Row 5 Column 1',
        col2: 'Row 5 Column 2',
        col3: 'Row 5 Column 3',
        col4: 'Row 5 Column 4'
      },
      {
        col1: 'Row 6 Column 1',
        col2: 'Row 6 Column 2',
        col3: 'Row 6 Column 3',
        col4: 'Row 6 Column 4'
      }
      ]
    }];

    this.expandCollapse.push('closed');
    this.expandCollapse.push('closed');
    this.expandCollapse.push('closed');
  }

 
  handleClick(i: number) {
    this.expandCollapse[i] = (this.expandCollapse[i] === 'open') ? 'closed' : 'open';
  }

 
  addRow(i: number) {
    const newRow =  {
      col1: 'New Row Column 1',
      col2: 'New Row Column 2',
      col3: 'New Row Column 3',
      col4: 'New Row Column 4'
    };
    this.rowData[i].sectionRows.push(newRow);
  }


  identify(index, item){
    return item.name;
 }

 
}