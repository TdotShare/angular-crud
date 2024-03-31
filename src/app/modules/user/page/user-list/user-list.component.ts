import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators'; // Import map operator from RxJS
import { GetUserAll } from 'src/app/core/parameters/user/getUserAll';




@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent {
  displayedColumns: string[] = ['user_id' , 'user_username', 'user_password' , 'attachFileName'];
  dataSource : GetUserAll[] =  [];

  constructor(
    private http: HttpClient,
    private router: Router
    ) { }

  ngOnInit(): void {
    console.log(`user-list !`)
    this.http.get<GetUserAll[]>('https://localhost:7023/User/GetUserAll')
      .pipe(
        map(response => response) // ตัวอย่างการใช้ map operator เพื่อดึงข้อมูลที่ต้องการ
      )
      .subscribe(data => {

        this.dataSource = data
      });

  }

  btnGoToPageCreateData () : void {
    this.router.navigate(['user/userCreate']);
  }



}
