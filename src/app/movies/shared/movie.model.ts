import {Photo} from "./photo.interface";
import {Video} from "./video.interface";
export class Movie {

  title: string;
  overview: string;
  releaseDate: string;
  status: number;
  rated: string;
  duration: number;
  photos: Photo[];
  videos: Video[];


}
