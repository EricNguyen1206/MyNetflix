import React from "react";
const Home = React.lazy(() => import("../pages/home/Home"));
const Login = React.lazy(() => import("../pages/login"));
const User = React.lazy(() => import("../pages/user/User"));
const UserList = React.lazy(() => import("../pages/userList/UserList"));
const NewUser = React.lazy(() => import("../pages/newUser/NewUser"));
const Movie = React.lazy(() => import("../pages/movie/Movie"));
const MovieList = React.lazy(() => import("../pages/movieList/MovieList"));
const NewMovie = React.lazy(() => import("../pages/newMovie/NewMovie"));
const List = React.lazy(() => import("../pages/list/List"));
const ListList = React.lazy(() => import("../pages/listList/ListList"));
const NewList = React.lazy(() => import("../pages/newList/NewList"));

const routeHome = [
    {
        exact: true,
        path: "/",
        element: <Home />,
    },
];

const routeAuth = [
    {
        exact: true,
        path: "/login",
        element: <Login />,
    },
];

const routeUser = [
    {
        exact: true,
        path: "/users",
        element: <UserList />,
    },
    {
        exact: true,
        path: "/user/:userId",
        element: <User />,
    },
    {
        exact: true,
        path: "/newuser",
        element: <NewUser />,
    },
];

const routeMovie = [
    {
        exact: true,
        path: "/movie/:movieId",
        element: <Movie />,
    },
    {
        exact: true,
        path: "/movies",
        element: <MovieList />,
    },
    {
        exact: true,
        path: "/newMovie",
        element: <NewMovie />,
    },
];

const routeList = [
    {
        exact: true,
        path: "/list/:listId",
        element: <List />,
    },
    {
        exact: true,
        path: "/lists",
        element: <ListList />,
    },
    {
        exact: true,
        path: "/newlist",
        element: <NewList />,
    },
];

export { routeHome, routeAuth, routeUser, routeMovie, routeList };
