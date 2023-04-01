import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Action from "./components/Movies/Action";
import Drama from "./components/Movies/Drama";
import Crime from "./components/Movies/Crime";

import Root from "./pages/Root";
import HomePage from "./pages/HomePage";
import MoviePage from "./pages/MoviePage";
import MovieDescription from "./components/Movies/MovieDetail/MovieDescription";
import Error from "./pages/Error";
import { loader as movieLoader } from "./components/Movies/MovieList2";

import "./App.css";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />,
      errorElement: <Error />,
    },
    { path: "login", element: <HomePage /> },
    {
      id: "movies",
      path: "movies",
      element: <Root />,
      loader: movieLoader,
      children: [
        {
          index: true,
          element: <MoviePage />,
        },

        {
          path: "Action",
          element: <Action />,
        },
        { path: "Drama", element: <Drama /> },
        { path: "Crime", element: <Crime /> },
        { path: ":genre/:movieName", element: <MovieDescription /> },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
/* 
1- HomePage
2- LoginModal (same Page)
3- MovieList (different Page)
4- Upon Login Button:
   a- Load data from API (Routing and loader)
   b- Manage State using Redux for validating User ID and Password (useEffect and )
   c- React Responsive Carousel
   d- 
Fixes:
1- Closing Overlay on Clicking
2- Login Modal on a different Page
3- Routing on Movie Detail

4- PosterImage
5- NavBar
6- GenreHighlight
7- EmptyCardImage
8- MovieDetail
9- LoginModal





results:0:imageurl:
genre:
imdbid:"tt9580138"
title:"Mortal Kombat Legends: Scorpion's Revenge"
imdbrating:7.4
released:2020
synopsis:"Hanzo Hasashi loses his clan, family, and his life during an attack by a rival ninja clan. He is given the chance to compete in an interdimensional tournament to save his loved ones."
type:"movie"




 axios
              .request(options)
              .then(function (response) {
                console.log(response.data.results[0].title);
                return response.data;
              })
              .catch(function (error) {
                console.error(error);
                return null;
              }); 
*/
