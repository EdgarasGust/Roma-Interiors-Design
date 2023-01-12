import { Component, DoCheck, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { SendEmailService } from 'src/app/http/send-email.service';
import * as questions from './questionnaire-arrays';

@Component({
  selector: 'app-questionnaire',
  templateUrl: './questionnaire.component.html',
  styleUrls: ['./questionnaire.component.scss'],
  providers: [
    {
      provide: STEPPER_GLOBAL_OPTIONS,
      useValue: { showError: true },
    },
  ],
})
export class QuestionnaireComponent implements OnInit, DoCheck {
  formData = {};

  advertisement: string[] = questions.advertisement.slice();
  whyRedesignArray: string[] = questions.whyRedesignArray.slice();
  whichSpaceArray: string[] = questions.whichSpaceArray.slice();
  howFinishedArray: string[] = questions.howFinishedArray.slice();
  designStyleArray: { name: string; url: string }[] =
    questions.designStyleArray.slice();
  wallColourArray: { name: string; url: string }[] =
    questions.wallColourArray.slice();
  furnitureColourArray: { name: string; url: string }[] =
    questions.furnitureColourArray.slice();
  wallpaperOrPaintArray: { name: string; url: string }[] =
    questions.wallpaperOrPaintArray.slice();
  finishesArray: { name: string; url: string }[] =
    questions.finishesArray.slice();
  roomWishListArray: string[] = questions.roomWishListArray.slice();

  max = 30000;
  min = 0;
  step = 1;
  thumbLabel = false;

  username: string | undefined | null = '';
  formValid: boolean = false;
  submitted: boolean = false;
  isLoading: boolean = false;
  errorMsg: string = '';

  firstFormGroup = this.fb.group({
    firstName: ['', Validators.required],
    lastName: [''],
    email: ['', Validators.required],
    tel: ['', Validators.required],
    country: ['', Validators.required],
    howDidYouHearAboutUs: [''],
  });
  secondFormGroup = this.fb.group({
    whyRedesign: [''],
  });
  thirdFormGroup = this.fb.group({
    whichSpace: [''],
  });
  fourthFormGroup = this.fb.group({
    howFinished: [''],
  });
  fifthFormGroup = this.fb.group({
    designStyle: [''],
  });
  sixthFormGroup = this.fb.group({
    firstColour: [''],
    secondColour: [''],
    additionalColours: [''],
  });
  seventhFormGroup = this.fb.group({
    firstColour: [''],
    secondColour: [''],
    additionalColours: [''],
  });
  eightFormGroup = this.fb.group({
    wallColours: [''],
  });
  ninthFormGroup = this.fb.group({
    furnitureColours: [''],
  });
  tenthFormGroup = this.fb.group({
    wallpaperOrPaint: [''],
  });
  eleventhFormGroup = this.fb.group({
    finishes: [''],
  });
  twelfthFormGroup = this.fb.group({
    pinterest: [''],
  });
  thirteenthFormGroup = this.fb.group({
    roomWishList: [''],
    remainInRoom: [''],
    overallRoomMeasurements: [''],
    roomBudget: [0],
  });
  fourteenthFormGroup = this.fb.group({
    termsAndConditions: ['', Validators.required],
  });
  fifteenthFormGroup = this.fb.group({
    permission: [''],
  });

  constructor(private fb: FormBuilder, private sendEmail: SendEmailService) {}
  ngOnInit(): void {}

  ngDoCheck(): void {
    if (this.firstFormGroup.valid && this.fourteenthFormGroup.valid) {
      this.formValid = true;
    }
  }

  removeColour(groupName: string) {
    if (groupName == 'six-one') {
      this.sixthFormGroup.value.firstColour = '';
    }
    if (groupName == 'six-two') {
      this.sixthFormGroup.value.secondColour = '';
    }
    if (groupName == 'seven-one') {
      this.seventhFormGroup.value.firstColour = '';
    }
    if (groupName == 'seven-two') {
      this.seventhFormGroup.value.secondColour = '';
    }
  }

  data() {
    this.formData = {
      whereFrom: 'questionnaire',
      firstName: this.firstFormGroup.value.firstName,
      lastName: this.firstFormGroup.value.lastName,
      email: this.firstFormGroup.value.email,
      tel: this.firstFormGroup.value.tel,
      country: this.firstFormGroup.value.country,
      whereDidYouHearAboutUs: this.firstFormGroup.value.howDidYouHearAboutUs,
      whyRedesign: this.secondFormGroup.value.whyRedesign,
      whichSpace: `${this.thirdFormGroup.value.whichSpace}`,
      howFinished: this.fourthFormGroup.value.howFinished,
      designStyle: `${this.fifthFormGroup.value.designStyle}`,
      coloursYouLove1: this.sixthFormGroup.value.firstColour,
      coloursYouLove2: this.sixthFormGroup.value.secondColour,
      coloursYouLoveAdditional: this.sixthFormGroup.value.additionalColours,
      coloursNoLove1: this.seventhFormGroup.value.firstColour,
      coloursNoLove2: this.seventhFormGroup.value.secondColour,
      coloursNoLoveAdditional: this.seventhFormGroup.value.additionalColours,
      wallColours: `${this.eightFormGroup.value.wallColours}`,
      furnitureColours: `${this.ninthFormGroup.value.furnitureColours}`,
      wallpaperOrPaint: `${this.tenthFormGroup.value.wallpaperOrPaint}`,
      finishes: `${this.eleventhFormGroup.value.finishes}`,
      pinterest: this.twelfthFormGroup.value.pinterest,
      roomWhishList: `${this.thirteenthFormGroup.value.roomWishList}`,
      remainInRoom: this.thirteenthFormGroup.value.remainInRoom,
      roomBudget: `£${this.thirteenthFormGroup.value.roomBudget}`,
      termsAndConditions: this.fourteenthFormGroup.value.termsAndConditions,
      permission: this.fifteenthFormGroup.value.permission,
    };
    this.username = this.firstFormGroup.value.firstName;
  }

  onSubmit() {
    this.isLoading = true;
    this.data();
    this.sendEmail.sendFormDetails(this.formData).subscribe({
      next: (res) => {
        this.isLoading = false;
        this.submitted = true;
      },
      error: (err) => {
        this.isLoading = false;
        this.errorMsg = err.message;
      },
    });
  }

  close() {
    this.isLoading = false;
    this.submitted = false;
    this.username = '';
    this.formData = {};
    this.formValid = false;
    this.errorMsg = '';
  }
}
