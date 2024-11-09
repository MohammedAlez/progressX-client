import { BrowserRouter as Router, Routes, Route, RouterProvider, createBrowserRouter } from 'react-router-dom';
import ProtectedRoute from './ProtectedRoute';
import Login from './pages/Auth/Login';
import Unauthorized from './pages/Unauthorized/Unauthorized';
// import fakeAuth from './auth';

// Student pages
import StudentHome from './pages/Student/Home';
import StudentProfileMain from './pages/Student/Profile/Main';
import StudentCoursesMain from './pages/Student/Courses/Main';
import StudentAttendanceMain from './pages/Student/Attendance/Main';
// import StudentAttendancePage from './pages/Student/Attendance/AttendancePage';
// import StudentAbsencePage from './pages/Student/Attendance/AbsencePage';
// import StudentScanQR from './pages/Student/Attendance/ScanQR';

// Instructor pages
import InstructorHome from './pages/Instructor/Home';
// import InstructorCourses from './pages/Instructor/Courses/Courses';
// import SingleCourse from './pages/Instructor/Courses/SingleCourse';
// import Td from './pages/Instructor/Courses/Td';
// import Tp from './pages/Instructor/Courses/Tp';
// import Cour from './pages/Instructor/Courses/Cour';
// import InstructorAttendanceChooseGroupCourse from './pages/Instructor/Attendance/ChooseGroupCourse';
// import InstructorGroupAttendance from './pages/Instructor/Attendance/GroupAttendance';
// import InstructorTakeAttendanceTd from './pages/Instructor/Attendance/TakeAttendance/Td';
// import InstructorTakeAttendanceTp from './pages/Instructor/Attendance/TakeAttendance/Tp';
// import InstructorTakeAttendanceCour from './pages/Instructor/Attendance/TakeAttendance/Cour';


// Department pages
import DepartmentHome from './pages/Department/Home';
import RootElement from './my-components/RootElment';
import PreviousAttendance from './pages/Student/Attendance/PreviousAttendance';
import PreviousAbsence from './pages/Student/Attendance/PreviouseAbsence';
import InstructorCoursesMain from './pages/Instructor/Courses/InstructorCoursesMain';
import InstructorAttendanceMain from './pages/Instructor/Attendance/InstructorAttendanceMain';
import CourseDetails from './pages/Instructor/Courses/CourseDetails';
import InstructorAttendanceDetails from './pages/Instructor/Attendance/InstructorAttendanceDetails';
import InstructorTakeAttendance from './pages/Instructor/Attendance/InstructorTakeAttendance';
import CoursesProgress from './pages/Department/CoursesProgress';
import AttendanceRates from './pages/Department/AttendanceRates';
import ScanQr from './pages/Student/Attendance/ScanQr';
// import AttendanceRates from './pages/Department/AttendanceRates';
// import CoursesProgress from './pages/Department/CoursesProgress';



const router = createBrowserRouter([
  {
    path: '/',
    element: <RootElement />, // Main root component or layout
    errorElement: <div className="font-bold text-center mt-36">Oops!, Error</div>,
    children: [
      

      // Student Routes
      {
        path: 'student',
        children: [
          {
            path: 'home',
            element: (
              <ProtectedRoute allowedRoles={['student']}>
                <StudentHome />
              </ProtectedRoute>
            ),
          },
          {
            path: 'profile/main',
            element: (
              <ProtectedRoute allowedRoles={['student']}>
                <StudentProfileMain />
              </ProtectedRoute>
            ),
          },
          {
            path: 'courses/main',
            element: (
              <ProtectedRoute allowedRoles={['student']}>
                <StudentCoursesMain />
              </ProtectedRoute>
            ),
            
          },
          {
            path: 'attendance/main',
            element: (
              <ProtectedRoute allowedRoles={['student']}>
                <StudentAttendanceMain />
              </ProtectedRoute>
            )
          },
          {
            path: 'attendance/scan-qr',
            element: (
              <ProtectedRoute allowedRoles={['student']}>
                <ScanQr />
              </ProtectedRoute>
            )
          },
          {
            path:'attendance/main/previous-attendance',
            
            element:(
              <ProtectedRoute allowedRoles={['student']}>
                <PreviousAttendance />
              </ProtectedRoute>
            ),
          },
          {
            path:'attendance/main/previous-absence',
            element:(
              <ProtectedRoute allowedRoles={['student']}>
                <PreviousAbsence />
              </ProtectedRoute>
            ),
          },
        ],
      },

      // Instructor Routes
      {
        path: 'instructor',
        children: [
          {
            path: 'home',
            element: (
              <ProtectedRoute allowedRoles={['instructor']}>
                <InstructorHome />
              </ProtectedRoute>
            ),
          },
          {
            path: 'courses',
            element: (
              <ProtectedRoute allowedRoles={['instructor']}>
                <InstructorCoursesMain />
              </ProtectedRoute>
            ),
          },
          {
            path: 'courses/:id',
            element: (
              <ProtectedRoute allowedRoles={['instructor']}>
                <CourseDetails />
              </ProtectedRoute>
            ),
          },
          {
            path: 'attendance',
            element: (
              <ProtectedRoute allowedRoles={['instructor']}>
                <InstructorAttendanceMain />
              </ProtectedRoute>
            ),
          },
          {
            path: 'attendance/group',
            element: (
              <ProtectedRoute allowedRoles={['instructor']}>
                <InstructorAttendanceDetails />
              </ProtectedRoute>
            ),
          },
          {
            path: 'attendance/group/take-attendance',
            element: (
              <ProtectedRoute allowedRoles={['instructor']}>
                <InstructorTakeAttendance />
              </ProtectedRoute>
            ),
          },
          // Additional instructor routes as needed...
        ],
      },

      // Department Routes
      {
        path: 'department',
        children: [
          {
            path: 'home',
            element: (
              <ProtectedRoute allowedRoles={['department']}>
                <DepartmentHome />
              </ProtectedRoute>
            ),
          },
          {
            path: 'courses',
            element: (
              <ProtectedRoute allowedRoles={['department']}>
                <CoursesProgress />
              </ProtectedRoute>
            ),
          },
          {
            path: 'attendance',
            element: (
              <ProtectedRoute allowedRoles={['department']}>
                <AttendanceRates />
              </ProtectedRoute>
            ),
          },
          // Additional department routes as needed...
        ],
      },
    ],
  },
  // Public Routes
  { path: 'login', element: <Login /> },
  { path: 'unauthorized', element: <Unauthorized /> },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
