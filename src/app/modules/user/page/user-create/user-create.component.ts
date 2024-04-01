import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { UserService } from 'src/app/core/services/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.scss']
})
export class UserCreateComponent {


  createUserData = new FormGroup({
    user_username: new FormControl(''),
    user_password: new FormControl(''),
    fileSource: new FormControl(null)
  });

  constructor(private userService: UserService) {

  }


  onFileSelected(event: any) {
    const file: File = event.target.files[0];

    if (file) {
      this.createUserData.patchValue({
        fileSource: event.target.files[0]
      });
    }

  }

  onSubmit(): void {

    //console.log(this.createUserData.value)

    let requestData = {
      user_username: this.createUserData.value['user_username'],
      user_password: this.createUserData.value['user_password']
    }


    if (requestData.user_username == '' || requestData.user_password == '') {
      Swal.fire({ text: `กรุณากรอกข้อมูลให้ครบ !`, icon: `info` })
      return;
    }

    this.userService.createUser(requestData).subscribe((resp) => {

      if (resp.bypass) {
        if(this.createUserData.value['fileSource'] != null){

          const formData = new FormData()

          formData.append("UserId", resp.data)
          formData.append("FileData", this.createUserData.value['fileSource'] )

          this.userService.uploadAttachedUser(formData).subscribe((res) => {
            if(res.bypass){
              Swal.fire({ text: `เพิ่มข้อมูลและอัปโหลดรูปภาพเรียบร้อย !`, icon: `success` })
            }
          })

        }else{

          Swal.fire({ text: `เพิ่มข้อมูลเรียบร้อย !`, icon: `success` })

        }
      }else{

        Swal.fire({ text: `ไม่สามารถเพิ่มข้อมูลได้ !`, icon: `info` })
      }
    })



  }

}
