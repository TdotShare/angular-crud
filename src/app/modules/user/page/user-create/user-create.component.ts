import { Component } from '@angular/core';
import { FormBuilder, FormGroup , FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.scss']
})
export class UserCreateComponent {


  createUserData = new FormGroup({
    user_username: new FormControl(''),
    user_password: new FormControl(''),
    fileSource: new FormControl('')
  });

  constructor(private fb: FormBuilder) {

  }


  onFileSelected(event: any) {
    const file : File = event.target.files[0];

    if (file) {
      this.createUserData.patchValue({
        fileSource: event.target.files[0]
      });
    }

  }

  onSubmit(): void {


    console.log(this.createUserData.value)


  }

}
