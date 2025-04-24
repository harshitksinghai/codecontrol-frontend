import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import ProtectedRoute from '../features/auth/components/ProtectedRoute';
import MarketingPage from '../features/marketing/pages/MarketingPage';
import CoursesPage from '../features/course/pages/CoursesPage';
import CourseDetailsPage from '../features/course/pages/CourseDetailsPage';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <MarketingPage />,
      },
      {
        element: <ProtectedRoute />, // Grouped protected routes
        children: [
          {
            path: 'courses',
            element: <CoursesPage />,
          },
          {
            path: 'course/:courseId',
            element: <CourseDetailsPage />,
          },
        ],
      },
    ],
  },
]);
