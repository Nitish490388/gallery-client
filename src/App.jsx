
import { Routes, Route } from 'react-router-dom';
import Homepage from "./pages/Homepage";
import Gallerypage from './pages/Gallerypage';
import Layout from './scenes/Layout';
import Memberspage from './pages/Memberspage';
import Chatroom from './pages/Chatroom';
import Auth from './pages/Auth';
import RestrictUser from './components/RestrictUser';
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import Create from './pages/Create';
import Try from './pages/Try';
import Profilepage from './pages/Profilepage';

function App() {

  return (
    <>

      <ToastContainer
        position="top-right"
        autoClose={2500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/auth' element={<Auth />} />
        <Route path='/try' element={<Try />} />
        <Route element={<RestrictUser />}>
          <Route element={<Layout />}>
            <Route path='/gallery' element={<Gallerypage />} />
            <Route path='/members' element={<Memberspage />} />
            <Route path='/create' element={<Create />} />
            <Route path='/chatroom' element={<Chatroom />} />
            <Route path='/profile' element={<Profilepage />} />
          </Route>
        </Route>
      </Routes>

    </>
  )
}

export default App
