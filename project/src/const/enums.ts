export enum AppRoute {
  AddReview = 'films/:id/review',
  Login = '/login/',
  Main = '/',
  Movies = '/films/',
  Movie = '/films/:id/',
  Player = '/player/',
  MoviePlayer = '/player/:id',
  MyList = '/mylist',
  NotFound = '*'
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export enum PosterSize {
  Big = 'big',
  Small = 'small'
}

export enum Rating {
  Bad = 'Bad',
  Normal = 'Normal',
  Good = 'Good',
  VeryGood = 'Very good',
  Awesome = 'Awesome',
}

export enum HeaderStyle {
  UserPage = 'user-page__head',
  MovieCard = 'film-card__head',
}

export enum MovieNavigation {
  Overview = 'Overview',
  Details = 'Details',
  Reviews = 'Reviews',
}
