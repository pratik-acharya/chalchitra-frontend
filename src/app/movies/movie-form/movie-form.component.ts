import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {IMultiSelectOption} from 'angular-2-dropdown-multiselect';
import {FileUploader} from "ng2-file-upload";
import {Movie} from "../shared/movie.model";
import {MovieService} from "../shared/movie.service";

const URL = 'https://evening-anchorage-3159.herokuapp.com/api/';

@Component({
  selector: 'app-movie-form',
  templateUrl: 'movie-form.component.html',
  styleUrls: ['./movie-form.component.css']
})
export class MovieFormComponent implements OnInit {
  currentStepIndex: number;
  submitted: boolean = false;


  steps: any[] = [
    {
      heading: "General Details",
      form: "generalDetails",
      previousButton: {
        text: "Previous",
        disabled: true
      },
      nextButton: {
        text: "Next",
        disabled: true
      }
    }, {
      heading: "Media",
      form: "media",
      previousButton: {
        text: "Previous",
        disabled: false
      },
      nextButton: {
        text: "Next",
        disabled: true
      }
    }, {
      heading: "Additional Details",
      form: "additionalDetails",
      previousButton: {
        text: "Previous",
        disabled: false
      },
      nextButton: {
        text: "Finish",
        disabled: false
      }
    }
  ];


  movieForm: FormGroup;
  uploader: FileUploader = new FileUploader({url: URL});

  myOptions: IMultiSelectOption[] = [
    {id: 1, name: 'Option 1'},
    {id: 2, name: 'Option 2'},
    {id: 3, name: 'Option 3'},
    {id: 4, name: 'Option 4'},
    {id: 5, name: 'Option 5'},
  ];

  constructor(private _fb: FormBuilder, private _movieService: MovieService) {
    this.currentStepIndex = 0;

  }

  ngOnInit() {
    this.movieForm = this._fb.group({
      generalDetails: this._fb.group({
        title: ['', Validators.required],
        overview: ['', Validators.required],
      }),
      additionalDetails: this._fb.group({
        optionsModel: [[1, 2]],
        releaseDate: ['', Validators.required],
        status: ['', Validators.required],
        duration: ['', Validators.required]
      }),
      media: this._fb.group({
        photo: this._fb.group({
          file: [],
        }),
        video: this._fb.group({
          source: ['', Validators.required]
        }),
      }),

    });

    this.subscribeToFormChanges();


  }

  subscribeToFormChanges() {
    let formControls = (<any>this.movieForm).controls;
    switch (this.steps[this.currentStepIndex].form) {
      case "generalDetails":
        let generalDetailsChanges$ = formControls.generalDetails.valueChanges;
        generalDetailsChanges$.subscribe(changes => {
          this.steps[this.currentStepIndex].nextButton.disabled = !formControls.generalDetails.valid;

        });
        break;
      case "additionalDetails":

        let additionalDetailsChanges$ = formControls.additionalDetails.valueChanges;
        additionalDetailsChanges$.subscribe(changes => {
          console.log("sdfsdfsd");
          this.steps[this.currentStepIndex].nextButton.disabled = !formControls.additionalDetails.valid;

        });
        break;
      case "media":
        this.steps[this.currentStepIndex].nextButton.disabled = !formControls.media.valid || !this.uploader.queue.length;
        let mediaChanges$ = formControls.media.valueChanges;
        mediaChanges$.subscribe(changes => {
          this.steps[this.currentStepIndex].nextButton.disabled = !formControls.media.valid || !this.uploader.queue.length;

        });
        break;
      default:
        break;


    }

  }

  next() {
    if (this.currentStepIndex < 2) {
      this.currentStepIndex++;
      this.subscribeToFormChanges();
    } else {
      //this.add()
      let formData = (<any>this.movieForm).value;
      let movie: Movie= new Movie();
      movie.title = formData.generalDetails.title;
      movie.overview = formData.generalDetails.overview;
      this.add(movie);




    }

  }

  previous() {
    this.currentStepIndex--;
    this.subscribeToFormChanges();


  }

  add(movie: Movie){
    this.submitted = true;
      this._movieService.add(movie)
        .subscribe(data=>{

          },
          error=>{}

        );


  }

  isCompleted: boolean = false;


}
