// @ts-nocheck
import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main/Main";
import About_US from "../pages/about/About_US";
import Contact from "../pages/contact/Contact";
import Exam from "../pages/exam/Exam";
import Home from "../pages/Home/Home";
import QuizTest from "../pages/quiztest/QuizTest";
import QuizTestSetup from "../pages/quiztest/QuizTestSetup";
import Error from "../pages/shared/Error/Error";
import Navbar from "../pages/shared/Header/Navbar";
import Statics from "../pages/statics/Statics";
const routes = createBrowserRouter([
  {
    path: "/",
    loader: () => {
      return fetch("footers.json");
    },
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
      {
        path: "/about",
        element: <About_US></About_US>,
      },
      {
        path: "/exam",
        loader: async () => {
          return fetch("https://openapi.programming-hero.com/api/quiz");
        },
        element: <Exam></Exam>,
      },
      {
        path: "/statics",
        loader: async () => {
          return fetch("https://openapi.programming-hero.com/api/quiz");
        },
        element: <Statics></Statics>,
      },

      //Router for dynamic question data
      {
        path: `exam/:quiz`,
        loader: async ({ params }) => {
          return fetch(
            `https://openapi.programming-hero.com/api/quiz/${params.quiz}`
          );
        },
        element: <QuizTestSetup></QuizTestSetup>,
      },
    ],
  },
  {
    path: "*",
    element: <Error></Error>,
  },
]);
export default routes;
