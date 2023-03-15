import { createRoot } from 'react-dom/client';
import Navbar from './components/Navbar';
import ProfileCard from './components/ProfileCard';
import RouteNavigation from './components/RouteNavigation';
import {
  createBrowserRouter,
  RouterProvider,
  Routes,
  Link,
  BrowserRouter,
  Route
} from "react-router-dom";
import Container from './components/Container'
import AboutMe from './components/AboutMe';
import Resume from './components/Resume';

createRoot(app).render(
  <BrowserRouter>
    <Navbar />
    <div className='grid grid-cols-12 mt-5 lg:mt-10 pb-10 lg:pb-0 max-w-[96rem] mx-auto space-y-4'>
      <div className='col-span-12 lg:col-span-4'>
        <ProfileCard />
      </div>
      <div className='col-span-12 lg:col-span-8 flex flex-col items-center h-auto w-full bg-transparent lg:pt-5 lg:space-y-5 px-5 lg:pb-0'>
        <RouteNavigation />
        <div className='w-full bg-slate-200 bg-opacity-70 rounded-xl p-5 justify-center'>
          <Routes>
            <Route index element={<Container><AboutMe /></Container>} />
            <Route path='resume' element={<Resume />} />
            <Route path='projects' element={<div>Work In Progress</div>} />
          </Routes>
        </div>
      </div>
    </div>
  </BrowserRouter>
);