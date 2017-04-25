import { Component, OnInit } from '@angular/core';
import {MovieService} from "../shared/movie.service";
import {ActivatedRoute} from "@angular/router";
import {DomSanitizer} from "@angular/platform-browser";

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {

  private sub: any;
  private movie: any;
  private castList: any;
  private crewList: any;
  private reviewList: any;
  private imageList: any;
  private videoList: any;
  private similarList: any;
  private recommendedList: any;
  private posterUrl = 'https://image.tmdb.org/t/p/w185_and_h278_bestv2/';


  constructor(private _movieService: MovieService, private _route: ActivatedRoute, private _sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.sub = this._route.params.subscribe(params =>{
      let id = params['id'];
      this._movieService.findMovieById(id).subscribe(movie =>{
        this.movie = movie;
      });
      this._movieService.findCastByMovieId(id).subscribe(credits =>{
        this.castList = credits.cast;
        this.crewList = credits.crew;
      });

      this._movieService.findReviewByMovieId(id).subscribe(reviews =>{
        this.reviewList = reviews.results;
      });

      this._movieService.findImagesByMovieId(id).subscribe(images =>{
        this.imageList = images.posters;
      });

      this._movieService.findVideosByMovieId(id).subscribe(videos =>{
        this.videoList = videos.results;
        for (var k in this.videoList){
          if (typeof this.videoList[k] !== 'function') {
            this.videoList[k].key = this.sanitizeVideoUrl(this.videoList[k].key)
          }
        }
      });

      this._movieService.findSimilarMoviesByMovieId(id).subscribe(movies=>{
            this.similarList = movies.results
      });

      this._movieService.findRecommendedMoviesByMovieId(id).subscribe(movies=>{
          this.recommendedList = movies.results;
      });

    });
  }

  sanitizeVideoUrl(key){
    return this._sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/'+ key);

  }

  ngOnDestroy(){
    this.sub.unsubscribe();
  }

}
