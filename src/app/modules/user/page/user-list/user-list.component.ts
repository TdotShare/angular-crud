import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators'; // Import map operator from RxJS
import { GetUserAll } from 'src/app/core/parameters/user/getUserAll';
import { UserService } from 'src/app/core/services/user.service';




@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent {

  displayedColumns: string[] = ['user_id', 'user_username', 'user_password', 'attachFileName'];
  dataSource: GetUserAll[] = [];

  page = 0
  rowsPerPage = 10
  searchVal = ""

  constructor(
    private router: Router,
    private userService: UserService
  ) {
    this.getUserAll()
  }

  onSearch(){

    let request = { searchUser : this.searchVal}

    this.userService.getSearchUser(request).subscribe((data) => {
      this.dataSource = data;
    })

  }

  onClear(){
    this.searchVal = ""
    this.getUserAll()
  }


  getUserAll() {
    return this.userService.getUserAll().subscribe((data) => {
      this.dataSource = data;
    });
  }

  btnGoToPageCreateData(): void {
    this.router.navigate(['user/userCreate']);
  }




}
