import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})

export class GridComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'family'];
  dataSource: any;
  namChkHecli:any;

  //dataSource = ELEMENT_DATA;
  constructor(private http: HttpClient,
 ) {
debugger
  }



  ngOnInit() {
    
    // this.usersService.selectAllListOfclients().subscribe(
    //   (success)=>{
    //     debugger
        
    //     this.dataSource= new MatTableDataSource(success);
    //   }
    // )
  
    return this.http.get<any>("https://localhost:44390/api/Sliders").subscribe(
      (success) => {
        console.log('success',success)
      }
    )
      ;
   this.dataSource = null
  }

//  reload(){
//   this.usersService.selectAllListOfclients().subscribe(
//     (success)=>{
//       debugger
      
//       this.dataSource= new MatTableDataSource(success);
//     }
//   )
//  }

//  ngDoCheck(){
//   debugger
//   if(this.configService.flag==true){
//     this.usersService.selectAllListOfclients().subscribe(
//       (success)=>{
//         debugger
        
        // // // this.dataSource= new Ma?tTableDataSource(success);
//       }
//     )
  
// }
// }


}
