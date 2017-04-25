import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators} from "@angular/forms";
import {User} from "../shared/user.interface";
import {UserService} from "../shared/user.service";
import {AlertService} from "../../shared/alert/alert.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  public  registrationForm: FormGroup;
  public submitted: boolean = false;
  public events: any[] = [];

  constructor(private _fb: FormBuilder, private _userService: UserService, private _alertService: AlertService, private _router: Router) { }

  ngOnInit() {

    this.registrationForm = this._fb.group({
      name: ['',[Validators.required]],
      email:['',[Validators.required]],
      password:['',[Validators.required]]
    });
  }

  register(user: User, isValid: boolean){
    this.submitted = true;
    if(isValid){
      this._userService.add(user)
        .subscribe(
          data=>{
            this._alertService.success("Registration successful",true);
            this._router.navigate(['/movies'])
        },
        error=>{
            this._alertService.error(error);
        });
    }


  }

}
