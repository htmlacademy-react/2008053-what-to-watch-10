import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const/enums';
import AddReviewPage from '../../pages/add-review/add-review';
import LoginPage from '../../pages/login/login';
import MainPage from '../../pages/main/main';
import MoviePlayerPage from '../../pages/movie-player/movie-player';
import MoviePage from '../../pages/movie/movie';
import MyListPage from '../../pages/my-list/my-list';
import NotFoundPage from '../../pages/not-found/not-found';
import { AppProps } from '../../types/props';
import PrivateRoute from '../common/private-route/private-route';

const goToMainPage = <Navigate to={AppRoute.Main} />;

const App = (appProps: AppProps) => (
  <BrowserRouter>
    <Routes>
      <Route path={AppRoute.Main}>
        <Route index element={<MainPage {...appProps} />} />

        <Route path={AppRoute.Login} element={<LoginPage />} />

        <Route path={AppRoute.Player}>
          <Route index element={goToMainPage} />
          <Route path={AppRoute.MoviePlayer} element={<MoviePlayerPage />} />
        </Route>

        <Route path={AppRoute.Movies}>
          <Route index element={goToMainPage} />
        </Route>

        <Route path={AppRoute.Movie}>
          <Route index element={<MoviePage {...appProps}/>} />
        </Route>

        <Route path={AppRoute.AddReview}>
          <Route index element={<AddReviewPage />} />
        </Route>

        <Route
          path={AppRoute.MyList}
          element={
            <PrivateRoute authorizationStatus={AuthorizationStatus.NoAuth} >
              <MyListPage {...appProps} />
            </PrivateRoute>
          }
        />
      </Route>
      <Route path={AppRoute.NotFound} element={<NotFoundPage />} />
    </Routes>
  </BrowserRouter>
);

export default App;
