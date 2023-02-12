import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css'],
})
export class UserFormComponent implements OnInit {
  public siteKey: any;
  public aFormGroup!: any;
  public valid!: boolean;

  public phoneMask = [
    '+',
    '7',
    '(',
    /[1-9]/,
    /\d/,
    /\d/,
    ')',
    /\d/,
    /\d/,
    /\d/,
    '-',
    /\d/,
    /\d/,
    '-',
    /\d/,
    /\d/,
  ];

  constructor(public formBuilder: FormBuilder) {}
  title = 'recaptcha';

  data = {
    name: '',
    email: '',
    phone: '',
    theme: '',
    message: '',
  };

  @Output() send = new EventEmitter;

  save() {
    for (const key in this.data) {
      if (this.data[key as keyof typeof this.data].length === 0) {
        this.valid = false;
        break;
      } else {
        this.valid = true;
      }
    }

    if (this.aFormGroup.valid && this.valid) {
      this.send.emit([true, this.data])
    }
  }

  ngOnInit(): void {
    this.aFormGroup = this.formBuilder.group({
      recaptcha: ['', Validators.required],
    });

    this.siteKey = '6LcbeG0kAAAAAEEaMMz8v93iuIarftPVh9jBuiqe';
  }
}
